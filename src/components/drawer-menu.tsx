import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer"
import { menuData, type MenuItem } from "@/mocks/menu"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import * as React from "react"

type MenuScreen = {
    id: string
    heading: string
    subheading: string
    items: MenuItem[]
}

enum Direction {
    FORWARD = "forward",
    BACKWARD = "backward",
}

const rootScreen: MenuScreen = {
    id: "root",
    heading: "Explore",
    subheading: "Navigate through every part of the platform",
    items: menuData,
}

const screenVariants = {
    enter: (direction: Direction) => ({
        x: direction === Direction.FORWARD ? 36 : -36,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: Direction) => ({
        x: direction === Direction.FORWARD ? -36 : 36,
        opacity: 0,
    }),
}

const DrawerMenu = () => {
    const [open, setOpen] = React.useState(false)
    const [stack, setStack] = React.useState<MenuScreen[]>([])
    const [direction, setDirection] = React.useState<Direction>(Direction.FORWARD)

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "o") {
                event.preventDefault()
                setOpen(true)
                setStack([rootScreen])
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    const currentScreen = stack.at(-1)
    const level = stack.length

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen)

        if (nextOpen) {
            setStack([rootScreen])
        } else {
            setStack([])
        }
    }

    const handleBack = () => {
        setDirection(Direction.BACKWARD)
        setStack((prev) => {
            const next = prev.slice(0, -1)
            return next
        })
    }

    const handleItemSelect = (item: MenuItem) => {
        if (!item.children?.length) return

        setDirection(Direction.FORWARD)
        setStack((prev) => [
            ...prev,
            {
                id: item?.id,
                heading: item?.title,
                subheading: item?.description,
                items: item?.children ?? [],
            },
        ])
    }

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild>
                <Button className="rounded-full px-6 py-2 text-base bg-blue-500 hover:bg-blue-600 font-medium">
                    Open Menu
                </Button>
            </DrawerTrigger>

            <DrawerContent className="mx-4 w-auto max-w-md rounded-2xl border px-0 sm:mx-auto sm:w-full">
                {currentScreen && (
                    <div className="flex flex-col gap-4 px-6 pt-6">
                        {level > 1 && (
                            <motion.button
                                type="button"
                                onClick={handleBack}
                                className="group flex w-fit items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
                                Back
                            </motion.button>
                        )}

                        <div className="relative min-h-[320px] overflow-hidden pb-4">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.ul
                                    key={currentScreen.id}
                                    custom={direction}
                                    variants={screenVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.15, ease: "easeInOut" }}
                                    className="space-y-3"
                                >
                                    {currentScreen.items.map((item) => {
                                        const hasChildren = !!(item.children?.length)
                                        const Icon = item.icon ?? null;

                                        return (
                                            <motion.li key={item.id} layout>
                                                <motion.button
                                                    type="button"
                                                    onClick={() => handleItemSelect(item)}
                                                    whileHover={{ scale: hasChildren ? 1.01 : 1 }}
                                                    whileTap={{ scale: hasChildren ? 0.99 : 1 }}
                                                    className={`group relative flex w-full items-center justify-between gap-4 rounded-2xl border border-border/50 bg-card/40 p-4 text-left shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${hasChildren ? "cursor-pointer hover:shadow-md" : "cursor-default"}`}
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                    />
                                                    <div className="flex items-center gap-4">
                                                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                            {Icon && <Icon className="h-5 w-5" />}
                                                        </span>
                                                        <div>
                                                            <p className="text-base font-semibold">{item.title}</p>
                                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                                        </div>
                                                    </div>
                                                    {hasChildren && (
                                                        <ChevronRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1" />
                                                    )}
                                                </motion.button>
                                            </motion.li>
                                        )
                                    })}
                                </motion.ul>
                            </AnimatePresence>
                        </div>
                    </div>
                )}
            </DrawerContent>
        </Drawer>
    )
}

export { DrawerMenu }

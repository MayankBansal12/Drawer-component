import type { LucideIcon } from "lucide-react"
import {
  Building2,
  ChartSpline,
  Cloud,
  Cpu,
  Layers3,
  LifeBuoy,
  Lock,
  Network,
  Rocket,
  Shield,
  Sparkles,
  Waypoints,
} from "lucide-react"

export type MenuItem = {
  id: string
  title: string
  description: string
  icon?: LucideIcon
  children?: MenuItem[]
}

export const menuData: MenuItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Welcome to our comprehensive platform",
    icon: Building2,
  },
  {
    id: "products",
    title: "Products & Services",
    description: "Explore our comprehensive offerings",
    icon: Layers3,
    children: [
      {
        id: "software",
        title: "Software Solutions",
        description: "Custom software development and deployment",
        icon: Cpu,
        children: [
          {
            id: "custom-apps",
            title: "Custom Applications",
            description: "Tailored platforms for your teams",
            icon: Sparkles,
            children: [
              {
                id: "overview",
                title: "Platform Overview",
                description: "See what’s new and upcoming",
                icon: Sparkles,
              },
              {
                id: "quick-actions",
                title: "Quick Actions",
                description: "Jump to the most used workflows",
                icon: Rocket,
              },
              {
                id: "status",
                title: "System Status",
                description: "Realtime uptime and maintenance windows",
                icon: Network,
              },
            ],
          },
          {
            id: "integrations",
            title: "Systems Integrations",
            description: "Connect CRMs, ERPs, and data pipelines",
            icon: Waypoints,
            children: [
              {
                id: "overview",
                title: "Platform Overview",
                description: "See what’s new and upcoming",
                icon: Sparkles,
              },
              {
                id: "quick-actions",
                title: "Quick Actions",
                description: "Jump to the most used workflows",
                icon: Rocket,
              },
              {
                id: "status",
                title: "System Status",
                description: "Realtime uptime and maintenance windows",
                icon: Network,
              },
            ],
          },
          {
            id: "automation",
            title: "Automation Suites",
            description: "Intelligent workflows and process automation",
            icon: Rocket,
            children: [
              {
                id: "overview",
                title: "Platform Overview",
                description: "See what’s new and upcoming",
                icon: Sparkles,
              },
              {
                id: "quick-actions",
                title: "Quick Actions",
                description: "Jump to the most used workflows",
                icon: Rocket,
              },
              {
                id: "status",
                title: "System Status",
                description: "Realtime uptime and maintenance windows",
                icon: Network,
              },
            ],
          },
        ],
      },
      {
        id: "cloud",
        title: "Cloud & Infrastructure",
        description: "Scalable cloud solutions and modernization",
        icon: Cloud,
        children: [
          {
            id: "cloud-migration",
            title: "Cloud Migration",
            description: "Plan, move, and optimize workloads",
            icon: Network,
          },
          {
            id: "platform-engineering",
            title: "Platform Engineering",
            description: "Composable platforms with guardrails",
            icon: ChartSpline,
          },
        ],
      },
      {
        id: "cybersecurity",
        title: "Cybersecurity Consulting",
        description: "Comprehensive cybersecurity services",
        icon: Shield,
        children: [
          {
            id: "zero-trust",
            title: "Zero Trust Readiness",
            description: "Assessments, pilots, and rollouts",
            icon: Lock,
          },
          {
            id: "managed-soc",
            title: "Managed SOC",
            description: "24/7 monitoring and incident response",
            icon: LifeBuoy,
          },
        ],
      },
    ],
  },
  {
    id: "company",
    title: "Company",
    description: "Learn about our organization and culture",
    icon: Building2,
    children: [
      {
        id: "about",
        title: "About Us",
        description: "Mission, vision, and leadership",
        icon: Building2,
      },
      {
        id: "careers",
        title: "Careers",
        description: "Open roles and hiring process",
        icon: ChartSpline,
      },
      {
        id: "newsroom",
        title: "Newsroom",
        description: "Press releases and media kit",
        icon: Layers3,
      },
    ],
  },
  {
    id: "resources",
    title: "Resources",
    description: "Knowledge base, tools, and learning materials",
    icon: Waypoints,
    children: [
      {
        id: "docs",
        title: "Documentation",
        description: "Guides, API refs, and tutorials",
        icon: Cpu,
        children: [
          {
            id: "overview",
            title: "Platform Overview",
            description: "See what’s new and upcoming",
            icon: Sparkles,
          },
          {
            id: "quick-actions",
            title: "Quick Actions",
            description: "Jump to the most used workflows",
            icon: Rocket,
          },
          {
            id: "status",
            title: "System Status",
            description: "Realtime uptime and maintenance windows",
            icon: Network,
          },
        ],
      },
      {
        id: "webinars",
        title: "Live & On-demand",
        description: "Upcoming events and replays",
        icon: Cloud,
        children: [
          {
            id: "overview",
            title: "Platform Overview",
            description: "See what’s new and upcoming",
            icon: Sparkles,
          },
          {
            id: "quick-actions",
            title: "Quick Actions",
            description: "Jump to the most used workflows",
            icon: Rocket,
          },
          {
            id: "status",
            title: "System Status",
            description: "Realtime uptime and maintenance windows",
            icon: Network,
          },
        ],
      },
      {
        id: "customer-stories",
        title: "Customer Stories",
        description: "Use cases from leading teams",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with our team",
    icon: LifeBuoy,
    children: [
      {
        id: "sales",
        title: "Talk to Sales",
        description: "Strategize an enterprise rollout",
        icon: ChartSpline,
      },
      {
        id: "support",
        title: "Customer Support",
        description: "Around-the-clock assistance",
        icon: LifeBuoy,
      },
      {
        id: "community",
        title: "Community",
        description: "Join forums and user groups",
        icon: Waypoints,
      },
    ],
  },
]


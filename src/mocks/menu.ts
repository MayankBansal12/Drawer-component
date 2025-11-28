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
                id: "workspace-hub",
                title: "Workspace Hub",
                description: "Launch curated workspaces for each team",
                icon: Layers3,
              },
              {
                id: "blueprint-library",
                title: "Blueprint Library",
                description: "Start from vetted solution templates",
                icon: ChartSpline,
              },
              {
                id: "preview-sandboxes",
                title: "Preview Sandboxes",
                description: "Prototype flows without touching prod",
                icon: Rocket,
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
                id: "crm-sync",
                title: "CRM Sync Center",
                description: "Two-way sync for Salesforce, HubSpot, more",
                icon: Network,
              },
              {
                id: "data-fabric",
                title: "Data Fabric",
                description: "Model governance and semantic layers",
                icon: Layers3,
              },
              {
                id: "security-handshake",
                title: "Security Handshake",
                description: "SCIM, OAuth, and policy enforcement",
                icon: Shield,
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
                id: "journey-automation",
                title: "Journey Automation",
                description: "Map signals to customer actions",
                icon: Waypoints,
              },
              {
                id: "service-bots",
                title: "Service Desk Bots",
                description: "Coordinate triage and escalation",
                icon: LifeBuoy,
              },
              {
                id: "compliance-ops",
                title: "Compliance Ops",
                description: "Automate attestations and controls",
                icon: Lock,
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
            id: "api-playground",
            title: "API Playground",
            description: "Try endpoints with live credentials",
            icon: Sparkles,
          },
          {
            id: "cli-handbook",
            title: "CLI Handbook",
            description: "Command recipes and best practices",
            icon: ChartSpline,
          },
          {
            id: "release-matrix",
            title: "Release Matrix",
            description: "Deprecations and LTS timelines",
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
            id: "office-hours",
            title: "Office Hours",
            description: "Drop-in coaching sessions",
            icon: LifeBuoy,
          },
          {
            id: "launch-casts",
            title: "Launch Casts",
            description: "Deep dives on new capabilities",
            icon: Rocket,
          },
          {
            id: "partner-spotlights",
            title: "Partner Spotlights",
            description: "Co-hosted stories from the field",
            icon: Building2,
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


export const profile = {
  name: "Nastaran Talebi",
  role: "Front-End Developer · UI/UX Designer",
  intro:
    "I build digital experiences powered by thoughtful design and intelligent systems where users understand how AI works, and complexity becomes intuitive. Solid front-end engineering at the core.",
  location: "Isfahan, Iran",
  email: "nastarantalebi.1382@gmail.com",
  github: "https://github.com/Nastarantalebi",
  linkedin: "https://www.linkedin.com/in/nastaran-talebi-9227a6247/",
};

export const experience = [
  {
    year: "2025 — 2026",
    role: "Front-End Developer",
    company: "Mesal Startup",
    text: "Building enterprise web products and responsive interfaces across EMR, booking, accounting and operational workflows, with a strong focus on reusable components and usability.",
  },
  {
    year: "2024",
    role: "UI/UX Designer",
    company: "Pishgaman Accelerator",
    text: "Designed user interfaces, prototypes and interaction flows with Figma, focusing on clear information architecture and user-centered experiences.",
  },
  {
    year: "2023",
    role: "Software Engineer",
    company: "PayamPardaz",
    text: "Worked on an AI-powered job recommendation system using multilingual embeddings and similarity-based matching for recruitment data.",
  },
  {
    year: "2023 — 2025",
    role: "Teaching Assistant",
    company: "Yazd University",
    text: "Teaching assistant for Data Structures and Artificial Intelligence courses.",
  },
];

export type ProjectCategory = "frontend" | "ai";

export const projects = [
  {
    number: "01",
    title: "Correspondence Automation System",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "End-to-end intra- and inter-organizational correspondence platform covering letter registration, approval workflow, digital signature and stamp, and dispatch to other organizations or individual recipients.",
    tags: ["Workflow Engine", "Enterprise UI", "Document Management", "Multi-Tenant"],
    href: "https://letters.mesal.ir/"
  },
  {
    number: "02",
    title: "AI Management Platform",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "Centralized AI gateway where each organization holds a wallet, tops up credit, and allocates budget to its users, enabling access to LLMs and other AI features across all connected internal systems.",
    tags: ["LLM Integration", "Wallet System", "Multi-Tenant", "Usage Metering"],
    href: "https://ai.mesal.ir/"
  },
  {
    number: "03",
    title: "Factory Management(ERP)",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "Front-end contribution to software supporting end-to-end factory accounting and operational management.",
    tags: ["React", "Enterprise UI", "Forms", "Multi-Tenant"],
    href:"https://erp.mesal.ir/"
  },
  {
    number: "04",
    title: "EMR System",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "A comprehensive electronic medical record platform covering patient encounters, consultations and pharmacy interactions.",
      tags: ["React", "TypeScript", "UX", "Enterprise", "Multi-Tenant"],
      href: "https://clinic.mesal.ir/"
  },
  {
    number: "06",
    title: "Job Recommendation System",
    type: "AI · Recommendation",
    category: "ai" as ProjectCategory,
    description:
    "An AI-powered recruitment recommender that matches candidates with relevant openings and supports personalized notifications.",
    tags: ["Python", "Embeddings", "ML", "Recommendation"],
    href: "https://github.com/Nastarantalebi/job-recommendation",
  },
  {
    number: "07",
    title: "Personalized Sports Recommender",
    type: "AI · Thesis",
    category: "ai" as ProjectCategory,
    description:
    "A genetic-algorithm-based system that generates personalized exercise programs from user conditions and training goals.",
    tags: ["Python", "Genetic Algorithm", "Flask", "DEAP"],
    href: "https://github.com/Nastarantalebi/exercise-recommender"
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS","Next.js", "Redux", "Zustand", "Context API", "Node.js", "React-router-dom", "React-hook-form", "Docker", "Framer-motion"],
  design: [
    "User-Centered Design",
    "Interaction Design",
    "UX Research",
    "Usability Testing & Evaluation",
    "User Flows",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "HCI",
    "Design Systems",
    "Figma"
  ],
  ai: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Classification", "Regression", "Feature Engineering", "Image processing"],
  data: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Statistical Analysis"],
};


export const research = [
  // --- Interpretable AI Interfaces ---
  "Explainability in Recommendations: How UI design affects user trust in ML decisions",
  "Feature Importance Visualization: Presenting model rationale without overwhelming users",
  "Confidence Communication: When to show uncertainty and how users interpret it",
  
  // --- Adaptive UI Systems ---
  "Behavior-Driven Complexity: Learning user expertise from interaction patterns",
  "Progressive Information Disclosure: Adapting interface density based on proficiency",
  "Real-time UX Adaptation: Measuring performance impact of dynamic interface changes",
];

export const experiences = [
  {
    number: "01",
    title: "Correspondence Automation System",
    indicator: "Front-end Development",
    description:
      "End-to-end intra- and inter-organizational correspondence platform covering letter registration, approval workflow, digital signature and stamp, and dispatch to other organizations or individual recipients.",
    href: "https://letters.mesal.ir/",
    images: [
      {
        src: "/works/letters1.jpeg",
        alt: "Correspondence system",
      },
      {
        src: "/works/letters2.png",
        alt: "Correspondence dashboard",
      },
      {
        src: "/works/letters3.png",
        alt: "Stamp interface",
      },
    ],
  },

  {
    number: "02",
    title: "Wellness & Massage Management",
    indicator: "Front-end Development",
    description:
      "A responsive management and customer-facing platform for wellness and massage centers, including service presentation, treatment plans, and operational interfaces.",
    href: "https://wellness.mesal.ir/",
    images: [
      {
        src: "/works/wellness1.png",
        alt: "Wellness landing page",
      },
      {
        src: "/works/wellness2.png",
        alt: "Wellness management interface",
      },
      {
        src: "/works/wellness3.png",
        alt: "Wellness treatment plans",
      },
    ],
  },

  {
    number: "03",
    title: "Factory Management (ERP)",
    indicator: "Front-end Development",
    description:
      "Front-end contribution to software supporting end-to-end factory accounting and operational management.",
    href: "https://erp.mesal.ir/",
    images: [
      {
        src: "/works/erp.png",
        alt: "Factory ERP interface",
      },
      {
        src: "/works/erp1.png",
        alt: "Factory ERP dashboard",
      },
      {
        src: "/works/erp3.png",
        alt: "Factory ERP interface",
      },
    ],
  },

  {
    number: "04",
    title: "Stars Telegram",
    indicator: "UI Design",
    description:
      "A web interface designed for earning Telegram Stars.",
    href: "",
    images: [
      {
        src: "/works/stars.png",
        alt: "Stars Telegram interface",
      },
      {
        src: "/works/stars1.png",
        alt: "Stars Telegram",
      },
      {
        src: "/works/stars3.png",
        alt: "Stars Telegram",
      },
    ],
  },

  {
    number: "05",
    indicator: "UI Design",
    title: "Shoe Store",
    description:
      "A modern e-commerce interface focused on product presentation, navigation, and a streamlined shopping experience.",
    href: "",
    images: [
      {
        src: "/works/shoes.webp",
        alt: "Shoe store page",
      },
    ],
  },

  {
    number: "06",
    indicator: "UI Design",
    title: "Hamneshin Platform",
    description:
      "A social networking platform designed to help users discover and connect with friends, colleagues, and people with similar academic or professional interests.",
    href: "",
    images: [
      {
        src: "/works/hamneshin.webp",
        alt: "Hamneshin platform",
      },

      {
        src: "/works/hamneshin2.png",
        alt: "Hamneshin platform",
      },      {
        src: "/works/hamneshin1.png",
        alt: "Hamneshin platform",
      },
    ],
  },
  {
    number: "07",
    indicator: "UI Design",
    title: "Grocery Platform",
description:
  "An early exploration of grocery e-commerce interfaces, focusing on visual hierarchy, product presentation, and intuitive user flows.",
    href: "",
    images: [
      {
        src: "/works/Grocery.png",
        alt: "Grocery platform",
      },

    ],
  },
];
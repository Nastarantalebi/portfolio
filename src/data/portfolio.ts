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
    tags: ["Workflow Engine", "Digital Signature", "Enterprise UI", "Document Management"],
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
    href: ""
  },
  {
    number: "03",
    title: "Factory Management(ERP)",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "Front-end contribution to software supporting end-to-end factory accounting and operational management.",
    tags: ["React", "Enterprise UI", "Forms"],
    href:"https://erp.mesal.ir/"
  },

  {
    number: "04",
    title: "EMR System",
    type: "Enterprise · Front-End",
    category: "frontend" as ProjectCategory,
    description:
      "A comprehensive electronic medical record platform covering patient encounters, consultations and pharmacy interactions.",
      tags: ["React", "TypeScript", "UX", "Enterprise"],
      href: "https://emr.mesal.ir/"
    },
  //   {
  //     number: "05",
  //     title: "CRM & Legal Practice",
  //   type: "Enterprise · Front-End",
  //   category: "frontend" as ProjectCategory,
  //   description:
  //   "Front-end work across CRM sales planning and legal-practice workflows, translating complex business processes into usable interfaces.",
  //   tags: ["UI/UX", "React", "Workflow"],
  //   href:"https://crm.mesal.ir/"
    
  // },
  // {
  //   number: "06",
  //   title: "Tours & Hotels Agency",
  //   type: "Travel · Front-End",
  //   category: "frontend" as ProjectCategory,
  //   description:
  //   "A responsive booking platform for tours and hotels with an integrated international visa application flow.",
  //   tags: ["React", "TypeScript", "Booking", "Responsive"],
  // },
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
  design: ["UI/UX Design", "HCI", "Figma", "Wireframing", "Prototyping", "Usability Testing"],
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

export const IMAGES = [
  {
    src: "/works/0.png",
    alt: "login page",
    title: "Login Page",
  },
  {
    src: "/works/1.jpeg",
    alt: "letters page",
    title: "Letters page",
  },
  {
    src: "/works/8.png",
    alt: "letters dashboard",
    title: "Letters Dashboard",
  },

  {
    src: "/works/5.png",
    alt: "letter parafs",
    title: "Letter Parafs",
  },
  {
    src: "/works/6.png",
    alt: "letter logs",
    title: "Letter Logs",
  },
  {
    src: "/works/7.png",
    alt: "letter stamp",
    title: "Letter Stamp",
  },
  {
    src: "/works/9.png",
    alt: "ERP dashboard",
    title: "ERP Dashboard",
  },
  {
    src: "/works/10.png",
    alt: "Wellness dashboard",
    title: "Wellness Dashboard",
  },
  {
    src: "/works/11.png",
    alt: "Wellness landing",
    title: "Wellness Landing",
  },
  {
    src: "/works/16.png",
    alt: "Wellness plans",
    title: "Wellness plans",
  },
  {
    src: "/works/12.png",
    alt: "Wellness landing",
    title: "Wellness Landing",
  },

];
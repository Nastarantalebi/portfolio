export const profile = {
  name: "Nastaran Talebi",
  role: "Front-End Developer · UI/UX Designer",
  intro:
    "I design and build intuitive digital experiences where thoughtful interfaces meet solid front-end engineering.",
  location: "Isfahan, Iran",
  email: "nastarantalebi.1382@gmail.com",
  github: "https://github.com/Nastarantalebi",
  linkedin: "https://www.linkedin.com/in/nastaran-talebi-9227a6247/",
  // cv: "/Nastaran-Talebi-CV.pdf",
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
  frontend: ["React", "TypeScript", "JavaScript", "HTML/CSS","Next.js", "Redux", "Zustand", "Context API", "Node.js", "React-router-dom", "React-hook-form", "Docker"],
  design: ["UI/UX Design", "HCI", "Figma", "Wireframing", "Prototyping", "Usability Testing"],
  ai: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Classification", "Regression", "Feature Engineering", "Image processing"],
  data: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Statistical Analysis"],
};

export const research = [
  "Advanced Front-End Architectures for Scalable Web Applications",
  "User Experience Optimization in Complex Enterprise Software",
  "AI-Driven User Interface Personalization and Adaptation",
  "Intelligent Agent Integration in Front-End Development Frameworks",
  "Machine Learning for Enhanced User Experience Analytics",
  "Human-AI Collaboration through Intuitive Web Interfaces",
  "Design and Evaluation of Adaptive User Interfaces",
];
import { StrictMode, useState } from "react";
import { renderToString } from "react-dom/server";
import { ArrowDown, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cva } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import { jsx, jsxs } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//#region src/components/ui/button.tsx
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
			secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
			destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
	const Comp = asChild ? Slot.Root : "button";
	return /* @__PURE__ */ jsx(Comp, {
		"data-slot": "button",
		"data-variant": variant,
		"data-size": size,
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region src/components/Navbar.tsx
var links = [
	["Work", "#work"],
	["About", "#about"],
	["Experience", "#experience"],
	["Skills", "#skills"],
	["Research", "#research"],
	["Contact", "#contact"]
];
function Navbar() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/80 bg-background/80 px-4 py-3 shadow-sm backdrop-blur-xl",
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "#",
					className: "font-display text-xl tracking-tight text-accent",
					children: /* @__PURE__ */ jsx("img", {
						src: "/Nt.png",
						className: "w-15 h-10"
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-7 md:flex",
					children: links.map(([label, href]) => /* @__PURE__ */ jsx("a", {
						href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: label
					}, href))
				}),
				/* @__PURE__ */ jsx(Button, {
					asChild: true,
					size: "sm",
					className: "hidden sm:inline-flex bg-accent hover:bg-accent/80",
					children: /* @__PURE__ */ jsx("a", {
						href: "#contact",
						children: "Contact"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle navigation",
					className: "grid size-10 place-items-center rounded-full bg-card/50 md:hidden",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
				})
			]
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: -10,
				scale: .98
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -10,
				scale: .98
			},
			className: "mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-card p-4 shadow-xl md:hidden",
			children: links.map(([label, href]) => /* @__PURE__ */ jsx("a", {
				href,
				onClick: () => setOpen(false),
				className: "block rounded-2xl px-4 py-3 text-sm hover:bg-secondary",
				children: label
			}, href))
		}) })]
	});
}
//#endregion
//#region src/data/portfolio.ts
var profile = {
	name: "Nastaran Talebi",
	role: "Front-End Developer · UI/UX Designer",
	intro: "I build digital experiences powered by thoughtful design and intelligent systems where users understand how AI works, and complexity becomes intuitive. Solid front-end engineering at the core.",
	location: "Isfahan, Iran",
	email: "nastarantalebi.1382@gmail.com",
	github: "https://github.com/Nastarantalebi",
	linkedin: "https://www.linkedin.com/in/nastaran-talebi-9227a6247/"
};
var projects = [
	{
		number: "01",
		title: "Correspondence Automation System",
		type: "Enterprise · Front-End",
		category: "frontend",
		description: "End-to-end intra- and inter-organizational correspondence platform covering letter registration, approval workflow, digital signature and stamp, and dispatch to other organizations or individual recipients.",
		tags: [
			"Workflow Engine",
			"Enterprise UI",
			"Document Management",
			"Multi-Tenant"
		],
		href: "https://letters.mesal.ir/"
	},
	{
		number: "02",
		title: "AI Management Platform",
		type: "Enterprise · Front-End",
		category: "frontend",
		description: "Centralized AI gateway where each organization holds a wallet, tops up credit, and allocates budget to its users, enabling access to LLMs and other AI features across all connected internal systems.",
		tags: [
			"LLM Integration",
			"Wallet System",
			"Multi-Tenant",
			"Usage Metering"
		],
		href: "https://ai.mesal.ir/"
	},
	{
		number: "03",
		title: "Factory Management(ERP)",
		type: "Enterprise · Front-End",
		category: "frontend",
		description: "Front-end contribution to software supporting end-to-end factory accounting and operational management.",
		tags: [
			"React",
			"Enterprise UI",
			"Forms",
			"Multi-Tenant"
		],
		href: "https://erp.mesal.ir/"
	},
	{
		number: "04",
		title: "EMR System",
		type: "Enterprise · Front-End",
		category: "frontend",
		description: "A comprehensive electronic medical record platform covering patient encounters, consultations and pharmacy interactions.",
		tags: [
			"React",
			"TypeScript",
			"UX",
			"Enterprise",
			"Multi-Tenant"
		],
		href: "https://clinic.mesal.ir/"
	},
	{
		number: "06",
		title: "Job Recommendation System",
		type: "AI · Recommendation",
		category: "ai",
		description: "An AI-powered recruitment recommender that matches candidates with relevant openings and supports personalized notifications.",
		tags: [
			"Python",
			"Embeddings",
			"ML",
			"Recommendation"
		],
		href: "https://github.com/Nastarantalebi/job-recommendation"
	},
	{
		number: "07",
		title: "Personalized Sports Recommender",
		type: "AI · Thesis",
		category: "ai",
		description: "A genetic-algorithm-based system that generates personalized exercise programs from user conditions and training goals.",
		tags: [
			"Python",
			"Genetic Algorithm",
			"Flask",
			"DEAP"
		],
		href: "https://github.com/Nastarantalebi/exercise-recommender"
	}
];
var skills = {
	frontend: [
		"React",
		"TypeScript",
		"JavaScript",
		"HTML/CSS",
		"Next.js",
		"Redux",
		"Zustand",
		"Context API",
		"Node.js",
		"React-router-dom",
		"React-hook-form",
		"Docker",
		"Framer-motion"
	],
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
	ai: [
		"Python",
		"scikit-learn",
		"TensorFlow",
		"PyTorch",
		"Classification",
		"Regression",
		"Feature Engineering",
		"Image processing"
	],
	data: [
		"NumPy",
		"Pandas",
		"Matplotlib",
		"Seaborn",
		"Data Analysis",
		"Statistical Analysis"
	]
};
var experiences = [
	{
		number: "01",
		title: "Correspondence Automation System",
		indicator: "Front-end Development",
		description: "End-to-end intra- and inter-organizational correspondence platform covering letter registration, approval workflow, digital signature and stamp, and dispatch to other organizations or individual recipients.",
		href: "https://letters.mesal.ir/",
		images: [
			{
				src: "/works/letters1.jpeg",
				alt: "Correspondence system"
			},
			{
				src: "/works/letters2.png",
				alt: "Correspondence dashboard"
			},
			{
				src: "/works/letters3.png",
				alt: "Stamp interface"
			}
		]
	},
	{
		number: "02",
		title: "Wellness & Massage Management",
		indicator: "Front-end Development",
		description: "A responsive management and customer-facing platform for wellness and massage centers, including service presentation, treatment plans, and operational interfaces.",
		href: "https://wellness.mesal.ir/",
		images: [
			{
				src: "/works/wellness1.png",
				alt: "Wellness landing page"
			},
			{
				src: "/works/wellness2.png",
				alt: "Wellness management interface"
			},
			{
				src: "/works/wellness3.png",
				alt: "Wellness treatment plans"
			}
		]
	},
	{
		number: "03",
		title: "Factory Management (ERP)",
		indicator: "Front-end Development",
		description: "Front-end contribution to software supporting end-to-end factory accounting and operational management.",
		href: "https://erp.mesal.ir/",
		images: [
			{
				src: "/works/erp.png",
				alt: "Factory ERP interface"
			},
			{
				src: "/works/erp1.png",
				alt: "Factory ERP dashboard"
			},
			{
				src: "/works/erp3.png",
				alt: "Factory ERP interface"
			}
		]
	},
	{
		number: "04",
		title: "Stars Telegram",
		indicator: "UI Design",
		description: "A web interface designed for earning Telegram Stars.",
		href: "",
		images: [
			{
				src: "/works/stars.png",
				alt: "Stars Telegram interface"
			},
			{
				src: "/works/stars1.png",
				alt: "Stars Telegram"
			},
			{
				src: "/works/stars3.png",
				alt: "Stars Telegram"
			}
		]
	},
	{
		number: "05",
		indicator: "UI Design",
		title: "Shoe Store",
		description: "A modern e-commerce interface focused on product presentation, navigation, and a streamlined shopping experience.",
		href: "",
		images: [{
			src: "/works/shoes.webp",
			alt: "Shoe store page"
		}]
	},
	{
		number: "06",
		indicator: "UI Design",
		title: "Hamneshin Platform",
		description: "A social networking platform designed to help users discover and connect with friends, colleagues, and people with similar academic or professional interests.",
		href: "",
		images: [
			{
				src: "/works/hamneshin.webp",
				alt: "Hamneshin platform"
			},
			{
				src: "/works/hamneshin2.png",
				alt: "Hamneshin platform"
			},
			{
				src: "/works/hamneshin1.png",
				alt: "Hamneshin platform"
			}
		]
	},
	{
		number: "07",
		indicator: "UI Design",
		title: "Grocery Platform",
		description: "An early exploration of grocery e-commerce interfaces, focusing on visual hierarchy, product presentation, and intuitive user flows.",
		href: "",
		images: [{
			src: "/works/Grocery.png",
			alt: "Grocery platform"
		}]
	}
];
//#endregion
//#region src/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsx("section", {
		className: "hero-glow relative min-h-dvh overflow-hidden px-6 pb-16 pt-3 sm:px-8 md:px-10 md:pb-0 md:pt-5 lg:pt-15",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid min-h-fit max-w-7xl items-center gap-10 sm:gap-14 md:min-h-[calc(100dvh-10rem)] md:grid-cols-[1.05fr_.95fr]",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .8 },
				className: "order-2 md:order-1",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "mb-4 text-xs font-medium uppercase tracking-[.28em] text-muted-foreground sm:mb-5",
						children: "Portfolio · 2026"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "max-w-4xl font-display text-4xl leading-[.98] tracking-[-.03em] sm:text-5xl sm:leading-[.95] md:text-5xl lg:text-7xl xl:text-8xl xl:leading-[.92] xl:tracking-[-.04em]",
						children: [
							"Designing ",
							/* @__PURE__ */ jsx("em", {
								className: "text-accent",
								children: "interfaces"
							}),
							" that feel human."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-8 sm:text-base sm:leading-7 md:text-lg",
						children: profile.intro
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 lg:mt-8 flex flex-wrap items-center gap-3 sm:mt-9",
						children: [/* @__PURE__ */ jsx(Button, {
							asChild: true,
							children: /* @__PURE__ */ jsxs("a", {
								href: "#work",
								className: "whitespace-nowrap",
								children: ["View selected work ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "ml-2 size-4" })]
							})
						}), /* @__PURE__ */ jsx(Button, {
							variant: "outline",
							asChild: true,
							children: /* @__PURE__ */ jsx("a", {
								href: "#contact",
								children: "Get in touch"
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-2 lg:mt-8 flex flex-wrap items-center gap-5 text-muted-foreground",
						children: [
							/* @__PURE__ */ jsx("a", {
								"aria-label": "GitHub",
								href: profile.github,
								target: "_blank",
								rel: "noreferrer",
								className: "transition hover:text-foreground",
								children: /* @__PURE__ */ jsx(FaGithub, { size: 18 })
							}),
							/* @__PURE__ */ jsx("a", {
								"aria-label": "LinkedIn",
								href: profile.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "transition hover:text-foreground",
								children: /* @__PURE__ */ jsx(FaLinkedin, { size: 18 })
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#about",
								className: "ml-0 flex items-center gap-2 text-xs uppercase tracking-widest hover:text-foreground sm:ml-2",
								children: ["Scroll ", /* @__PURE__ */ jsx(ArrowDown, { size: 14 })]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .96,
					x: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					x: 0
				},
				transition: {
					duration: 1,
					delay: .15
				},
				className: "relative order-1 mx-auto w-full max-w-sm sm:max-w-md md:order-2 md:max-w-none",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute -inset-0 rounded-[3rem] bg-secondary/10 blur-3xl" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-[2rem]",
						children: /* @__PURE__ */ jsx("img", {
							src: "/profile.png",
							alt: "Nastaran Talebi",
							className: "h-full w-full object-cover object-top grayscale-[15%]"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute -bottom-4 right-2 max-w-[calc(100%-1.5rem)] rounded-2xl border border-border bg-card/10 px-4 py-3 shadow-xl backdrop-blur sm:bottom-2 sm:right-4 sm:px-5 sm:py-4 md:-right-6 xl:-right-10",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-[10px] uppercase tracking-[.2em] text-muted-foreground sm:text-xs",
							children: "Based in"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm font-medium",
							children: profile.location
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Marquee.tsx
var words = [
	"React",
	"javaScript",
	"TypeScript",
	"Redux",
	"Zustand",
	"Framer-motion",
	"Next.js",
	"Human-AI Collaboration",
	"UI/UX",
	"HCI",
	"Figma",
	"Git",
	"Github",
	"Gitlab",
	"Docker",
	"Image processing",
	"AI",
	"Data Analysis"
];
function Marquee() {
	const items = [...words, ...words];
	return /* @__PURE__ */ jsx("div", {
		className: "overflow-hidden border-y border-border py-5",
		children: /* @__PURE__ */ jsx("div", {
			className: "marquee flex w-max items-center gap-10",
			children: items.map((word, i) => /* @__PURE__ */ jsxs("span", {
				className: "flex items-center gap-10 whitespace-nowrap text-sm uppercase tracking-[.2em] text-muted-foreground",
				children: [word, /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-accent" })]
			}, `${word}-${i}`))
		})
	});
}
//#endregion
//#region src/components/SectionHeading.tsx
function SectionHeading({ eyebrow, title, className }) {
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 18
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .3
		},
		transition: { duration: .6 },
		className: className ? className : "mb-14",
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-3 text-xs uppercase tracking-[.25em] text-muted-foreground",
			children: eyebrow
		}), /* @__PURE__ */ jsx("h2", {
			className: "max-w-3xl font-display text-4xl leading-tight tracking-[-.025em] md:text-6xl",
			children: title
		})]
	});
}
//#endregion
//#region src/components/ui/badge.tsx
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: { variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
		destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
		outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
		ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
		link: "text-primary underline-offset-4 hover:underline"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", asChild = false, ...props }) {
	const Comp = asChild ? Slot.Root : "span";
	return /* @__PURE__ */ jsx(Comp, {
		"data-slot": "badge",
		"data-variant": variant,
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/components/Work.tsx
function ProjectCard({ project, index }) {
	return /* @__PURE__ */ jsxs(motion.article, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15
		},
		transition: {
			duration: .55,
			delay: index * .06
		},
		whileHover: { y: -6 },
		className: `group relative overflow-hidden rounded-[2rem] bg-card/90 p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-7 md:p-9 ${project.href ? "pb-20 sm:pb-24 md:pb-24" : ""}`,
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mb-10 flex items-start justify-between gap-3 sm:mb-16",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-display text-3xl text-accent sm:text-4xl",
					children: project.number
				}), /* @__PURE__ */ jsx("span", {
					className: "shrink-0 text-xs uppercase tracking-[.16em] text-muted-foreground",
					children: project.type
				})]
			}),
			/* @__PURE__ */ jsx("h3", {
				className: "font-display text-2xl tracking-tight sm:text-3xl md:text-4xl",
				children: project.title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7",
				children: project.description
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 flex flex-wrap gap-2 sm:mt-7",
				children: project.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { children: tag }, tag))
			}),
			project.href && /* @__PURE__ */ jsx("a", {
				href: project.href,
				target: "_blank",
				rel: "noreferrer",
				className: "absolute bottom-6 right-6 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12 sm:bottom-8 sm:right-8 sm:size-11",
				children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 })
			})
		]
	});
}
function ProjectGrid({ items }) {
	return /* @__PURE__ */ jsx("div", {
		className: "grid gap-4 sm:gap-5 md:grid-cols-2",
		children: items.map((project, i) => /* @__PURE__ */ jsx(ProjectCard, {
			project,
			index: i
		}, project.number))
	});
}
function Work() {
	const frontendProjects = projects.filter((p) => p.category === "frontend");
	const aiProjects = projects.filter((p) => p.category === "ai");
	return /* @__PURE__ */ jsx("section", {
		id: "work",
		className: "px-6 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Selected work",
					title: "Complex products, made easier to use."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mb-4 mt-12 sm:mt-16",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-5 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground sm:mb-6",
						children: "Front-End & UI/UX"
					}), /* @__PURE__ */ jsx(ProjectGrid, { items: frontendProjects })]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-14 sm:mt-20",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-5 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground sm:mb-6",
						children: "AI & Machine Learning"
					}), /* @__PURE__ */ jsx(ProjectGrid, { items: aiProjects })]
				})
			]
		})
	});
}
//#endregion
//#region src/components/About.tsx
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-secondary/10 px-6 py-28 text-primary-foreground md:px-10 md:py-36",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "About",
				title: "Building interfaces where AI enhances, not overwhelms."
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: 25
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				className: "lg:pt-16",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-2xl leading-9 text-primary-foreground/90 md:text-4xl md:leading-[1.2]",
						children: "I'm drawn to a specific problem: most AI-driven products fail at the interface. The algorithm works, but users don't trust it. The system learns, but doesn't communicate why. I work at that intersection—using design to make intelligent systems legible."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-2xl leading-8 text-primary-foreground/60",
						children: "My background spans clinical systems, booking platforms, and data-heavy dashboards—each reinforced that great UX and intelligent algorithms aren't opposing forces. When users understand how a system makes decisions, they use it better. When algorithms account for cognitive load and context, the interface becomes intuitive. That's what I'm building toward."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 grid grid-cols-2 gap-5 border-t border-primary-foreground/15 pt-7 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ jsx(Stat, {
								value: "17.07/20",
								label: "B.Sc. GPA"
							}),
							/* @__PURE__ */ jsx(Stat, {
								value: "5+",
								label: "Production Projects"
							}),
							/* @__PURE__ */ jsx(Stat, {
								value: "Adaptive UX",
								label: "Current Focus"
							}),
							/* @__PURE__ */ jsx(Stat, {
								value: "AI·Design",
								label: "Intersection"
							})
						]
					})
				]
			})]
		})
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "font-display text-2xl",
		children: value
	}), /* @__PURE__ */ jsx("p", {
		className: "mt-1 text-xs uppercase tracking-wider text-primary-foreground/50",
		children: label
	})] });
}
//#endregion
//#region src/components/Skills.tsx
var groups = [
	{
		title: "Front-end",
		items: skills.frontend,
		number: "01"
	},
	{
		title: "UI/UX & HCI",
		items: skills.design,
		number: "02"
	},
	{
		title: "AI & ML",
		items: skills.ai,
		number: "03"
	},
	{
		title: "Data",
		items: skills.data,
		number: "04"
	}
];
function Skills() {
	return /* @__PURE__ */ jsxs("section", {
		id: "skills",
		className: "relative overflow-hidden bg-secondary/20 px-6 py-28 md:px-10 md:py-36",
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				className: "pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-primary/5 blur-3xl",
				animate: {
					x: [
						0,
						-30,
						0
					],
					y: [
						0,
						40,
						0
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				className: "pointer-events-none absolute -left-40 bottom-10 size-80 rounded-full bg-accent/5 blur-3xl",
				animate: {
					x: [
						0,
						40,
						0
					],
					y: [
						0,
						-30,
						0
					]
				},
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Toolkit",
					title: "Tools I use to turn ideas into working products."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-16 grid gap-5 md:grid-cols-2",
					children: groups.map((group, groupIndex) => /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 50,
							rotateX: 12
						},
						whileInView: {
							opacity: 1,
							y: 0,
							rotateX: 0
						},
						viewport: {
							once: true,
							margin: "-80px"
						},
						transition: {
							duration: .7,
							delay: groupIndex * .12,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						whileHover: { y: -6 },
						className: "group relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/40 p-7 backdrop-blur-sm md:p-9",
						children: [
							/* @__PURE__ */ jsx(motion.span, {
								className: "absolute right-7 top-5 text-6xl font-black tracking-tighter text-primary/5",
								initial: {
									opacity: 0,
									x: 20
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								transition: {
									delay: groupIndex * .12 + .3,
									duration: .6
								},
								children: group.number
							}),
							/* @__PURE__ */ jsx(motion.div, {
								className: "absolute left-0 top-0 h-[2px] w-full origin-left bg-primary",
								initial: { scaleX: 0 },
								whileInView: { scaleX: 1 },
								viewport: { once: true },
								transition: {
									delay: groupIndex * .12 + .2,
									duration: .8,
									ease: "easeOut"
								}
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx(motion.span, {
										className: "size-2 rounded-full bg-primary",
										animate: {
											scale: [
												1,
												1.5,
												1
											],
											opacity: [
												.6,
												1,
												.6
											]
										},
										transition: {
											duration: 2,
											repeat: Infinity
										}
									}), /* @__PURE__ */ jsx("p", {
										className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
										children: group.title
									})]
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-8 flex flex-wrap gap-2",
									children: group.items.map((item, itemIndex) => /* @__PURE__ */ jsx(motion.span, {
										initial: {
											opacity: 0,
											scale: .7,
											y: 10
										},
										whileInView: {
											opacity: 1,
											scale: 1,
											y: 0
										},
										viewport: { once: true },
										transition: {
											delay: groupIndex * .12 + .3 + itemIndex * .05,
											type: "spring",
											stiffness: 300,
											damping: 20
										},
										whileHover: {
											scale: 1.08,
											y: -4
										},
										className: "cursor-default rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm transition-colors duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground",
										children: item
									}, item))
								})]
							}),
							/* @__PURE__ */ jsx(motion.div, {
								className: "pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-primary/10 blur-3xl",
								initial: { opacity: 0 },
								whileHover: { opacity: 1 },
								transition: { duration: .4 }
							})
						]
					}, group.title))
				})]
			})
		]
	});
}
//#endregion
//#region src/components/ui/textarea.tsx
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ jsx("textarea", {
		"data-slot": "textarea",
		className: cn("flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/ui/input.tsx
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ jsx("input", {
		type,
		"data-slot": "input",
		className: cn("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region src/components/Contact.tsx
var FORMSPREE_ENDPOINT = "https://formspree.io/f/xzezbojv";
function Contact() {
	const [status, setStatus] = useState("idle");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		const form = e.currentTarget;
		const formData = new FormData(form);
		try {
			if ((await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				headers: { Accept: "application/json" },
				body: formData
			})).ok) {
				setStatus("success");
				form.reset();
			} else setStatus("error");
		} catch {
			setStatus("error");
		}
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "contact",
		className: "px-6 pb-10 md:px-10",
		children: [/* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: { once: true },
			className: "mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col justify-center px-7 py-12 md:px-14 md:py-15",
					children: [
						/* @__PURE__ */ jsx(Mail, { className: "mb-7 size-7 text-accent" }),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs uppercase tracking-[.25em] text-primary-foreground/50",
							children: "Have a project in mind?"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 max-w-md font-display text-4xl leading-[1.05] tracking-[-.03em] md:text-5xl",
							children: "Let's make something thoughtful."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70",
							children: "Tell me a bit about what you're working on. I read every message and reply within a couple of days."
						}),
						/* @__PURE__ */ jsxs("a", {
							href: `mailto:${profile.email}`,
							className: "mt-8 inline-flex w-fit items-center gap-2 border-b border-primary-foreground/30 pb-1 text-sm transition-colors hover:border-primary-foreground",
							children: [profile.email, /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-primary-foreground/10 px-7 py-16 md:border-l md:border-t-0 md:px-14 md:py-24",
					children: /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "flex flex-col gap-4",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "text",
								name: "_gotcha",
								tabIndex: -1,
								autoComplete: "off",
								className: "hidden"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "name",
									className: "text-xs text-primary-foreground/50",
									children: "Name"
								}), /* @__PURE__ */ jsx(Input, {
									id: "name",
									name: "name",
									placeholder: "Your name",
									required: true,
									maxLength: 100,
									disabled: status === "submitting",
									className: "border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "email",
									className: "text-xs text-primary-foreground/50",
									children: "Email"
								}), /* @__PURE__ */ jsx(Input, {
									id: "email",
									name: "email",
									type: "email",
									placeholder: "your-email@example.com",
									required: true,
									disabled: status === "submitting",
									className: "border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "message",
									className: "text-xs text-primary-foreground/50",
									children: "Message"
								}), /* @__PURE__ */ jsx(Textarea, {
									id: "message",
									name: "message",
									placeholder: "What are you building?",
									required: true,
									minLength: 10,
									maxLength: 2e3,
									rows: 4,
									disabled: status === "submitting",
									className: "border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
								})]
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								disabled: status === "submitting",
								className: "mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90",
								children: status === "submitting" ? "Sending..." : "Send message"
							}),
							status === "success" && /* @__PURE__ */ jsx("p", {
								className: "text-sm text-green-300",
								children: "Message sent — thank you!"
							}),
							status === "error" && /* @__PURE__ */ jsx("p", {
								className: "text-sm text-red-300",
								children: "Something went wrong, please try again."
							})
						]
					})
				})]
			})
		}), /* @__PURE__ */ jsxs("footer", {
			className: "mx-auto flex max-w-7xl flex-col gap-3 px-2 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ jsx("span", { children: "© 2026 Nastaran Talebi" }), /* @__PURE__ */ jsx("span", { children: "Front-End · UI/UX · Human-AI Interfaces" })]
		})]
	});
}
//#endregion
//#region src/components/WorkExperience.tsx
var WorkExperience = () => {
	return /* @__PURE__ */ jsxs("section", {
		id: "experience",
		className: "relative overflow-hidden bg-secondary/20 px-6 py-28 md:px-10 md:py-36",
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				className: "pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl",
				animate: {
					x: [
						0,
						-30,
						0
					],
					y: [
						0,
						40,
						0
					]
				},
				transition: {
					duration: 10,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsx(motion.div, {
				className: "pointer-events-none absolute -left-40 bottom-20 size-80 rounded-full bg-accent/5 blur-3xl",
				animate: {
					x: [
						0,
						40,
						0
					],
					y: [
						0,
						-30,
						0
					]
				},
				transition: {
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut"
				}
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-7xl",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					eyebrow: "Selected Work",
					title: "Building interfaces for real-world products."
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-20 space-y-24 md:space-y-32",
					children: experiences.map((project, projectIndex) => {
						const isReversed = projectIndex % 2 !== 0;
						return /* @__PURE__ */ jsxs(motion.article, {
							initial: {
								opacity: 0,
								y: 60
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-100px"
							},
							transition: {
								duration: .8,
								delay: projectIndex * .05,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "group relative",
							children: [/* @__PURE__ */ jsx(motion.div, {
								className: "mb-8 h-[2px] w-full origin-left bg-primary/40",
								initial: { scaleX: 0 },
								whileInView: { scaleX: 1 },
								viewport: { once: true },
								transition: {
									duration: .8,
									delay: .15,
									ease: "easeOut"
								}
							}), /* @__PURE__ */ jsxs("div", {
								className: `grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${isReversed ? "lg:[&>div:first-child]:order-2" : ""}`,
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative w-full",
									children: [
										project.images.length === 1 && /* @__PURE__ */ jsxs("div", {
											className: "relative",
											children: [/* @__PURE__ */ jsx("div", {
												"aria-hidden": "true",
												className: "absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-primary/30 md:-bottom-5 md:-right-5 md:rounded-3xl"
											}), /* @__PURE__ */ jsx(motion.div, {
												className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/20 md:rounded-3xl",
												whileHover: {
													y: -6,
													scale: 1.01
												},
												transition: {
													type: "spring",
													stiffness: 300,
													damping: 24
												},
												children: /* @__PURE__ */ jsx("img", {
													src: project.images[0].src,
													alt: project.images[0].alt,
													className: "h-full w-full object-contain"
												})
											})]
										}),
										project.images.length === 2 && /* @__PURE__ */ jsxs("div", {
											className: "relative aspect-[4/3] w-full",
											children: [/* @__PURE__ */ jsx(motion.div, {
												className: "absolute left-0 top-0 z-10 aspect-video w-[76%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl shadow-black/20 md:rounded-2xl",
												whileHover: {
													y: -6,
													scale: 1.03,
													zIndex: 40
												},
												transition: {
													type: "spring",
													stiffness: 300,
													damping: 24
												},
												children: /* @__PURE__ */ jsx("img", {
													src: project.images[0].src,
													alt: project.images[0].alt,
													className: "h-full w-full object-contain"
												})
											}), /* @__PURE__ */ jsx(motion.div, {
												className: "absolute bottom-0 right-0 z-20 aspect-video w-[68%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl",
												whileHover: {
													y: -6,
													scale: 1.03,
													zIndex: 40
												},
												transition: {
													type: "spring",
													stiffness: 300,
													damping: 24
												},
												children: /* @__PURE__ */ jsx("img", {
													src: project.images[1].src,
													alt: project.images[1].alt,
													className: "h-full w-full object-contain"
												})
											})]
										}),
										project.images.length >= 3 && /* @__PURE__ */ jsxs("div", {
											className: "relative aspect-[5/4] w-full",
											children: [
												/* @__PURE__ */ jsx(motion.div, {
													className: "absolute left-0 top-[10%] z-20 aspect-video w-[68%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl",
													whileHover: {
														y: -6,
														scale: 1.03,
														zIndex: 40
													},
													transition: {
														type: "spring",
														stiffness: 300,
														damping: 24
													},
													children: /* @__PURE__ */ jsx("img", {
														src: project.images[0].src,
														alt: project.images[0].alt,
														className: "h-full w-full object-contain"
													})
												}),
												/* @__PURE__ */ jsx(motion.div, {
													className: "absolute right-0 top-0 z-10 aspect-video w-[55%] overflow-hidden rounded-lg border border-border/60 bg-card shadow-xl shadow-black/20 md:rounded-xl",
													whileHover: {
														y: -6,
														scale: 1.04,
														zIndex: 40
													},
													transition: {
														type: "spring",
														stiffness: 300,
														damping: 24
													},
													children: /* @__PURE__ */ jsx("img", {
														src: project.images[1].src,
														alt: project.images[1].alt,
														className: "h-full w-full object-contain"
													})
												}),
												/* @__PURE__ */ jsx(motion.div, {
													className: "absolute bottom-0 right-[3%] z-30 aspect-video w-[70%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl",
													whileHover: {
														y: -6,
														scale: 1.03,
														zIndex: 40
													},
													transition: {
														type: "spring",
														stiffness: 300,
														damping: 24
													},
													children: /* @__PURE__ */ jsx("img", {
														src: project.images[2].src,
														alt: project.images[2].alt,
														className: "h-full w-full object-contain"
													})
												})
											]
										}),
										/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-primary/10 blur-3xl" })
									]
								}), /* @__PURE__ */ jsxs("div", {
									className: "relative",
									children: [/* @__PURE__ */ jsx(motion.span, {
										className: "absolute -right-2 -top-16 text-8xl font-black tracking-tighter text-primary/5 md:text-9xl",
										initial: {
											opacity: 0,
											x: 20
										},
										whileInView: {
											opacity: 1,
											x: 0
										},
										viewport: { once: true },
										transition: {
											duration: .6,
											delay: .2
										},
										children: project.number
									}), /* @__PURE__ */ jsxs("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ jsxs("div", {
												className: "mb-5 flex items-center gap-3",
												children: [/* @__PURE__ */ jsx(motion.span, {
													className: "size-2 rounded-full bg-primary",
													animate: {
														scale: [
															1,
															1.5,
															1
														],
														opacity: [
															.6,
															1,
															.6
														]
													},
													transition: {
														duration: 2,
														repeat: Infinity
													}
												}), /* @__PURE__ */ jsx("span", {
													className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
													children: "Work Experience"
												})]
											}),
											/* @__PURE__ */ jsx("h3", {
												className: "max-w-xl text-3xl font-black tracking-tight text-foreground md:text-4xl lg:text-5xl",
												children: project.title
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg",
												children: project.description
											}),
											/* @__PURE__ */ jsxs("div", {
												className: "mt-8 flex items-center gap-4",
												children: [
													/* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-primary/50" }),
													/* @__PURE__ */ jsx("span", {
														className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground",
														children: project.indicator
													}),
													" ",
													project.href && /* @__PURE__ */ jsxs("a", {
														href: project.href,
														target: "_blank",
														rel: "noopener noreferrer",
														className: " inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent",
														children: ["View Project", /* @__PURE__ */ jsx("span", {
															className: "text-base transition-transform duration-300 group-hover:translate-x-1",
															children: "↗"
														})]
													})
												]
											})
										]
									})]
								})]
							})]
						}, project.title);
					})
				})]
			})
		]
	});
};
//#endregion
//#region src/components/Research.tsx
var researchAreas = [{
	title: "Interpretable AI Interfaces",
	items: [
		"Explainability in Recommendations: How UI design affects user trust in ML decisions",
		"Feature Importance Visualization: Presenting model rationale without overwhelming users",
		"Confidence Communication: When to show uncertainty and how users interpret it"
	]
}, {
	title: "Adaptive UI Systems",
	items: [
		"Behavior-Driven Complexity: Learning user expertise from interaction patterns",
		"Progressive Information Disclosure: Adapting interface density based on proficiency",
		"Real-time UX Adaptation: Measuring performance impact of dynamic interface changes"
	]
}];
function Research() {
	return /* @__PURE__ */ jsx("section", {
		id: "research",
		className: "px-6 pt-28 md:px-10 md:py-10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				eyebrow: "Research Interests",
				title: "Directions I'm actively building toward."
			}), researchAreas.map((area) => /* @__PURE__ */ jsxs("div", {
				className: "mb-14",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "mb-6 text-lg font-medium text-accent",
					children: area.title
				}), /* @__PURE__ */ jsx("div", {
					className: "grid gap-3 text-white",
					children: area.items.map((item, i) => /* @__PURE__ */ jsx(motion.div, {
						initial: {
							opacity: 0,
							x: -12
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: { delay: i * .04 },
						className: "group flex items-center justify-between gap-5 border-b border-border py-5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex items-start gap-5",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "mt-1 text-xs text-accent",
								children: ["0", i + 1]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-base md:text-lg",
								children: item
							})]
						})
					}, item))
				})]
			}, area.title))]
		})
	});
}
//#endregion
//#region src/App.tsx
function App() {
	return /* @__PURE__ */ jsxs("div", {
		className: "grain min-h-screen overflow-x-hidden bg-primary text-foreground",
		children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Marquee, {}),
			/* @__PURE__ */ jsx(Work, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(WorkExperience, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(Research, {}),
			/* @__PURE__ */ jsx(Contact, {})
		] })]
	});
}
//#endregion
//#region src/entry-server.tsx
function render() {
	return renderToString(/* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }));
}
//#endregion
export { render };

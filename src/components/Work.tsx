import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import { Badge } from "./ui/badge";

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-[2rem] bg-card/90 p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-7 md:p-9 ${
        project.href ? "pb-20 sm:pb-24 md:pb-24" : ""
      }`}
    >
      <div className="mb-10 flex items-start justify-between gap-3 sm:mb-16">
        <span className="font-display text-3xl text-accent sm:text-4xl">
          {project.number}
        </span>
        <span className="shrink-0 text-xs uppercase tracking-[.16em] text-muted-foreground">
          {project.type}
        </span>
      </div>
      <h3 className="font-display text-2xl tracking-tight sm:text-3xl md:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
        {project.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-6 right-6 grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12 sm:bottom-8 sm:right-8 sm:size-11"
        >
          <ArrowUpRight size={18} />
        </a>
      )}
    </motion.article>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
      {items.map((project, i) => (
        <ProjectCard key={project.number} project={project} index={i} />
      ))}
    </div>
  );
}

export default function Work() {
  const frontendProjects = projects.filter((p) => p.category === "frontend");
  const aiProjects = projects.filter((p) => p.category === "ai");

  return (
    <section id="work" className="px-6 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Complex products, made easier to use."
        />

        <div className="mb-4 mt-12 sm:mt-16">
          <h3 className="mb-5 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground sm:mb-6">
            Front-End & UI/UX
          </h3>
          <ProjectGrid items={frontendProjects} />
        </div>

        <div className="mt-14 sm:mt-20">
          <h3 className="mb-5 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground sm:mb-6">
            AI & Machine Learning
          </h3>
          <ProjectGrid items={aiProjects} />
        </div>
      </div>
    </section>
  );
}
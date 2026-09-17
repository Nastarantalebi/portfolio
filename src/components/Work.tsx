import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects, type ProjectCategory } from "@/data/portfolio";
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
      className="group relative overflow-hidden rounded-[2rem] bg-card/90 p-7 shadow-sm transition-shadow hover:shadow-xl md:p-9"
    >
      <div className="mb-16 flex items-start justify-between">
        <span className="font-display text-4xl text-accent">
          {project.number}
        </span>
        <span className="text-xs uppercase tracking-[.16em] text-muted-foreground">
          {project.type}
        </span>
      </div>
      <h3 className="font-display text-3xl tracking-tight md:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
        {project.description}
      </p>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-8 right-8 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-12"
        >
          <ArrowUpRight size={18} />
        </a>
      )}
    </motion.article>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
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
    <section id="work" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Complex products, made easier to use."
        />

        <div className="mb-4">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground">
            Front-End & UI/UX
          </h3>
          <ProjectGrid items={frontendProjects} />
        </div>

        <div className="mt-20">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-[.16em] text-muted-foreground">
            AI & Machine Learning
          </h3>
          <ProjectGrid items={aiProjects} />
        </div>
      </div>
    </section>
  );
}

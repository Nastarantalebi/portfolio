import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-secondary/20 px-6 py-28 md:px-10 md:py-36"
    >
      {/* Background decoration */}
      <motion.div
        className="pointer-events-none absolute -right-40 top-20 size-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -left-40 bottom-20 size-80 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="Building interfaces for real-world products."
        />

        <div className="mt-20 space-y-24 md:space-y-32">
          {experiences.map((project, projectIndex) => {
            const isReversed = projectIndex % 2 !== 0;

            return (
              <motion.article
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.8,
                  delay: projectIndex * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative"
              >
                {/* Top line */}
                <motion.div
                  className="mb-8 h-[2px] w-full origin-left bg-primary/40"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                />

                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Images */}
                  <div className="relative w-full">
                    {/* 1 image */}
                    {project.images.length === 1 && (
                      <div className="relative">
                        {/* Decorative offset frame */}
                        <div
                          aria-hidden="true"
                          className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-primary/30 md:-bottom-5 md:-right-5 md:rounded-3xl"
                        />
                        <motion.div
                          className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-2xl shadow-black/20 md:rounded-3xl"
                          whileHover={{ y: -6, scale: 1.01 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* 2 images */}
                    {project.images.length === 2 && (
                      <div className="relative aspect-[4/3] w-full">
                        <motion.div
                          className="absolute left-0 top-0 z-10 aspect-video w-[76%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-xl shadow-black/20 md:rounded-2xl"
                          whileHover={{ y: -6, scale: 1.03, zIndex: 40 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>

                        <motion.div
                          className="absolute bottom-0 right-0 z-20 aspect-video w-[68%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl"
                          whileHover={{ y: -6, scale: 1.03, zIndex: 40 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[1].src}
                            alt={project.images[1].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* 3+ images */}
                    {project.images.length >= 3 && (
                      <div className="relative aspect-[5/4] w-full">
                        {/* Main image */}
                        <motion.div
                          className="absolute left-0 top-[10%] z-20 aspect-video w-[68%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl"
                          whileHover={{ y: -6, scale: 1.03, zIndex: 40 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[0].src}
                            alt={project.images[0].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>

                        {/* Second image */}
                        <motion.div
                          className="absolute right-0 top-0 z-10 aspect-video w-[55%] overflow-hidden rounded-lg border border-border/60 bg-card shadow-xl shadow-black/20 md:rounded-xl"
                          whileHover={{ y: -6, scale: 1.04, zIndex: 40 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[1].src}
                            alt={project.images[1].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>

                        {/* Third image */}
                        <motion.div
                          className="absolute bottom-0 right-[3%] z-30 aspect-video w-[70%] overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-black/30 md:rounded-2xl"
                          whileHover={{ y: -6, scale: 1.03, zIndex: 40 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 24,
                          }}
                        >
                          <img
                            src={project.images[2].src}
                            alt={project.images[2].alt}
                            className="h-full w-full object-contain"
                          />
                        </motion.div>
                      </div>
                    )}

                    {/* Image glow */}
                    <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-primary/10 blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Number */}
                    <motion.span
                      className="absolute -right-2 -top-16 text-8xl font-black tracking-tighter text-primary/5 md:text-9xl"
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                      }}
                    >
                      {project.number}
                    </motion.span>

                    <div className="relative">
                      {/* Eyebrow */}
                      <div className="mb-5 flex items-center gap-3">
                        <motion.span
                          className="size-2 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />

                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                          Work Experience
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="max-w-xl text-3xl font-black tracking-tight text-foreground md:text-4xl lg:text-5xl">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                        {project.description}
                      </p>

                      {/* Project indicator */}
                      <div className="mt-8 flex items-center gap-4">
                        <span className="h-px w-12 bg-primary/50" />
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {project.indicator}
                        </span>{" "}
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                          >
                            View Project
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                              ↗
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

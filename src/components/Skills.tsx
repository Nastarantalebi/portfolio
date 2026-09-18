import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Front-end",
    items: skills.frontend,
    number: "01",
  },
  {
    title: "UI/UX & HCI",
    items: skills.design,
    number: "02",
  },
  {
    title: "AI & ML",
    items: skills.ai,
    number: "03",
  },
  {
    title: "Data",
    items: skills.data,
    number: "04",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-secondary/20 px-6 py-28 md:px-10 md:py-36">
      {/* Background decoration */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-primary/5 blur-3xl"
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
        className="pointer-events-none absolute -left-40 bottom-10 size-80 rounded-full bg-accent/5 blur-3xl"
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
          eyebrow="Toolkit"
          title="Tools I use to turn ideas into working products."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {groups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: groupIndex * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/40 p-7 backdrop-blur-sm md:p-9"
            >
              {/* Number */}
              <motion.span
                className="absolute right-7 top-5 text-6xl font-black tracking-tighter text-primary/5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: groupIndex * 0.12 + 0.3,
                  duration: 0.6,
                }}
              >
                {group.number}
              </motion.span>

              {/* Animated top line */}
              <motion.div
                className="absolute left-0 top-0 h-[2px] w-full origin-left bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: groupIndex * 0.12 + 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
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

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                    {group.title}
                  </p>
                </div>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay:
                          groupIndex * 0.12 +
                          0.3 +
                          itemIndex * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                      }}
                      className="cursor-default rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm transition-colors duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <motion.div
                className="pointer-events-none absolute -bottom-20 -right-20 size-40 rounded-full bg-primary/10 blur-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const groups = [
  ["Front-end", skills.frontend],
  ["UI/UX & HCI", skills.design],
  ["AI & ML", skills.ai],
  ["Data", skills.data],
] as const;

export default function Skills() {
  return (
    <section className="bg-secondary/50 px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools I use to turn ideas into working products."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {groups.map(([title, items], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-[2rem] border border-border bg-background p-7 md:p-9"
            >
              <p className="text-xs uppercase tracking-[.2em] text-accent">
                {title}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

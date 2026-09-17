import { motion } from "motion/react";
import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="A mix of engineering, design and teaching." />
        <div className="divide-y divide-border border-y border-border">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .05 }}
              className="grid gap-5 py-8 md:grid-cols-[160px_1fr_1.2fr] md:items-start"
            >
              <span className="text-xs uppercase tracking-[.15em] text-muted-foreground">{item.year}</span>
              <div>
                <h3 className="text-xl font-medium">{item.role}</h3>
                <p className="mt-1 text-sm text-accent">{item.company}</p>
              </div>
              <p className="max-w-xl leading-7 text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
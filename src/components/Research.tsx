import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { research } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Research() {
  return (
    <section id="research" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Research interests" title="Where I want to take the work next." />
        <div className="grid gap-3">
          {research.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .04 }}
              className="group flex items-center justify-between gap-5 border-b border-border py-5"
            >
              <div className="flex items-start gap-5">
                <span className="mt-1 text-xs text-accent">0{i + 1}</span>
                <h3 className="text-lg md:text-2xl">{item}</h3>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
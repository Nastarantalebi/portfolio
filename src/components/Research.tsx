import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

const researchAreas = [
  {
    title: "Interpretable AI Interfaces",
    items: [
      "Explainability in Recommendations: How UI design affects user trust in ML decisions",
      "Feature Importance Visualization: Presenting model rationale without overwhelming users",
      "Confidence Communication: When to show uncertainty and how users interpret it",
    ]
  },
  {
    title: "Adaptive UI Systems",
    items: [
      "Behavior-Driven Complexity: Learning user expertise from interaction patterns",
      "Progressive Information Disclosure: Adapting interface density based on proficiency",
      "Real-time UX Adaptation: Measuring performance impact of dynamic interface changes",
    ]
  }
];

export default function Research() {
  return (
    <section id="research" className="px-6 pt-28 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading 
          eyebrow="Research Interests" 
          title="Directions I'm actively building toward." 
        />
        
        {researchAreas.map((area) => (
          <div key={area.title} className="mb-14">
            <h3 className="mb-6 text-lg font-medium text-accent">{area.title}</h3>
            <div className="grid gap-3">
              {area.items.map((item, i) => (
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
                    <p className="text-base md:text-lg">{item}</p>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
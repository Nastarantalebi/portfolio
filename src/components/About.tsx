import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-secondary/10 px-6 py-28 text-primary-foreground md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <SectionHeading 
          eyebrow="About" 
          title="Building interfaces where AI enhances, not overwhelms." 
        />
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="lg:pt-16"
        >
          <p className="text-2xl leading-9 text-primary-foreground/90 md:text-4xl md:leading-[1.2]">
            I'm drawn to a specific problem: most AI-driven products fail at the interface. 
            The algorithm works, but users don't trust it. The system learns, but doesn't communicate why. 
            I work at that intersection—using design to make intelligent systems legible.
          </p>
          <p className="mt-8 max-w-2xl leading-8 text-primary-foreground/60">
            My background spans clinical systems, booking platforms, and data-heavy dashboards—each 
            reinforced that great UX and intelligent algorithms aren't opposing forces. When users understand 
            how a system makes decisions, they use it better. When algorithms account for cognitive load and 
            context, the interface becomes intuitive. That's what I'm building toward.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-primary-foreground/15 pt-7 sm:grid-cols-4">
            <Stat value="17.07/20" label="B.Sc. GPA" />
            <Stat value="5+" label="Production Projects" />
            <Stat value="Adaptive UX" label="Current Focus" />
            <Stat value="AI·Design" label="Intersection" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-primary-foreground/50">{label}</p>
    </div>
  );
}
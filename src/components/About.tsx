import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-secondary/10 px-6 py-28 text-primary-foreground md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.75fr_1.25fr]">
        <SectionHeading eyebrow="About me" title="Engineer by training. Designer by instinct." />
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="lg:pt-16"
        >
          <p className="text-2xl leading-9 text-primary-foreground/90 md:text-4xl md:leading-[1.2]">
            I&apos;m a Computer Engineering graduate from Yazd University, focused on front-end development, UI/UX and human-centered technology.
          </p>
          <p className="mt-8 max-w-2xl leading-8 text-primary-foreground/60">
            My work sits between engineering and design: I enjoy turning complicated enterprise workflows into clear interfaces, while exploring how AI and data can make digital products more adaptive and understandable.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-primary-foreground/15 pt-7 sm:grid-cols-4">
            <Stat value="17.07/20" label="B.Sc. GPA" />
            <Stat value="20/20" label="Thesis grade" />
            <Stat value="6.5" label="IELTS Academic" />
            <Stat value="3+" label="Years building" />
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
import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={className ? className : "mb-14"}
    >
      <p className="mb-3 text-xs uppercase tracking-[.25em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-.025em] md:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-10 pt-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-7 py-16 text-center text-primary-foreground md:px-16 md:py-24"
      >
        <Mail className="mx-auto mb-7 size-7 text-accent" />
        <p className="text-xs uppercase tracking-[.25em] text-primary-foreground/50">Have a project in mind?</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl leading-none tracking-[-.03em] md:text-7xl">
          Let&apos;s make something thoughtful.
        </h2>
        <Button asChild size="lg" className="mt-9 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
          <a href={`mailto:${profile.email}`}>Say hello <ArrowUpRight className="ml-2 size-4" /></a>
        </Button>
      </motion.div>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-2 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Nastaran Talebi</span>
        <span>Front-End · UI/UX · Human-AI Interfaces</span>
      </footer>
    </section>
  );
}
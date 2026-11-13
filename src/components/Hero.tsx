import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { Button } from "./ui/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-glow relative min-h-dvh overflow-hidden px-6 pb-16 pt-3 sm:px-8 md:px-10 md:pb-0 md:pt-5 lg:pt-15">
      <div className="mx-auto grid min-h-fit max-w-7xl items-center gap-10 sm:gap-14 md:min-h-[calc(100dvh-10rem)] md:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[.28em] text-muted-foreground sm:mb-5">
            Portfolio · 2026
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-[.98] tracking-[-.03em] sm:text-5xl sm:leading-[.95] md:text-5xl lg:text-7xl xl:text-8xl xl:leading-[.92] xl:tracking-[-.04em]">
            Designing <em className="text-accent">interfaces</em> that feel human.
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-8 sm:text-base sm:leading-7 md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-2 lg:mt-8 flex flex-wrap items-center gap-3 sm:mt-9">
            <Button asChild>
              <a href="#work" className="whitespace-nowrap">
                View selected work <ArrowUpRight className="ml-2 size-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-2 lg:mt-8 flex flex-wrap items-center gap-5 text-muted-foreground">
            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              <FaGithub size={18} />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-foreground"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#about"
              className="ml-0 flex items-center gap-2 text-xs uppercase tracking-widest hover:text-foreground sm:ml-2"
            >
              Scroll <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative order-1 mx-auto w-full max-w-sm sm:max-w-md md:order-2 md:max-w-none"
        >
          <div className="absolute -inset-0 rounded-[3rem] bg-secondary/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src="/profile.png"
              alt="Nastaran Talebi"
              className="h-full w-full object-cover object-top grayscale-[15%]"
            />
          </div>
          <div className="absolute -bottom-4 right-2 max-w-[calc(100%-1.5rem)] rounded-2xl border border-border bg-card/10 px-4 py-3 shadow-xl backdrop-blur sm:bottom-2 sm:right-4 sm:px-5 sm:py-4 md:-right-6 xl:-right-10">
            <p className="text-[10px] uppercase tracking-[.2em] text-muted-foreground sm:text-xs">
              Based in
            </p>
            <p className="mt-1 text-sm font-medium">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
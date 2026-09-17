import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { Button } from "./ui/button";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <section className="hero-glow relative min-h-screen overflow-hidden px-6 pb-0 pt-32 md:px-10 md:pt-0">
      <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="order-2 lg:order-1"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[.28em] text-muted-foreground">
            Portfolio · 2026
          </p>
          <h1 className="max-w-4xl font-display text-6xl leading-[.92] tracking-[-.04em] sm:text-7xl md:text-8xl">
            Designing <em className="text-accent">interfaces</em> that feel human.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#work">View selected work <ArrowUpRight className="ml-2 size-4" /></a>
            </Button>
            <Button variant="outline"  asChild>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a aria-label="GitHub" href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-foreground"><SiGithub size={18} /></a>
            <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-foreground"><SiLinkerd size={18} /></a>
            <a href="#about" className="ml-2 flex items-center gap-2 text-xs uppercase tracking-widest hover:text-foreground">
              Scroll <ArrowDown size={14} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .96, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: .15 }}
          className="relative order-1 mx-auto w-full max-w- lg:order-2"
        >
          <div className="absolute -inset-0 rounded-[3rem] bg-secondary/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ">
            <img src="/profile.png" alt="Nastaran Talebi" className="h-full w-full object-cover object-top grayscale-[15%]" />
          </div>
          <div className="absolute bottom-2 -right-10 rounded-2xl border border-border bg-card/10 px-5 py-4 shadow-xl backdrop-blur">
            <p className="text-xs uppercase tracking-[.2em] text-muted-foreground">Based in</p>
            <p className="mt-1 text-sm font-medium">{profile.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
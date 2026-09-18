import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Research", "#research"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border/80 bg-background/80 px-4 py-3 shadow-sm backdrop-blur-xl">
        <a href="#" className="font-display text-xl tracking-tight text-accent">
          <img src={"/Nt.png"} className="w-15 h-10"/>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>

        <Button
          asChild
          size="sm"
          className="hidden sm:inline-flex bg-accent hover:bg-accent/80"
        >
          <a href="#contact">Contact</a>
        </Button>

        <button
          aria-label="Toggle navigation"
          className="grid size-10 place-items-center rounded-full bg-card/50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-border bg-card p-4 shadow-xl md:hidden"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm hover:bg-secondary"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

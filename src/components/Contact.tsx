import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { profile } from "@/data/portfolio";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzezbojv";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

console.log(profile.email);

  return (
    <section id="contact" className="px-6 pb-10 pt-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary text-primary-foreground"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left column — copy */}
          <div className="flex flex-col justify-center px-7 py-16 md:px-14 md:py-24">
            <Mail className="mb-7 size-7 text-accent" />
            <p className="text-xs uppercase tracking-[.25em] text-primary-foreground/50">
              Have a project in mind?
            </p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.05] tracking-[-.03em] md:text-5xl">
              Let&apos;s make something thoughtful.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Tell me a bit about what you&apos;re working on. I read every
              message and reply within a couple of days.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary-foreground/30 pb-1 text-sm transition-colors hover:border-primary-foreground"
            >
              {profile.email}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Right column — form */}
          <div className="border-t border-primary-foreground/10 px-7 py-16 md:border-l md:border-t-0 md:px-14 md:py-24">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot: hidden from users, only bots fill this in */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs text-primary-foreground/50"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  disabled={status === "submitting"}
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs text-primary-foreground/50"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your-email@example.com"
                  required
                  disabled={status === "submitting"}
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs text-primary-foreground/50"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What are you building?"
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={4}
                  disabled={status === "submitting"}
                  className="border-primary-foreground/20 bg-transparent text-primary-foreground placeholder:text-primary-foreground/40"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-300">
                  Message sent — thank you!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-300">
                  Something went wrong, please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </motion.div>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-2 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Nastaran Talebi</span>
        <span>Front-End · UI/UX · Human-AI Interfaces</span>
      </footer>
    </section>
  );
}

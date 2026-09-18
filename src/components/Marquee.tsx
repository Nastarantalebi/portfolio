const words = [
  "React",
  "javaScript",
  "TypeScript",
  "Redux",
  "Zustand",
  "Framer-motion",
  "Next.js",
  "Human-AI Collaboration",
  "UI/UX",
  "HCI",
  "Figma",
  "Git",
  "Github",
  "Gitlab",
  "Docker",
  "Image processing",
  "AI",
  "Data Analysis",
];

export default function Marquee() {
  const items = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-border py-5">
      <div className="marquee flex w-max items-center gap-10">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap text-sm uppercase tracking-[.2em] text-muted-foreground"
          >
            {word}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

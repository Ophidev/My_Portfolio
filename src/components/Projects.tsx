import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MateMatch",
    tagline: "Full-Stack Roommate Matching Platform",
    description:
      "A scalable platform helping students and professionals discover compatible roommates with real-time chat, JWT auth, and a modular React frontend.",
    tech: ["React", "Vite", "Redux", "Node.js", "Express", "MongoDB", "Socket.io", "TailwindCSS"],
    github: "https://github.com/Ophidev/MateMatch",
    accent: "from-primary/20 to-secondary/20",
  },
  {
    title: "FitFlow",
    tagline: "Full-Stack Fitness Planner",
    description:
      "Workout tracking and fitness planner with personalized scheduling, set tracking, historical analytics, and a clean layered backend with JWT auth.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "TailwindCSS", "DaisyUI"],
    github: "https://github.com/Ophidev/FitFlow",
    accent: "from-secondary/20 to-primary/20",
  },
  {
    title: "Shopify App Contributions",
    tagline: "Production Apps @ Unova",
    description:
      "Contributed to live Shopify applications including Auto Hide/Unhide Products and Collection Sort & Push Down Sold Out — features, debugging, and stability.",
    tech: ["React", "Remix", "Shopify APIs", "Node.js"],
    accent: "from-primary/20 to-secondary/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary mb-3">// selected work</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[var(--shadow-glow)]"
            >
              <div
                className={`absolute -top-20 -right-20 size-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-[var(--shadow-glow)]">
                    {p.title[0]}
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="size-5" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                <p className="text-xs font-mono text-primary mb-3">{p.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Github, ArrowUpRight } from "lucide-react";

const notes = [
  {
    title: "DevOps Notes",
    tagline: "Linux • Docker • CI/CD • Cloud",
    description:
      "A growing knowledge base of everything I learn on my journey to becoming a DevOps engineer — from Linux internals and shell scripting to Docker, networking and pipelines. Written as clean, structured Markdown anyone can read and learn from.",
    topics: ["Linux", "Bash", "Docker", "Networking", "CI/CD", "Nginx"],
    href: "https://github.com/Ophidev/DevOps_Notes",
    accent: "from-primary/30 to-secondary/20",
    emoji: "🚀",
  },
  {
    title: "Node.js Notes",
    tagline: "Backend • Express • Async • APIs",
    description:
      "Deep-dive notes on Node.js — event loop, modules, streams, async patterns, Express fundamentals, REST API design, auth, error handling and production-grade backend practices.",
    topics: ["Node.js", "Express", "Async", "Streams", "REST", "Auth"],
    href: "https://github.com/Ophidev/Node_js-Notes",
    accent: "from-secondary/30 to-primary/20",
    emoji: "📗",
  },
];

export function Notes() {
  return (
    <section id="notes" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary mb-3">// open notes</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Learning in <span className="text-gradient">public</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          I document everything I learn as open-source Markdown notes on GitHub.
          Two flagship repos cover my DevOps and Node.js journeys.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((n, i) => (
            <a
              key={n.title}
              href={n.href}
              target="_blank"
              rel="noreferrer"
              style={{ animationDelay: `${i * 120}ms` }}
              className="group relative glass rounded-2xl p-7 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-up block"
            >
              <div
                className={`absolute -top-24 -right-24 size-56 rounded-full bg-gradient-to-br ${n.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="size-12 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center text-2xl shadow-[var(--shadow-glow)]">
                    <span>{n.emoji}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                    <Github className="size-5" />
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1 flex items-center gap-2">
                  <BookOpen className="size-5 text-primary" /> {n.title}
                </h3>
                <p className="text-xs font-mono text-primary mb-3">{n.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {n.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {n.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

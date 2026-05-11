const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Unova — Shopify App Development",
    period: "Nov 2025 – Present",
    stack: ["React", "Remix", "Node.js", "Shopify APIs", "Git"],
    points: [
      "Building scalable Shopify apps using React, Remix, React Router and Shopify Admin & Storefront APIs.",
      "Shipping merchant-facing features across multiple production apps — from UI polish to deep production debugging.",
      "Owning Git/GitHub workflows: PRs, code reviews, releases, and issue resolution with the team.",
      "Improving performance, stability and merchant UX for high-traffic Shopify apps installed on hundreds of stores.",
    ],
  },
  {
    role: "Self-Driven DevOps Learner",
    company: "Open-source notes & home lab",
    period: "2025 – Ongoing",
    stack: ["Linux", "Docker", "Git", "GitHub Actions", "Jenkins (basics)"],
    points: [
      "Studying Linux fundamentals, shell scripting, networking, processes and systemd in depth.",
      "Containerizing Node.js & React apps with Docker and multi-stage builds; orchestrating with docker-compose.",
      "Exploring CI/CD basics with GitHub Actions and Jenkins — build, test and deploy workflows.",
      "Publishing everything I learn as structured open-source notes on GitHub for other devs to use.",
    ],
  },
  {
    role: "WordPress Development Intern",
    company: "Khamlou (Remote)",
    period: "Aug 2023 – Feb 2024",
    stack: ["WordPress", "PHP", "JS", "CSS"],
    points: [
      "Delivered real client projects — WordPress customization and responsive UI from scratch.",
      "Customized themes, plugins and reusable components to client requirements.",
      "Improved performance and UX with media optimization, caching, and responsive design.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary mb-3">// experience</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Where I've <span className="text-gradient">worked &amp; learned</span>
        </h2>
        <div className="relative space-y-10 before:absolute before:left-4 md:before:left-1/2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-secondary/40 before:to-transparent">
          {experiences.map((e, i) => (
            <div
              key={e.role}
              style={{ animationDelay: `${i * 100}ms` }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 animate-fade-up ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 size-3 rounded-full bg-primary shadow-[var(--shadow-glow)] animate-glow" />
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <div className="font-mono text-sm text-muted-foreground">{e.period}</div>
                <h3 className="font-display text-xl font-semibold mt-1">{e.role}</h3>
                <div className="text-primary text-sm mt-1">{e.company}</div>
                <div className={`mt-3 flex flex-wrap gap-1.5 ${i % 2 ? "" : "md:justify-end"}`}>
                  {e.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

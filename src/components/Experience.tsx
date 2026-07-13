const experiences = [
  {
    role: "Software Engineer",
    company: "Unova — Shopify App Development",
    period: "Nov 2025 – Present",
    stack: ["Node.js", "GraphQL", "React", "Remix", "Shopify APIs"],
    points: [
      "Developing and maintaining production Shopify applications with a focus on scalable backend engineering and maintainable architecture.",
      "Building robust APIs, handling authentication, and working with GraphQL for merchant workflows and third-party integrations.",
      "Conducting deep production debugging to resolve high-priority issues, improve performance, and ensure stability across apps installed on hundreds of stores.",
      "Collaborating with developers, leading product research, and evaluating technical feasibility for new features and code quality improvements.",
    ],
  },
  {
    role: "Learning DevOps + Web Sec",
    company: "Self-Directed Education",
    period: "Ongoing",
    stack: ["AppSec", "OWASP", "DevSecOps", "Linux", "Git", "Docker", "CI/CD", "Jenkins"],
    points: [
      "Actively learning Application Security and Web Security fundamentals to build secure software.",
      "Studying Linux, containerization with Docker, and setting up CI/CD pipelines.",
      "Exploring the OWASP Top 10 vulnerabilities and understanding mitigation strategies.",
      "Integrating basic DevSecOps practices into modern development workflows.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Khamlou (Remote)",
    period: "Aug 2023 – Feb 2024",
    stack: ["WordPress", "JS", "CSS"],
    points: [
      "Collaborated on client projects, implementing custom backend logic and responsive frontend designs.",
      "Ensured code quality and performance by optimizing media and resolving layout issues.",
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

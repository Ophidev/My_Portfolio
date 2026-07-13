import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SentinelAI",
    tagline: "AI-Powered Web Security Scanner",
    description:
      "A comprehensive security scanning tool for detecting OWASP Top 10 vulnerabilities with AI-assisted vulnerability analysis. Features secure REST APIs, JWT authentication, and a containerized backend.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Docker",
      "JWT Auth",
    ],
    github: "https://github.com/Ophidev/SentinelAI",
    live: "https://github.com/Ophidev/SentinelAI",
    logo: "https://api.iconify.design/lucide:shield-check.svg?color=%23ffffff",
    accent: "from-primary/20 to-secondary/20",
  },
  {
    title: "FitFlow",
    tagline: "Full-Stack Fitness Planner",
    description:
      "Workout tracking and fitness planner featuring a secure backend architecture with JWT authentication, robust REST APIs, and a fully dockerized Express.js server.",
    tech: [
      "Express.js",
      "MongoDB",
      "Node.js",
      "Docker",
      "REST APIs",
      "JWT Auth",
    ],
    github: "https://github.com/Ophidev/FitFlow",
    live: "https://github.com/Ophidev/FitFlow",
    logo:
      "https://raw.githubusercontent.com/Ophidev/FitFlow/main/Frontend/src/assets/logoo.png",
    accent: "from-secondary/20 to-primary/20",
  },
  {
    title: "Shopify App Contributions",
    tagline: "Production Apps @ Unova",
    description:
      "Contributed to live production applications for Shopify merchants. Focused on robust GraphQL API integrations, handling Webhooks, managing merchant workflows, and secure authentication.",
    tech: [
      "React",
      "GraphQL",
      "Webhooks",
      "Shopify APIs",
      "Node.js",
    ],
    live: "https://apps.shopify.com/partners/developer-84536043624c65bc",
    logo:
      "https://cdn.shopify.com/static/images/logos/shopify-bag.png",
    accent: "from-primary/20 to-secondary/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <p className="font-mono text-sm text-primary mb-3">
          // selected work
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold mb-12">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.12)]"
            >
              {/* Animated Glow */}
              <div
                className={`absolute -top-24 -right-24 size-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-500`}
              />

              <div className="relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between mb-6">
                  {/* Logo */}
                  <div className="relative">
                    {/* Glow */}
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-125 opacity-70 group-hover:opacity-100 transition duration-300" />

                    {/* Logo Box */}
                    <div className="relative size-16 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-lg flex items-center justify-center">
                      <img
                        src={p.logo}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Action Icons */}
                  <div className="flex items-center gap-3">
                    {/* GitHub */}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Repository"
                        className="group/icon text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      >
                        <Github className="size-5 transition-transform duration-300 group-hover/icon:-translate-y-0.5" />
                      </a>
                    )}

                    {/* Live Link */}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live Project"
                        className="group/icon text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink className="size-5 transition-transform duration-300 group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  {p.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-mono text-cyan-400 mb-4">
                  {p.tagline}
                </p>

                {/* Description */}
                <p className="text-sm leading-7 text-muted-foreground mb-6">
                  {p.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:text-primary"
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
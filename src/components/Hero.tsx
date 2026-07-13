import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,oklch(0.30_0.025_265/0.15)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.30_0.025_265/0.15)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-primary animate-glow" />
            Available for Full-Time Opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Aditya Bhatt</span>
            <br />
            <span className="text-foreground/90">Software </span>
            <span className="text-gradient">Engineer</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Building <span className="text-foreground font-medium">production web applications</span> using{" "}
            <span className="text-foreground font-medium">React.js</span>,{" "}
            <span className="text-foreground font-medium">Node.js</span>,{" "}
            <span className="text-foreground font-medium">Express.js</span>, and{" "}
            <span className="text-foreground font-medium">MongoDB</span>. Passionate about{" "}
            <span className="text-foreground font-medium">Backend Engineering</span>,{" "}
            <span className="text-foreground font-medium">Application Security</span>, and{" "}
            <span className="text-foreground font-medium">Secure Software Development</span>, while continuously learning{" "}
            <span className="text-foreground font-medium">OWASP Top 10</span>,{" "}
            <span className="text-foreground font-medium">Linux</span>,{" "}
            <span className="text-foreground font-medium">Docker</span>, and{" "}
            <span className="text-foreground font-medium">DevOps</span> practices.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "⚛️ React",
              "🟢 Node.js",
              "🔐 App Security",
              "🐳 Docker",
              "🐧 Linux",
              "🛍️ Shopify",
            ].map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded-full glass text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
            >
              View Projects <ArrowDown className="size-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium glass hover:border-primary/50 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/Ophidev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Github className="size-5" />
            </a>

            <a
              href="https://linkedin.com/in/aditya-bhatt3737"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="size-5" />
            </a>

            <a
              href="mailto:bhattadi60@gmail.com"
              className="hover:text-primary transition-colors"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block animate-fade-in">
          <div className="absolute inset-0 rounded-3xl bg-[var(--gradient-primary)] blur-3xl opacity-30 animate-glow" />

          <div className="relative glass rounded-3xl p-6 shadow-[var(--shadow-elegant)] animate-float">
            <div className="flex gap-1.5 mb-4">
              <span className="size-3 rounded-full bg-destructive/70" />
              <span className="size-3 rounded-full bg-secondary/70" />
              <span className="size-3 rounded-full bg-primary/70" />
            </div>

            <pre className="font-mono text-xs sm:text-sm leading-6 text-muted-foreground">
              {`const aditya = {
  role: "Software Engineer",

  backend: [
    "Node.js",
    "Express.js",
    "MongoDB"
  ],

  frontend: [
    "React",
    "Remix"
  ],

  security: [
    "OWASP Top 10",
    "Secure APIs",
    "JWT"
  ],

  devops: [
    "Linux",
    "Docker",
    "Git",
    "Jenkins"
  ],

  currentFocus:
    "Application Security",

  status:
    "Building • Learning 🚀",
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
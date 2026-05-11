export function About() {
  const stats = [
    { v: "1+", l: "Years building" },
    { v: "10+", l: "Projects shipped" },
    { v: "2", l: "Open notes repos" },
    { v: "∞", l: "Cups of coffee" },
  ];
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary mb-3">// about me</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Building <span className="text-gradient">scalable</span> products &amp; learning the
            <span className="text-gradient"> infra</span> behind them
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Full-Stack Developer based in Uttarakhand, India, currently shipping
              production Shopify applications at{" "}
              <span className="text-foreground font-medium">Unova</span> with React, Remix and
              Node.js.
            </p>
            <p>
              Lately I've gone deep into <span className="text-foreground font-medium">DevOps</span> —
              Linux, Docker, CI/CD pipelines, container orchestration and cloud workflows. My
              goal is to grow into a role where I can own a service end-to-end: from the React
              UI down to the Dockerfile, the pipeline, and the server it runs on.
            </p>
            <p>
              I also publish everything I learn as open notes on GitHub so other engineers can
              benefit. Two of those — <span className="text-foreground">DevOps Notes</span> and{" "}
              <span className="text-foreground">Node.js Notes</span> — are linked below.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              style={{ animationDelay: `${i * 80}ms` }}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 animate-fade-up"
            >
              <div className="text-4xl font-display font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

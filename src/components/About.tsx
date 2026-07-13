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
              I'm a Professional Software Engineer currently shipping production Shopify applications at{" "}
              <span className="text-foreground font-medium">Unova</span>.
            </p>
            <p>
              With strong backend development skills, I have extensive experience working with APIs, authentication, GraphQL, debugging, and production deployments.
              I am comfortable working in Linux environments and have hands-on experience with Docker,Jenkins CI/CD, Git, and modern development workflows.
            </p>
            <p>
              I am passionate about understanding how applications work internally and how to secure them.
              I am continuously learning Application Security, OWASP Top 10, Secure Coding, and DevSecOps practices.
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

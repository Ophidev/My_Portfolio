type Skill = { name: string; slug: string; color: string };

const groups: { title: string; emoji: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Redux", slug: "redux", color: "764ABC" },
      { name: "TailwindCSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css", color: "1572B6" },
    ],
  },
  {
    title: "Frameworks",
    emoji: "🧩",
    items: [
      { name: "Remix", slug: "remix", color: "FFFFFF" },
      { name: "React Router", slug: "reactrouter", color: "CA4245" },
      { name: "Vite", slug: "vite", color: "646CFF" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express", slug: "express", color: "FFFFFF" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "REST APIs", slug: "openapiinitiative", color: "6BA539" },
      { name: "Socket.io", slug: "socketdotio", color: "FFFFFF" },
    ],
  },
  {
    title: "DevOps & Cloud",
    emoji: "🚀",
    items: [
      { name: "Linux", slug: "linux", color: "FCC624" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
    ],
  },
  {
    title: "Tools",
    emoji: "🛠️",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
      { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
      { name: "npm", slug: "npm", color: "CB3837" },
    ],
  },
  {
    title: "Platforms & Learning",
    emoji: "📚",
    items: [
      { name: "Shopify", slug: "shopify", color: "7AB55C" },
      { name: "WordPress", slug: "wordpress", color: "21759B" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "Jenkins (basics)", slug: "jenkins", color: "D24939" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm text-primary mb-3">// toolkit</p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Skills &amp; <span className="text-gradient">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          The tools I reach for daily — and the ones I'm actively leveling up on the road
          to a DevOps + Full-Stack engineer role.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <div
              key={g.title}
              style={{ animationDelay: `${gi * 70}ms` }}
              className="glass rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 animate-fade-up group"
            >
              <h3 className="font-display font-semibold mb-4 text-foreground flex items-center gap-2">
                <span className="text-lg">{g.emoji}</span> {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s.name}
                    className="group/chip inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 rounded-lg bg-muted/60 text-muted-foreground border border-border hover:border-primary/60 hover:text-foreground hover:-translate-y-0.5 transition-all"
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                      alt=""
                      width={14}
                      height={14}
                      loading="lazy"
                      className="size-3.5 transition-transform group-hover/chip:scale-110"
                    />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

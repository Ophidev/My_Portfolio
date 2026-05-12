import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";

const items = [
  { icon: Mail, label: "bhattadi60@gmail.com", href: "mailto:bhattadi60@gmail.com" },
  { icon: Phone, label: "+91 95283 65479", href: "tel:+919528365479" },
  { icon: Globe, label: "adityabhatt.me", href: "https://adityabhatt.ophid7.workers.dev/" },
  { icon: Github, label: "github.com/Ophidev", href: "https://github.com/Ophidev" },
  { icon: Linkedin, label: "linkedin.com/in/aditya-bhatt3737", href: "https://linkedin.com/in/aditya-bhatt3737" },
  { icon: MapPin, label: "Uttarkashi, Uttarakhand, India" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm text-primary mb-3">// let's connect</p>
        <h2 className="text-4xl sm:text-6xl font-bold mb-6">
          Got an <span className="text-gradient">idea</span>? Let's build it.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10">
          I'm open to full-time roles, freelance projects, and interesting collaborations.
          Drop me a line and I'll get back within 24 hours.
        </p>
        <a
          href="mailto:bhattadi60@gmail.com"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:-translate-y-0.5"
        >
          <Mail className="size-5" /> Say hello
        </a>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-left">
          {items.map((i) => {
            const Icon = i.icon;
            const content = (
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:border-primary/50 transition-colors h-full">
                <Icon className="size-4 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground truncate">{i.label}</span>
              </div>
            );
            return i.href ? (
              <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a>
            ) : (
              <div key={i.label}>{content}</div>
            );
          })}
        </div>
      </div>
      <footer className="mt-20 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Aditya Bhatt — Designed & built with ❤️
      </footer>
    </section>
  );
}

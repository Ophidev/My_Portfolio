import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Notes } from "@/components/Notes";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Bhatt — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Aditya Bhatt — Full-Stack Developer specializing in React, Remix, Node.js and Shopify app development.",
      },
      { property: "og:title", content: "Aditya Bhatt — Full-Stack Developer" },
      {
        property: "og:description",
        content: "React • Remix • Node.js • MongoDB • Shopify Apps",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Notes />
      <Contact />
    </main>
  );
}

import About from "~/components/home/about";
import Contact from "~/components/home/contact";
import Hero from "~/components/home/hero";
import Projects from "~/components/home/projects";
import Skills from "~/components/home/skills";
import Footer from "~/components/shared/footer";
import Navbar from "~/components/shared/navbar";

export function Home() {
  return (
    <main className="bg-gray-950 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

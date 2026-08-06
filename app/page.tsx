import { About } from "@/components/About";
import { CircuitBackground } from "@/components/CircuitBackground";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <div className="relative isolate">
      <CircuitBackground />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
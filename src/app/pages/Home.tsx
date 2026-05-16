import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { CaseStudy } from "../components/sections/CaseStudy";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";

export function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 pb-24">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Services />
      <CaseStudy />
      <Testimonials />
      <Contact />
    </div>
  );
}

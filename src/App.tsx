import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="grain min-h-screen overflow-x-hidden bg-primary text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Research />
        <Contact />
      </main>
    </div>
  );
}
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader done={loaded} />
      <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;

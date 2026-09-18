import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Exp";
import CodeInMotion from "../components/Codeinmotion";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Main() {
  return (
    <main className="min-h-screen bg-[#f5f5f3]">
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <CodeInMotion />
      <ContactMe />
      <Footer />
    </main>
  );
}
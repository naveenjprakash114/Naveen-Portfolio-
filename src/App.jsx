import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F3EB] text-charcoal font-sans selection:bg-[#E8DDCB] selection:text-charcoal relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

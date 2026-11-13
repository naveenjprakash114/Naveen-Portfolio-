import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans selection:bg-[#F5E8CE] selection:text-charcoal relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

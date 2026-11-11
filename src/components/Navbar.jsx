import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current section in view
      const sections = ["home", "about", "expertise", "experience", "projects", "services", "education", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Expertise", href: "#expertise", id: "expertise" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F7F3EB]/90 backdrop-blur-md border-b border-[#A18B70]/20 shadow-subtle py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: NAVEEN PRAKASH */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-charcoal flex items-center justify-center text-[#E8DDCB] font-serif font-semibold text-xs tracking-wider border border-[#A18B70]/30 transition-transform duration-300 group-hover:scale-105">
              NP
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-base sm:text-lg font-semibold text-charcoal leading-none">
                NAVEEN PRAKASH
              </span>
              <span className="text-[10px] tracking-widest uppercase text-bronze font-medium mt-0.5">
                Creative Technologist
              </span>
            </div>
          </a>

          {/* Right: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-wider transition-colors duration-200 py-1 relative ${
                    isActive
                      ? "text-charcoal font-semibold"
                      : "text-charcoal/70 hover:text-charcoal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-bronze rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button: LET'S TALK */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider border border-charcoal hover:bg-charcoal-soft transition-all duration-300 shadow-sm group"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E8DDCB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-charcoal text-[#F7F3EB] text-[11px] font-semibold uppercase tracking-wider"
            >
              TALK
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-charcoal hover:bg-beige/40 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F7F3EB]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-8 animate-fadeIn">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-widest text-bronze font-mono block pb-2 border-b border-[#A18B70]/20">
              NAVIGATION
            </span>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-serif text-charcoal hover:text-bronze transition-colors flex items-center justify-between py-1"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-bronze">0{index + 1}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#A18B70]/20 space-y-3">
            <div className="text-xs text-charcoal/70 flex justify-between">
              <span>Salem, Tamil Nadu, India</span>
              <a
                href="https://wa.me/917397172114"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-charcoal hover:underline"
              >
                WhatsApp Direct
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3.5 rounded-full bg-charcoal text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 text-[#E8DDCB]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

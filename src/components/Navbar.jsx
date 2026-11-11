import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "EXPERTISE", href: "/expertise" },
    { label: "WORK", href: "/work" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "CONTACT", href: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F5EF]/90 backdrop-blur-md border-b border-[#B7A58D]/25 shadow-subtle py-3.5"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Naveen Prakash J Home"
          >
            <div className="w-8 h-8 rounded-lg bg-charcoal flex items-center justify-center text-[#E9DDCB] font-serif font-semibold text-xs tracking-wider border border-[#B7A58D]/30 transition-transform duration-300 group-hover:scale-105">
              NP
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-tight text-base sm:text-lg font-semibold text-charcoal leading-none group-hover:text-taupe-dark transition-colors">
                Naveen Prakash J
              </span>
              <span className="text-[10px] tracking-widest-luxury uppercase text-muted font-medium mt-1">
                Creative Director & Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative text-xs tracking-widest uppercase font-medium transition-colors duration-200 py-1 ${
                    active ? "text-charcoal font-semibold" : "text-muted hover:text-charcoal"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B7A58D] rounded-full transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#F8F5EF] text-xs font-medium tracking-wider uppercase border border-charcoal hover:bg-[#332F2B] transition-all duration-300 shadow-sm hover:shadow group"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E9DDCB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-charcoal text-[#F8F5EF] text-[11px] font-medium tracking-wider uppercase"
            >
              Talk
            </Link>
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F8F5EF]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-6">
            <span className="text-[11px] uppercase tracking-widest-luxury text-muted font-medium border-b border-[#B7A58D]/30 pb-3">
              Navigation Menu
            </span>
            {navLinks.map((link, index) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-2xl sm:text-3xl font-serif tracking-tight flex items-center justify-between transition-colors ${
                    active ? "text-charcoal font-semibold italic" : "text-muted hover:text-charcoal"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono tracking-widest text-[#B7A58D]">
                    0{index + 1}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Footer */}
          <div className="space-y-4 pt-6 border-t border-[#B7A58D]/30">
            <div className="flex items-center justify-between text-xs text-muted">
              <span>{personalInfo.location}</span>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:underline"
              >
                WhatsApp Direct
              </a>
            </div>
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-charcoal text-[#F8F5EF] text-sm tracking-wider uppercase font-medium"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#E9DDCB]" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./Icons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Work", href: "/work" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#24221F] text-[#F8F5EF] pt-20 pb-12 border-t border-[#B7A58D]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Call to Action Banner */}
        <div className="pb-16 mb-16 border-b border-[#3C3833] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-[11px] uppercase tracking-widest-luxury text-[#B7A58D] font-medium">
              Start A Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#F8F5EF] leading-tight">
              Have an idea? Let's create something meaningful.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#E9DDCB] text-[#24221F] font-medium text-xs tracking-wider uppercase hover:bg-white transition-all duration-300 shadow-md group"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#332F2B] text-[#F8F5EF] font-medium text-xs tracking-wider uppercase border border-[#B7A58D]/30 hover:border-[#E9DDCB] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#B7A58D]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#3C3833]">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3 className="font-serif text-2xl font-normal text-[#F8F5EF] tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-xs uppercase tracking-widest-luxury text-[#B7A58D] font-medium mt-1">
                {personalInfo.identity}
              </p>
            </div>
            <p className="text-[#89847D] text-sm leading-relaxed max-w-sm italic font-serif">
              "Designing ideas. Creating experiences. Exploring technology."
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#89847D]">
              <MapPin className="w-3.5 h-3.5 text-[#B7A58D] shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-widest-luxury text-[#B7A58D] font-medium block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-xs uppercase tracking-wider text-[#A39E96] hover:text-[#E9DDCB] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-widest-luxury text-[#B7A58D] font-medium block">
              Direct Contact
            </span>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-xs text-[#A39E96] hover:text-[#E9DDCB] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2D2A26] border border-[#3C3833] flex items-center justify-center text-[#B7A58D] group-hover:border-[#B7A58D]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-xs text-[#A39E96] hover:text-[#E9DDCB] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2D2A26] border border-[#3C3833] flex items-center justify-center text-[#B7A58D] group-hover:border-[#B7A58D]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{personalInfo.phoneDisplay}</span>
              </a>

              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xs text-[#A39E96] hover:text-[#E9DDCB] transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-[#2D2A26] border border-[#3C3833] flex items-center justify-center text-[#B7A58D] group-hover:border-[#B7A58D]">
                  <InstagramIcon className="w-3.5 h-3.5" />
                </div>
                <span>{personalInfo.instagramHandle}</span>
              </a>
            </div>

            {/* Social Placeholders Indicator */}
            <div className="pt-3">
              <p className="text-[11px] text-[#89847D] tracking-wide">
                Social Profiles: Instagram active. LinkedIn & GitHub placeholders ready.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#89847D]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Visual Communication & Creative Tech</span>
            <span>Salem, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

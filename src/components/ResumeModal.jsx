import { useEffect } from "react";
import { X, Printer, Download, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { personalInfo, experienceTimeline } from "../data/portfolioData";
import { LinkedInIcon, GitHubIcon } from "./Icons";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const resumePdfPath = "/assets/resume/naveen-prakash-resume.pdf";

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#FAF7F2] border border-gold/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl my-auto flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 modal-scrollbar">
        {/* Modal Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-gold/30 print:hidden">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-gold block">
              Curriculum Vitae / Resume
            </span>
            <span className="text-[11px] text-charcoal/60">
              Official document verified &amp; ready for download
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            {/* Direct PDF Download */}
            <a
              href={resumePdfPath}
              download="Naveen-Prakash-Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-champagne" />
              <span>Download PDF</span>
            </a>

            {/* Standalone Fullpage CV */}
            <a
              href="/assets/resume/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-[#EFE7DB] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
              <span className="hidden sm:inline">Fullpage CV</span>
            </a>

            {/* Print / Save */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-[#EFE7DB] transition-colors border border-gold/30"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-gold" />
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white border border-gold/40 flex items-center justify-center text-charcoal hover:bg-[#EFE7DB] transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="space-y-8 text-charcoal font-sans bg-white p-6 sm:p-10 rounded-2xl border border-gold/25 shadow-subtle">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-gold/30">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal tracking-wide uppercase">
              NAVEEN PRAKASH J
            </h1>
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">
              FRONTEND DEVELOPER &nbsp;•&nbsp; UI/UX DESIGNER &nbsp;•&nbsp; AI CREATIVE TECHNOLOGIST
            </p>

            {/* Quick Contact Line */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-charcoal/75">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Salem, Tamil Nadu
              </span>
              <span className="text-gold">•</span>
              <a href="tel:+917397172114" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Phone className="w-3.5 h-3.5 text-gold" />
                +91 7397172114
              </a>
              <span className="text-gold">•</span>
              <a href="mailto:naveenjprakash114@gmail.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
                <Mail className="w-3.5 h-3.5 text-gold" />
                naveenjprakash114@gmail.com
              </a>
              <span className="text-gold">•</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-gold" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gold">•</span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-gold" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Section 1: Professional Profile */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-2.5 pb-1 border-b border-gold/25 font-bold">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/85 leading-relaxed text-justify">
              Multidisciplinary creative and technology professional with experience in graphic design, photography, videography, video editing, UI/UX design and AI-assisted frontend development. Skilled in creating brand-focused visual content, managing social media pages, producing product and model photography, editing promotional videos and designing responsive web experiences. Combines visual storytelling, design thinking and emerging AI tools to deliver engaging digital solutions.
            </p>
          </div>

          {/* Section 2: Professional Expertise */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-2.5 pb-1 border-b border-gold/25 font-bold">
              PROFESSIONAL EXPERTISE
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm font-medium text-charcoal">
              <div className="flex flex-wrap items-center gap-2">
                <span>Frontend Developer</span>
                <span className="text-gold">•</span>
                <span>UI/UX Designer</span>
                <span className="text-gold">•</span>
                <span>Graphic Designer</span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span>AI Creative Technology</span>
                <span className="text-gold">•</span>
                <span>AI Prompt Engineering</span>
                <span className="text-gold">•</span>
                <span>Photography &amp; Videography</span>
              </div>
            </div>
          </div>

          {/* Section 3: Professional Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-4 pb-1 border-b border-gold/25 font-bold">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-5">
              {experienceTimeline.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-charcoal">
                      {exp.role} <span className="font-normal text-charcoal/60">|</span> <span className="text-gold">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-charcoal/65 italic">{exp.duration}</span>
                  </div>
                  <ul className="space-y-1 pl-4 pt-1 text-xs text-charcoal/80 list-disc marker:text-gold">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="leading-relaxed">
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Selected Projects */}
          <div>
            <div className="flex items-center justify-between mb-3.5 pb-1 border-b border-gold/25">
              <h2 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                SELECTED PROJECTS
              </h2>
              <a
                href="https://naveen-portfolio-umber-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-gold hover:text-charcoal transition-colors font-medium flex items-center gap-1"
              >
                <span>Live Portfolio ↗</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-3.5">
              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  Ice Cream E-Commerce Platform <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">E-Commerce &amp; Product Experience</span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Designed and developed an online ice cream shopping and delivery platform. Focused on product management, category organisation, pricing, inventory and customer experience, with planned location-based delivery through 5 KM service zones and rapid delivery functionality.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  El Dhruv Photography <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">Photography Portfolio Website</span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Designed and developed a professional portfolio showcasing photography, videography, candid photography, model photoshoots and event coverage. Focused on premium visual presentation, responsive layouts, user experience and a strong digital brand presence.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  Personal AI Assistant <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">AI-Powered Personal Project</span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Conceptualised and developed an AI-powered personal assistant for individual use. Explored AI integration and prompt engineering to create an intelligent assistant experience focused on simplifying personal workflows.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  AUREL ESTATES <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">Luxury Real Estate Website</span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Designed and developed a premium real estate website focused on property buying and selling. Created an elegant UI/UX direction using a white and charcoal palette, with emphasis on property listings, property discovery and intuitive navigation for the Tamil Nadu real estate market.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal">
                  ARULMATHI SILKS <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">Creative Design</span>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Created promotional posters, campaign creatives, product-focused videos and social media content; supported page management and brand presentation.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-bold text-charcoal flex items-center justify-between">
                  <span>
                    HASHTAG CLOTHING <span className="font-normal text-charcoal/60">|</span> <span className="text-gold font-semibold">Social Media &amp; Brand Promotion</span>
                  </span>
                  <a
                    href="https://www.instagram.com/hashtagclothings31?srtk=Z3JhZjdyOWRvcHc5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-gold hover:text-charcoal transition-colors font-medium flex items-center gap-1"
                  >
                    <span>@hashtagclothings31</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  Designed clothing promotions and social media creatives, edited fashion videos and reels, and supported content publishing and brand consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-2.5 pb-1 border-b border-gold/25 font-bold">
              EDUCATION
            </h2>
            <div className="text-xs sm:text-sm text-charcoal flex flex-wrap items-center gap-2">
              <span className="font-bold">B.Sc. Visual Communication</span>
              <span className="text-gold">•</span>
              <span>AVS Arts &amp; Science College</span>
              <span className="text-gold">•</span>
              <span className="font-mono text-charcoal/70">2022</span>
            </div>
          </div>

          {/* Section 6: Core Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-3 pb-1 border-b border-gold/25 font-bold">
              CORE SKILLS
            </h2>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="sm:col-span-3 font-semibold text-gold">Creative Media</span>
                <span className="sm:col-span-9 text-charcoal/80">
                  Photography, Product Photography, Model Photography, Videography, Video Editing, Colour Grading, Photo Retouching
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="sm:col-span-3 font-semibold text-gold">Design &amp; Creative</span>
                <span className="sm:col-span-9 text-charcoal/80">
                  Graphic Design, UI/UX Designer, Social Media Management, Content Creation, Branding
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="sm:col-span-3 font-semibold text-gold">Development &amp; AI</span>
                <span className="sm:col-span-9 text-charcoal/80">
                  React.js, Frontend Development, AI Prompt Engineering, AI-Assisted Development, AI Creative Tools
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4">
                <span className="sm:col-span-3 font-semibold text-gold">Software</span>
                <span className="sm:col-span-9 text-charcoal/80">
                  Adobe Photoshop, Illustrator, Lightroom, Premiere Pro, After Effects, Canva Pro
                </span>
              </div>
            </div>
          </div>

          {/* Document Footer Signature */}
          <div className="pt-4 border-t border-gold/25 text-center text-[11px] font-mono tracking-widest uppercase text-charcoal/50">
            NAVEEN PRAKASH J
          </div>

        </div>
        </div>
      </div>
    </div>
  );
}

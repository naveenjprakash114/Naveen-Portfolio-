import { useEffect } from "react";
import { X, Printer, Download, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { personalInfo, experienceTimeline, expertiseCategories } from "../data/portfolioData";
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

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-ivory border border-gold/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-gold/30 print:hidden">
          <span className="text-xs uppercase font-mono tracking-widest text-gold">
            Curriculum Vitae / Professional Summary
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/assets/resume/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-beige transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gold" />
              <span>Fullpage CV</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-beige text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors border border-gold/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white border border-gold/40 flex items-center justify-center text-charcoal hover:bg-beige transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="space-y-8 text-charcoal font-sans">
          {/* Header */}
          <div className="pb-6 border-b border-gold/25">
            <h1 className="text-3xl sm:text-4xl font-serif font-normal text-charcoal tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-xs uppercase tracking-widest-luxury text-gold font-semibold mt-1">
              Digital Marketing • Graphic Designer • UI/UX Designer • AI Creative Technologist • Frontend Developer • Prompt Engineer
            </p>

            {/* Quick Contact Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-6 text-xs text-charcoal/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:underline">
                <Mail className="w-3.5 h-3.5 text-gold" />
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:underline">
                <Phone className="w-3.5 h-3.5 text-gold" />
                {personalInfo.phoneDisplay}
              </a>
              <a
                href={personalInfo.linkedinUrl || "https://www.linkedin.com/in/naveen-prakash-j-22b563249"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:underline text-charcoal hover:text-gold transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-gold" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.githubUrl || "https://github.com/naveenjprakash114"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:underline text-charcoal hover:text-gold transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-gold" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Professional Introduction */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
              {personalInfo.about.lead} {personalInfo.about.bioParagraphs[0]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceTimeline.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white border border-gold/25 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-serif text-lg font-normal text-charcoal">
                      {exp.role} — <span className="text-charcoal/70">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-charcoal/60">{exp.duration}</span>
                  </div>
                  <p className="text-xs text-charcoal/75 leading-relaxed">{exp.summary}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 text-xs">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-center gap-2 text-charcoal/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Foundation & Continuous Learning */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white border border-gold/25 space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-gold">
                Education
              </h2>
              <h3 className="font-serif text-base text-charcoal">{personalInfo.education.degree}</h3>
              <p className="text-xs text-charcoal/70">
                {personalInfo.education.college} ({personalInfo.education.university})
              </p>
              <p className="text-xs font-mono text-gold">
                Graduation Year: {personalInfo.education.graduationYear}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gold/25 space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-gold">
                Self-Learned Tech Stack
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {personalInfo.education.additionalLearning.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-cream text-charcoal border border-gold/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="pt-4 border-t border-gold/20 text-[11px] text-charcoal/60 flex items-center justify-between">
            <span>Portfolio: Salem, Tamil Nadu, India</span>
            <span>Current Company: {personalInfo.currentCompany}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


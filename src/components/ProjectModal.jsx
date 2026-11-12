import { useEffect } from "react";
import { X, CheckCircle2, Layers } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-ivory border border-gold/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Close Button */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-gold/20 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-gold block mb-1">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-charcoal">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-gold/30 flex items-center justify-center text-charcoal hover:bg-ivory-warm transition-colors shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Image Frame */}
        <div className="relative overflow-hidden rounded-2xl bg-ivory aspect-[16/9] mb-8 border border-gold/20">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Deep Dive */}
        <div className="space-y-8 text-charcoal">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
              PROJECT OVERVIEW
            </h3>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-3">
              KEY OBJECTIVES
            </h3>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/85">
                  <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Roles & Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gold/15">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
                MY ROLE & RESPONSIBILITIES
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {project.role.map((r, i) => (
                  <li key={i} className="flex items-center gap-2 text-charcoal/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-2">
                TOOLS & SOFTWARE
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-ivory border border-gold/25 text-charcoal font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Gallery Stills */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-6 border-t border-gold/15">
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
                VISUAL GALLERY & ASSETS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="rounded-xl overflow-hidden aspect-[4/3] bg-ivory border border-gold/20">
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-charcoal/60 italic font-serif">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Action */}
        <div className="pt-8 mt-8 border-t border-gold/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-charcoal text-ivory text-xs font-semibold uppercase tracking-wider"
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}


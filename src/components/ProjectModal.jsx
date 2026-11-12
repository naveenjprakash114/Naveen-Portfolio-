import { useEffect, useState } from "react";
import { X, CheckCircle2, ExternalLink, Link2, Copy, Check, Sparkles, FolderOpen, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [customLink, setCustomLink] = useState("");
  const [showAttachHelp, setShowAttachHelp] = useState(false);

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

  const currentLiveUrl = project.liveUrl || project.instagramUrl || "https://www.instagram.com/naveen_j_prakash/";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentLiveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#FAF7F2] border border-gold/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-10 my-auto text-charcoal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header & Breadcrumb */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-gold/25 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-gold">
                PROJECT {project.number || "01"}
              </span>
              <span className="text-gold/50">•</span>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal/70">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-charcoal tracking-tight">
              {project.name}
            </h2>

            <p className="text-xs sm:text-sm font-mono text-gold font-medium uppercase tracking-wider">
              {project.roleSubtitle || project.category}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-gold/30 flex items-center justify-center text-charcoal hover:bg-[#EFE7DB] transition-colors shrink-0 shadow-xs"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PROMINENT LIVE WORK & ATTACHMENT HUB */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold/30 mb-8 shadow-subtle space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gold/15">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold block">
                PROJECT LINKS &amp; LIVE WORKS
              </span>
              <span className="text-xs text-charcoal/70">
                View published campaign assets, social media works, and creative files
              </span>
            </div>

            <button
              onClick={() => setShowAttachHelp(!showAttachHelp)}
              className="text-[11px] font-mono text-gold hover:text-charcoal transition-colors self-start sm:self-auto underline decoration-dotted"
            >
              {showAttachHelp ? "Hide Attachment Info" : "+ How to attach new works/links"}
            </button>
          </div>

          {/* Quick Action Buttons for Works */}
          <div className="flex flex-wrap items-center gap-3">
            {currentLiveUrl ? (
              <a
                href={currentLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-champagne" />
                <span>View Live Works / Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
              </a>
            ) : null}

            {project.driveUrl ? (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] border border-gold/35 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <FolderOpen className="w-4 h-4 text-gold" />
                <span>Drive Assets Folder</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </a>
            ) : null}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#FAF7F2] border border-gold/35 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-gold" />
                <span>View Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold" />
              </a>
            ) : null}

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              title="Copy Work Link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gold" />
                  <span>Copy Work Link</span>
                </>
              )}
            </button>
          </div>

          {/* Expandable Help Box for Attaching Links */}
          {showAttachHelp && (
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-gold/30 text-xs text-charcoal/80 space-y-2 animate-fadeIn">
              <p className="font-semibold text-charcoal">
                💡 How to attach your links or works to this project:
              </p>
              <p className="leading-relaxed">
                You can attach any live URL (Instagram post, Reel, Google Drive folder, Behance case, or Website) by updating <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">src/data/projects.js</code> in the <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">liveUrl</code> or <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">driveUrl</code> field.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Paste work or drive link to test opening..."
                  value={customLink}
                  onChange={(e) => setCustomLink(e.target.value)}
                  className="flex-grow px-3 py-1.5 rounded-lg border border-gold/30 bg-white text-xs text-charcoal focus:outline-none focus:border-gold"
                />
                {customLink && (
                  <a
                    href={customLink.startsWith("http") ? customLink : `https://${customLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-lg bg-charcoal text-white text-xs font-semibold text-center hover:bg-charcoal/80 transition-colors"
                  >
                    Open Link ↗
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* DELIVERABLES & WORKS PRODUCED */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1px] bg-gold" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              DELIVERABLES &amp; WORKS CREATED
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.deliverables ? (
              project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-gold/25 space-y-2 hover:border-gold/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-gold font-semibold">
                      {item.type}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                  </div>
                  <h4 className="font-serif text-base font-normal text-charcoal">
                    {item.title}
                  </h4>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="col-span-3 p-4 rounded-xl bg-white border border-gold/25 text-xs text-charcoal/70">
                {project.description}
              </div>
            )}
          </div>
        </div>

        {/* Narrative & Strategy Overview */}
        <div className="space-y-6 mb-8">
          <div className="p-6 rounded-2xl bg-white border border-gold/25 space-y-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-1.5 font-bold">
                PROJECT OVERVIEW &amp; STORY
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>

            {/* Key Objectives */}
            <div className="pt-4 border-t border-gold/15">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gold mb-2.5 font-semibold">
                KEY OBJECTIVES ACHIEVED
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-charcoal/85">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Roles & Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-gold/25 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              MY ROLE &amp; RESPONSIBILITIES
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm pt-1">
              {project.role.map((r, i) => (
                <li key={i} className="flex items-center gap-2 text-charcoal/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gold/25 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              TOOLS &amp; SOFTWARE USED
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Gallery Stills (if provided) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-4 mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
              VISUAL ASSETS &amp; POSTERS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white border border-gold/20 flex items-center justify-center p-3 text-center">
                    <p className="font-serif italic text-xs text-charcoal/70">
                      {item.caption}
                    </p>
                  </div>
                  <p className="text-[11px] text-charcoal/60 italic font-serif">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Bar with Direct Link & Close */}
        <div className="pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal/60">
            Portfolio project for <strong className="text-charcoal">{project.name}</strong>
          </div>

          <div className="flex items-center gap-3">
            {currentLiveUrl && (
              <a
                href={currentLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>Open Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </a>
            )}

            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

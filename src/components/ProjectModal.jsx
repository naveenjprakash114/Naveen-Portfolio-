import { useEffect, useState } from "react";
import { X, CheckCircle2, ExternalLink, Link2, Copy, Check, Sparkles, FolderOpen, ArrowUpRight, Globe, Maximize2, ZoomIn, ZoomOut, Download } from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [customLink, setCustomLink] = useState("");
  const [showAttachHelp, setShowAttachHelp] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

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

  const currentLiveUrl = (project.liveLinks && project.liveLinks[0]?.url) || project.liveUrl || project.instagramUrl || (project.githubId ? `https://github.com/${project.githubId}` : null);
  const isGitHub = Boolean(currentLiveUrl && currentLiveUrl.includes("github.com"));
  const isInstagram = Boolean(currentLiveUrl && currentLiveUrl.includes("instagram.com"));
  const isLiveWeb = Boolean(currentLiveUrl && !isGitHub && !isInstagram);
  const hasLinks = Boolean(currentLiveUrl || project.driveUrl || project.githubUrl || (project.liveLinks && project.liveLinks.length > 0));

  const handleCopyLink = () => {
    if (!currentLiveUrl) return;
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
        className="bg-[#FAF7F2] border border-gold/40 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl my-auto text-charcoal flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-y-auto flex-1 p-6 sm:p-10 modal-scrollbar">
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

        {/* PROMINENT LIVE WORK & ATTACHMENT HUB (Shown when project has external links) */}
        {hasLinks ? (
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-gold/30 mb-8 shadow-subtle space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gold/15">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold block">
                  {isLiveWeb
                    ? "LIVE WEB APPLICATION & REPOSITORY"
                    : isGitHub
                    ? "PROJECT REPOSITORY & CODE HUB"
                    : "PROJECT LINKS & LIVE WORKS"}
                </span>
                <span className="text-xs text-charcoal/70">
                  {isLiveWeb
                    ? "Explore the live deployed web application on Vercel and review the source code on GitHub"
                    : isGitHub
                    ? "Explore live code, repositories, and architectural documentation on GitHub"
                    : "View published campaign assets, social media works, and creative files"}
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
              {project.liveLinks && project.liveLinks.length > 0 ? (
                project.liveLinks.map((link, idx) => {
                  const isLinkInsta = link.url.includes("instagram.com");
                  const isLinkGit = link.url.includes("github.com");
                  return (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors shadow-xs"
                    >
                      {isLinkInsta ? (
                        <InstagramIcon className="w-4 h-4 text-champagne" />
                      ) : isLinkGit ? (
                        <GitHubIcon className="w-4 h-4 text-champagne" />
                      ) : (
                        <Globe className="w-4 h-4 text-champagne" />
                      )}
                      <span>{link.label || "Live Link"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
                    </a>
                  );
                })
              ) : currentLiveUrl ? (
                <a
                  href={currentLiveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal/80 transition-colors shadow-xs"
                >
                  {isGitHub ? (
                    <GitHubIcon className="w-4 h-4 text-champagne" />
                  ) : isInstagram ? (
                    <InstagramIcon className="w-4 h-4 text-champagne" />
                  ) : (
                    <Globe className="w-4 h-4 text-champagne" />
                  )}
                  <span>
                    {project.liveUrlLabel || (isGitHub ? `GitHub: @${project.githubId || "naveenjprakash114"}` : isInstagram ? "View Live Works / Instagram" : "Open Live Website")}
                  </span>
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

              {project.githubUrl && project.githubUrl !== currentLiveUrl && (!project.liveLinks || !project.liveLinks.some(l => l.url === project.githubUrl)) ? (
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

              {currentLiveUrl && (
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
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Expandable Help Box for Attaching Links */}
            {showAttachHelp && (
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-gold/30 text-xs text-charcoal/80 space-y-2 animate-fadeIn">
                <p className="font-semibold text-charcoal">
                  💡 How to attach your links or works to this project:
                </p>
                <p className="leading-relaxed">
                  You can attach any live URL (GitHub repo, Instagram post, Google Drive folder, or Website) by updating <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">src/data/projects.js</code> in the <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">liveUrl</code> or <code className="bg-white px-2 py-0.5 rounded border border-gold/30 font-mono text-[11px]">githubUrl</code> field.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Paste work or repo link to test opening..."
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
        ) : (
          /* Case Study / Visual Archive Banner when no external link is attached */
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-gold/25 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-charcoal/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="font-medium text-charcoal">
                {project.fullDesignImage
                  ? "UI/UX Design Mockup & Architectural Layout System"
                  : "Visual Practice Archive & Independent Case Study"}
              </span>
            </div>
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider">
              {project.fullDesignImage ? "Full-Page Design Mockup" : "Internal Portfolio Works"}
            </span>
          </div>
        )}

        {/* Full-Page Visual UI/UX Design Showcase */}
        {project.fullDesignImage && (
          <div className="space-y-3 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1px] bg-gold" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                  FULL-PAGE UI/UX DESIGN SHOWCASE
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.fullDesignImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gold/30 text-xs font-mono text-gold hover:text-charcoal hover:border-gold transition-colors font-medium shadow-2xs"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={project.fullDesignImage}
                  download="Aurel-Estates-UIUX-Design.jpg"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-mono hover:bg-charcoal/80 transition-colors font-medium shadow-2xs"
                >
                  <Download className="w-3 h-3 text-gold" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-[#161514] overflow-hidden shadow-2xl">
              {/* Browser / Canvas Chrome */}
              <div className="px-4 py-3 bg-[#22201D] border-b border-gold/20 flex items-center justify-between text-xs text-[#FAF7F2]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161514] border border-gold/20 text-[11px] font-mono text-gold/90">
                    <span className="text-gold/60">https://</span>
                    <span>aurel-estates.design/spaces-that-define-living</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2C2925] border border-gold/25 text-[11px] font-mono text-champagne hover:text-white hover:border-gold transition-colors"
                    title={isZoomed ? "Fit to container" : "Zoom 100% scale"}
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-3 h-3 text-gold" />
                        <span>Fit View</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3 h-3 text-gold" />
                        <span>100% Zoom</span>
                      </>
                    )}
                  </button>
                  <a
                    href={project.fullDesignImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2C2925] border border-gold/25 text-[11px] font-mono text-champagne hover:text-white hover:border-gold transition-colors"
                  >
                    <Maximize2 className="w-3 h-3 text-gold" />
                    <span className="hidden sm:inline">Inspect</span>
                  </a>
                </div>
              </div>

              {/* Scrollable Viewport */}
              <div className="relative max-h-[620px] sm:max-h-[720px] overflow-y-auto modal-scrollbar bg-[#0E0D0C] flex justify-center p-3 sm:p-6 select-none">
                <img
                  src={project.fullDesignImage}
                  alt={project.designTitle || `${project.name} UI/UX Design`}
                  className={`h-auto rounded-lg shadow-2xl object-top transition-all duration-300 cursor-zoom-in ${
                    isZoomed ? "w-auto max-w-none scale-100" : "w-full max-w-xl"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  title="Click to toggle 100% zoom / fit view"
                />
              </div>

              {/* Status and Instruction Bar */}
              <div className="px-4 py-2 bg-[#22201D] border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#FAF7F2]/75 gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span>Scrollable Layout Preview — Click design to zoom, or Open Full Size in a new tab</span>
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider">
                  861 × 3072 px HD Preview
                </span>
              </div>
            </div>
          </div>
        )}

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

        {/* Bottom Bar with Direct Link & Close */}
        <div className="pt-6 border-t border-gold/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-charcoal/60">
            Portfolio project for <strong className="text-charcoal">{project.name}</strong>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.liveLinks && project.liveLinks.length > 0 ? (
              project.liveLinks.map((link, idx) => {
                const isLinkInsta = link.url.includes("instagram.com");
                const isLinkGit = link.url.includes("github.com");
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    {isLinkInsta ? (
                      <InstagramIcon className="w-3.5 h-3.5 text-gold" />
                    ) : isLinkGit ? (
                      <GitHubIcon className="w-3.5 h-3.5 text-gold" />
                    ) : (
                      <Globe className="w-3.5 h-3.5 text-gold" />
                    )}
                    <span>
                      {link.label
                        ? link.label.replace(" (Vercel)", "").replace("Visit ", "").replace(" on Instagram", "")
                        : "Live Link"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                  </a>
                );
              })
            ) : currentLiveUrl ? (
              <a
                href={currentLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>{isLiveWeb ? "Open Live Website" : isGitHub ? "Open GitHub" : isInstagram ? "Open Instagram" : "Open Work"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </a>
            ) : project.fullDesignImage ? (
              <a
                href={project.fullDesignImage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>View Full Design</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
              </a>
            ) : null}

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
    </div>
  );
}

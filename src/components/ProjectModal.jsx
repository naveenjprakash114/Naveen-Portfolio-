import { useEffect, useState } from "react";
import {
  X,
  CheckCircle2,
  ExternalLink,
  Link2,
  Copy,
  Check,
  Sparkles,
  FolderOpen,
  ArrowUpRight,
  Globe,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Download,
  Smartphone,
  Monitor,
  ChevronLeft,
  ChevronRight,
  Layers
} from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "./Icons";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [customLink, setCustomLink] = useState("");
  const [showAttachHelp, setShowAttachHelp] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);

  useEffect(() => {
    setSelectedScreenIndex(0);
    setIsZoomed(false);
  }, [project?.id]);

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

  const screens = project.designScreens && project.designScreens.length > 0
    ? project.designScreens
    : project.fullDesignImage
    ? [{
        id: "default-design",
        title: project.designTitle || `${project.name} — Full Layout Preview`,
        badge: "Full Design",
        device: "desktop",
        url: project.fullDesignImage,
        resolution: "HD Design Preview",
        description: project.description
      }]
    : [];

  const activeScreen = screens[selectedScreenIndex] || screens[0];

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
                {screens.length > 0
                  ? `UI/UX Design Mockup System (${screens.length} Screens Uploaded)`
                  : "Visual Practice Archive & Independent Case Study"}
              </span>
            </div>
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider">
              {screens.length > 0 ? `${screens.length} High-Res Pages` : "Internal Portfolio Works"}
            </span>
          </div>
        )}

        {/* Full-Page Visual UI/UX Design Showcase */}
        {screens.length > 0 && activeScreen && (
          <div className="space-y-4 mb-8">
            {/* Top Bar with Section Title and Quick Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-gold" />
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                    FULL-PAGE UI/UX DESIGN SHOWCASE
                  </h3>
                  {screens.length > 1 && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/70 bg-white border border-gold/30 px-2 py-0.5 rounded-full font-semibold">
                      {screens.length} Screens Available
                    </span>
                  )}
                </div>
                {activeScreen.subtitle && (
                  <p className="text-xs text-charcoal/75 font-mono">
                    {activeScreen.subtitle}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeScreen.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-gold/30 text-xs font-mono text-gold hover:text-charcoal hover:border-gold transition-colors font-medium shadow-2xs"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={activeScreen.url}
                  download={`${activeScreen.id || "uiux-design"}-preview.jpg`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal text-[#FAF7F2] text-xs font-mono hover:bg-charcoal/80 transition-colors font-medium shadow-2xs"
                >
                  <Download className="w-3 h-3 text-gold" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Screen Selector Tabs (if more than 1 screen) */}
            {screens.length > 1 && (
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 modal-scrollbar">
                {screens.map((scr, idx) => {
                  const isActive = idx === selectedScreenIndex;
                  return (
                    <button
                      key={scr.id || idx}
                      onClick={() => {
                        setSelectedScreenIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 shrink-0 border ${
                        isActive
                          ? "bg-charcoal text-champagne border-gold shadow-xs font-semibold"
                          : "bg-white text-charcoal/70 border-gold/25 hover:border-gold hover:text-charcoal"
                      }`}
                    >
                      {scr.device === "mobile" ? (
                        <Smartphone className="w-3 h-3 text-gold" />
                      ) : (
                        <Monitor className="w-3 h-3 text-gold" />
                      )}
                      <span>{scr.title}</span>
                      {scr.badge && (
                        <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isActive ? "bg-[#25221F] text-gold" : "bg-[#FAF7F2] text-charcoal/60"
                        }`}>
                          {scr.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Design Showcase Frame */}
            <div className="rounded-2xl border border-gold/30 bg-[#161514] overflow-hidden shadow-2xl">
              {/* Device / Canvas Top Bar */}
              <div className="px-4 py-3 bg-[#22201D] border-b border-gold/20 flex items-center justify-between text-xs text-[#FAF7F2]">
                <div className="flex items-center gap-3">
                  {activeScreen.device === "mobile" ? (
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 animate-pulse" />
                      <span className="font-mono text-[11px] text-gold/90 font-medium">
                        Mobile iOS App UI/UX
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                  )}

                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#161514] border border-gold/20 text-[11px] font-mono text-gold/90 truncate max-w-xs md:max-w-md">
                    <span className="text-gold/60">{activeScreen.device === "desktop" ? "https://" : ""}</span>
                    <span className="text-white/90">
                      {activeScreen.id?.includes("scoopzone")
                        ? "scoopzone.store/before-it-melts"
                        : `aurel-estates.design/${activeScreen.id || "preview"}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {screens.length > 1 && (
                    <div className="flex items-center gap-1 border-r border-gold/20 pr-2 mr-1">
                      <button
                        onClick={() => {
                          setSelectedScreenIndex((prev) => (prev - 1 + screens.length) % screens.length);
                          setIsZoomed(false);
                        }}
                        className="p-1 rounded hover:bg-[#2C2925] text-gold transition-colors"
                        title="Previous Screen"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] font-mono text-[#FAF7F2]/60 px-1">
                        {selectedScreenIndex + 1}/{screens.length}
                      </span>
                      <button
                        onClick={() => {
                          setSelectedScreenIndex((prev) => (prev + 1) % screens.length);
                          setIsZoomed(false);
                        }}
                        className="p-1 rounded hover:bg-[#2C2925] text-gold transition-colors"
                        title="Next Screen"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2C2925] border border-gold/25 text-[11px] font-mono text-champagne hover:text-white hover:border-gold transition-colors"
                    title={isZoomed ? "Fit to container" : "Zoom 100% natural scale"}
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
                    href={activeScreen.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2C2925] border border-gold/25 text-[11px] font-mono text-champagne hover:text-white hover:border-gold transition-colors"
                  >
                    <Maximize2 className="w-3 h-3 text-gold" />
                    <span className="hidden sm:inline">Inspect</span>
                  </a>
                </div>
              </div>

              {/* Scrollable Viewport with Device Frame */}
              <div className="relative max-h-[640px] sm:max-h-[740px] overflow-y-auto modal-scrollbar bg-[#0E0D0C] flex justify-center p-3 sm:p-6 select-none">
                {activeScreen.device === "mobile" ? (
                  /* Mobile Device Shell */
                  <div className={`transition-all duration-300 ${isZoomed ? "w-auto max-w-none" : "w-full max-w-[380px] sm:max-w-[420px]"}`}>
                    <div className="rounded-[32px] border-[5px] border-[#2C2925] bg-[#161514] shadow-2xl overflow-hidden p-1">
                      {/* Mobile Notch Bar */}
                      <div className="h-6 bg-[#161514] flex items-center justify-between px-5 text-[10px] text-white/50 font-mono select-none">
                        <span>9:41</span>
                        <div className="w-16 h-3 bg-black rounded-full mx-auto" />
                        <span className="text-emerald-400">5G</span>
                      </div>
                      <img
                        src={activeScreen.url}
                        alt={activeScreen.title || "UI/UX Mobile Design"}
                        className={`h-auto rounded-[24px] object-top transition-all duration-300 cursor-zoom-in ${
                          isZoomed ? "w-auto max-w-none scale-100" : "w-full"
                        }`}
                        onClick={() => setIsZoomed(!isZoomed)}
                        title="Click to toggle 100% zoom / fit view"
                      />
                    </div>
                  </div>
                ) : (
                  /* Desktop Viewport */
                  <img
                    src={activeScreen.url}
                    alt={activeScreen.title || "UI/UX Desktop Design"}
                    className={`h-auto rounded-lg shadow-2xl object-top transition-all duration-300 cursor-zoom-in ${
                      isZoomed ? "w-auto max-w-none scale-100" : "w-full max-w-xl"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                    title="Click to toggle 100% zoom / fit view"
                  />
                )}
              </div>

              {/* Status and Instruction Bar */}
              <div className="px-4 py-2 bg-[#22201D] border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#FAF7F2]/75 gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span>
                    {activeScreen.description || "Scrollable Layout Preview — Click mockup to zoom, or Open Full Size in a new tab"}
                  </span>
                </span>
                <span className="text-[10px] text-gold uppercase tracking-wider shrink-0">
                  {activeScreen.resolution || "HD Preview"}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation Strip */}
            {screens.length > 1 && (
              <div className="pt-2">
                <p className="text-[10px] font-mono uppercase tracking-widest text-charcoal/60 mb-2">
                  SWITCH SCREEN VIEW ({screens.length} PAGES):
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {screens.map((scr, idx) => {
                    const isActive = idx === selectedScreenIndex;
                    return (
                      <button
                        key={scr.id || idx}
                        onClick={() => {
                          setSelectedScreenIndex(idx);
                          setIsZoomed(false);
                        }}
                        className={`group p-2 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1.5 ${
                          isActive
                            ? "bg-white border-gold shadow-sm ring-1 ring-gold"
                            : "bg-white/60 border-gold/20 hover:border-gold/50 hover:bg-white"
                        }`}
                      >
                        <div className="h-20 w-full rounded-md overflow-hidden bg-[#161514] flex items-center justify-center relative">
                          <img
                            src={scr.url}
                            alt=""
                            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                          <span className="absolute top-1 right-1 text-[8px] font-mono px-1 py-0.2 rounded bg-black/70 text-champagne">
                            {scr.device === "mobile" ? "MOB" : "DESK"}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold text-charcoal truncate block line-clamp-1">
                          {scr.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
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
            ) : activeScreen ? (
              <a
                href={activeScreen.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] border border-gold/30 text-charcoal text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>View Full Design ({activeScreen.title})</span>
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

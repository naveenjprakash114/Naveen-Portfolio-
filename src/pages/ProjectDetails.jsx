import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Tag, Layers, CheckCircle, Video, Image as ImageIcon } from "lucide-react";
import { projectsData } from "../data/portfolioData";
import EditorialImage from "../components/EditorialImage";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find current project
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[currentIndex];

  // If project not found, provide graceful fallback
  if (!project) {
    return (
      <div className="pt-36 pb-28 text-center max-w-xl mx-auto px-6">
        <h1 className="text-3xl font-serif text-charcoal mb-4">Project Not Found</h1>
        <p className="text-muted text-sm mb-8">
          The requested project could not be found or has been moved.
        </p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Previous and Next project computation
  const prevProject =
    currentIndex > 0
      ? projectsData[currentIndex - 1]
      : projectsData[projectsData.length - 1];

  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0];

  return (
    <div className="pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Back Navigation */}
        <div className="mb-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-muted hover:text-charcoal transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1 text-[#B7A58D]" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header: Title & Subtitle */}
        <div className="space-y-4 max-w-4xl mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B7A58D]">
              {project.category}
            </span>
            <span className="text-muted">/</span>
            <span className="text-xs font-mono uppercase tracking-widest text-muted">
              {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-charcoal tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-lg sm:text-xl font-serif italic text-muted max-w-3xl">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Hero Cover Thumbnail Frame */}
        <div className="mb-16">
          <EditorialImage
            src={project.thumbnail}
            alt={project.title}
            aspectRatio="aspect-[16/9]"
            slotPath={`/public${project.thumbnail}`}
            priority={true}
            className="shadow-luxury rounded-3xl"
          />
        </div>

        {/* Project Information Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] border border-[#B7A58D]/30 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block mb-1">
              Client / Organization
            </span>
            <p className="text-xs sm:text-sm font-medium text-charcoal">{project.client}</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block mb-1">
              Classification
            </span>
            <p className="text-xs sm:text-sm font-medium text-charcoal">{project.status}</p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block mb-1">
              Key Roles
            </span>
            <p className="text-xs sm:text-sm font-medium text-charcoal">
              {project.roles[0]} & More
            </p>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block mb-1">
              Live Reference
            </span>
            {project.projectUrl ? (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-charcoal hover:underline"
              >
                <span>Visit Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-muted italic">Commercial / Confidential</span>
            )}
          </div>
        </div>

        {/* Two-Column Deep Dive: Overview vs Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Overview & Creative Direction */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B7A58D]" />
                <span className="text-xs uppercase tracking-widest font-mono text-[#B7A58D]">
                  Project Overview
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Context & Concept
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Objectives */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#B7A58D]" />
                <span className="text-xs uppercase tracking-widest font-mono text-[#B7A58D]">
                  Strategic Goals
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal">
                Project Objectives
              </h2>
              <ul className="space-y-3">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#B7A58D] mt-0.5 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Creative Direction */}
            <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#B7A58D]/30 space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#B7A58D] font-mono block">
                Creative Direction & Visual Philosophy
              </span>
              <p className="text-sm sm:text-base font-serif italic text-charcoal leading-relaxed">
                "{project.creativeDirection}"
              </p>
            </div>
          </div>

          {/* Right Column: Roles, Tools, and Scope */}
          <div className="lg:col-span-5 space-y-8">
            {/* My Responsibilities */}
            <div className="p-8 rounded-3xl bg-white border border-[#B7A58D]/30 space-y-6">
              <span className="text-xs uppercase tracking-widest font-mono text-[#B7A58D] block">
                My Responsibilities
              </span>
              <ul className="space-y-3">
                {project.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-charcoal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B7A58D]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="p-8 rounded-3xl bg-[#FCFAF7] border border-[#B7A58D]/30 space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#B7A58D] block">
                Tools & Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {project.toolsUsed.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full bg-white text-charcoal border border-[#B7A58D]/30 font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <ImageIcon className="w-4 h-4 text-[#B7A58D]" />
              <h3 className="text-xl sm:text-2xl font-serif text-charcoal">
                Project Visual Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.gallery.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <EditorialImage
                    src={item.url}
                    alt={item.caption}
                    aspectRatio="aspect-[4/3]"
                    slotPath={`/public${item.url}`}
                    className="shadow-subtle"
                  />
                  <p className="text-xs text-muted italic font-serif leading-snug">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Video Slots / Gallery (When available) */}
        {project.videoSlots && project.videoSlots.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-2 mb-8">
              <Video className="w-4 h-4 text-[#B7A58D]" />
              <h3 className="text-xl sm:text-2xl font-serif text-charcoal">
                Motion & Video Gallery Slots
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.videoSlots.map((video, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#FAF7F2] border border-[#B7A58D]/30 p-8 flex flex-col justify-between space-y-6 text-center"
                >
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#E9DDCB] text-charcoal flex items-center justify-center mx-auto border border-[#B7A58D]/40">
                      <Video className="w-5 h-5 text-charcoal" />
                    </div>
                    <h4 className="font-serif text-lg text-charcoal">{video.title}</h4>
                    <p className="text-xs text-muted">{video.placeholderNote}</p>
                  </div>
                  <div className="pt-4 border-t border-[#B7A58D]/20 text-[11px] font-mono text-muted flex justify-between">
                    <span>Duration: {video.duration}</span>
                    <span>Ratio: {video.aspectRatio}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Previous / Next Project Navigation */}
        <div className="pt-12 border-t border-[#B7A58D]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/project/${prevProject.id}`}
            className="flex items-center gap-3 group text-left max-w-sm"
          >
            <div className="w-10 h-10 rounded-full border border-[#B7A58D]/30 bg-white flex items-center justify-center text-charcoal group-hover:bg-[#E9DDCB] transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B7A58D] block">
                Previous Case Study
              </span>
              <span className="text-sm font-serif text-charcoal group-hover:text-taupe-dark transition-colors line-clamp-1">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            to={`/project/${nextProject.id}`}
            className="flex items-center gap-3 group text-right max-w-sm self-end sm:self-auto"
          >
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B7A58D] block">
                Next Case Study
              </span>
              <span className="text-sm font-serif text-charcoal group-hover:text-taupe-dark transition-colors line-clamp-1">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-[#B7A58D]/30 bg-white flex items-center justify-center text-charcoal group-hover:bg-[#E9DDCB] transition-colors shrink-0">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


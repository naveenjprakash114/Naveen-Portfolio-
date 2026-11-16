import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { GitHubIcon } from "./Icons";

export default function ProjectCard({ project, index, onSelect }) {
  return (
    <motion.article
      onClick={() => onSelect(project)}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between bg-white border border-gold/30 hover:border-gold rounded-2xl p-5 shadow-xs hover:shadow-card-hover transition-all duration-300 cursor-pointer h-full min-h-[165px] sm:min-h-[175px] overflow-hidden"
    >
      {/* Ambient Watermark Monogram in Background */}
      <div className="absolute -right-2 -bottom-4 select-none pointer-events-none opacity-[0.07] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-500 font-serif italic text-8xl text-gold font-bold">
        {project.monogram || project.name.slice(0, 2)}
      </div>

      {/* Subtle Brand Thumbnail Overlay */}
      {project.thumbnail && (
        <img
          src={project.thumbnail}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.05] group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none"
        />
      )}

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 relative z-10 pb-2.5 border-b border-gold/15">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-gold">
            0{index + 1}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span className="text-[10px] font-mono tracking-widest uppercase text-charcoal/70 truncate max-w-[190px]">
            {project.category.split("&")[0].trim()}
          </span>
        </div>

        <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-charcoal group-hover:text-[#FAF7F2] group-hover:border-charcoal transition-all duration-300 shrink-0 shadow-2xs">
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Core Project Identity (Center) */}
      <div className="space-y-1 relative z-10 my-auto py-2.5">
        <h3 className="text-lg sm:text-xl font-serif font-semibold text-charcoal group-hover:text-gold transition-colors tracking-tight line-clamp-1">
          {project.name}
        </h3>
        <p className="text-[11px] font-mono text-gold font-medium uppercase tracking-wider line-clamp-1">
          {project.roleSubtitle || project.category}
        </p>
      </div>

      {/* Bottom Interactive Touch Hint Bar */}
      <div className="pt-2.5 border-t border-gold/15 flex items-center justify-between relative z-10 text-xs">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-charcoal/60 group-hover:text-charcoal transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="uppercase tracking-wider">Touch to Open</span>
        </div>

        {/* Dynamic target based on project type */}
        {project.liveUrl && !project.liveUrl.includes("github.com") && !project.liveUrl.includes("instagram.com") ? (
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-charcoal/80 group-hover:text-gold transition-colors">
            <Globe className="w-3 h-3 text-gold" />
            <span>{project.liveCardLabel || "Live Website"}</span>
            <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        ) : project.githubId ? (
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-charcoal/80 group-hover:text-gold transition-colors">
            <GitHubIcon className="w-3 h-3 text-gold" />
            <span>{project.githubId}</span>
            <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        ) : project.instagramHandle ? (
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-charcoal/70 group-hover:text-gold transition-colors">
            <span>{project.instagramHandle}</span>
            <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-medium uppercase tracking-wider text-charcoal/50">
            <span>Case Study</span>
          </span>
        )}
      </div>
    </motion.article>
  );
}

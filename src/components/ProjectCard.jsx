import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      onClick={() => onSelect(project)}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between bg-white border border-gold/30 hover:border-gold rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-card-hover transition-colors duration-300 cursor-pointer h-full"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-gold/15">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-gold">
              0{index + 1}
            </span>
            <span className="w-1 h-1 rounded-full bg-gold/50" />
            <span className="text-[10px] font-mono tracking-widest uppercase text-charcoal/70 truncate max-w-[170px]">
              {project.category.split("&")[0].trim()}
            </span>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-charcoal group-hover:text-[#FAF7F2] group-hover:border-charcoal transition-all duration-300 shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Compact Visual Preview Banner (Small Animated Box) */}
        <div className="relative h-36 sm:h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F7F3EB] to-[#EFE7DB] border border-gold/25 mb-4 flex items-center justify-center group-hover:border-gold/50 transition-colors">
          
          {/* Background Monogram / Pattern */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500">
            <span className="font-serif italic text-6xl text-gold font-bold">
              {project.monogram || project.name.slice(0, 2)}
            </span>
          </div>

          {/* If image loads properly */}
          {!imageError && project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null}

          {/* Visual Badge overlay when image is not present or hovering */}
          <div className="relative z-10 text-center px-4 py-3 rounded-xl bg-white/85 backdrop-blur-xs border border-gold/30 shadow-2xs group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2] border border-gold/35 text-gold mb-1.5 mx-auto">
              <Sparkles className="w-4 h-4 stroke-[1.75]" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-charcoal tracking-tight">
              {project.name}
            </h4>
            <span className="text-[10px] font-mono tracking-wider text-charcoal/60 uppercase block">
              Touch to Open Works
            </span>
          </div>

          {/* Interactive touch hint pill */}
          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-charcoal/80 text-[#FAF7F2] text-[9px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span>Open Case</span>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-serif font-normal text-charcoal group-hover:text-gold transition-colors tracking-tight">
            {project.name}
          </h3>

          <p className="text-[11px] font-mono text-gold font-semibold uppercase tracking-wider">
            {project.roleSubtitle || project.category}
          </p>

          <p className="text-xs text-charcoal/70 leading-relaxed line-clamp-2 pt-1 font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer with Quick Open Pill */}
      <div className="pt-4 mt-4 border-t border-gold/15 flex items-center justify-between text-xs">
        <span className="text-[11px] font-mono text-charcoal/60">
          {project.tools ? project.tools.slice(0, 2).join(", ") : "Case Study"}
        </span>

        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal group-hover:text-gold transition-colors uppercase tracking-wider">
          <span>View Works</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </motion.article>
  );
}

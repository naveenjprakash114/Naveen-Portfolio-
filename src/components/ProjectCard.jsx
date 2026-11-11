import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function ProjectCard({ project, index, onSelect }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelect(project)}
      className={`group relative flex flex-col bg-[#FDFBF7] border border-[#A18B70]/25 rounded-2xl overflow-hidden hover:border-bronze hover:shadow-card-hover transition-all duration-300 cursor-pointer ${
        project.isFeatured ? "md:col-span-2" : ""
      }`}
    >
      {/* Large Rectangular Project Image */}
      <div className="relative overflow-hidden bg-[#E8DDCB] aspect-[16/10] sm:aspect-[16/9] w-full">
        {!imageError ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.04] ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        {/* Fallback Placeholder Frame */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FDFBF7] via-[#E8DDCB]/50 to-[#F7F3EB]">
            <p className="font-serif italic text-charcoal text-sm">{project.name}</p>
            <span className="text-[10px] font-mono text-charcoal/60 mt-1 uppercase tracking-wider">
              {project.thumbnail}
            </span>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 bg-charcoal/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase text-[#F7F3EB] border border-[#A18B70]/30 pointer-events-none">
          {project.category.split("/")[0].trim()}
        </div>

        {/* Hover Cue */}
        <div className="absolute inset-0 bg-charcoal/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-white/95 text-charcoal text-xs font-semibold tracking-wider uppercase shadow-md flex items-center gap-1.5">
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
          </span>
        </div>
      </div>

      {/* Project Details Info */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono text-bronze">
            <span>0{index + 1}</span>
            <span className="truncate max-w-[200px]">{project.category}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal group-hover:text-bronze transition-colors tracking-tight">
            {project.name}
          </h3>

          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Bottom Action Line */}
        <div className="pt-6 mt-6 border-t border-[#A18B70]/15 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-charcoal/60 font-medium">
            Role: {project.role[0]}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-bronze transition-colors">
            <span>VIEW PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-bronze group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </article>
  );
}

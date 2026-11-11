import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import EditorialImage from "./EditorialImage";

export default function ProjectCard({ project, index = 0 }) {
  const { id, title, category, description, thumbnail } = project;

  return (
    <article className="group relative flex flex-col bg-[#FCFAF7] border border-[#B7A58D]/30 rounded-2xl overflow-hidden hover:border-[#B7A58D] hover:shadow-card-hover transition-all duration-500">
      {/* Large Thumbnail Section */}
      <Link
        to={`/project/${id}`}
        className="block relative overflow-hidden bg-[#F0EADF] aspect-[16/10]"
        aria-label={`View details of ${title}`}
      >
        <EditorialImage
          src={thumbnail}
          alt={title}
          aspectRatio="aspect-[16/10]"
          slotPath={`/public${thumbnail}`}
          className="rounded-none border-none"
        />
        
        {/* Subtle Overlay pill on top-right */}
        <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-widest-luxury uppercase font-medium text-[#F8F5EF] border border-[#B7A58D]/30">
          0{index + 1}
        </div>
      </Link>

      {/* Project Meta & Information */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#B7A58D]">
              {category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal group-hover:text-taupe-dark transition-colors tracking-tight">
            <Link to={`/project/${id}`}>{title}</Link>
          </h3>

          <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* View Project Action */}
        <div className="pt-6 mt-6 border-t border-[#B7A58D]/20 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-muted font-medium">
            Explore Case Study
          </span>
          <Link
            to={`/project/${id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-taupe-dark transition-colors"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#B7A58D]" />
          </Link>
        </div>
      </div>
    </article>
  );
}


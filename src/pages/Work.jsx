import { useState, useMemo } from "react";
import { projectCategories, projectsData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { Filter } from "lucide-react";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.tags.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Selected Works & Case Studies"
          title="Curated Portfolio & Creative Projects"
          description="Explore commercial visual campaigns, fashion marketing initiatives, and self-developed creative explorations across digital design and frontend development."
          className="mb-12"
        />

        {/* Category Filters Bar */}
        <div className="pb-8 mb-12 border-b border-[#B7A58D]/25">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-[#B7A58D] lg:hidden">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter By Discipline</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {projectCategories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isSelected
                      ? "bg-charcoal text-[#F8F5EF] shadow-sm"
                      : "bg-[#FCFAF7] text-muted border border-[#B7A58D]/30 hover:border-[#B7A58D] hover:text-charcoal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-[#FAF7F2] border border-[#B7A58D]/20 space-y-3">
            <p className="font-serif text-xl text-charcoal">No projects found in this category.</p>
            <p className="text-xs text-muted">Please select "ALL" or another discipline filter.</p>
            <button
              onClick={() => setActiveCategory("ALL")}
              className="mt-4 px-5 py-2 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider"
            >
              Reset Filter
            </button>
          </div>
        )}

        {/* Note on Future Uploads & Image Slots */}
        <div className="mt-20 p-8 rounded-3xl bg-[#FAF7F2] border border-[#B7A58D]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-charcoal">
              Organized for continuous production expansion
            </h4>
            <p className="text-xs sm:text-sm text-muted">
              Project directories and media slots are prepared under <code className="font-mono text-charcoal bg-white px-2 py-0.5 rounded border border-[#B7A58D]/30">/public/images/projects/</code> for quick asset replacement.
            </p>
          </div>
          <span className="text-xs font-mono tracking-widest text-[#B7A58D] uppercase shrink-0">
            {filteredProjects.length} Projects Displayed
          </span>
        </div>
      </div>
    </div>
  );
}


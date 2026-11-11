import { useState, useMemo } from "react";
import { projectCategories, projectsData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { Filter, Search, X } from "lucide-react";

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Category filter check
      const matchesCategory =
        activeCategory === "ALL" || project.tags.includes(activeCategory);

      // Search keyword check
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.roles.some((r) => r.toLowerCase().includes(query)) ||
        project.toolsUsed.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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

        {/* Filter and Search Bar */}
        <div className="pb-8 mb-12 border-b border-[#B7A58D]/25 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-[#B7A58D] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword (e.g. Saree, React, Video)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-full bg-white border border-[#B7A58D]/30 text-xs text-charcoal focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors placeholder:text-muted/70"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-charcoal"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Project Count Indicator */}
            <span className="text-xs font-mono text-[#B7A58D] tracking-wider">
              {filteredProjects.length} of {projectsData.length} Projects
            </span>
          </div>

          {/* Category Filter Pills */}
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
            <p className="font-serif text-xl text-charcoal">No projects match your filter criteria.</p>
            <p className="text-xs text-muted">Try clearing the search query or selecting "ALL" categories.</p>
            <button
              onClick={() => {
                setActiveCategory("ALL");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider"
            >
              Reset Filters
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
            Ready for New Case Studies
          </span>
        </div>
      </div>
    </div>
  );
}

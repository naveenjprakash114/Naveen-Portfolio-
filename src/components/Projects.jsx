import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectFilterCategories, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Filter } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((project) =>
      project.filterTags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-ivory border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-gold">
              04 / SELECTED WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            Some things I've created.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            A collection of creative projects, visual stories and digital experiences.
          </p>
        </motion.div>

        {/* Filter Categories Bar */}
        <div className="pb-8 mb-12 border-b border-gold/20">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-gold lg:hidden">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER WORK</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {projectFilterCategories.map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isSelected
                      ? "bg-charcoal text-ivory shadow-xs"
                      : "bg-white text-charcoal/70 border border-gold/25 hover:border-gold hover:text-charcoal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={project.isFeatured ? "md:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onSelect={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expandable Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={Boolean(selectedProject)}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

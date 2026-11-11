import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowDown, MapPin, Sparkles, Code, Camera, Palette, Compass } from "lucide-react";
import { personalInfo, projectsData, expertiseCategories, experienceTimeline } from "../data/portfolioData";
import EditorialImage from "../components/EditorialImage";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const currentRole = experienceTimeline.find((exp) => exp.isCurrent);

  return (
    <div className="pt-24 sm:pt-28 md:pt-32">
      {/* 1. HERO SECTION: Split-Layout */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[75vh]">
          {/* Left Column: Typography, Storytelling & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Small Introduction */}
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B7A58D]" />
              <span className="text-xs uppercase tracking-widest-luxury font-medium text-muted">
                {personalInfo.hero.smallIntro}
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-normal text-charcoal tracking-tight leading-[1.08]">
              Creativity meets technology.{" "}
              <span className="italic block font-serif text-[#24221F]/90 mt-1">
                Ideas become experiences.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-muted max-w-2xl font-normal leading-relaxed">
              {personalInfo.hero.supportingText}
            </p>

            {/* CTAs & Location Indicator */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#332F2B] active:scale-[0.99] transition-all duration-300 shadow-md group"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#E9DDCB] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-charcoal border border-[#B7A58D]/40 text-xs font-semibold uppercase tracking-wider hover:bg-[#E9DDCB]/30 hover:border-charcoal transition-all duration-300"
              >
                <span>Let's Connect</span>
              </Link>
            </div>

            {/* Location Indicator & Current Company */}
            <div className="pt-6 border-t border-[#B7A58D]/20 flex flex-wrap items-center gap-6 text-xs text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B7A58D]" />
                <span>{personalInfo.hero.locationBadge}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Digital Marketing & AI Creative at {personalInfo.currentCompany}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Placeholder Section */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Subtle Geometry Behind Frame */}
              <div className="absolute -inset-4 bg-[#E9DDCB]/30 rounded-3xl -rotate-1 pointer-events-none -z-10" />
              <div className="absolute -inset-2 bg-white/60 rounded-3xl rotate-1 pointer-events-none -z-10 border border-[#B7A58D]/20" />

              {/* Portrait Frame */}
              <EditorialImage
                src="/images/profile.jpg"
                alt="Naveen Prakash J — Professional Portrait"
                aspectRatio="aspect-[4/5]"
                slotPath="/public/images/profile.jpg"
                overlayText="Naveen Prakash J"
                showSlotHint={true}
                priority={true}
                className="shadow-luxury"
              />

              {/* Floating Caption / Quick Info Box */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#B7A58D]/30 shadow-subtle max-w-[240px]">
                <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block mb-1">
                  DISCIPLINE
                </span>
                <p className="text-xs font-medium text-charcoal leading-snug">
                  Visual Communication, AI Direction & Frontend Craft
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SLIM EXPERTISE TICKER */}
      <section className="border-y border-[#B7A58D]/25 bg-[#FAF7F2] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...personalInfo.ticker, ...personalInfo.ticker, ...personalInfo.ticker, ...personalInfo.ticker].map(
            (item, index) => (
              <div key={index} className="inline-flex items-center mx-4">
                <span className="text-xs sm:text-sm font-serif tracking-widest uppercase text-charcoal/80">
                  {item}
                </span>
                <span className="mx-6 text-[#B7A58D] font-serif text-sm">/</span>
              </div>
            )
          )}
        </div>
      </section>

      {/* 3. EDITORIAL STATEMENT / PHILOSOPHY */}
      <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest-luxury text-[#B7A58D] font-medium">
            Core Philosophy
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-charcoal leading-relaxed">
            "{personalInfo.about.philosophy}"
          </blockquote>
          <div className="w-12 h-[1px] bg-[#B7A58D] mx-auto pt-2" />
          <p className="text-xs uppercase tracking-widest text-muted font-mono">
            Naveen Prakash J — Multidisciplinary Creative Professional
          </p>
        </div>
      </section>

      {/* 4. SELECTED FEATURED WORK */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#B7A58D]/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHeading
              eyebrow="Selected Portfolio"
              title="Work that merges narrative and craft."
              description="A curated look into commercial brand marketing, fashion visuals, and self-developed creative explorations."
            />
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-taupe-dark transition-colors self-start md:self-end group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7A58D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MULTIDISCIPLINARY EXPERTISE SNAPSHOT */}
      <section className="py-20 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="Disciplines & Craft"
              title="A unified approach across modern media."
              description="From camera composition and brand storytelling to AI creative direction and React frontend interfaces, every skill serves one purpose: crafting cohesive digital experiences."
            />
            <div className="pt-2">
              <Link
                to="/expertise"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold hover:bg-[#332F2B] transition-colors"
              >
                <span>View Full Skill Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E9DDCB]" />
              </Link>
            </div>
          </div>

          {/* Quick Matrix Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertiseCategories.slice(0, 4).map((cat) => (
              <div
                key={cat.number}
                className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#B7A58D]/30 hover:border-[#B7A58D] transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono text-[#B7A58D]">
                  <span>{cat.number}</span>
                  <span className="text-[10px] tracking-widest uppercase">Focus</span>
                </div>
                <h4 className="font-serif text-lg text-charcoal">{cat.category}</h4>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {cat.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CURRENT ROLE SPOTLIGHT */}
      <section className="py-16 bg-[#24221F] text-[#F8F5EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#332F2B] border border-[#B7A58D]/30 text-[11px] font-mono uppercase tracking-widest text-[#E9DDCB]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Current Professional Role</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif">
                {currentRole?.role} at {currentRole?.company}
              </h3>
              <p className="text-[#A39E96] text-sm leading-relaxed max-w-2xl">
                {currentRole?.summary}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#E9DDCB] text-[#24221F] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
              >
                <span>View Full Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


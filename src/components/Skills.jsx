import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { skillCategories, skillsList } from "../data/skills";
import {
  ReactIcon,
  TailwindIcon,
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  PremiereIcon,
  AfterEffectsIcon,
  InDesignIcon,
  CanvaIcon,
  GraphicDesignIcon,
  UiUxIcon,
  DigitalMarketingIcon,
  BrandIdentityIcon,
  SocialMediaIcon,
  ContentStrategyIcon,
  ResponsiveWebIcon,
  SeoAnalyticsIcon,
} from "./SkillIcons";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const iconComponents = {
    ReactIcon,
    TailwindIcon,
    Html5Icon,
    Css3Icon,
    JavaScriptIcon,
    FigmaIcon,
    PhotoshopIcon,
    IllustratorIcon,
    PremiereIcon,
    AfterEffectsIcon,
    InDesignIcon,
    CanvaIcon,
    GraphicDesignIcon,
    UiUxIcon,
    DigitalMarketingIcon,
    BrandIdentityIcon,
    SocialMediaIcon,
    ContentStrategyIcon,
    ResponsiveWebIcon,
    SeoAnalyticsIcon,
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillsList;
    return skillsList.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-12 sm:py-16 bg-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header & Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-gold/20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="space-y-2 max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-gold" />
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest-luxury font-mono text-gold">
                <Wrench className="w-3.5 h-3.5" />
                <span>02 / MY SKILLS</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
              Technologies I Work With.
            </h2>

            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Specialized across Frontend Development, UI/UX Design, Digital Marketing, Adobe Creative Suite, Graphic Design &amp; Canva Pro.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {skillCategories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-charcoal text-[#FAF7F2] shadow-xs"
                      : "bg-white text-charcoal/75 border border-gold/25 hover:border-gold hover:text-charcoal"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid of Skill Cards (Exact Layout as Requested) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconComponents[skill.icon] || Sparkles;
              return (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: (index % 6) * 0.03 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative bg-white border border-gold/25 hover:border-indigo-400 hover:ring-2 hover:ring-indigo-400/40 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-between text-center transition-all duration-300 shadow-2xs hover:shadow-card-hover cursor-pointer min-h-[140px] sm:min-h-[155px]"
                >
                  {/* Icon Container with Subtle Pastel Tint */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${skill.bgTint} flex items-center justify-center p-2.5 mb-2.5 transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                  >
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9" />
                  </div>

                  {/* Skill Label */}
                  <div className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-semibold text-charcoal group-hover:text-gold transition-colors tracking-tight line-clamp-1">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-charcoal/50 uppercase tracking-wider block">
                      {skill.category}
                    </span>
                  </div>

                  {/* Level Pill */}
                  <div className="mt-2 text-[9px] font-mono px-2 py-0.5 rounded-full bg-ivory text-charcoal/70 border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

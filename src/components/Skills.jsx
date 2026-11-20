import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Sparkles } from "lucide-react";
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
  AiTechnologistIcon,
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
    AiTechnologistIcon,
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skillsList;
    return skillsList.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-12 sm:py-16 bg-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header & Filter Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-7 sm:mb-8 pb-5 border-b border-gold/20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="space-y-1.5 max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[1px] bg-gold" />
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest-luxury font-mono text-gold">
                <Wrench className="w-3.5 h-3.5" />
                <span>02 / MY SKILLS</span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-charcoal tracking-tight">
              Technologies I Work With.
            </h2>

            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Specialized across Frontend Development, AI Creative Technology, Adobe Creative Suite, Graphic Design &amp; Canva Pro.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start lg:self-end">
            {skillCategories.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 cursor-pointer ${
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

        {/* Compact Grid of Skill Cards (Exact Layout as Reference) */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-2.5 sm:gap-3"
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
                  transition={{ duration: 0.2, delay: (index % 11) * 0.02 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative bg-white border border-gold/25 hover:border-indigo-400 hover:ring-2 hover:ring-indigo-400/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-2xs hover:shadow-card-hover cursor-pointer h-[94px] sm:h-[102px]"
                  title={`${skill.name} • ${skill.category}`}
                >
                  {/* Icon Container with Subtle Pastel Tint */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${skill.bgTint} flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                  >
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Skill Label */}
                  <h3 className="text-[11px] sm:text-xs font-semibold text-charcoal group-hover:text-gold transition-colors tracking-tight line-clamp-1 mt-1.5 w-full text-center">
                    {skill.name}
                  </h3>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

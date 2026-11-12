import { motion } from "framer-motion";
import { TrendingUp, Palette, Layout, Cpu, Code2, Sparkles } from "lucide-react";
import { expertiseCategories } from "../data/skills";

export default function Expertise() {
  const iconMap = {
    TrendingUp: TrendingUp,
    Palette: Palette,
    Layout: Layout,
    Cpu: Cpu,
    Code2: Code2,
    Sparkles: Sparkles,
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-cream border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-gold">
              02 / EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            What I bring to the table.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Specialized across Digital Marketing, Graphic Design, UI/UX Design, AI Creative Technology, Frontend Development, and Prompt Engineering.
          </p>
        </motion.div>

        {/* Six Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseCategories.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-white border border-gold/25 rounded-2xl p-7 sm:p-8 hover:border-gold hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-gold/15">
                    <span className="text-xs font-mono tracking-widest text-gold">
                      CATEGORY {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-ivory border border-gold/25 flex items-center justify-center text-charcoal group-hover:bg-ivory-warm transition-colors">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-normal text-charcoal tracking-tight mb-2">
                    {item.category}
                  </h3>

                  <p className="text-xs text-charcoal/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gold/15">
                  <ul className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-ivory text-charcoal border border-gold/25 font-medium tracking-tight group-hover:border-gold/40 transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

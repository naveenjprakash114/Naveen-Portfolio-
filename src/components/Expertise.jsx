import { motion } from "framer-motion";
import { Camera, Palette, TrendingUp, Cpu, Layout, Code2 } from "lucide-react";
import { expertiseCategories } from "../data/skills";

export default function Expertise() {
  const iconMap = {
    Camera: Camera,
    Palette: Palette,
    TrendingUp: TrendingUp,
    Cpu: Cpu,
    Layout: Layout,
    Code2: Code2,
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 bg-[#F7F3EB] border-t border-[#A18B70]/20">
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
            <span className="w-6 h-[1px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-bronze">
              02 / EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            What I bring to the table.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            A multidisciplinary foundation spanning camera composition, digital branding, generative AI workflows, and modern web development.
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
                className="bg-[#FDFBF7] border border-[#A18B70]/25 rounded-2xl p-7 sm:p-8 hover:border-bronze hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#A18B70]/15">
                    <span className="text-xs font-mono tracking-widest text-bronze">
                      CATEGORY {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#F7F3EB] border border-[#A18B70]/25 flex items-center justify-center text-charcoal group-hover:bg-[#E8DDCB] transition-colors">
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

                <div className="pt-4 border-t border-[#A18B70]/15">
                  <ul className="flex flex-wrap gap-2">
                    {item.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="text-xs px-3 py-1.5 rounded-full bg-[#F7F3EB] text-charcoal border border-[#A18B70]/25 font-medium tracking-tight group-hover:border-[#A18B70]/40 transition-colors"
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

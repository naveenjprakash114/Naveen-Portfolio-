import { motion } from "framer-motion";
import { services } from "../data/services";
import { Camera, Share2, TrendingUp, Palette, Sparkles, Code2, CheckCircle2 } from "lucide-react";

export default function Services() {
  const iconMap = {
    Camera: Camera,
    Share2: Share2,
    TrendingUp: TrendingUp,
    Palette: Palette,
    Sparkles: Sparkles,
    Code2: Code2,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FDFBF7] border-t border-[#A18B70]/20">
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
              05 / SERVICES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            What I can help you with.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            From commercial visual production and marketing campaigns to emerging AI-assisted creative workflows.
          </p>
        </motion.div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="bg-[#F7F3EB] border border-[#A18B70]/25 rounded-2xl p-7 sm:p-8 hover:border-bronze hover:bg-white hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#A18B70]/15">
                    <span className="text-xs font-mono tracking-widest text-bronze">
                      SERVICE {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#A18B70]/25 flex items-center justify-center text-charcoal group-hover:bg-[#E8DDCB] transition-colors">
                      <IconComponent className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h3 className="text-lg sm:text-xl font-serif font-normal text-charcoal tracking-tight group-hover:text-bronze transition-colors">
                      {service.title}
                    </h3>

                    {service.isDevelopingCapability && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#E8DDCB] text-charcoal border border-[#A18B70]/40 font-medium">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-charcoal/70 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#A18B70]/15 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-bronze block">
                    Deliverables:
                  </span>
                  <ul className="grid grid-cols-2 gap-1.5 text-xs text-charcoal/80">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-bronze shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Professional Note on Technical Capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl bg-[#E8DDCB]/40 border border-[#A18B70]/30 max-w-3xl"
        >
          <p className="text-xs text-charcoal/75 leading-relaxed font-normal">
            <span className="font-semibold text-charcoal uppercase tracking-wider font-mono mr-1.5">
              Note on Technical Scope:
            </span>
            For UI/UX design, website development, and AI-powered frontend development, these are presented as self-developed personal project capabilities and active engineering explorations, while photography, videography, graphic design, and digital marketing represent established practical experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

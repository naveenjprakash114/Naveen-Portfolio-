import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-ivory border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="space-y-2 mb-8 sm:mb-10 max-w-2xl"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-gold">
              03 / EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            My professional journey.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Practical creative background spanning camera direction, corporate operations, and agency digital marketing.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Thin Vertical Spine Connector */}
                {!isLast && (
                  <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[1px] bg-gold/25 group-hover:bg-gold transition-colors" />
                )}

                {/* Node Dot */}
                <div
                  className={`absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-charcoal text-ivory border-charcoal ring-4 ring-gold/30"
                      : "bg-ivory text-gold border-gold/40 group-hover:border-gold"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? "bg-champagne animate-pulse" : "bg-gold"
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div className="bg-white border border-gold/25 rounded-2xl p-6 sm:p-8 hover:border-gold hover:shadow-subtle transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-gold/15">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-charcoal text-ivory border border-gold/40 font-semibold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-charcoal/80 mt-1 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-gold" />
                        <span>{exp.company}</span>
                      </p>
                    </div>

                    <div className="text-xs font-mono tracking-wider text-charcoal/70 bg-ivory px-3 py-1.5 rounded-lg border border-gold/20 self-start sm:self-auto">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/80 mb-5 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-gold font-mono font-semibold block mb-3">
                      KEY RESPONSIBILITIES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-charcoal/90 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { experiences } from "../data/experience";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#FDFBF7] border-t border-[#A18B70]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16 max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-bronze">
              03 / EXPERIENCE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            My professional journey.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Practical creative background spanning camera direction, corporate operations, and agency digital marketing.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 relative">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <div key={exp.id} className="relative pl-8 sm:pl-12 group">
                {/* Thin Vertical Spine Connector */}
                {!isLast && (
                  <div className="absolute left-[11px] sm:left-[15px] top-6 bottom-0 w-[1px] bg-[#A18B70]/25 group-hover:bg-bronze transition-colors" />
                )}

                {/* Node Dot */}
                <div
                  className={`absolute left-0 sm:left-1 top-1.5 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-charcoal text-[#E8DDCB] border-charcoal ring-4 ring-[#E8DDCB]/60"
                      : "bg-[#FDFBF7] text-bronze border-[#A18B70]/40 group-hover:border-bronze"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      exp.isCurrent ? "bg-[#E8DDCB] animate-pulse" : "bg-bronze"
                    }`}
                  />
                </div>

                {/* Timeline Card */}
                <div className="bg-[#F7F3EB] border border-[#A18B70]/25 rounded-2xl p-6 sm:p-8 hover:border-bronze hover:bg-white hover:shadow-subtle transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#A18B70]/15">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-charcoal text-[#E8DDCB] border border-[#A18B70]/40 font-semibold">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-bronze-dark mt-1 flex items-center gap-2">
                        <Briefcase className="w-3.5 h-3.5 text-bronze" />
                        <span>{exp.company}</span>
                      </p>
                    </div>

                    <div className="text-xs font-mono tracking-wider text-charcoal/70 bg-white/70 px-3 py-1.5 rounded-lg border border-[#A18B70]/20 self-start sm:self-auto">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal/80 mb-5 leading-relaxed">
                    {exp.summary}
                  </p>

                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-bronze font-mono font-semibold block mb-3">
                      KEY RESPONSIBILITIES
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-charcoal/90 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-1.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

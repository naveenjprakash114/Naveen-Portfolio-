import { CheckCircle2, Briefcase } from "lucide-react";

export default function TimelineItem({ experience, isLast = false }) {
  const { company, role, duration, isCurrent, responsibilities, summary } = experience;

  return (
    <div className="relative pl-8 sm:pl-12 group">
      {/* Vertical Spine Line */}
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[15px] top-7 bottom-0 w-[1px] bg-[#B7A58D]/30 group-hover:bg-[#B7A58D]/60 transition-colors" />
      )}

      {/* Timeline Node Icon */}
      <div
        className={`absolute left-0 sm:left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
          isCurrent
            ? "bg-charcoal text-[#E9DDCB] border-charcoal shadow-sm ring-4 ring-[#E9DDCB]/50"
            : "bg-white text-muted border-[#B7A58D]/40 group-hover:border-[#B7A58D]"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isCurrent ? "bg-[#E9DDCB] animate-pulse" : "bg-[#B7A58D]"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="bg-[#FCFAF7] border border-[#B7A58D]/30 rounded-2xl p-6 sm:p-8 hover:border-[#B7A58D] hover:bg-white hover:shadow-subtle transition-all duration-500 mb-8 sm:mb-12">
        {/* Header with Role, Company, Duration, and Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#B7A58D]/20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal tracking-tight">
                {role}
              </h3>
              {isCurrent && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-charcoal text-[#E9DDCB] border border-[#B7A58D]/40 font-semibold shadow-xs">
                  CURRENT POSITION
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-taupe-dark mt-1 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#B7A58D]" />
              <span>{company}</span>
            </p>
          </div>

          <div className="text-xs font-mono tracking-wider text-muted sm:text-right bg-cream/70 px-3 py-1.5 rounded-lg border border-[#B7A58D]/20 self-start sm:self-auto">
            {duration}
          </div>
        </div>

        {/* Short Summary */}
        {summary && (
          <p className="text-xs sm:text-sm text-charcoal/80 mb-5 leading-relaxed font-normal">
            {summary}
          </p>
        )}

        {/* Responsibilities list */}
        <div>
          <span className="text-[11px] uppercase tracking-widest-luxury text-muted font-medium block mb-3">
            Core Scope & Responsibilities
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {responsibilities.map((resp, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs text-charcoal/90 leading-normal"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7A58D] mt-1.5 shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


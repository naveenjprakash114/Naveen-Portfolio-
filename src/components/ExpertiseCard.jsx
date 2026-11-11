export default function ExpertiseCard({ item }) {
  const { number, category, summary, skills } = item;

  return (
    <div className="relative group bg-[#FCFAF7] border border-[#B7A58D]/30 rounded-2xl p-7 sm:p-8 hover:border-[#B7A58D] hover:bg-white hover:shadow-card-hover transition-all duration-500 flex flex-col justify-between">
      <div>
        {/* Number & Category Header */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#B7A58D]/20">
          <span className="text-xs font-mono tracking-widest text-[#B7A58D]">
            {number}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#B7A58D]/40 group-hover:bg-charcoal transition-colors duration-300" />
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-normal text-charcoal tracking-tight mb-3">
          {category}
        </h3>

        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6 font-normal">
          {summary}
        </p>
      </div>

      {/* Skills Pill List (No fake percentages) */}
      <div className="pt-4 border-t border-[#B7A58D]/15">
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-xs px-3 py-1.5 rounded-full bg-[#F8F5EF] text-charcoal border border-[#B7A58D]/25 font-medium tracking-tight group-hover:border-[#B7A58D]/50 transition-colors"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Subtle bottom edge line accent */}
      <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#B7A58D]/30 to-transparent group-hover:via-[#B7A58D] transition-all duration-500" />
    </div>
  );
}


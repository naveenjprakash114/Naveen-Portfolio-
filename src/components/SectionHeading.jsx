export default function SectionHeading({
  eyebrow = "",
  title = "",
  description = "",
  align = "left",
  className = "",
  dark = false,
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`space-y-3 ${
        isCentered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`flex items-center gap-2.5 ${
            isCentered ? "justify-center" : "justify-start"
          }`}
        >
          <span className="w-6 h-[1px] bg-[#B7A58D]" />
          <span
            className={`text-xs uppercase tracking-widest-luxury font-medium ${
              dark ? "text-[#B7A58D]" : "text-[#89847D]"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-tight ${
            dark ? "text-[#F8F5EF]" : "text-charcoal"
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-sm sm:text-base leading-relaxed ${
            dark ? "text-[#A39E96]" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}


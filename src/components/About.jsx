export default function About() {
  const infoCards = [
    {
      number: "01",
      title: "Creative Thinking",
      description: "Transforming ideas into compelling visual experiences through composition, narrative pacing, and modern aesthetic direction."
    },
    {
      number: "02",
      title: "Technology Driven",
      description: "Exploring AI-powered tools and modern frontend technologies to bridge visual ideas into functional digital interfaces."
    },
    {
      number: "03",
      title: "Continuous Learning",
      description: "Developing new skills, testing emerging workflows, and building meaningful digital projects with high personal standards."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FDFBF7] border-t border-[#A18B70]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-[1px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-bronze">
              01 / ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            A little about me.
          </h2>
        </div>

        {/* Narrative & Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-charcoal/85 text-base sm:text-lg leading-relaxed font-normal">
            <p className="font-serif text-xl sm:text-2xl text-charcoal leading-snug">
              I'm Naveen Prakash J, a Visual Communication graduate with a passion for creativity, digital experiences and emerging technologies.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">
              My professional journey began with photography and videography, where I developed an understanding of visual storytelling, composition and creative direction.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">
              Over time, I expanded into graphic design, digital marketing, social media management and AI-powered creative workflows.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-charcoal/80">
              Currently, I work at BitByte Technologies, exploring the intersection of creativity, marketing and frontend development.
            </p>

            <p className="text-base sm:text-lg font-serif italic text-charcoal pt-2 border-l-2 border-bronze pl-4">
              "I believe great digital experiences are created when creativity, technology and purpose come together."
            </p>

            {/* Signature-style text */}
            <div className="pt-6">
              <span className="font-serif italic text-2xl text-charcoal tracking-tight block">
                Naveen Prakash J
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-bronze">
                Visual Communication & Creative Tech
              </span>
            </div>
          </div>

          {/* Three Minimal Information Cards Column */}
          <div className="lg:col-span-5 space-y-5">
            {infoCards.map((card) => (
              <div
                key={card.number}
                className="p-6 sm:p-7 rounded-2xl bg-[#F7F3EB] border border-[#A18B70]/25 hover:border-bronze hover:bg-white transition-all duration-300 space-y-2 group shadow-subtle"
              >
                <div className="flex items-center justify-between text-xs font-mono text-bronze">
                  <span>{card.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze/40 group-hover:bg-charcoal transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-bronze transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

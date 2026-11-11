import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#F7F3EB] border-t border-[#A18B70]/20 py-16 text-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-[#A18B70]/20">
          {/* Left: NAVEEN PRAKASH J */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-charcoal">
              NAVEEN PRAKASH J
            </h3>
            <p className="text-[11px] font-mono tracking-widest uppercase text-bronze mt-0.5">
              Multidisciplinary Creative Professional
            </p>
          </div>

          {/* Center: Creative Technologist | Digital Creative */}
          <div className="text-xs uppercase font-mono tracking-wider text-charcoal/70">
            Creative Technologist | Digital Creative
          </div>

          {/* Right: BACK TO TOP ↑ */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-charcoal hover:text-bronze transition-colors self-start md:self-auto group"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-bronze" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal/60">
          <p className="italic font-serif">
            "Designed with creativity. Built with curiosity."
          </p>
          <p>© 2026 Naveen Prakash J. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

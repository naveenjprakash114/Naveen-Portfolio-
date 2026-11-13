import { ArrowUp } from "lucide-react";
import { LinkedInIcon, InstagramIcon, GitHubIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const linkedinUrl = "https://www.linkedin.com/in/naveen-prakash-j-22b563249";
  const instagramUrl = "https://www.instagram.com/naveen_j_prakash/";
  const githubUrl = "https://github.com/naveenjprakash114";

  return (
    <footer className="bg-cream border-t border-gold/20 py-10 sm:py-12 text-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-gold/20">
          {/* Left: NAVEEN PRAKASH J */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-charcoal">
              NAVEEN PRAKASH J
            </h3>
            <p className="text-[11px] font-mono tracking-widest uppercase text-gold mt-0.5">
              AI Creative Technologist & Multidisciplinary Professional
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/75 hover:text-gold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-gold" />
                <span>LinkedIn</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/75 hover:text-gold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-gold" />
                <span>GitHub</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal/75 hover:text-gold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-gold" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right: BACK TO TOP ↑ */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-charcoal hover:text-gold transition-colors self-start md:self-auto group"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-gold" />
          </button>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal/60">
          <p>© 2026 Naveen Prakash J. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

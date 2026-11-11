import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, MapPin, Sparkles, FileText } from "lucide-react";
import ResumeModal from "./ResumeModal";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Typography, Positioning, CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-7 sm:space-y-8"
          >
            {/* Introductory Eyebrow with Medium Typewriter Name */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 min-h-[40px]"
            >
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[1px] bg-bronze shrink-0" />
                <span className="text-xs uppercase tracking-widest-luxury font-mono text-bronze font-semibold">
                  HELLO, I'M
                </span>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal font-medium tracking-tight">
                <TypewriterText
                  words={["NAVEEN PRAKASH", "NAVEEN PRAKASH J"]}
                  typingSpeed={110}
                  deletingSpeed={50}
                  pauseTime={3500}
                  className="text-charcoal"
                />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl md:text-7xl font-sans font-normal text-charcoal tracking-tight leading-[1.08]"
            >
              <span className="font-serif italic font-normal text-charcoal block mb-1">
                Creativity
              </span>{" "}
              Meets Technology.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-charcoal/80 max-w-xl leading-relaxed font-normal"
            >
              I create meaningful digital experiences through design, photography, marketing and artificial intelligence.
            </motion.p>

            {/* Additional Text */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-mono tracking-wider uppercase text-bronze"
            >
              Visual Storyteller. Digital Creator. Creative Technologist.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-soft active:scale-[0.99] transition-all duration-300 shadow-sm group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 text-beige transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-transparent text-charcoal border border-[#A18B70]/40 text-xs font-semibold uppercase tracking-wider hover:bg-beige/40 hover:border-charcoal transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-bronze" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </motion.div>

            {/* Below the buttons: Location & Availability */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#A18B70]/20 flex flex-wrap items-center gap-6 text-xs text-charcoal/70"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-bronze" />
                <span>Based in Salem, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Available for Creative Opportunities</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Profile Image Composition & Placeholder */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Soft Beige Backing Frame */}
              <div className="absolute -inset-3 bg-[#E8DDCB]/50 rounded-3xl -rotate-1 pointer-events-none -z-10" />
              <div className="absolute -inset-1.5 bg-[#FDFBF7] rounded-3xl rotate-1 pointer-events-none -z-10 border border-[#A18B70]/20" />

              {/* Editorial Rectangular Portrait Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-[#E8DDCB] border border-[#A18B70]/30 aspect-[4/5] shadow-luxury group">
                {!imageError ? (
                  <img
                    src="/assets/profile/portrait.jpg"
                    alt="Naveen Prakash J — Professional Portrait"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03] ${
                      imageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ) : null}

                {/* Elegant Placeholder Fallback */}
                {(!imageLoaded || imageError) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FDFBF7] via-[#E8DDCB]/60 to-[#F7F3EB]">
                    <div className="w-14 h-14 rounded-full bg-white/80 border border-[#A18B70]/30 flex items-center justify-center text-bronze mb-3 shadow-xs">
                      <Sparkles className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <p className="font-serif italic text-charcoal text-base mb-1">Naveen Prakash J</p>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-charcoal/70 bg-white/80 px-2.5 py-1 rounded-md border border-[#A18B70]/20">
                      /public/assets/profile/portrait.jpg
                    </span>
                    <p className="text-[10px] text-charcoal/50 uppercase tracking-widest mt-3">
                      Ready for High-Res Portrait Upload
                    </p>
                  </div>
                )}

                {/* Floating Label: DESIGN × TECHNOLOGY × CREATIVITY */}
                <div className="absolute bottom-4 left-4 right-4 bg-charcoal/90 backdrop-blur-md px-4 py-2.5 rounded-full text-[10px] font-mono tracking-widest-luxury uppercase text-[#F7F3EB] border border-[#A18B70]/30 text-center pointer-events-none shadow-sm">
                  DESIGN × TECHNOLOGY × CREATIVITY
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="pt-12 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs uppercase font-mono tracking-widest text-charcoal/60 hover:text-charcoal transition-colors group"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-bronze animate-bounce" />
        </a>
      </div>

      {/* Resume View / Download Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}

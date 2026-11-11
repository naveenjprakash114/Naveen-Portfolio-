import { motion } from "framer-motion";
import { GraduationCap, BookOpen, CheckCircle2 } from "lucide-react";

export default function Education() {
  const selfLearnedSkills = [
    "AI Creative Direction",
    "Prompt Engineering",
    "AI-Assisted Frontend Development",
    "React.js",
    "UI/UX Design",
    "Web Design"
  ];

  return (
    <section id="education" className="py-24 sm:py-32 bg-cream border-t border-gold/20">
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
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-gold">
              06 / EDUCATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight">
            Academic foundation & learning.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed">
            Formal visual communication theory paired with disciplined self-directed technical development.
          </p>
        </motion.div>

        {/* Two-Column Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: University Degree */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-ivory border border-gold/25 rounded-2xl p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cream border border-gold/30 flex items-center justify-center text-charcoal">
                <GraduationCap className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold block mb-1">
                  GRADUATION DEGREE
                </span>
                <h3 className="text-2xl font-serif text-charcoal font-normal">
                  B.Sc Visual Communication
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Comprehensive degree curriculum covering photography, cinematography, audio-visual storytelling, graphic design, and media communication principles.
              </p>
            </div>

            <div className="pt-6 border-t border-gold/15 space-y-2 text-xs">
              <div className="flex justify-between text-charcoal/70">
                <span className="font-medium text-charcoal">College:</span>
                <span>AVS College of Arts & Science</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span className="font-medium text-charcoal">University:</span>
                <span>Periyar University</span>
              </div>
              <div className="flex justify-between text-charcoal/70">
                <span className="font-medium text-charcoal">Graduation Year:</span>
                <span className="font-mono text-charcoal font-semibold">2022</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Self-Learned / Independent Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-ivory border border-gold/25 rounded-2xl p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cream border border-gold/30 flex items-center justify-center text-charcoal">
                <BookOpen className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold block mb-1">
                  INDEPENDENT STUDY
                </span>
                <h3 className="text-2xl font-serif text-charcoal font-normal">
                  Self-Learned Technical Expertise
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
                Self-directed study and practical project building across AI creative direction, prompt engineering, and modern React frontend engineering.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gold/15">
              <div className="flex flex-wrap gap-2">
                {selfLearnedSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cream text-charcoal border border-gold/25"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>

              <div className="pt-2 text-[11px] font-mono text-charcoal/60">
                <span>Certifications: No formal certifications currently listed.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

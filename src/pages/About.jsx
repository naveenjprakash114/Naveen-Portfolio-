import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, Sparkles, BookOpen, FileText, CheckCircle2 } from "lucide-react";
import { personalInfo, experienceTimeline } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import EditorialImage from "../components/EditorialImage";
import TimelineItem from "../components/TimelineItem";
import ResumeModal from "../components/ResumeModal";

export default function About() {
  const { about, education } = personalInfo;
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="pt-28 sm:pt-32 pb-24">
      {/* 1. EDITORIAL HEADER & TWO-COLUMN BIOGRAPHY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
        <SectionHeading
          eyebrow="Editorial Biography"
          title={about.headline}
          description="A visual communicator exploring the intersection of creative storytelling, digital media, and intelligent frontend technology."
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-28 space-y-6">
              <EditorialImage
                src="/images/about.jpg"
                alt="Naveen Prakash J — Visual Communication & Creative Professional"
                aspectRatio="aspect-[4/5]"
                slotPath="/public/images/about.jpg"
                overlayText="Naveen Prakash J"
                showSlotHint={true}
                priority={true}
                className="shadow-luxury"
              />

              {/* Editorial Caption Box & CV Trigger */}
              <div className="p-6 rounded-2xl bg-[#FCFAF7] border border-[#B7A58D]/30 space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B7A58D] font-mono block">
                    PROFESSIONAL IDENTITY
                  </span>
                  <p className="text-sm font-serif italic text-charcoal mt-1">
                    "Blending the eye of a photographer with digital marketing strategy and modern web development."
                  </p>
                </div>
                <div className="pt-3 text-xs text-muted flex items-center justify-between border-t border-[#B7A58D]/20">
                  <span>Graduated 2022</span>
                  <span>Salem, Tamil Nadu</span>
                </div>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-charcoal text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#332F2B] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#E9DDCB]" />
                  <span>View Curriculum Vitae (CV)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-charcoal/90 text-base sm:text-lg leading-relaxed font-normal">
              <p className="font-serif text-xl sm:text-2xl text-charcoal leading-snug">
                {about.lead}
              </p>

              {about.bioParagraphs.map((paragraph, index) => (
                <p key={index} className="text-muted text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Developing Professional Statement Note */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F0EADF]/60 border border-[#B7A58D]/40 space-y-2">
              <span className="text-[11px] uppercase tracking-widest text-[#24221F] font-mono font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#B7A58D]" />
                Professional Growth & Craft
              </span>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                I present myself as a developing professional with solid practical experience in photography, videography, and digital marketing, combined with self-developed capabilities in UI/UX design, React frontend development, and AI workflows. My focus is continuous hands-on learning, clean design execution, and building authentic value.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-white border border-[#B7A58D]/25 space-y-2">
                <h4 className="font-serif text-base text-charcoal">Visual Storytelling</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Rooted in 3 years of commercial photography, cinematic video production, and visual composition.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#B7A58D]/25 space-y-2">
                <h4 className="font-serif text-base text-charcoal">Digital Marketing</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Active agency experience at BitByte Technologies executing social campaigns, creatives, and brand communication.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#B7A58D]/25 space-y-2">
                <h4 className="font-serif text-base text-charcoal">AI Creative Direction</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Generative prompt engineering, concept art acceleration, and AI-assisted digital design workflows.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#B7A58D]/25 space-y-2">
                <h4 className="font-serif text-base text-charcoal">Frontend Engineering</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Self-taught React.js, Tailwind CSS, and component architectures with the long-term goal of AI Full-Stack development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY QUOTE BANNER */}
      <section className="bg-[#24221F] text-[#F8F5EF] py-20 sm:py-28 my-12">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest-luxury text-[#B7A58D] font-medium">
            Personal Philosophy
          </span>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif italic leading-relaxed text-[#F8F5EF]">
            "{about.philosophy}"
          </blockquote>
          <div className="w-12 h-[1px] bg-[#B7A58D] mx-auto pt-2" />
          <p className="text-xs font-mono tracking-widest text-[#89847D] uppercase">
            Naveen Prakash J
          </p>
        </div>
      </section>

      {/* 3. EDUCATION & CONTINUOUS SELF-LEARNING */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <SectionHeading
          eyebrow="Academic Foundation & Self-Direction"
          title="Education & Continuous Learning"
          description="A formal university degree in Visual Communication paired with self-directed mastery of modern design and web development technologies."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Degree Card */}
          <div className="md:col-span-6 p-8 rounded-3xl bg-[#FCFAF7] border border-[#B7A58D]/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E9DDCB] text-charcoal flex items-center justify-center border border-[#B7A58D]/40">
                <GraduationCap className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B7A58D] block mb-1">
                  University Degree
                </span>
                <h3 className="text-2xl font-serif text-charcoal font-normal">
                  {education.degree}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Graduated with a comprehensive visual foundation covering photography, cinematography, graphic design principles, communication theory, and media production.
              </p>
            </div>

            <div className="pt-6 border-t border-[#B7A58D]/20 space-y-2 text-xs">
              <div className="flex justify-between text-muted">
                <span className="font-medium text-charcoal">Institution:</span>
                <span>{education.college}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span className="font-medium text-charcoal">Affiliation:</span>
                <span>{education.university}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span className="font-medium text-charcoal">Graduation Year:</span>
                <span className="font-mono text-charcoal font-semibold">{education.graduationYear}</span>
              </div>
            </div>
          </div>

          {/* Self-Taught Skills Card */}
          <div className="md:col-span-6 p-8 rounded-3xl bg-white border border-[#B7A58D]/30 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0EADF] text-charcoal flex items-center justify-center border border-[#B7A58D]/40">
                <BookOpen className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#B7A58D] block mb-1">
                  Self-Directed Learning
                </span>
                <h3 className="text-2xl font-serif text-charcoal font-normal">
                  Emerging Tech & Frontend
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Independently developed technical competencies acquired through rigorous self-study, project building, documentation deep-dives, and AI-assisted development tools.
              </p>
            </div>

            <div className="pt-6 border-t border-[#B7A58D]/20">
              <span className="text-[11px] uppercase tracking-widest text-muted font-medium block mb-3">
                Key Self-Learned Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {education.additionalLearning.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F8F5EF] text-charcoal border border-[#B7A58D]/30"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7A58D]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL JOURNEY TIMELINE PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Career Progression"
            title="Professional Experience"
            description="Practical background across visual studios, corporate operations, and digital marketing agency environments."
          />
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-taupe-dark transition-colors self-start sm:self-end group"
          >
            <span>Detailed Experience Page</span>
            <ArrowUpRight className="w-4 h-4 text-[#B7A58D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceTimeline.map((item, index) => (
            <TimelineItem
              key={item.id}
              experience={item}
              isLast={index === experienceTimeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Curriculum Vitae Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

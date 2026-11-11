import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Layers, Cpu, Code2, PenTool, BarChart3, Video } from "lucide-react";
import { expertiseCategories, servicesData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import ExpertiseCard from "../components/ExpertiseCard";

export default function Expertise() {
  return (
    <div className="pt-28 sm:pt-32 pb-24">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <SectionHeading
          eyebrow="Capabilities & Disciplines"
          title="Multidisciplinary Craft & Creative Stack"
          description="Structured across creative production, commercial digital marketing, generative AI direction, and modern frontend development. No inflated metrics—just authentic, hands-on craft."
          className="mb-14 sm:mb-20"
        />

        {/* 2. THE 6 EXPERTISE CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {expertiseCategories.map((item) => (
            <ExpertiseCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* 3. APPROACH & METHODOLOGY BANNER */}
      <section className="bg-[#FAF7F2] border-y border-[#B7A58D]/25 py-20 my-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest-luxury text-[#B7A58D] font-medium">
              Creative Philosophy
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal mt-2">
              How creativity and technology intersect.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#B7A58D]/30 space-y-4">
              <span className="text-xs font-mono text-[#B7A58D] block">01 / DISCOVERY</span>
              <h4 className="font-serif text-xl text-charcoal">Visual Story First</h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Every digital campaign or interface begins with an authentic narrative—understanding the product, the cultural context, and the emotional resonance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#B7A58D]/30 space-y-4">
              <span className="text-xs font-mono text-[#B7A58D] block">02 / AUGMENTATION</span>
              <h4 className="font-serif text-xl text-charcoal">AI-Powered Ideation</h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Utilizing generative AI and precision prompt engineering to rapidly test visual directions, color moodboards, and creative copy concepts.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#B7A58D]/30 space-y-4">
              <span className="text-xs font-mono text-[#B7A58D] block">03 / EXECUTION</span>
              <h4 className="font-serif text-xl text-charcoal">Clean Code & Polish</h4>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Translating approved designs into responsive, component-driven React applications and high-fidelity video/photo assets with Apple-like restraint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif text-charcoal">
            Interested in collaborating on a creative project?
          </h3>
          <p className="text-sm text-muted">
            Explore commercial marketing work, photography portfolios, or discuss a customized digital initiative.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold hover:bg-[#332F2B] transition-colors"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4 text-[#E9DDCB]" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-cream border border-[#B7A58D]/40 text-charcoal text-xs uppercase tracking-wider font-semibold hover:bg-[#E9DDCB]/50 transition-colors"
            >
              <span>Initiate Conversation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


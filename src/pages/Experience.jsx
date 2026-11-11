import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Sparkles, Briefcase, Camera, Globe, Palette, Code, Layers, MessageSquare } from "lucide-react";
import { experienceTimeline, servicesData } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import TimelineItem from "../components/TimelineItem";
import EditorialImage from "../components/EditorialImage";

export default function Experience() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-28 sm:pt-32 pb-24">
      {/* 1. PROFESSIONAL TIMELINE HEADER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <SectionHeading
          eyebrow="Career Timeline & Roles"
          title="Professional Experience"
          description="A track record spanning professional studio photography, corporate operations, and digital marketing agency production. Presented authentically with practical scope."
          className="mb-14 sm:mb-20"
        />

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceTimeline.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              isLast={index === experienceTimeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* 2. SERVICES PRESENTATION WITH CLEAR DISTINCTION */}
      <section className="bg-[#FAF7F2] border-y border-[#B7A58D]/25 py-20 sm:py-28 my-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Commercial & Technical Capabilities"
            title="Services & Creative Offerings"
            description="Clear distinction between established professional agency services and self-developed technical exploration."
            className="mb-16"
          />

          {/* Group A: Established Professional Services */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#B7A58D]" />
              <h3 className="text-xs uppercase tracking-widest-luxury font-mono text-charcoal font-semibold">
                01 / Established Professional Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.established.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl border border-[#B7A58D]/30 p-8 flex flex-col justify-between hover:border-[#B7A58D] hover:shadow-card-hover transition-all duration-500 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B7A58D]">
                        COMMERCIAL
                      </span>
                      <span className="w-2 h-2 rounded-full bg-charcoal/20 group-hover:bg-charcoal transition-colors" />
                    </div>

                    <h4 className="text-xl sm:text-2xl font-serif text-charcoal group-hover:text-taupe-dark transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#B7A58D]/20 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-[#FAF7F2] text-charcoal font-medium"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-taupe-dark transition-colors pt-1"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B7A58D]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group B: Exploration & Personal Project Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[1px] bg-[#B7A58D]" />
              <div className="flex items-center gap-3">
                <h3 className="text-xs uppercase tracking-widest-luxury font-mono text-charcoal font-semibold">
                  02 / Exploration & Personal Project Services
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-[#E9DDCB] text-charcoal border border-[#B7A58D]/40 font-medium">
                  Self-Developed Technical Scope
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData.experimental.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#FCFAF7] rounded-3xl border border-[#B7A58D]/40 p-8 flex flex-col justify-between hover:bg-white hover:border-[#B7A58D] hover:shadow-card-hover transition-all duration-500 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B7A58D]">
                        EXPLORATION
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#E9DDCB]/50 text-charcoal">
                        {service.badge}
                      </span>
                    </div>

                    <h4 className="text-xl sm:text-2xl font-serif text-charcoal group-hover:text-taupe-dark transition-colors">
                      {service.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#B7A58D]/20 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-white text-charcoal font-medium border border-[#B7A58D]/25"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-taupe-dark transition-colors pt-1"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#B7A58D]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 text-center">
        <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-[#24221F] text-[#F8F5EF] space-y-6">
          <span className="text-xs uppercase tracking-widest-luxury text-[#B7A58D] font-medium">
            Collaboration Opportunity
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif text-[#F8F5EF] font-normal">
            Have an idea? Let's create something meaningful.
          </h3>
          <p className="text-xs sm:text-sm text-[#A39E96] max-w-xl mx-auto leading-relaxed">
            Whether you require creative direction for high-impact social campaigns, photography coverage, or want to discuss interactive frontend projects, I'd love to connect.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E9DDCB] text-[#24221F] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Detail Modal Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-8 border border-[#B7A58D] shadow-luxury space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#B7A58D]/30">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B7A58D]">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-serif text-charcoal">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#B7A58D]/40 flex items-center justify-center text-charcoal hover:bg-[#E9DDCB]"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-charcoal/80 leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#B7A58D] block mb-2">
                Typical Deliverables:
              </span>
              <ul className="grid grid-cols-2 gap-2 text-xs">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-charcoal">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B7A58D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#B7A58D]/30 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full bg-cream border border-[#B7A58D]/40 text-xs uppercase tracking-wider text-charcoal"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider font-semibold"
              >
                Inquire on this Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


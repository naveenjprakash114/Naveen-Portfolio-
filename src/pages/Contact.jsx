import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { InstagramIcon } from "../components/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Header */}
        <SectionHeading
          eyebrow="Initiate Collaboration"
          title="Let's create something extraordinary."
          description="Have a project, collaboration or creative idea in mind? I'd love to hear from you."
          className="mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Information Cards */}
            <div className="bg-[#FAF7F2] border border-[#B7A58D]/30 rounded-3xl p-8 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#B7A58D] block">
                  CONTACT DETAILS
                </span>
                <h3 className="text-2xl font-serif text-charcoal">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  Feel free to send a detailed inquiry through the form or reach out directly via email, phone, or WhatsApp.
                </p>
              </div>

              {/* Direct Channels List */}
              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-white border border-[#B7A58D]/25 flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#B7A58D]/30 flex items-center justify-center text-[#B7A58D] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-xs sm:text-sm font-medium text-charcoal truncate block hover:text-taupe-dark transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-muted hover:text-charcoal hover:bg-cream transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone & WhatsApp Item */}
                <div className="p-4 rounded-2xl bg-white border border-[#B7A58D]/25 flex items-center justify-between gap-4 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#B7A58D]/30 flex items-center justify-center text-[#B7A58D] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-medium text-charcoal hover:text-taupe-dark transition-colors"
                      >
                        {personalInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#075E54] text-xs font-medium hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-white border border-[#B7A58D]/25 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#B7A58D]/30 flex items-center justify-center text-[#B7A58D] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                      Base Location
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-charcoal">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Instagram Direct */}
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-[#B7A58D]/25 flex items-center justify-between group hover:border-[#B7A58D] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#B7A58D]/30 flex items-center justify-center text-[#B7A58D] shrink-0 group-hover:bg-[#E9DDCB] transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-muted block">
                        Instagram Profile
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-charcoal">
                        {personalInfo.instagramHandle}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-charcoal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Configurable Social Placeholders Box */}
            <div className="p-6 rounded-2xl bg-white border border-[#B7A58D]/30 space-y-3">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#B7A58D] block">
                ADDITIONAL NETWORKS (CONFIGURABLE)
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-muted flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-[10px] font-mono text-[#89847D]">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-muted flex items-center justify-between">
                  <span>Behance</span>
                  <span className="text-[10px] font-mono text-[#89847D]">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-muted flex items-center justify-between">
                  <span>Dribbble</span>
                  <span className="text-[10px] font-mono text-[#89847D]">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF7F2] text-muted flex items-center justify-between">
                  <span>GitHub</span>
                  <span className="text-[10px] font-mono text-[#89847D]">Placeholder</span>
                </div>
              </div>
              <p className="text-[11px] text-muted leading-tight pt-1">
                Social links are ready to be connected in <code className="font-mono text-charcoal">portfolioData.js</code>. No fake profiles are rendered.
              </p>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Copy, Check, AlertCircle, Send } from "lucide-react";
import { InstagramIcon } from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // 'mailto-fallback' | 'success'

  const emailAddress = "naveenjprakash114@gmail.com";
  const phoneNumber = "+91 7397172114";
  const whatsappUrl = "https://wa.me/917397172114?text=Hello%20Naveen,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect.";
  const instagramUrl = "https://www.instagram.com/naveen_j_prakash/";

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message should be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Check for EmailJS credentials in environment
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.default.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: "Naveen Prakash J",
          },
          publicKey
        );
        setSubmittedStatus("success");
      } catch (err) {
        console.error("Email service error, launching mailto client fallback", err);
        launchMailto();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
      launchMailto();
    }
  };

  const launchMailto = () => {
    const mailSubject = encodeURIComponent(`[Inquiry] ${formData.subject}`);
    const mailBody = encodeURIComponent(
      `Hello Naveen,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;
    setSubmittedStatus("mailto-fallback");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FDFBF7] border-t border-[#A18B70]/20">
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
            <span className="w-6 h-[1px] bg-bronze" />
            <span className="text-xs uppercase tracking-widest-luxury font-mono text-bronze">
              07 / LET'S CONNECT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-charcoal tracking-tight leading-tight">
            Have an idea?<br />
            <span className="italic font-serif">Let's create something meaningful.</span>
          </h2>
          <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed pt-1">
            I'm always interested in creative collaborations, innovative ideas and opportunities to build something valuable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#F7F3EB] border border-[#A18B70]/25 rounded-2xl p-7 sm:p-8 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-bronze block">
                DIRECT CONTACT CHANNELS
              </span>

              <div className="space-y-4">
                {/* Email */}
                <div className="p-4 rounded-xl bg-white border border-[#A18B70]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-full bg-[#F7F3EB] border border-[#A18B70]/30 flex items-center justify-center text-bronze shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/60 block">
                        EMAIL
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-xs sm:text-sm font-medium text-charcoal truncate block hover:text-bronze transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md text-charcoal/60 hover:text-charcoal transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & WhatsApp */}
                <div className="p-4 rounded-xl bg-white border border-[#A18B70]/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F7F3EB] border border-[#A18B70]/30 flex items-center justify-center text-bronze shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/60 block">
                        PHONE & WHATSAPP
                      </span>
                      <a
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="text-xs sm:text-sm font-medium text-charcoal hover:text-bronze transition-colors"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#25D366]/15 text-[#075E54] text-xs font-semibold hover:bg-[#25D366]/25 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-white border border-[#A18B70]/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F3EB] border border-[#A18B70]/30 flex items-center justify-center text-bronze shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/60 block">
                      LOCATION
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-charcoal">
                      Salem, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white border border-[#A18B70]/20 flex items-center justify-between group hover:border-bronze transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F7F3EB] border border-[#A18B70]/30 flex items-center justify-center text-bronze shrink-0 group-hover:bg-[#E8DDCB] transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal/60 block">
                        INSTAGRAM
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-charcoal">
                        @naveen_j_prakash
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-charcoal/60 group-hover:text-charcoal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Social Link Placeholders */}
            <div className="p-6 rounded-2xl bg-white border border-[#A18B70]/25 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-bronze block">
                SOCIAL PROFILES (CONFIGURABLE)
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#F7F3EB] text-charcoal font-medium flex items-center justify-between hover:bg-[#E8DDCB] transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-[10px] font-mono text-emerald-700">Active</span>
                </a>
                <div className="p-2.5 rounded-lg bg-[#F7F3EB] text-charcoal/60 flex items-center justify-between">
                  <span>LinkedIn</span>
                  <span className="text-[10px] font-mono text-bronze">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F3EB] text-charcoal/60 flex items-center justify-between">
                  <span>Behance</span>
                  <span className="text-[10px] font-mono text-bronze">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F3EB] text-charcoal/60 flex items-center justify-between">
                  <span>Dribbble</span>
                  <span className="text-[10px] font-mono text-bronze">Placeholder</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F3EB] text-charcoal/60 flex items-center justify-between col-span-2">
                  <span>GitHub</span>
                  <span className="text-[10px] font-mono text-bronze">Placeholder</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-[#F7F3EB] border border-[#A18B70]/25 rounded-2xl p-7 sm:p-10 shadow-subtle"
          >
            <h3 className="text-xl sm:text-2xl font-serif text-charcoal mb-6">
              Send a Direct Message
            </h3>

            {submittedStatus === "success" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs mb-6 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Your message has been delivered directly. Thank you!</span>
              </div>
            )}

            {submittedStatus === "mailto-fallback" && (
              <div className="p-4 rounded-xl bg-white border border-[#A18B70]/30 text-charcoal text-xs mb-6 space-y-1">
                <p className="font-semibold">Email client opened with pre-filled message.</p>
                <p className="text-charcoal/70">
                  If your mail application did not automatically open, please click below or write directly to <a href={`mailto:${emailAddress}`} className="underline font-mono">{emailAddress}</a>.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">
                  Full Name <span className="text-bronze">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Anand Kumar"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.name ? "border-red-500 ring-1 ring-red-500" : "border-[#A18B70]/30"
                  } text-charcoal text-xs sm:text-sm focus:outline-none focus:border-charcoal transition-colors`}
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">
                  Email Address <span className="text-bronze">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.email ? "border-red-500 ring-1 ring-red-500" : "border-[#A18B70]/30"
                  } text-charcoal text-xs sm:text-sm focus:outline-none focus:border-charcoal transition-colors`}
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">
                  Subject <span className="text-bronze">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Creative Production / Collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.subject ? "border-red-500 ring-1 ring-red-500" : "border-[#A18B70]/30"
                  } text-charcoal text-xs sm:text-sm focus:outline-none focus:border-charcoal transition-colors`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal font-semibold mb-2">
                  Message <span className="text-bronze">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or idea..."
                  className={`w-full px-4 py-3 rounded-xl bg-white border ${
                    errors.message ? "border-red-500 ring-1 ring-red-500" : "border-[#A18B70]/30"
                  } text-charcoal text-xs sm:text-sm focus:outline-none focus:border-charcoal transition-colors resize-y`}
                />
                {errors.message && (
                  <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-[#F7F3EB] text-xs font-semibold uppercase tracking-wider hover:bg-charcoal-soft transition-all duration-300 disabled:opacity-50 shadow-sm"
                >
                  <span>{isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                  <Send className="w-3.5 h-3.5 text-[#E8DDCB]" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

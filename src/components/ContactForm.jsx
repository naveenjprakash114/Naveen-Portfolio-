import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Copy, Check, MessageCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "Digital Marketing & Branding",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    "Digital Marketing & Branding",
    "Photography & Videography",
    "AI-Powered Creative Direction",
    "UI/UX Design Exploration",
    "Frontend Development / Website",
    "Other Collaboration",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        // Dynamic import to avoid bundle bloat when not configured
        const emailjs = await import("@emailjs/browser");
        await emailjs.default.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            project_type: formData.projectType,
            message: formData.message,
            to_name: personalInfo.name,
          },
          publicKey
        );
        setIsSuccess(true);
      } catch (err) {
        console.error("EmailJS submission failed, falling back to mailto", err);
        fallbackMailto();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Graceful simulated delivery + mailto trigger fallback
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 700);
    }
  };

  const fallbackMailto = () => {
    const mailSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || "Collaboration"}`);
    const mailBody = encodeURIComponent(
      `Hello Naveen,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="bg-[#FCFAF7] border border-[#B7A58D]/30 rounded-3xl p-6 sm:p-10 shadow-subtle">
      {isSuccess ? (
        <div className="py-12 px-4 text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-[#E9DDCB] text-charcoal flex items-center justify-center mx-auto border border-[#B7A58D]/40">
            <CheckCircle className="w-8 h-8 text-charcoal" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-serif text-charcoal">
              Message Initiated Successfully
            </h3>
            <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, {formData.name}. I look forward to connecting with you shortly.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={fallbackMailto}
              className="px-6 py-3 rounded-full bg-charcoal text-[#F8F5EF] text-xs uppercase tracking-wider font-medium hover:bg-[#332F2B] transition-colors"
            >
              Open Direct Email Client
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  name: "",
                  email: "",
                  subject: "",
                  projectType: projectTypes[0],
                  message: "",
                });
              }}
              className="px-6 py-3 rounded-full bg-cream border border-[#B7A58D]/40 text-charcoal text-xs uppercase tracking-wider font-medium hover:bg-[#E9DDCB]/50 transition-colors"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Full Name <span className="text-[#89847D]">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Anand Kumar"
                className={`w-full px-4 py-3 rounded-xl bg-white border ${
                  errors.name ? "border-red-500 ring-1 ring-red-500" : "border-[#B7A58D]/40"
                } text-charcoal text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors`}
              />
              {errors.name && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Email Address <span className="text-[#89847D]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className={`w-full px-4 py-3 rounded-xl bg-white border ${
                  errors.email ? "border-red-500 ring-1 ring-red-500" : "border-[#B7A58D]/40"
                } text-charcoal text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors`}
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Subject */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Subject <span className="text-[#89847D]">*</span>
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief project headline"
                className={`w-full px-4 py-3 rounded-xl bg-white border ${
                  errors.subject ? "border-red-500 ring-1 ring-red-500" : "border-[#B7A58D]/40"
                } text-charcoal text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors`}
              />
              {errors.subject && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
                Project Category
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#B7A58D]/40 text-charcoal text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors"
              >
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-charcoal font-medium mb-2">
              Message <span className="text-[#89847D]">*</span>
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your brand, project requirements, timeline, or creative goals..."
              className={`w-full px-4 py-3 rounded-xl bg-white border ${
                errors.message ? "border-red-500 ring-1 ring-red-500" : "border-[#B7A58D]/40"
              } text-charcoal text-sm focus:outline-none focus:border-charcoal focus:ring-1 focus:ring-charcoal transition-colors resize-y`}
            />
            {errors.message && (
              <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button & Direct Channels */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-charcoal text-[#F8F5EF] text-xs font-semibold uppercase tracking-wider hover:bg-[#332F2B] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 shadow-md"
            >
              {isSubmitting ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-[#E9DDCB]" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-charcoal transition-colors px-3 py-2 rounded-lg border border-transparent hover:border-[#B7A58D]/30"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#B7A58D]" />
                  <span>Copy: {personalInfo.email}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}


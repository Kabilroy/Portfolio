import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit via FormSubmit.co API to guarantee email inbox delivery to kabilroyitofficial@gmail.com
      const response = await fetch("https://formsubmit.co/ajax/kabilroyitofficial@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback: Trigger direct mail client
        triggerMailto();
        setSubmitted(true);
      }
    } catch {
      // If network restricted, trigger mailto directly
      triggerMailto();
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:${personalData.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const openGmailDirect = () => {
    const name = formData.name || 'Portfolio Visitor';
    const subject = encodeURIComponent(`Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.email}&su=${subject}&body=${body}`, '_blank');
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Get In Touch
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          Contact Me
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Contact Form Card */}
        <div className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl mb-10 transition-all">
          {submitted ? (
            <div className="text-center py-8 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/50 flex items-center justify-center text-orange-400 text-2xl mx-auto mb-4 shadow-lg shadow-orange-600/20">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                Your inquiry has been dispatched to <strong className="text-orange-400 font-mono">{personalData.email}</strong>. I will get back to you promptly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={openGmailDirect}
                  className="px-5 py-2.5 rounded-xl bg-[#14121a] hover:bg-[#1f1a26] border border-orange-500/40 text-orange-300 text-xs font-mono font-semibold transition-all inline-flex items-center gap-2"
                >
                  <i className="fa-solid fa-envelope-open-text text-orange-400"></i>
                  <span>Open directly in Gmail</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xs font-mono hover:from-orange-400 hover:to-red-500 transition-colors shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-[#23171e] mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  <span>Direct Delivery to Gmail ({personalData.email})</span>
                </div>
                <button
                  type="button"
                  onClick={openGmailDirect}
                  className="text-xs font-mono text-orange-400 hover:text-orange-300 underline inline-flex items-center gap-1"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  <span>Open in Gmail App</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-2">
                    Your Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#08070b] border border-[#23171e] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-2">
                    Email Address <span className="text-orange-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#08070b] border border-[#23171e] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-2">
                  Subject (Optional)
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Internship Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-[#08070b] border border-[#23171e] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-2">
                  Message <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message or project requirements here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#08070b] border border-[#23171e] focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin text-sm"></i>
                    <span>Sending to Gmail...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message to Gmail</span>
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Directly below the form: Contact Details with WhatsApp Direct Link */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* WhatsApp / Phone Redirect Card */}
          <div className="bg-[#0e0d14] border border-[#271822] hover:border-emerald-500/60 rounded-xl p-4.5 flex items-center justify-between transition-all group shadow-md hover:shadow-emerald-950/30">
            <a
              id="contact-whatsapp-link"
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 flex-1 min-w-0"
              title="Click to chat directly on WhatsApp"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/35 flex items-center justify-center text-emerald-400 text-lg group-hover:scale-105 group-hover:bg-emerald-500/25 transition-all shrink-0">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-emerald-400 font-bold block">WhatsApp & Call</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors font-mono">
                  {personalData.phone}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">Click to chat instantly</span>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(personalData.phone, 'phone')}
              title="Copy phone number"
              className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
            >
              <i className={`fa-solid ${copiedPhone ? 'fa-check text-emerald-400' : 'fa-copy'} text-xs`}></i>
            </button>
          </div>

          {/* Email Card */}
          <div className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/50 rounded-xl p-4.5 flex items-center justify-between transition-all group shadow-md hover:shadow-orange-950/30">
            <a
              id="contact-email-link"
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3.5 flex-1 min-w-0"
              title="Send email"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-600/15 border border-orange-500/35 flex items-center justify-center text-orange-400 text-lg group-hover:scale-105 transition-all shrink-0">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-orange-400 font-bold block">Email Inbox</span>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-orange-300 transition-colors font-mono truncate block">
                  {personalData.email}
                </span>
                <span className="text-[10px] text-slate-400 block font-mono">kabilroyitofficial@gmail.com</span>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(personalData.email, 'email')}
              title="Copy email address"
              className="p-2 text-slate-400 hover:text-orange-400 transition-colors"
            >
              <i className={`fa-solid ${copiedEmail ? 'fa-check text-orange-400' : 'fa-copy'} text-xs`}></i>
            </button>
          </div>

          {/* GitHub Card */}
          <a
            id="contact-github-link"
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/50 rounded-xl p-4.5 flex items-center justify-between transition-all group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#16121b] border border-[#271822] group-hover:border-orange-500/40 flex items-center justify-center text-slate-200 group-hover:text-orange-400 text-lg transition-all">
                <i className="fa-brands fa-github"></i>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">GitHub Profile</span>
                <span className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors font-mono">
                  github.com/Kabilroy
                </span>
              </div>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-orange-400 transition-colors pr-2"></i>
          </a>

          {/* LinkedIn Card */}
          <a
            id="contact-linkedin-link"
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0e0d14] border border-[#271822] hover:border-red-500/50 rounded-xl p-4.5 flex items-center justify-between transition-all group shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#16121b] border border-[#271822] group-hover:border-red-500/40 flex items-center justify-center text-slate-200 group-hover:text-red-400 text-lg transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">LinkedIn Profile</span>
                <span className="text-sm font-semibold text-white group-hover:text-red-300 transition-colors font-mono">
                  linkedin.com/in/kabilan-p
                </span>
              </div>
            </div>
            <i className="fa-solid fa-arrow-up-right-from-square text-xs text-slate-500 group-hover:text-red-400 transition-colors pr-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

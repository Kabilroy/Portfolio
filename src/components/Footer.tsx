import React from 'react';
import { personalData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050407] border-t border-[#1e1319] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        {/* Top 3-Column Section matching user specification */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12">
          {/* Left Column: Brand & Status */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-white tracking-tight">
                Kabilan<span className="text-orange-500">.</span>
              </h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-['Plus_Jakarta_Sans',sans-serif]">
              Aspiring full-stack web developer and application builder interested in creating responsive, reliable visual tools with clean backend services.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d1814] border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>AVAILABLE FOR COLLABORATIONS</span>
            </div>
          </div>

          {/* Middle Column: SITE NAVIGATION */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase mb-4">
              SITE NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm font-medium">
              <div>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#home');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Home
                </a>
              </div>
              <div>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#about');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  About
                </a>
              </div>
              <div>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#skills');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Skills
                </a>
              </div>
              <div>
                <a
                  href="#tools"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#tools');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Tools
                </a>
              </div>
              <div>
                <a
                  href="#certificates"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#certificates');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Certificates
                </a>
              </div>
              <div>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#projects');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Projects
                </a>
              </div>
              <div>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-transform duration-150 py-1"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: REACH KABILAN */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase mb-4">
              REACH KABILAN
            </h4>

            <a
              id="footer-reach-email"
              href={`mailto:${personalData.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors group"
            >
              <i className="fa-regular fa-envelope text-base text-orange-400/80 group-hover:text-orange-400 shrink-0"></i>
              <span className="text-sm font-mono truncate">{personalData.email}</span>
            </a>

            <a
              id="footer-reach-phone"
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-emerald-400 transition-colors group"
            >
              <i className="fa-solid fa-phone text-sm text-emerald-400/80 group-hover:text-emerald-400 shrink-0"></i>
              <span className="text-sm font-mono">{personalData.phone}</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Divider, Social Icons & Copyright */}
        <div className="pt-8 border-t border-[#1e1319] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              id="footer-social-github"
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
              className="w-10 h-10 rounded-xl bg-[#0e0d14] border border-[#271822] hover:border-orange-500/60 hover:bg-orange-950/20 text-slate-300 hover:text-orange-400 flex items-center justify-center text-base transition-all duration-200"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              id="footer-social-linkedin"
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
              className="w-10 h-10 rounded-xl bg-[#0e0d14] border border-[#271822] hover:border-red-500/60 hover:bg-red-950/20 text-slate-300 hover:text-red-400 flex items-center justify-center text-base transition-all duration-200"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              id="footer-social-whatsapp"
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Message"
              title="Chat on WhatsApp"
              className="w-10 h-10 rounded-xl bg-[#0e0d14] border border-[#271822] hover:border-emerald-500/60 hover:bg-emerald-950/20 text-emerald-400 flex items-center justify-center text-base transition-all duration-200"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to Top"
              title="Back to top"
              className="w-10 h-10 rounded-xl bg-[#0e0d14] border border-[#271822] hover:border-orange-500/60 hover:bg-orange-950/20 text-slate-300 hover:text-orange-400 flex items-center justify-center text-sm transition-all duration-200"
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>

          <div className="text-xs font-mono text-slate-400 text-center sm:text-right">
            © 2026 Kabilan P. All rights reserved. | Handcrafted with modern React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

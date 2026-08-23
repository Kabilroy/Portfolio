import React, { useState } from 'react';
import { generateAndDownloadResume } from '../utils/generateResumePdf';

export const Hero: React.FC = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCv = async (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloading(true);
    try {
      await generateAndDownloadResume();
    } catch (err) {
      console.error('Failed to generate resume PDF', err);
    } finally {
      setDownloading(false);
    }
  };

  const handleHireMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient mesh with black, deep red, and thick orange glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] bg-gradient-to-r from-orange-600/15 via-red-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute -top-10 right-10 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0e12] border border-orange-500/40 text-orange-400 text-xs sm:text-sm font-mono font-medium tracking-wide mb-6 shadow-sm shadow-orange-950/40">
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></span>
          Turning Ideas Into Code
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-white leading-tight sm:leading-tight lg:leading-[1.15] mb-6">
          Hi, I am{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500">
            Kabilan
          </span>{' '}
          — I build clean, scalable web applications.
        </h1>

        {/* Subtext description */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Final year Information Technology student at V.S.B. Engineering College specializing in modern full-stack development, Spring Boot microservices, MySQL databases, and performant object-oriented programming.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            id="hero-hire-me-btn"
            href="#contact"
            onClick={handleHireMeClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold text-base transition-all duration-200 shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Hire Me</span>
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>

<button
  id="hero-download-cv-btn"
  type="button"
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/14Yn30_CfT6aPZfvTiEuKRjwmP22t1n4l/view?usp=sharing",
      "_blank"
    )
  }
  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#120f17] hover:bg-[#1a1420] border-2 border-[#3d1a24] hover:border-orange-500 text-slate-100 hover:text-white font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/50 cursor-pointer"
>
  <i className="fa-solid fa-file-arrow-down text-orange-400"></i>
  <span>Download CV</span>
</button>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 pt-8 border-t border-[#23171e] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-orange-400"></i>
            <span>B.Tech IT (CGPA: 8.34/10)</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-red-400"></i>
            <span>Tamil Nadu, India</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-orange-400"></i>
            <span>Java & Spring Boot Full-Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

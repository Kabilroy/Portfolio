import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Get To Know Me
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          About Me
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Bio Card */}
        <div className="lg:col-span-7 bg-[#0e0d14] border border-[#271822] hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-orange-600/10 via-red-600/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-lg shadow-sm">
              <i className="fa-solid fa-user-graduate"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
                Full-Stack & Software Developer
              </h3>
              <p className="text-xs font-mono text-orange-400">Final year B.Tech IT Student</p>
            </div>
          </div>

          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
            B.Tech Information Technology student (final year, CGPA 8.34/10) at <strong className="text-white font-semibold">V.S.B. Engineering College, Karur, Tamil Nadu</strong>, passionate about full-stack development and building clean, efficient, user-friendly applications. Actively preparing for software development and full-stack engineering roles.
          </p>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
            Possesses strong foundations in Java-based application engineering using object-oriented principles, input validation, Spring Boot RESTful services, and relational database design in MySQL. Committed to writing clean, maintainable code, test automation, and collaborative development with Git and GitHub.
          </p>

          {/* Quick Academic Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#23171e]">
            <div className="flex items-start gap-3 bg-[#08070b] p-4 rounded-xl border border-[#23171e]">
              <i className="fa-solid fa-building-columns text-orange-400 text-lg mt-0.5"></i>
              <div>
                <span className="text-xs text-slate-400 font-mono block">College</span>
                <span className="text-sm font-semibold text-white">V.S.B. Engg College, Karur</span>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#08070b] p-4 rounded-xl border border-[#23171e]">
              <i className="fa-solid fa-graduation-cap text-red-400 text-lg mt-0.5"></i>
              <div>
                <span className="text-xs text-slate-400 font-mono block">Academics</span>
                <span className="text-sm font-semibold text-white">B.Tech IT (CGPA: 8.34/10)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Details Card */}
        <div className="lg:col-span-5 bg-[#0e0d14] border border-[#271822] hover:border-orange-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-lg shadow-sm">
              <i className="fa-solid fa-id-card"></i>
            </div>
            <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif]">
              Personal Details
            </h3>
          </div>

          <div className="space-y-3.5">
            {/* Name */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08070b] border border-[#23171e]">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-user text-orange-400 text-sm w-4 text-center"></i>
                <span className="text-xs font-mono text-slate-400">Name</span>
              </div>
              <span className="text-sm font-semibold text-white">{personalData.name}</span>
            </div>

            {/* Date of Birth */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08070b] border border-[#23171e]">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-calendar-days text-orange-400 text-sm w-4 text-center"></i>
                <span className="text-xs font-mono text-slate-400">Date of Birth</span>
              </div>
              <span className="text-sm font-semibold text-white">{personalData.dob}</span>
            </div>

            {/* Location */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08070b] border border-[#23171e]">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-location-dot text-red-400 text-sm w-4 text-center"></i>
                <span className="text-xs font-mono text-slate-400">Location</span>
              </div>
              <span className="text-sm font-semibold text-white text-right">{personalData.location}</span>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08070b] border border-[#23171e]">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-orange-400 text-sm w-4 text-center"></i>
                <span className="text-xs font-mono text-slate-400">Email</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-xs sm:text-sm font-semibold text-orange-300 hover:text-orange-200 font-mono truncate max-w-[150px] sm:max-w-[190px]"
                >
                  {personalData.email}
                </a>
                <button
                  id="copy-email-about-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1 text-slate-400 hover:text-orange-400 transition-colors"
                >
                  <i className={`fa-solid ${copied ? 'fa-check text-orange-400' : 'fa-copy'} text-xs`}></i>
                </button>
              </div>
            </div>

            {/* Languages Known */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08070b] border border-[#23171e]">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-code text-red-400 text-sm w-4 text-center"></i>
                <span className="text-xs font-mono text-slate-400">Languages Known</span>
              </div>
              <div className="flex items-center gap-2">
                {personalData.languagesKnown.map((lang) => (
                  <span
                    key={lang}
                    className="px-2.5 py-0.5 rounded-md bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/40 text-orange-300 text-xs font-mono font-bold"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

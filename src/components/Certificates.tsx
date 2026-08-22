import React from 'react';
import { certificatesData } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Credentials & Training
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          Certificates
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            id={`cert-card-${cert.id}`}
            className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-600/15 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl group-hover:border-orange-500 group-hover:scale-105 transition-all">
                  <i className={cert.iconClass}></i>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-600/15 to-red-600/15 border border-orange-500/30 text-orange-300 text-xs font-mono font-medium">
                  <i className="fa-solid fa-circle-check text-orange-400 text-[10px]"></i>
                  <span>Certified</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif] group-hover:text-orange-400 transition-colors mb-2">
                {cert.title}
              </h3>

              <p className="text-slate-300 text-sm mb-4 flex items-center gap-2">
                <i className="fa-solid fa-building text-orange-400 text-xs"></i>
                <span>{cert.issuer}</span>
              </p>
            </div>

            <div className="pt-4 border-t border-[#23171e] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                {cert.issueDate || 'Professional Credential'}
              </span>
              <span className="text-xs font-mono text-orange-400/80">
                <i className="fa-solid fa-shield-halved mr-1 text-[10px]"></i>
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

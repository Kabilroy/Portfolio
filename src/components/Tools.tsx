import React from 'react';
import { toolsData } from '../data/portfolioData';

export const Tools: React.FC = () => {
  return (
    <section id="tools" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Development Environment
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          Tools & IDEs
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            id={`tool-card-${tool.id}`}
            className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-600/15 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl group-hover:border-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500/25 group-hover:to-red-600/25 transition-all">
                <i className={tool.iconClass}></i>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#08070b] border border-[#271822] text-[11px] font-mono text-slate-400">
                {tool.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif] group-hover:text-orange-400 transition-colors mb-2">
              {tool.name}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed">
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

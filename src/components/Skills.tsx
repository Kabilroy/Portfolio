import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend / Database', 'Programming Languages'];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Technical Proficiency
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          Skills
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Animated Horizontal Scrolling Marquee Banner */}
      <div className="mb-14 relative">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 animate-pulse"></span>
            <span>Live Skill Stream</span>
          </div>
          <span className="text-xs font-mono text-slate-500">Hover to pause</span>
        </div>

        {/* Marquee Container with fade edge masks */}
        <div className="relative w-full overflow-hidden py-3 bg-[#0c0b10] border-y border-[#23171e] rounded-2xl shadow-inner">
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#0c0b10] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#0c0b10] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex gap-6 items-center">
            {[...skillsData, ...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={`${skill.id}-marquee-${index}`}
                className="flex items-center gap-4 bg-[#14121a] border border-[#2d1b26] hover:border-orange-500/60 rounded-xl px-5 py-3.5 min-w-[250px] shadow-md transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-lg">
                  <i className={skill.iconClass}></i>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-white">{skill.name}</span>
                    <span className="text-xs font-mono text-orange-400 font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#08070b] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categorized Detailed Skill Cards Grid */}
      <div className="mt-8">
        {/* Category switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg shadow-orange-600/30'
                  : 'bg-[#0e0d14] text-slate-300 hover:text-white hover:bg-[#18131e] border border-[#271822]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/50 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/15 to-red-600/15 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl group-hover:border-orange-500 group-hover:scale-105 transition-all">
                    <i className={skill.iconClass}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                      {skill.name}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    {skill.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#08070b] h-2.5 rounded-full overflow-hidden p-0.5 border border-[#23171e]">
                <div
                  className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-full transition-all duration-700 ease-out shadow-sm shadow-orange-500/50"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

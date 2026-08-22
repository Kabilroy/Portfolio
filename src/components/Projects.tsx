import React from 'react';
import { projectsData } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-orange-400 font-mono text-xs sm:text-sm uppercase tracking-widest font-bold">
          Featured Engineering Work
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white mt-2">
          Projects
        </h2>
        <div className="w-14 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Grid of Project Cards (strictly NO category/tech filter bar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className="bg-[#0e0d14] border border-[#271822] hover:border-orange-500/60 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
          >
            <div>
              {/* Image / Header Graphic */}
              <div className="h-44 bg-[#08070b] border-b border-[#23171e] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center group-hover:bg-[#120f18] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-2xl mb-2 group-hover:scale-110 transition-transform shadow-md">
                  <i className={
                    project.id === 'budget-tracker'
                      ? 'fa-solid fa-wallet'
                      : project.id === 'medisum'
                      ? 'fa-solid fa-heart-pulse'
                      : 'fa-solid fa-graduation-cap'
                  }></i>
                </div>
                <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-bold">
                  {project.imagePlaceholderText}
                </span>

                {/* Project Index Badge */}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-[#160f15] border border-orange-500/40 text-[11px] font-mono text-orange-400 font-bold">
                  0{index + 1}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <span className="text-[11px] font-mono text-orange-400 font-semibold uppercase tracking-wide block mb-1">
                  {project.subtitle}
                </span>
                
                <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-orange-400 transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                      <i className="fa-solid fa-circle-check text-orange-500 text-[11px] mt-0.5 shrink-0"></i>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#08070b] border border-[#23171e] text-orange-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Links */}
            <div className="px-6 py-4 bg-[#08070b] border-t border-[#23171e] flex items-center justify-between">
              <a
                href={project.githubUrl || "https://github.com/Kabilroy"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white font-mono transition-colors"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>Repository</span>
              </a>

              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white font-mono py-1.5 px-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 transition-all duration-200 shadow-md shadow-orange-600/20"
              >
                <span>View Project</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

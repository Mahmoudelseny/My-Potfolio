import { useState } from 'react';
import { ExternalLink, Layers, Globe, Smartphone, Code, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 bg-zinc-900/50 border-y border-zinc-850 relative">
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Code className="w-3 h-3" /> Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Selected Commercial Work
          </h2>
          <p className="text-zinc-400">
            A handpicked selection of production websites, platforms, and mobile apps engineered with modern web standards and clean architectures.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center gap-2 mb-12">
          {(['all', 'web', 'mobile'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 uppercase tracking-wider cursor-pointer border ${
                filter === type
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-500 shadow-lg shadow-emerald-500/10'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {type === 'all' ? 'All projects' : type === 'web' ? 'Web Sites' : 'Mobile Apps'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group relative bg-zinc-950/80 border border-zinc-850 hover:border-zinc-750 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/2 hover:-translate-y-1"
              >
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      {project.category === 'web' ? (
                        <Globe className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Smartphone className="w-3.5 h-3.5 text-teal-400" />
                      )}
                      {project.category === 'web' ? 'WEB DEVELOPMENT' : 'MOBILE APP'}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-850">
                      {project.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Corporate Owner */}
                  <p className="text-xs text-zinc-500 font-mono mb-3">
                    Client: <span className="text-zinc-300 font-medium">{project.company}</span>
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom - Tech & Actions */}
                <div className="space-y-4 pt-4 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/10 border border-emerald-900/20 px-2 py-0.5 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                    >
                      View Details
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {project.link && project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-white p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-750 transition-all"
                        title="Visit Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded border border-zinc-900">
                        Proprietary
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Detail View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/85 backdrop-blur-sm animate-fade-in">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="p-6 border-b border-zinc-800 flex items-start justify-between bg-zinc-950">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase bg-emerald-950/45 px-2 py-0.5 rounded border border-emerald-900/30">
                      {selectedProject.category === 'web' ? 'Web Application' : 'Mobile Application'}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {selectedProject.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">
                    Client / Organization: <strong className="text-white font-semibold">{selectedProject.company}</strong>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-800 rounded-xl transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">Project Overview</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Accomplishments */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">Scope & Accomplishments</h4>
                  <div className="space-y-2">
                    {selectedProject.bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies used */}
                <div className="space-y-2 pt-4 border-t border-zinc-850">
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-bold">Engineered With</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-lg text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-zinc-850 bg-zinc-950 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 text-zinc-300 font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Close Details
                </button>

                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-5 py-2 rounded-xl text-sm shadow-md transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Production URL
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { Award, CheckCircle2, Languages, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Skills() {
  const skills = PERSONAL_INFO.skills;
  
  const categories = [
    { id: 'languages', title: 'Languages (Core)', description: 'Core languages and syntax written on a daily basis' },
    { id: 'frameworks', title: 'Frameworks & Libraries', description: 'Web frameworks, SDKs, and state managers' },
    { id: 'tools', title: 'Specialized Tools & Methods', description: 'Design concepts, databases, and version controls' }
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-900/50 border-y border-zinc-850 relative">
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Award className="w-3 h-3" /> Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Technical Stack & Dialects
          </h2>
          <p className="text-zinc-400">
            A breakdown of my software engineering capabilities, structured by technology type and practical proficiency levels.
          </p>
        </div>

        {/* Main Grid: Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.id);
            return (
              <div
                key={cat.id}
                className="bg-zinc-950/75 border border-zinc-850 p-6 rounded-2xl flex flex-col justify-between text-left space-y-6"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mb-6">{cat.description}</p>

                  <div className="space-y-4">
                    {catSkills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-zinc-200 font-bold">{skill.name}</span>
                          <span className="text-zinc-400">{skill.rating}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                            style={{ width: `${skill.rating}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Quick Badges */}
                <div className="pt-4 border-t border-zinc-900 flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-2 py-0.5 rounded-md">
                    Proficient
                  </span>
                  <span className="text-[10px] font-mono font-bold text-teal-400 bg-teal-950/20 border border-teal-900/30 px-2 py-0.5 rounded-md">
                    Production Tested
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spoken Languages & Highlights Row */}
        <div className="mt-12 bg-zinc-900/70 border border-zinc-850 p-6 rounded-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            
            {/* Left side: spoken languages matching resume circular graphics */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Languages className="w-5 h-5 text-emerald-400" />
                Language Capabilities
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                As a software engineer operating in global development networks, I can communicate in multiple dialects.
              </p>

              <div className="flex items-center gap-10">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-4">
                    {/* Ring indicator */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-95">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          className="text-zinc-800"
                          strokeWidth="5"
                          stroke="currentColor"
                          fill="transparent"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          className="text-emerald-500"
                          strokeWidth="5"
                          strokeDasharray={175}
                          strokeDashoffset={175 - (175 * lang.level) / 100}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                        />
                      </svg>
                      <span className="text-xs font-mono font-bold text-white relative">
                        {lang.level}%
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-white text-sm">{lang.name}</h4>
                      <p className="text-xs text-zinc-400 font-mono">{lang.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: professional highlights */}
            <div className="space-y-4 border-t md:border-t-0 md:border-l border-zinc-800 pt-6 md:pt-0 md:pl-8">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider text-emerald-400">
                Core Strengths
              </h4>
              <div className="space-y-3">
                {[
                  'Clean Architecture practitioner with unidirectional dataflows',
                  'Expert in reactive user state and performant DOM lifecycles',
                  'Rigorous performance analysis for fast, visual rendering',
                  'Cross-platform Flutter app development with offline synchronization'
                ].map((strength, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

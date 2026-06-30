import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_HISTORY } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-950 relative">
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3 h-3 text-indigo-400" /> Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-zinc-400">
            A chronological record of full-stack development, mobile integration, and corporate software delivery in agency and holding environments.
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="max-w-4xl mx-auto relative border-l border-zinc-850 ml-4 md:ml-32 pl-6 md:pl-12 space-y-12">
          
          {EXPERIENCE_HISTORY.map((exp, index) => {
            return (
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={exp.id} 
                className="relative group text-left"
              >
                
                {/* Timeline dot */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-indigo-500 bg-zinc-950 group-hover:bg-indigo-400 transition-colors duration-200 shadow-md shadow-indigo-500/20"></div>
                
                {/* Timeline Date for Desktop (positioned to the left of the border) */}
                <div className="hidden md:block absolute -left-[180px] top-1.5 w-32 text-right">
                  <span className="text-sm font-mono font-bold text-zinc-400 bg-zinc-900 border border-zinc-850 px-3 py-1 rounded-lg">
                    {exp.date}
                  </span>
                </div>

                {/* Main Card */}
                <div className="bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 p-6 rounded-2xl transition-all duration-300 hover:bg-zinc-900/60 shadow-lg hover:shadow-xl">
                  
                  {/* Date Badge for Mobile */}
                  <div className="inline-block md:hidden mb-3">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/25 border border-indigo-900/30 px-2.5 py-1 rounded-lg">
                      {exp.date}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-sm text-zinc-300 font-semibold">{exp.company}</span>
                        {exp.companyUrl && (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-zinc-500 hover:text-indigo-400 transition-colors"
                            title={`Visit ${exp.company}`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="text-xs text-zinc-400 italic mb-4 font-mono">
                    {exp.description}
                  </p>

                  {/* Accomplishments */}
                  <ul className="space-y-2.5 text-zinc-300 text-sm leading-relaxed">
                    {exp.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex gap-2 items-start">
                        <span className="text-indigo-400 shrink-0 select-none mt-1">
                          <ChevronRight className="w-4 h-4" />
                        </span>
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

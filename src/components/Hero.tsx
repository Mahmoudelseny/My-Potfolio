import { ArrowRight, Mail, Github, FileText, Code, Sparkles, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import TiltCard from './TiltCard';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onNavigate, onOpenResumeModal }: HeroProps) {
  // Select some key skills for quick highlights
  const mainTechs = ['React', 'TypeScript', 'Flutter', 'Dart', 'Node.js', 'SQL', 'Python', 'Java'];

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-zinc-950 flex items-center min-h-[90vh]"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Available for full-time roles & projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Crafting High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
                Web & Mobile Solutions
              </span>
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Software Engineer specializing in modern full-stack web architectures and high-fidelity mobile apps. Using <span className="text-indigo-400 font-medium">React</span> and <span className="text-violet-400 font-medium">Flutter</span>, I turn complex requirements into robust and polished interfaces.
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {mainTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono hover:border-zinc-700 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-500/10 transition-all duration-200 cursor-pointer"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                Review CV & Bio
              </button>
            </div>

            {/* Social quick links */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-zinc-400">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-sm font-mono"
              >
                <Github className="w-5 h-5 text-indigo-400" />
                @Mahmoudelseny
              </a>
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 text-sm font-mono"
              >
                <Linkedin className="w-5 h-5 text-indigo-400" />
                LinkedIn
              </a>
              <span className="text-zinc-700 hidden sm:inline">|</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5 text-sm font-mono"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Interactive Card / Stats Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-violet-500/10 rounded-2xl blur-xl opacity-75"></div>
            
            <TiltCard glowColor="rgba(139, 92, 246, 0.22)" className="h-full">
              <div className="relative bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl shadow-2xl space-y-6 h-full text-left">
                
                {/* Header profile info */}
                <div className="flex items-center gap-4 border-b border-zinc-800 pb-5">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                    MS
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{PERSONAL_INFO.name}</h3>
                    <p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                      Cairo University CS Alumnus
                    </p>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">
                      Giza, Egypt
                    </p>
                  </div>
                </div>

                {/* Real Stats Board */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                    <span className="block text-3xl font-black text-white">8+</span>
                    <span className="text-xs text-zinc-400 font-mono mt-1 block">Commercial Deployments</span>
                  </div>
                  <div className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                    <span className="block text-3xl font-black text-cyan-400">100%</span>
                    <span className="text-xs text-zinc-400 font-mono mt-1 block">Execution Reliability</span>
                  </div>
                  <div className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                    <span className="block text-3xl font-black text-white">9+</span>
                    <span className="text-xs text-zinc-400 font-mono mt-1 block">Languages & Dialects</span>
                  </div>
                  <div className="p-4 bg-zinc-950/60 border border-zinc-850 rounded-xl">
                    <span className="block text-3xl font-black text-violet-400">2+</span>
                    <span className="text-xs text-zinc-400 font-mono mt-1 block">Native Frameworks</span>
                  </div>
                </div>

                {/* Education Snippet */}
                <div className="p-4 bg-indigo-950/20 border border-indigo-900/30 rounded-xl flex gap-3 items-start text-left">
                  <span className="text-2xl mt-0.5">{PERSONAL_INFO.education.logo}</span>
                  <div>
                    <h4 className="font-bold text-sm text-indigo-400">{PERSONAL_INFO.education.institution}</h4>
                    <p className="text-xs text-zinc-300 mt-0.5">{PERSONAL_INFO.education.degree}</p>
                    <p className="text-[11px] text-zinc-400 font-mono mt-0.5">{PERSONAL_INFO.education.department} (Class of {PERSONAL_INFO.education.gradYear})</p>
                  </div>
                </div>

              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

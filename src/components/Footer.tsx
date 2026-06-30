import { Github, Mail, Sparkles, Award, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Background soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900 pb-8">
          {/* Logo & Title */}
          <div className="text-center md:text-left">
            <span 
              onClick={() => onNavigate('hero')}
              className="text-lg font-extrabold text-white tracking-tight flex items-center justify-center md:justify-start gap-2 cursor-pointer hover:text-indigo-400 transition-colors"
            >
              <Award className="w-5 h-5 text-indigo-400" />
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-zinc-500 font-mono mt-1">
              SOFTWARE ENGINEER • WEB & MOBILE APPLICATIONS
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-400">
            {['hero', 'projects', 'experience', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className="hover:text-indigo-400 transition-all capitalize cursor-pointer text-xs font-mono"
              >
                {section === 'hero' ? 'About' : section}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-750 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-750 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-750 transition-all"
              title="Send direct email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Legal & copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>© {year} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />            Designed with precision in Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}

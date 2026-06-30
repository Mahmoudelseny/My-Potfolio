import { useState, useEffect } from 'react';
import { Menu, X, FileText, Briefcase, Code, Award, MessageSquare, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export default function Header({ activeSection, onNavigate, onOpenResumeModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'About', icon: Award },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
   // { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <div 
            className="flex flex-col cursor-pointer group/logo"
            onClick={() => handleNavClick('hero')}
          >
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shadow-glow shadow-indigo-500/50"></span>
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs text-zinc-400 font-mono tracking-wider uppercase group-hover/logo:text-indigo-400 transition-colors">
              Software Engineer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-sm'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="ml-4 flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-semibold px-4 py-2 rounded-lg text-sm shadow-md transition-all duration-200 cursor-pointer hover:shadow-indigo-500/20 hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              Resume
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1 bg-indigo-500 text-white font-semibold px-3 py-1.5 rounded-lg text-xs transition-all duration-200 cursor-pointer"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800/50 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-850 px-4 pt-2 pb-6 space-y-2 overflow-hidden"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-left text-base font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-850'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

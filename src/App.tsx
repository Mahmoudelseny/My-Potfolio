import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth scroll with fallback highlight
  const onNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scrollspy: Automatically detect active section
  useEffect(() => {
    const sections = ['hero', 'projects', 'experience', 'skills', 'blog', 'contact'];
    
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Initial check
    handleScrollSpy();
    
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div id="portfolio-app" className="bg-zinc-950 text-zinc-100 min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background ambient radial glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/[0.02] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-teal-500/[0.02] rounded-full blur-[120px]"></div>
      </div>

      {/* Main navigation header */}
      <Header 
        activeSection={activeSection} 
        onNavigate={onNavigate} 
        onOpenResumeModal={() => setIsResumeOpen(true)} 
      />

      {/* Body parts inside active flow container */}
      <main className="relative z-10">
        <Hero 
          onNavigate={onNavigate} 
          onOpenResumeModal={() => setIsResumeOpen(true)} 
        />
        
        <Projects />
        
        <Experience />
        
        <Skills />
        
        <Blog />
        
        <Contact />
      </main>

      {/* Structured Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Printable Resume Document overlay */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </div>
  );
}

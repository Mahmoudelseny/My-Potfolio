import { useState } from 'react';
import { X, Printer, Copy, CheckCircle, Mail, Phone, MapPin, Github, FileText, AlertCircle, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EXPERIENCE_HISTORY } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Render markdown string for copying
  const generateMarkdownResume = () => {
    return `# ${PERSONAL_INFO.name.toUpperCase()}
**Software Engineer**
* Email: ${PERSONAL_INFO.email}
* Phone: ${PERSONAL_INFO.phone}
* Location: ${PERSONAL_INFO.location}
* GitHub: ${PERSONAL_INFO.github}
* LinkedIn: ${PERSONAL_INFO.linkedin}

---

## PROFESSIONAL PROFILE
${PERSONAL_INFO.bio}

---

## EDUCATION
**${PERSONAL_INFO.education.institution}** (Graduation Year: ${PERSONAL_INFO.education.gradYear})
* ${PERSONAL_INFO.education.degree}
* ${PERSONAL_INFO.education.department}

---

## EXPERIENCE
${EXPERIENCE_HISTORY.map(
  (exp) => `
### ${exp.role} | ${exp.company}
*Date: ${exp.date}*
${exp.description}
${exp.bulletPoints.map((bullet) => `* ${bullet}`).join('\n')}
`
).join('\n')}

---

## SKILLS & PROFICIENCIES
* Languages: ${PERSONAL_INFO.skills
      .filter((s) => s.category === 'languages')
      .map((s) => s.name)
      .join(', ')}
* Frameworks: ${PERSONAL_INFO.skills
      .filter((s) => s.category === 'frameworks')
      .map((s) => s.name)
      .join(', ')}
* Tools & Methods: ${PERSONAL_INFO.skills
      .filter((s) => s.category === 'tools')
      .map((s) => s.name)
      .join(', ')}

---

## SPOKEN LANGUAGES
* Arabic: Native (100%)
* English: Intermediate (50%)
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownResume());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/90 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 print:bg-white print:p-0"
    >
      <motion.div 
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="bg-zinc-900 border border-zinc-855 border-zinc-800 rounded-2xl w-full max-w-4xl shadow-2xl relative flex flex-col max-h-[92vh] print:border-none print:shadow-none print:max-h-none print:static print:w-full print:h-full print:bg-white"
      >
        
        {/* Modal Controls (Hidden during print) */}
        <div className="p-4 bg-zinc-950 border-b border-zinc-850 flex items-center justify-between gap-4 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="text-sm sm:text-base font-bold text-white font-mono uppercase tracking-wider">
              Mahmoud's Curriculum Vitae
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer shadow-md shadow-indigo-500/10"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-750 text-zinc-300 font-semibold px-3.5 py-2 rounded-xl text-xs transition-all cursor-pointer"
              title="Copy markdown resume text to clipboard"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-indigo-450 text-indigo-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Markdown
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-850 rounded-xl transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-8 sm:p-12 overflow-y-auto flex-1 bg-zinc-900 text-left print:bg-white print:text-zinc-950 print:overflow-visible print:p-0">
          
          <div className="max-w-3xl mx-auto space-y-8 bg-zinc-950/50 p-6 sm:p-10 rounded-2xl border border-zinc-850/50 print:bg-white print:border-none print:p-0 print:text-zinc-950">
            
            {/* Header section */}
            <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row items-start justify-between gap-4 print:border-zinc-300 print:pb-4">
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-zinc-950 uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-lg font-mono font-bold text-indigo-400 uppercase tracking-wider print:text-zinc-700">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Contact grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-zinc-300 font-mono print:text-zinc-700">
                <span className="flex items-center gap-1.5 hover:text-white">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 print:text-zinc-600" />
                  {PERSONAL_INFO.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 print:text-zinc-600" />
                  {PERSONAL_INFO.phone}
                </span>
                <span className="flex items-center gap-1.5 col-span-1 sm:col-span-2">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 print:text-zinc-600" />
                  {PERSONAL_INFO.location}
                </span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white text-indigo-400 print:text-zinc-700 col-span-1 print:no-underline"
                >
                  <Github className="w-3.5 h-3.5 text-indigo-400 print:text-zinc-600" />
                  {PERSONAL_INFO.github.replace('https://', '')}
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-white text-indigo-400 print:text-zinc-700 col-span-1 print:no-underline"
                >
                  <Linkedin className="w-3.5 h-3.5 text-indigo-400 print:text-zinc-600" />
                  {PERSONAL_INFO.linkedin.replace('https://www.', '').replace('https://', '')}
                </a>
              </div>
            </div>

            {/* Profile section */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono font-black uppercase tracking-widest text-indigo-400 print:text-zinc-800 border-b border-zinc-900 pb-1.5 print:border-zinc-200">
                Professional Profile
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed print:text-zinc-800">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Education section */}
            <div className="space-y-3">
              <h2 className="text-sm font-mono font-black uppercase tracking-widest text-indigo-400 print:text-zinc-800 border-b border-zinc-900 pb-1.5 print:border-zinc-200">
                Education
              </h2>
              <div className="text-sm print:text-zinc-800">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-white print:text-zinc-950">{PERSONAL_INFO.education.institution}</h3>
                  <span className="text-xs font-mono text-zinc-400 font-bold print:text-zinc-600">{PERSONAL_INFO.education.gradYear}</span>
                </div>
                <p className="text-zinc-300 mt-0.5 print:text-zinc-700">{PERSONAL_INFO.education.degree}</p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 print:text-zinc-500">{PERSONAL_INFO.education.department}</p>
              </div>
            </div>

            {/* Experience section */}
            <div className="space-y-4">
              <h2 className="text-sm font-mono font-black uppercase tracking-widest text-indigo-400 print:text-zinc-800 border-b border-zinc-900 pb-1.5 print:border-zinc-200">
                Professional Experience
              </h2>
              
              <div className="space-y-6">
                {EXPERIENCE_HISTORY.map((exp) => (
                  <div key={exp.id} className="text-sm space-y-2 print:text-zinc-800 break-inside-avoid">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-white print:text-zinc-950 flex items-center gap-2">
                          {exp.role} 
                          <span className="text-xs font-normal text-zinc-400 print:text-zinc-600">[{exp.company}]</span>
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-indigo-400 font-bold print:text-zinc-600 whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-zinc-500 italic print:text-zinc-600">{exp.description}</p>
                    <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-300 print:text-zinc-800">
                      {exp.bulletPoints.map((bullet, idx) => (
                        <li key={idx} className="text-xs leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Spoken Languages split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-zinc-900 print:border-zinc-300 print:pt-4 break-inside-avoid">
              
              {/* Left Column: Skills list */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-black uppercase tracking-widest text-indigo-400 print:text-zinc-800 pb-1">
                  Skills & Proficiencies
                </h2>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 print:text-zinc-800">
                  {PERSONAL_INFO.skills.map((s) => (
                    <div key={s.name} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 print:bg-zinc-600"></span>
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Spoken Languages */}
              <div className="space-y-3">
                <h2 className="text-xs font-mono font-black uppercase tracking-widest text-indigo-400 print:text-zinc-800 pb-1">
                  Spoken Languages
                </h2>
                <div className="space-y-2 text-xs text-zinc-300 print:text-zinc-800">
                  {PERSONAL_INFO.languages.map((l) => (
                    <div key={l.name} className="flex justify-between items-center bg-zinc-900/50 p-2 rounded-lg border border-zinc-850/50 print:bg-zinc-100 print:border-zinc-200">
                      <span className="font-bold text-white print:text-zinc-950">{l.name}</span>
                      <span className="font-mono text-zinc-400 print:text-zinc-600">{l.label} ({l.level}%)</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Quick tip */}
          <div className="max-w-3xl mx-auto mt-6 p-4 bg-zinc-950/20 border border-zinc-850 rounded-xl flex items-center gap-2.5 text-xs text-zinc-500 font-mono print:hidden">
            <AlertCircle className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Tip: Clicking "Print / Save PDF" opens the default browser dialog where you can choose "Save as PDF" to download a clean, formatted copy.</span>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}

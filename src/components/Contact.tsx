import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Trash2, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [submissions, setSubmissions] = useState<ContactMessage[]>([]);
  const [showAdminConsole, setShowAdminConsole] = useState(false);

  // Load submissions from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('mahmoud_portfolio_messages');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading stored messages', e);
    }
  }, []);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!name.trim()) tempErrors.name = 'Please provide your name.';
    if (!email.trim()) {
      tempErrors.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please provide a valid email format (e.g., user@example.com).';
    }
    if (!subject.trim()) tempErrors.subject = 'Please provide a message subject.';
    if (!message.trim()) {
      tempErrors.message = 'Please write a brief message.';
    } else if (message.trim().length < 10) {
      tempErrors.message = 'Please provide more detail (minimum 10 characters).';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toLocaleString()
      };

      const updated = [newMessage, ...submissions];
      setSubmissions(updated);
      try {
        localStorage.setItem('mahmoud_portfolio_messages', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  const handleDeleteMessage = (id: string) => {
    const updated = submissions.filter((msg) => msg.id !== id);
    setSubmissions(updated);
    try {
      localStorage.setItem('mahmoud_portfolio_messages', JSON.stringify(updated));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative">
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400">
            Have an application design, a corporate portal requirement, or an open developer position? Let’s build something outstanding.
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Info Block (Col-span 5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white">Contact Specifications</h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Feel free to reach out via the validated form, direct email, or phone. I usually respond within 1 business day.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="block text-xs text-zinc-500 font-mono">DIRECT INQUIRIES</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="block text-xs text-zinc-500 font-mono">PHONE / MOBILE</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-semibold text-zinc-200 hover:text-white transition-colors">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 items-start">
                  <span className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <span className="block text-xs text-zinc-500 font-mono">LOCATION</span>
                    <span className="text-sm font-semibold text-zinc-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick validation indicator / Developer submissions sandbox trigger */}
            <div className="p-4 bg-zinc-900/30 border border-zinc-850 rounded-2xl flex flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-mono text-zinc-400 font-bold">LOCAL CLIENT PERSISTENCE ENGINES</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                This applet contains a localized submission buffer. Messages sent here accumulate in the Local Developer Dashboard for testing.
              </p>
              <button
                onClick={() => setShowAdminConsole(!showAdminConsole)}
                className="text-[11px] font-mono font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 px-3 py-1 rounded-lg transition-all cursor-pointer"
              >
                {showAdminConsole ? 'Close Submissions Box' : 'Open Submissions Box'} ({submissions.length})
              </button>
            </div>
          </div>

          {/* Form Block (Col-span 7) */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl text-left">
            {isSuccess ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Transmitted Successfully!</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Thank you for your response. Your message was processed and recorded in the submissions ledger. Try opening the **Submissions Box** below to verify.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-750 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Validated Inquiry Portal</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Mahmoud"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all ${
                        errors.name ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Your Email</label>
                    <input
                      id="contact-email"
                      type="text"
                      placeholder="e.g. developer@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      className={`w-full bg-zinc-950 border rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all ${
                        errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Frontend Development Opportunity"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                      if (errors.subject) setErrors((prev) => ({ ...prev, subject: '' }));
                    }}
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all ${
                      errors.subject ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">Detailed Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your project, timeline, or open role parameters..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    className={`w-full bg-zinc-950 border rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none transition-all ${
                      errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-500' : 'border-zinc-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-red-500 font-mono flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-zinc-950 font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all duration-200 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
                      Transmitting Ledger...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Transmit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Local Admin submissions sandbox panel (expandable list) */}
        {showAdminConsole && (
          <div className="mt-12 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl max-w-5xl mx-auto text-left space-y-6 animate-fade-in">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-emerald-400" />
                  Local Submissions Inbox
                </h4>
                <p className="text-xs text-zinc-500 font-mono">
                  Review transmitted messages registered in client session database.
                </p>
              </div>
              <button
                onClick={() => {
                  if (confirm('Clear all messages?')) {
                    setSubmissions([]);
                    localStorage.removeItem('mahmoud_portfolio_messages');
                  }
                }}
                disabled={submissions.length === 0}
                className="px-3 py-1.5 bg-red-950/20 hover:bg-red-900/30 text-red-400 disabled:opacity-50 font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg border border-red-900/30 flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear All
              </button>
            </div>

            {submissions.length === 0 ? (
              <div className="py-12 text-center text-zinc-600 space-y-2">
                <MessageSquare className="w-8 h-8 text-zinc-700 mx-auto" />
                <p className="text-sm font-mono">Inbox is empty.</p>
                <p className="text-xs text-zinc-600">Send an inquiry to populate the local ledger.</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {submissions.map((msg) => (
                  <div key={msg.id} className="p-4 bg-zinc-950 border border-zinc-850 rounded-xl space-y-2 relative group">
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="absolute top-4 right-4 text-zinc-500 hover:text-red-400 p-1 bg-zinc-900 rounded border border-zinc-850 hover:border-red-900/30 transition-colors"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono">
                      <span className="text-zinc-500">From: <strong className="text-zinc-200">{msg.name}</strong> ({msg.email})</span>
                      <span className="text-zinc-600">|</span>
                      <span className="text-zinc-500">{msg.timestamp}</span>
                    </div>

                    <h5 className="text-sm font-bold text-emerald-400">
                      Subject: {msg.subject}
                    </h5>

                    <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/50 p-2.5 rounded border border-zinc-900 font-sans">
                      {msg.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

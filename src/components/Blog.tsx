import { useState } from 'react';
import { BookOpen, Search, Clock, Calendar, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Architecture', 'Performance', 'Mobile'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-20 bg-zinc-950 relative">
      <div className="absolute top-1/3 right-12 w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Insights
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Engineering & Architecture Blog
          </h2>
          <p className="text-zinc-400">
            Articles, guides, and tutorials sharing best practices on frontend reliability, state optimization, and clean architectures.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-zinc-500" />
            </span>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl py-2 pl-10 pr-4 text-sm text-zinc-100 placeholder-zinc-500 transition-all outline-none"
            />
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-1.5 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-500/15 border-indigo-500/35 text-indigo-400'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <motion.div 
          layout
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                key={post.id}
                className="group bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 p-6 rounded-2xl flex flex-col justify-between transition-all duration-350 hover:shadow-lg hover:shadow-indigo-500/5 hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  {/* Meta details */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="px-2.5 py-1 rounded bg-zinc-950 text-indigo-400 border border-zinc-850 font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-600" /> {post.readTime}
                      </span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedPost(post)}
                    className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug"
                  >
                    {post.title}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom detail row */}
                <div className="pt-5 mt-5 border-t border-zinc-900/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono">
                    {post.date}
                  </span>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                  >
                    Read Post <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <div className="col-span-2 text-center py-16 bg-zinc-900/20 border border-dashed border-zinc-850 rounded-2xl">
              <BookOpen className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-500 font-mono text-sm">No articles match your criteria.</p>
            </div>
          )}
        </motion.div>

        {/* Full Blog Reader Modal / Detail Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-zinc-950/95 backdrop-blur-xs"
              />

              {/* Reader Container */}
              <motion.div 
                initial={{ scale: 0.95, y: 15, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 15, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh] z-10"
              >
                
                {/* Modal Reader Header */}
                <div className="p-6 border-b border-zinc-800 flex items-start justify-between bg-zinc-950">
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 mb-2 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back to blog list
                    </button>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded">
                        {selectedPost.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {selectedPost.readTime}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {selectedPost.date}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">{selectedPost.title}</h3>
                  </div>
                  
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-zinc-400 hover:text-white p-2 hover:bg-zinc-800 rounded-xl transition-all cursor-pointer animate-fade-in"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Reader Body */}
                <div className="p-8 overflow-y-auto space-y-6 flex-1 text-left prose prose-invert max-w-none">
                  <div className="text-zinc-350 space-y-6 text-sm sm:text-base leading-relaxed">
                    {selectedPost.content.split('\n\n').map((paragraph, index) => {
                      const cleanP = paragraph.trim();
                      if (!cleanP) return null;

                      // Handle bullet lists
                      if (cleanP.startsWith('* ') || cleanP.startsWith('- ')) {
                        const bullets = cleanP.split('\n');
                        return (
                          <ul key={index} className="list-disc list-inside space-y-2 pl-4 text-zinc-300">
                            {bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet.replace(/^[*-\s]+/, '')}</li>
                            ))}
                          </ul>
                        );
                      }

                      // Handle Markdown headings
                      if (cleanP.startsWith('### ')) {
                        return (
                          <h4 key={index} className="text-lg font-bold text-white pt-4 font-sans flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                            {cleanP.replace('### ', '')}
                          </h4>
                        );
                      }

                      // Handle subheadings
                      if (cleanP.startsWith('## ')) {
                        return (
                          <h3 key={index} className="text-xl font-black text-white pt-4 border-b border-zinc-850 pb-2 font-sans">
                            {cleanP.replace('## ', '')}
                          </h3>
                        );
                      }

                      // Standard text block
                      return <p key={index} className="font-sans text-zinc-300 leading-relaxed">{cleanP}</p>;
                    })}
                  </div>
                </div>

                {/* Modal Reader Footer */}
                <div className="p-6 border-t border-zinc-850 bg-zinc-950 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>By: <strong className="text-zinc-300">{selectedPost.author}</strong></span>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 text-zinc-350 font-bold rounded-xl text-xs transition-all cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

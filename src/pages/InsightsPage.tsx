import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import type { Article } from '../data/articles';
import { BookOpen, X, Clock, User, ChevronRight } from 'lucide-react';

interface InsightsPageProps {}

const CATEGORY_COLORS: Record<string, string> = {
  'Basel III': 'text-blue-300 bg-blue-500/10 border-blue-500/30',
  'Trade Finance': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  'Structured Credit': 'text-purple-300 bg-purple-500/10 border-purple-500/30',
  'Underwriting': 'text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/30',
};

export const InsightsPage: React.FC<InsightsPageProps> = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[#0B0D11] border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="badge-bronze">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Insights & Research Hub</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Institutional Risk Intelligence.{' '}
              <span className="text-gradient-bronze">From Greystone's Desk.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              In-depth research on risk management mechanics, regulatory capital implications, structured credit indemnity, and global trade finance developments — authored by Greystone's specialist underwriting and risk engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-[#11141A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {ARTICLES.map((article) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="glass-panel glass-panel-hover rounded-xl p-7 text-left space-y-5 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 cursor-pointer w-full"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border ${CATEGORY_COLORS[article.category] ?? 'text-slate-400 bg-white/5 border-white/10'}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-display text-lg font-bold text-white group-hover:text-[#F3E4C8] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{article.subtitle}</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-300">
                      <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{article.author}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{article.publishDate}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}

            {/* Coming Soon Card */}
            <div className="glass-panel rounded-xl p-7 space-y-4 border-dashed border-white/10 opacity-60">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-slate-500" />
              </div>
              <h3 className="font-serif-display text-lg font-bold text-slate-400">More Insights Coming</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Greystone's research team regularly publishes analysis on regulatory capital developments, cross-border trade finance mechanics, and risk engineering best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Modal Reader */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0D11]/85 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedArticle(null); }}
        >
          <div className="w-full max-w-3xl glass-panel rounded-2xl border border-[#D4AF37]/40 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-fade-in">
            {/* Article Modal Header */}
            <div className="px-7 py-5 border-b border-white/10 bg-[#181C24] flex items-start justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="space-y-2 pr-4">
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border inline-block ${CATEGORY_COLORS[selectedArticle.category] ?? ''}`}>
                  {selectedArticle.category}
                </span>
                <h2 className="font-serif-display text-xl font-bold text-white leading-snug">{selectedArticle.title}</h2>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#D4AF37]" /> {selectedArticle.author} — {selectedArticle.authorTitle}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedArticle.readTime}</span>
                  <span>•</span>
                  <span>{selectedArticle.publishDate}</span>
                </div>
              </div>
              <button onClick={() => setSelectedArticle(null)} className="text-slate-400 hover:text-white p-2 rounded hover:bg-white/10 cursor-pointer shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Content */}
            <div className="flex-1 overflow-y-auto px-7 py-7">
              <div className="prose prose-sm prose-invert max-w-none space-y-4">
                {selectedArticle.contentMarkdown.trim().split('\n').map((line, idx) => {
                  if (line.startsWith('# ')) return <h2 key={idx} className="font-serif-display text-2xl font-bold text-white mt-6 mb-3">{line.slice(2)}</h2>;
                  if (line.startsWith('## ')) return <h3 key={idx} className="font-serif-display text-lg font-bold text-white mt-5 mb-2">{line.slice(3)}</h3>;
                  if (line.startsWith('> ')) return <blockquote key={idx} className="border-l-4 border-[#D4AF37] pl-4 py-1 bg-[#202632] rounded-r text-slate-200 text-sm italic my-4">{line.slice(2)}</blockquote>;
                  if (line.startsWith('---')) return <div key={idx} className="bronze-accent-line my-6" />;
                  if (line.startsWith('- ')) return <div key={idx} className="flex items-start gap-2 my-1"><span className="text-[#D4AF37] mt-0.5">•</span><span className="text-slate-300 text-sm leading-relaxed">{line.slice(2)}</span></div>;
                  if (line.startsWith('|')) {
                    const cells = line.split('|').filter(Boolean).map(c => c.trim());
                    const isHeader = selectedArticle.contentMarkdown.split('\n')[idx + 1]?.startsWith('|---');
                    if (isHeader) return <tr key={idx}>{cells.map((c, ci) => <th key={ci} className="py-2 px-3 text-left text-xs font-bold text-[#D4AF37] uppercase tracking-wider border-b border-white/10">{c}</th>)}</tr>;
                    if (line.startsWith('|---')) return null;
                    return <tr key={idx}>{cells.map((c, ci) => <td key={ci} className="py-2 px-3 text-sm text-slate-300 border-b border-white/5">{c}</td>)}</tr>;
                  }
                  if (line.trim() === '') return <div key={idx} className="my-2" />;
                  return <p key={idx} className="text-slate-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{
                    __html: line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
                  }} />;
                })}
              </div>
            </div>

            <div className="px-7 py-4 border-t border-white/10 bg-[#11141A]">
              <button onClick={() => setSelectedArticle(null)} className="btn-secondary-dark text-xs py-2 px-4 cursor-pointer">← Back to Insights</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

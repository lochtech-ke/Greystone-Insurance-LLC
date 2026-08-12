import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, FileCheck, Layers, ChevronRight } from 'lucide-react';

interface HeadlineSwitcherProps {
  onOpenUnderwritingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const HeadlineSwitcher: React.FC<HeadlineSwitcherProps> = ({ onOpenUnderwritingModal, onNavigate }) => {
  const [activeVariant, setActiveVariant] = useState(0);

  const headlineVariants = [
    {
      title: "Insurance That Opens Doors to Institutional Capital.",
      highlight: "Opens Doors to Institutional Capital",
      focus: "Lender Collateral Enabler",
      desc: "Greystone structures specialized credit protection and asset insurance policies that act as bankable collateral — transforming risk transfer into immediate liquidity and senior debt expansion."
    },
    {
      title: "Transforming Financial Risk Into Creditworthy Collateral.",
      highlight: "Creditworthy Collateral",
      focus: "Financial Engineering",
      desc: "A Greystone policy does not merely protect balance sheets — it satisfies bank covenants, eliminates collateral haircuts, and unlocks syndicated credit facilities for enterprise growth."
    },
    {
      title: "De-Risking Capital. Unlocking Growth For Enterprise.",
      highlight: "Unlocking Growth For Enterprise",
      focus: "Covenant Compliance",
      desc: "Bridge the gap between risk management and debt financing. Naming lenders as first loss payees turns corporate assets into AAA-recognized collateral across global credit markets."
    }
  ];

  const current = headlineVariants[activeVariant];

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero overflow-hidden border-b border-[#D4AF37]/20">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-slate-400 mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-[#D4AF37]" /> Positioning Variant:
          </span>
          {headlineVariants.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => setActiveVariant(idx)}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                activeVariant === idx
                  ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8] shadow-md font-bold'
                  : 'bg-[#181C24]/80 text-slate-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              Option 0{idx + 1}: {variant.focus}
            </button>
          ))}
        </div>

        
        <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in key={activeVariant}">
          
          
          <div className="inline-flex items-center gap-2 bg-[#202632]/90 border border-[#D4AF37]/40 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#D4AF37] uppercase shadow-lg">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Your Risk. Our Responsibility.</span>
          </div>

          
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            {current.title.split(current.highlight)[0]}
            <span className="text-gradient-bronze font-cinzel underline decoration-[#D4AF37]/40 underline-offset-8">
              {current.highlight}
            </span>
            {current.title.split(current.highlight)[1]}
          </h1>

          
          <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto pt-2">
            {current.desc}
          </p>

          
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-6" />

          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenUnderwritingModal}
              className="btn-primary-bronze w-full sm:w-auto px-8 py-4 text-base tracking-wider uppercase font-bold shadow-2xl group cursor-pointer"
            >
              <FileCheck className="w-5 h-5 text-[#0B0D11]" />
              <span>Talk to an Underwriter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('unlocking-financing')}
              className="btn-secondary-dark w-full sm:w-auto px-8 py-4 text-base font-semibold group cursor-pointer"
            >
              <span>Explore Financial Mechanics</span>
              <ChevronRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-lg bg-[#181C24]/60 border border-white/5">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">$4.8B+</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Risk Capital Facilitated</div>
          </div>
          <div className="p-4 rounded-lg bg-[#181C24]/60 border border-white/5">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">A+ Rating</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Underwriting Syndicate Alignment</div>
          </div>
          <div className="p-4 rounded-lg bg-[#181C24]/60 border border-white/5">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">100%</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Bank Covenant Acceptance</div>
          </div>
          <div className="p-4 rounded-lg bg-[#181C24]/60 border border-white/5">
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">48 Hours</div>
            <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Underwriting Response SLA</div>
          </div>
        </div>

      </div>
    </div>
  );
};

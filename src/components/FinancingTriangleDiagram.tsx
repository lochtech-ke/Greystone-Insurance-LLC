import React, { useState } from 'react';


interface FinancingTriangleDiagramProps {}

export const FinancingTriangleDiagram: React.FC<FinancingTriangleDiagramProps> = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      num: 1,
      from: 'INSURED',
      fromSub: 'Corporate Borrower / Asset Owner',
      to: 'GREYSTONE',
      toSub: 'Underwriting & Risk Engineering',
      action: 'Risk Transfer',
      desc: 'The Insured transfers financial, property, or credit default risk to Greystone through a bespoke insurance policy structured to meet lender documentation requirements.',
      color: '#D4AF37',
    },
    {
      num: 2,
      from: 'GREYSTONE',
      fromSub: 'Underwriting & Risk Engineering',
      to: 'LENDER',
      toSub: 'Bank / Syndicate / Debt Arranger',
      action: 'Loss-Payee Endorsement Issued',
      desc: 'Greystone issues a Loss-Payee Endorsement directly naming the Lender. In case of insured loss, claim proceeds are remitted directly to the bank, not to the borrower.',
      color: '#C59B27',
    },
    {
      num: 3,
      from: 'LENDER',
      fromSub: 'Bank / Syndicate / Debt Arranger',
      to: 'INSURED',
      toSub: 'Corporate Borrower / Asset Owner',
      action: 'Capital Released & Credit Expanded',
      desc: 'With the Greystone Loss-Payee policy in place, the Lender accepts the asset at full collateral value (eliminating haircuts), approves the debt facility, and releases capital to the Insured.',
      color: '#8B6D36',
    },
  ];

  return (
    <div className="space-y-10">
      {/* Triangle SVG Diagram */}
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 620 420" className="w-full max-w-2xl" role="img" aria-label="Insurer-Insured-Lender financing triangle flow diagram">
          <defs>
            <linearGradient id="arrowGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#C59B27" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#D4AF37" />
            </marker>
          </defs>

          {/* Background subtle grid */}
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="1"/>
          </pattern>
          <rect width="620" height="420" fill="url(#grid)" />

          {/* Triangle connecting lines with arrows */}
          {/* Insured → Greystone */}
          <line x1="160" y1="320" x2="290" y2="110" stroke="url(#arrowGold)" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
          {/* Greystone → Lender */}
          <line x1="330" y1="110" x2="460" y2="320" stroke="url(#arrowGold)" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
          {/* Lender → Insured (bottom line) */}
          <line x1="440" y1="350" x2="180" y2="350" stroke="url(#arrowGold)" strokeWidth="2.5" markerEnd="url(#arrowhead)" />

          {/* Step Label on Lines */}
          <text x="195" y="200" textAnchor="middle" fill="#D4AF37" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" transform="rotate(-60 195 200)">① Risk Transfer</text>
          <text x="420" y="200" textAnchor="middle" fill="#D4AF37" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif" transform="rotate(60 420 200)">② Loss-Payee Clause</text>
          <text x="310" y="378" textAnchor="middle" fill="#D4AF37" fontSize="11" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">③ Capital Released</text>

          {/* === Greystone Node (Top Center) === */}
          <g transform="translate(310,90)" className="cursor-pointer" onClick={() => setActiveStep(activeStep === 1 ? null : 1)}>
            <rect x="-75" y="-38" width="150" height="76" rx="8" fill="#202632" stroke="#D4AF37" strokeWidth="2" />
            <rect x="-75" y="-38" width="150" height="4" rx="8" fill="#D4AF37" />
            <text y="-10" textAnchor="middle" fill="#D4AF37" fontSize="12" fontWeight="800" fontFamily="Cinzel, serif" letterSpacing="3">GREYSTONE</text>
            <text y="8" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Underwriting &</text>
            <text y="22" textAnchor="middle" fill="#CBD5E1" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Risk Engineering</text>
            <circle cx="0" cy="-30" r="4" fill="#D4AF37" opacity="0.6" />
          </g>

          {/* === Insured Node (Bottom Left) === */}
          <g transform="translate(145,350)" className="cursor-pointer" onClick={() => setActiveStep(activeStep === 0 ? null : 0)}>
            <rect x="-80" y="-38" width="160" height="76" rx="8" fill="#181C24" stroke="#94A3B8" strokeWidth="1.5" />
            <text y="-10" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Cinzel, serif" letterSpacing="2">INSURED</text>
            <text y="8" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Corporate Borrower /</text>
            <text y="22" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Asset Owner</text>
          </g>

          {/* === Lender Node (Bottom Right) === */}
          <g transform="translate(475,350)" className="cursor-pointer" onClick={() => setActiveStep(activeStep === 2 ? null : 2)}>
            <rect x="-80" y="-38" width="160" height="76" rx="8" fill="#181C24" stroke="#94A3B8" strokeWidth="1.5" />
            <text y="-10" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Cinzel, serif" letterSpacing="2">LENDER</text>
            <text y="8" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Bank / Syndicate /</text>
            <text y="22" textAnchor="middle" fill="#94A3B8" fontSize="9" fontFamily="Plus Jakarta Sans, sans-serif">Debt Arranger</text>
          </g>
        </svg>
      </div>

      {/* Step-By-Step Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
              activeStep === i
                ? 'bg-[#202632] border-[#D4AF37] shadow-lg'
                : 'bg-[#181C24] border-white/10 hover:border-[#D4AF37]/40'
            }`}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-sm font-black text-[#D4AF37] font-cinzel">
                {step.num}
              </div>
              <div>
                <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block">
                  {step.action}
                </span>
                <span className="text-[10px] text-slate-400">
                  {step.from} → {step.to}
                </span>
              </div>
            </div>
            {activeStep === i && (
              <p className="text-xs text-slate-300 leading-relaxed animate-fade-in">
                {step.desc}
              </p>
            )}
            {activeStep !== i && (
              <p className="text-xs text-slate-400 truncate">Click to expand explanation...</p>
            )}
          </div>
        ))}
      </div>

      {/* Legal Qualifier */}
      <div className="p-4 rounded-lg bg-[#11141A] border border-white/5 text-xs text-slate-500 leading-relaxed">
        <strong className="text-slate-300">Regulatory Disclaimer:</strong> The financing mechanics illustrated above represent the structural framework for loss-payee collateral arrangements. Specific outcomes — including collateral recognition, haircut elimination, and credit facility expansion — depend on individual underwriting assessment, jurisdictional regulatory review, lender credit committee approval, and applicable terms and conditions. Greystone makes no guarantee of specific financing outcomes.
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Landmark, Building, CheckCircle2 } from 'lucide-react';

export const FinancingTriangleDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // 1, 2, or 3

  const stepDetails = [
    {
      step: 1,
      title: 'Commercial Counterparty (Borrower / Contractor)',
      subtitle: 'Unbacked Risk & Capital Bottleneck',
      exposure: 'Uncollateralized Receivable / Performance Risk',
      description: 'The borrower or tender bidder holds commercial assets, export contracts, or procurement awards. However, commercial lenders apply steep haircuts (e.g., 50%+ discount) or mandate hefty cash collateral reserves, restricting operational liquidity.',
      keyMechanic: 'Risk Identification & Haircut Audit',
      covenants: [
        'Uncollateralized balance sheet receivables',
        'Strict lender concentration caps',
        'Tender mobilisation cash freeze requirements'
      ]
    },
    {
      step: 2,
      title: 'Greystone Underwritten Structure',
      subtitle: 'Risk Transfer & Loss-Payee Endorsement',
      exposure: 'Bankable Loss-Payee Collateral Instrument',
      description: 'Greystone structures a targeted insurance policy or financial guarantee underwritten by rated syndicate markets. The policy features an irrevocable Loss-Payee Endorsement naming the lending bank as primary beneficiary.',
      keyMechanic: 'Loss-Payee Endorsement & Syndicate Placement',
      covenants: [
        'Direct claim assignment to lending institution',
        'Insolvency, default, and non-performance indemnity',
        'A-rated syndicate financial strength backing'
      ]
    },
    {
      step: 3,
      title: 'Institutional Debt / Capital Provider',
      subtitle: 'Senior Debt Disbursed & Haircut Removed',
      exposure: 'Capital Released (Up to 90%+ LTV)',
      description: 'Under Basel III Credit Risk Mitigation (CRM) rules, the receiving bank substitutes the borrower credit rating with the syndicate rating, unlocking higher LTV facilities, reduced reserve ratios, and immediate loan disbursement.',
      keyMechanic: 'Basel III Credit Risk Substitution',
      covenants: [
        'Facility LTV ceiling boosted up to 90%',
        'Bank regulatory capital charge reduced by up to 70%',
        'Borrowing line extended without equity dilution'
      ]
    }
  ];

  const currentDetail = stepDetails.find(s => s.step === activeStep) || stepDetails[1];

  return (
    <div className="w-full max-w-5xl mx-auto p-6 sm:p-10 bg-[var(--paper-warm)] border border-[var(--rule-light)] corner-brackets shadow-lg space-y-8">
      
      {/* Diagram Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="mono-label text-[var(--bronze)] font-semibold">Interactive Workflow Protocol</span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)] mt-1">
          The Risk &rarr; Policy &rarr; Capital Pathway
        </h3>
        <p className="body-sm text-xs sm:text-sm text-[var(--text-muted-light)] mt-2">
          Click any stage below to inspect the legal, regulatory, and credit mechanisms in real time.
        </p>
      </div>

      {/* Interactive 3-Node Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        {/* Animated flow connectors (desktop) */}
        <div className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-[var(--bronze)] text-[var(--cream)] flex items-center justify-center shadow-lg animate-pulse-subtle">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        <div className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-[var(--bronze)] text-[var(--cream)] flex items-center justify-center shadow-lg animate-pulse-subtle">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* Node 1 */}
        <button
          type="button"
          onClick={() => setActiveStep(1)}
          className={`p-6 border text-center transition-all duration-300 rounded-md relative flex flex-col justify-between cursor-pointer text-left ${
            activeStep === 1
              ? 'bg-white border-2 border-[var(--bronze)] shadow-xl ring-2 ring-[var(--bronze)]/20 scale-[1.02]'
              : 'bg-white/80 border-[var(--rule-light)] opacity-80 hover:opacity-100 hover:border-[var(--bronze-light)]'
          }`}
        >
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)]">
              <Building className="w-6 h-6" />
            </div>
            <span className="mono-label text-[10px] text-[var(--bronze)] block mb-1 font-bold text-center">STAGE 01</span>
            <h4 className="font-serif text-base font-bold text-[var(--charcoal)] text-center mb-2">
              Borrower / Bidder
            </h4>
            <p className="body-sm text-xs text-[var(--text-muted-light)] text-center leading-relaxed">
              Holds contract or asset but constrained by bank credit limits or haircut requirements.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--rule-light)] mono-label text-[10px] text-center text-[var(--charcoal)] bg-[var(--paper-warm)] p-2 font-semibold">
            Status: Unbacked Exposure
          </div>
        </button>

        {/* Node 2 (Greystone Instrument - Highlighted Center) */}
        <button
          type="button"
          onClick={() => setActiveStep(2)}
          className={`p-6 border-2 text-center transition-all duration-300 rounded-md relative flex flex-col justify-between cursor-pointer text-left ${
            activeStep === 2
              ? 'bg-[var(--ink)] text-[var(--cream)] border-[var(--bronze-light)] shadow-2xl ring-2 ring-[var(--bronze-light)]/40 scale-[1.04] glow-active'
              : 'bg-[var(--ink-light)] text-[var(--cream)] border-[var(--rule-dark)] opacity-85 hover:opacity-100'
          }`}
        >
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--ink-light)] flex items-center justify-center text-[var(--bronze-light)] border border-[var(--bronze-light)]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="mono-label text-[10px] text-[var(--bronze-light)] block mb-1 font-bold text-center">STAGE 02 &bull; CORE</span>
            <h4 className="font-serif text-base font-bold text-[var(--cream)] text-center mb-2">
              Greystone Policy
            </h4>
            <p className="body-sm text-xs text-[var(--text-muted-dark)] text-center leading-relaxed">
              Underwritten instrument with direct Loss-Payee Endorsement to lender.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--rule-dark)] mono-label text-[10px] text-center text-[var(--bronze-light)] bg-[var(--ink)] p-2 font-bold">
            Status: Bankable Collateral
          </div>
        </button>

        {/* Node 3 */}
        <button
          type="button"
          onClick={() => setActiveStep(3)}
          className={`p-6 border text-center transition-all duration-300 rounded-md relative flex flex-col justify-between cursor-pointer text-left ${
            activeStep === 3
              ? 'bg-white border-2 border-[var(--bronze)] shadow-xl ring-2 ring-[var(--bronze)]/20 scale-[1.02]'
              : 'bg-white/80 border-[var(--rule-light)] opacity-80 hover:opacity-100 hover:border-[var(--bronze-light)]'
          }`}
        >
          <div>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)]">
              <Landmark className="w-6 h-6" />
            </div>
            <span className="mono-label text-[10px] text-[var(--bronze)] block mb-1 font-bold text-center">STAGE 03</span>
            <h4 className="font-serif text-base font-bold text-[var(--charcoal)] text-center mb-2">
              Lender / Bank
            </h4>
            <p className="body-sm text-xs text-[var(--text-muted-light)] text-center leading-relaxed">
              Accepts assigned policy under Basel III rules, releasing senior debt facility.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[var(--rule-light)] mono-label text-[10px] text-center text-[var(--charcoal)] bg-[var(--paper-warm)] p-2 font-semibold">
            Status: Debt Disbursed
          </div>
        </button>

      </div>

      {/* Stage Deep Dive Panel */}
      <div className="bg-white p-6 sm:p-8 border border-[var(--rule-light)] rounded-lg space-y-4 shadow-sm animate-fadeIn">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--rule-light)]">
          <div className="flex items-center gap-2">
            <span className="mono-label text-xs bg-[var(--paper-warm)] text-[var(--bronze)] px-2.5 py-1 rounded border border-[var(--rule-light)] font-bold">
              STAGE 0{currentDetail.step} DETAIL
            </span>
            <h4 className="font-serif text-xl font-bold text-[var(--charcoal)]">
              {currentDetail.title}
            </h4>
          </div>
          <span className="mono-label text-xs text-[var(--bronze)] font-semibold">
            {currentDetail.subtitle}
          </span>
        </div>

        <p className="body-sm text-xs sm:text-sm text-[var(--charcoal)] leading-relaxed">
          {currentDetail.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-[var(--paper-warm)] border border-[var(--rule-light)] rounded space-y-2">
            <span className="mono-label text-[11px] text-[var(--bronze)] block font-bold">
              PRIMARY MECHANISM
            </span>
            <div className="font-serif text-sm font-bold text-[var(--charcoal)]">
              {currentDetail.keyMechanic}
            </div>
            <div className="text-xs text-[var(--text-muted-light)]">
              Target Exposure: <strong className="text-[var(--charcoal)]">{currentDetail.exposure}</strong>
            </div>
          </div>

          <div className="p-4 bg-[var(--paper-warm)] border border-[var(--rule-light)] rounded space-y-2">
            <span className="mono-label text-[11px] text-[var(--bronze)] block font-bold">
              KEY COVENANT CLAUSES
            </span>
            <ul className="space-y-1 text-xs">
              {currentDetail.covenants.map((cov, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[var(--charcoal)]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--bronze)] shrink-0 mt-0.5" />
                  <span>{cov}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

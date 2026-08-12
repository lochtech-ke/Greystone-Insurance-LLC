import React from 'react';
import { FinancingTriangleDiagram } from '../components/FinancingTriangleDiagram';
import { ShieldCheck, ArrowRight, BookOpen, AlertTriangle, Check } from 'lucide-react';

interface UnlockingFinancingPageProps {
  onOpenUnderwritingModal: () => void;
}

export const UnlockingFinancingPage: React.FC<UnlockingFinancingPageProps> = ({ onOpenUnderwritingModal }) => {
  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[var(--bg-dark-950)] border-b border-[var(--bronze-500)]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="badge-bronze">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Flagship Educational Guide</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              How Insurance Unlocks{' '}
              <span className="text-gradient-bronze">Access to Institutional Capital.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              A comprehensive explanation of loss-payee mechanics, Basel III Credit Risk Mitigation, and how a Greystone policy transforms insured assets into lender-recognized collateral — opening senior debt facilities that would otherwise remain out of reach.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Disclaimer Banner */}
      <section className="bg-[var(--bronze-900)] border-b border-[var(--bronze-500)]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 text-sm">
            <AlertTriangle className="w-5 h-5 text-[var(--bronze-500)] shrink-0 mt-0.5" />
            <p className="text-slate-300">
              <strong className="text-[var(--bronze-500)]">Regulatory Disclaimer:</strong> The mechanics described on this page represent how Greystone's insurance structures can interact with debt financing arrangements. Specific financing outcomes — including collateral recognition, credit facility terms, and regulatory capital treatment — depend on individual underwriting assessment, jurisdictional regulatory review, and lender credit committee approval. This page is educational in nature and does not constitute financial or legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: The Core Concept */}
      <section className="py-20 bg-[var(--bg-dark-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div className="space-y-6">
              <h2 className="font-serif-display text-3xl font-bold text-white">
                Insurance as Collateral: The Core Concept
              </h2>
              <p className="text-slate-300 leading-relaxed">
                In traditional asset-backed lending, a commercial bank or debt syndicate extends credit against physical or financial assets — but applies a <strong className="text-white">collateral haircut</strong> to account for asset impairment risk. If a $10M cargo shipment has a 30% haircut, only $7M is recognized as eligible borrowing base.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The haircut exists because the lender bears risk: if the asset is lost, damaged, or defaults, the collateral value evaporates. But when a Greystone <strong className="text-[var(--bronze-500)]">Loss-Payee Endorsed</strong> policy is attached to that cargo, the risk is transferred to an A-rated underwriting syndicate. The lender's exposure to asset impairment is eliminated — and so is the haircut.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  'Risk transfer from borrower to A-rated insurer — not just indemnification',
                  'Lender named as first loss payee, receiving claim proceeds directly',
                  'Asset recognized at full face value in borrowing base calculations',
                  'Credit facility expanded without additional equity contribution',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[var(--bronze-500)] shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Numeric Example Box */}
            <div className="space-y-4">
              <h3 className="font-serif-display text-xl font-bold text-white">
                Worked Example: Marine Cargo Financing
              </h3>
              <div className="space-y-3">
                {[
                  {
                    scenario: 'Without Insurance',
                    assetValue: '$15,000,000',
                    haircut: '35%',
                    borrowingBase: '$9,750,000',
                    marginNote: 'Higher interest margin (+ ~65 bps)',
                    highlight: false
                  },
                  {
                    scenario: 'With Greystone Loss-Payee Policy',
                    assetValue: '$15,000,000',
                    haircut: '5%',
                    borrowingBase: '$14,250,000',
                    marginNote: 'Reduced interest margin (– ~65 bps)',
                    highlight: true
                  }
                ].map(({ scenario, assetValue, haircut, borrowingBase, marginNote, highlight }) => (
                  <div key={scenario} className={`p-5 rounded-xl border relative overflow-hidden ${highlight ? 'bg-[var(--bg-dark-800)] border-[var(--bronze-500)]/50' : 'bg-[var(--bg-dark-850)] border-[var(--bg-dark-700)]'}`}>
                    {highlight && <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D4AF37]" />}
                    <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${highlight ? 'text-[var(--bronze-500)]' : 'text-slate-400'}`}>{scenario}</div>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Asset Value</div>
                        <div className={`font-cinzel text-lg font-bold ${highlight ? 'text-white' : 'text-slate-400'}`}>{assetValue}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Haircut</div>
                        <div className={`font-cinzel text-lg font-bold ${highlight ? 'text-[var(--bronze-500)]' : 'text-slate-500 line-through'}`}>{haircut}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Borrowing Base</div>
                        <div className={`font-cinzel text-lg font-bold ${highlight ? 'text-white' : 'text-slate-400'}`}>{borrowingBase}</div>
                      </div>
                    </div>
                    <p className={`text-xs mt-3 text-center ${highlight ? 'text-[var(--bronze-500)] font-semibold' : 'text-slate-500'}`}>{marginNote}</p>
                  </div>
                ))}
                <div className="p-4 rounded bg-[var(--bg-dark-900)] border border-[var(--bg-dark-800)] text-center">
                  <div className="text-xs text-slate-500 mb-1">Capital Unlocked by Greystone Policy:</div>
                  <div className="font-cinzel text-2xl font-extrabold text-gradient-bronze">+ $4,500,000</div>
                  <p className="text-[10px] text-slate-500 mt-1">*Illustrative. Subject to underwriting and lender approval.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Triangle Flow Diagram */}
      <section className="py-20 bg-[var(--bg-dark-950)] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <div className="badge-bronze mx-auto inline-flex">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Structural Flow Mechanics</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              The Insurance-Lending Triangle
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Three parties. One structured arrangement. Click each step below to understand how risk flows between insurer, insured, and lender — and how capital is unlocked.
            </p>
          </div>
          <div className="relative">
            <div className="glow-effect top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10" />
            <div className="relative z-10">
              <FinancingTriangleDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Loss Payee Deep Dive */}
      <section className="py-20 bg-[var(--bg-dark-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="font-serif-display text-3xl font-bold text-white">
                Loss-Payee Endorsements: The Legal Mechanics
              </h2>
              <div className="bronze-accent-line w-24 mx-auto" />
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'What is a Loss-Payee Endorsement?',
                  content: 'A Loss-Payee Endorsement is a policy clause that designates a third party — typically the lending bank or debt syndicate agent — as the direct recipient of insurance claim proceeds in the event of an insured loss. It overrides the policyholder\'s right to receive claim funds and directs payment to the specified lender or security trustee.'
                },
                {
                  title: 'Banker\'s Loss Payee vs Standard Loss Payee',
                  content: 'A standard Loss-Payee clause designates the lender to receive proceeds. A Banker\'s Loss-Payee clause (used in trade finance and asset-backed lending) provides additional protection: the lender\'s rights to claim remain intact even if the insured borrower commits a policy breach, misrepresentation, or administrative default. Greystone issues Banker\'s Loss-Payee clauses as standard for all debt-facing policies.'
                },
                {
                  title: 'Subrogation Rights',
                  content: 'When Greystone pays a claim to the named lender, subrogation rights transfer to Greystone. This means Greystone may pursue recovery from third parties responsible for the loss — protecting both the lender\'s proceeds and allowing Greystone to recover claims costs from negligent parties.'
                },
                {
                  title: 'Non-Cancellation Notice Requirements',
                  content: 'To satisfy bank credit committee requirements, Greystone provides written notice of any policy cancellation, material amendment, or coverage reduction to the named lender a minimum of 30 days in advance. This protects the lender\'s security position and ensures continuous collateral coverage during the notice period.'
                },
                {
                  title: 'Basel III Credit Risk Mitigation (CRM)',
                  content: 'Under Basel III guidelines, when a qualifying insurance contract is issued by an insurer with a minimum A-rating, banks can substitute the insurer\'s credit rating for the borrower\'s credit rating when calculating Risk-Weighted Assets (RWA). This reduces the bank\'s regulatory capital requirement against the covered exposure — enabling banks to offer better terms and larger facilities.'
                },
              ].map(({ title, content }, i) => (
                <div key={title} className="p-6 rounded-xl bg-[var(--bg-dark-850)] border border-[var(--bg-dark-800)] space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-cinzel text-lg font-black text-[var(--bronze-500)]/40">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif-display text-lg font-bold text-white">{title}</h3>
                  </div>
                  <div className="w-12 h-px bg-[#D4AF37]/40 ml-10" />
                  <p className="text-slate-300 text-sm leading-relaxed ml-10">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--bg-dark-950)] border-t border-[var(--bronze-500)]/20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
            Ready to Structure Your Risk Into Bankable Collateral?
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Speak with a Greystone underwriter who will review your lender's covenants and design a loss-payee endorsed policy that directly satisfies their documentation requirements.
          </p>
          <button
            onClick={onOpenUnderwritingModal}
            className="btn-primary-bronze text-sm group cursor-pointer mx-auto"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>Request Underwriting Review</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
};

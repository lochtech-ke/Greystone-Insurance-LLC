import React from 'react';
import { ArrowRight, ShieldCheck, Landmark, Building, Lock } from 'lucide-react';

export const FinancingTriangleDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-[var(--paper-warm)] border border-[var(--rule-light)] corner-brackets shadow-sm">
      <div className="text-center mb-10">
        <span className="mono-label text-[var(--bronze)] font-semibold">Structural Diagram</span>
        <h3 className="font-serif text-2xl font-semibold text-[var(--charcoal)] mt-2">
          The Risk &rarr; Instrument &rarr; Capital Mechanism
        </h3>
        <p className="body-sm text-[var(--text-muted-light)] mt-3 max-w-2xl mx-auto">
          How a Greystone instrument transforms uncollateralized commercial exposure into bank-ready senior debt collateral.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        {/* Flow arrows between nodes (desktop only) */}
        <div className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-8 h-8 rounded-full bg-[var(--bronze)] flex items-center justify-center shadow-md">
            <ArrowRight className="w-4 h-4 text-[var(--cream)]" />
          </div>
        </div>
        <div className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-8 h-8 rounded-full bg-[var(--bronze)] flex items-center justify-center shadow-md">
            <ArrowRight className="w-4 h-4 text-[var(--cream)]" />
          </div>
        </div>

        {/* Node 1: Borrower / Bidder */}
        <div className="bg-white p-6 sm:p-7 border border-[var(--rule-light)] text-center relative z-10 flex flex-col justify-between rounded-sm shadow-sm">
          <div>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border-2 border-[var(--rule-light)]">
              <Building className="w-7 h-7" />
            </div>
            <span className="mono-label text-[var(--bronze)] block mb-2 font-semibold">Stage 01 &bull; Borrower / Bidder</span>
            <h4 className="font-serif text-lg font-semibold text-[var(--charcoal)] mb-3">
              Commercial Counterparty
            </h4>
            <p className="body-sm text-[var(--text-muted-light)] leading-relaxed">
              Holds operational asset, trade receivable, or tender opportunity, but faces collateral haircut or credit facility ceiling from lender.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[var(--rule-light)] mono-label text-[var(--charcoal)] bg-[var(--paper-warm)] p-2.5 font-semibold">
            Exposure: Unbacked Risk
          </div>
        </div>

        {/* Node 2: Greystone Policy / Instrument — Highlighted center */}
        <div className="bg-[var(--ink)] text-[var(--cream)] p-6 sm:p-7 border-2 border-[var(--bronze-light)] text-center relative z-10 flex flex-col justify-between rounded-sm shadow-lg corner-brackets">
          <div>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--ink-light)] flex items-center justify-center text-[var(--bronze-light)] border-2 border-[var(--bronze-light)]" style={{ borderColor: 'rgba(194, 155, 92, 0.5)' }}>
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="mono-label text-[var(--bronze-light)] block mb-2 font-semibold">Stage 02 &bull; Underwritten Structure</span>
            <h4 className="font-serif text-lg font-semibold text-[var(--cream)] mb-3">
              Greystone Instrument
            </h4>
            <p className="body-sm text-[var(--text-muted-dark)] leading-relaxed">
              Bespoke policy or guarantee issued with direct Loss-Payee Endorsement or performance indemnity transferring default risk to underwriter.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[var(--rule-dark)] mono-label text-[var(--bronze-light)] bg-[var(--ink-light)] p-2.5 font-semibold">
            Transformation: Bankable Collateral
          </div>
        </div>

        {/* Node 3: Senior Lender / Bank */}
        <div className="bg-white p-6 sm:p-7 border border-[var(--rule-light)] text-center relative z-10 flex flex-col justify-between rounded-sm shadow-sm">
          <div>
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border-2 border-[var(--rule-light)]">
              <Landmark className="w-7 h-7" />
            </div>
            <span className="mono-label text-[var(--bronze)] block mb-2 font-semibold">Stage 03 &bull; Financial Institution</span>
            <h4 className="font-serif text-lg font-semibold text-[var(--charcoal)] mb-3">
              Lender / Procurement Entity
            </h4>
            <p className="body-sm text-[var(--text-muted-light)] leading-relaxed">
              Accepts assigned policy as primary credit enhancement under Basel III guidelines, unlocking facility approval or tender award.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-[var(--rule-light)] mono-label text-[var(--charcoal)] bg-[var(--paper-warm)] p-2.5 font-semibold">
            Outcome: Capital Disbursed
          </div>
        </div>

      </div>

      {/* Connecting Flow Explanations */}
      <div className="mt-10 pt-6 border-t border-[var(--rule-light)] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3 bg-white p-4 border border-[var(--rule-light)] rounded-sm">
          <ArrowRight className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
          <p className="body-sm text-[var(--text-muted-light)] leading-relaxed">
            <strong className="text-[var(--charcoal)] font-semibold">Loss-Payee Assignment:</strong> Direct legal assignment ensures claim proceeds pay out straight to the lender in event of counterparty insolvency.
          </p>
        </div>
        <div className="flex items-start gap-3 bg-white p-4 border border-[var(--rule-light)] rounded-sm">
          <Lock className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
          <p className="body-sm text-[var(--text-muted-light)] leading-relaxed">
            <strong className="text-[var(--charcoal)] font-semibold">Subject to Underwriting:</strong> Final capital recognition depends on individual credit committee approval and policy terms.
          </p>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, X } from 'lucide-react';

interface CaseStudy {
  id: string;
  category: 'Infrastructure' | 'Cross-Border Trade' | 'Maritime & Logistics' | 'Energy';
  title: string;
  clientType: string;
  dealSize: string;
  location: string;
  instrument: string;
  before: {
    ltv: string;
    haircut: string;
    limitation: string;
  };
  after: {
    ltv: string;
    haircut: string;
    result: string;
  };
  summary: string;
  details: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-infra-1',
    category: 'Infrastructure',
    title: 'West Africa Port Expansion Tender Guarantee',
    clientType: 'EPC General Contractor Syndicate',
    dealSize: '$42,000,000 USD',
    location: 'West Africa / European Lender',
    instrument: 'Clause II: Advance Payment Guarantee & Performance Bond',
    before: {
      ltv: '35% LTV Limit',
      haircut: '65% Cash Collateral Required',
      limitation: 'Senior bank required $27.3M cash freeze in escrow, blocking project execution liquidity.'
    },
    after: {
      ltv: '90% Facility Capacity',
      haircut: '0% Cash Escrow Required',
      result: 'Greystone underwrote the $42M guarantee binder; lender released 100% mobilisation funds.'
    },
    summary: 'Unlocked $42M in upfront mobilisation liquidity without freezing contractor working capital in escrow.',
    details: [
      'Structured advance payment guarantee endorsed directly to international syndicate lender.',
      'Replaced 65% cash collateral requirement with rated syndicate policy indemnity.',
      'Project completed 4 months ahead of schedule with full capital velocity.'
    ]
  },
  {
    id: 'cs-trade-2',
    category: 'Cross-Border Trade',
    title: 'LatAm Agricultural Export Receivable Discounting',
    clientType: 'Commodity Exporter',
    dealSize: '$18,500,000 USD',
    location: 'Brazil / US Trade Finance Bank',
    instrument: 'Clause I: Credit Protection Policy (Loss-Payee)',
    before: {
      ltv: '45% Borrowing Base',
      haircut: '55% Counterparty Concentration Haircut',
      limitation: 'US lender restricted credit line due to single-buyer concentration limits in emerging markets.'
    },
    after: {
      ltv: '88% Discount Advance Rate',
      haircut: '12% Haircut',
      result: 'Greystone insured the deferred accounts receivable under Loss-Payee endorsement to senior lender.'
    },
    summary: 'Expanded trade receivable borrowing line from $8.3M to $16.2M for cross-border agri-commodities.',
    details: [
      'Substituted emerging market buyer credit rating with A-rated syndicate loss-payee protection.',
      'Complied with Basel III credit risk mitigation (CRM) framework for senior debt facility.',
      'Allowed exporter to expand harvest buybacks by 95% year-over-year.'
    ]
  },
  {
    id: 'cs-maritime-3',
    category: 'Maritime & Logistics',
    title: 'Middle East & Asia Fleet Cargo Transit Insurance',
    clientType: 'International Logistics Operator',
    dealSize: '$29,000,000 USD',
    location: 'Persian Gulf / Rotterdam Route',
    instrument: 'Clause V: Marine All-Risk & Warehouse Security',
    before: {
      ltv: '50% Warehouse LTV',
      haircut: '50% Transit Discount',
      limitation: 'Letter of Credit bank refused to release inventory facility without instituting heavy transit haircuts.'
    },
    after: {
      ltv: '92% Warehouse Financing',
      haircut: '8% Haircut',
      result: 'Comprehensive Institute Cargo (A) policy assigned to trade bank as sole collateral security.'
    },
    summary: 'Transformed in-transit cargo inventory into $26.6M bankable collateral for Letter of Credit financing.',
    details: [
      'Covered ocean transit, port storage, and inland logistics under unified All-Risk Loss-Payee binder.',
      'Trade bank accepted policy proceeds assignment to satisfy LC collateral covenants.',
      'Reduced financing interest margin by 175 bps.'
    ]
  },
  {
    id: 'cs-energy-4',
    category: 'Energy',
    title: 'European Solar Utility Performance Indemnity',
    clientType: 'Renewable Energy Developer',
    dealSize: '$65,000,000 USD',
    location: 'Southern Europe / Institutional Fund',
    instrument: 'Clause III: Performance Bond & Revenue Protection',
    before: {
      ltv: '55% Senior Debt Ceiling',
      haircut: '45% Offtaker Deficit Risk Haircut',
      limitation: 'Institutional debt fund required additional sponsor equity or credit guarantee to approve construction debt.'
    },
    after: {
      ltv: '85% Debt Financing',
      haircut: '15% Haircut',
      result: 'Greystone underwrote contract performance security, satisfying project finance debt covenants.'
    },
    summary: 'Secured $55.2M senior debt facility for 120MW solar utility project without sponsor equity dilution.',
    details: [
      'Structured long-term performance indemnity for utility-scale solar asset commissioning.',
      'Loss-Payee clause assigned directly to project finance trustee.',
      'Avoided $12M sponsor equity injection.'
    ]
  }
];

export const CaseStudyShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toggleState, setToggleState] = useState<Record<string, 'before' | 'after'>>({});
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Infrastructure', 'Cross-Border Trade', 'Maritime & Logistics', 'Energy'];

  const filteredStudies = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(s => s.category === activeCategory);

  const getMode = (id: string) => toggleState[id] || 'after';

  const toggleMode = (id: string) => {
    setToggleState(prev => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <div className="w-full space-y-8">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition-all border ${
              activeCategory === cat
                ? 'bg-[var(--bronze)] border-[var(--bronze-light)] text-[var(--cream)] shadow-md font-semibold'
                : 'bg-white border-[var(--rule-light)] text-[var(--charcoal)] hover:border-[var(--bronze)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStudies.map((study) => {
          const mode = getMode(study.id);
          const isAfter = mode === 'after';

          return (
            <div
              key={study.id}
              className="clause-card h-full flex flex-col justify-between relative overflow-hidden group transition-all duration-300"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-[var(--rule-light)]">
                  <span className="mono-label text-[11px] text-[var(--bronze)] font-bold">
                    {study.category} &bull; {study.location}
                  </span>
                  <span className="font-mono text-xs font-semibold bg-[var(--paper-warm)] px-2 py-0.5 rounded border border-[var(--rule-light)]">
                    {study.dealSize}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[var(--charcoal)] mb-2">
                  {study.title}
                </h3>
                <p className="body-sm text-xs text-[var(--text-muted-light)] mb-4">
                  <strong className="text-[var(--charcoal)] font-semibold">Client:</strong> {study.clientType}
                </p>

                {/* Interactive Toggle Switch */}
                <div className="p-3 bg-[var(--paper-warm)] border border-[var(--rule-light)] rounded mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono-label text-[10px] text-[var(--charcoal)] font-bold uppercase">
                      Impact Comparison
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleMode(study.id)}
                      className="mono-label text-[10px] px-2.5 py-1 rounded bg-[var(--bronze)] text-[var(--cream)] hover:bg-[var(--bronze-hover)] transition-colors flex items-center gap-1 font-semibold"
                    >
                      <span>Switch to {isAfter ? 'Unbacked Constraint' : 'Greystone Structure'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Toggle view content */}
                  {isAfter ? (
                    <div className="bg-[var(--ink)] text-[var(--cream)] p-3 rounded border border-[var(--bronze-light)] space-y-1 text-xs animate-fadeIn">
                      <div className="flex justify-between font-mono font-bold text-[var(--bronze-light)]">
                        <span>LTV: {study.after.ltv}</span>
                        <span>Haircut: {study.after.haircut}</span>
                      </div>
                      <p className="body-sm text-[11px] text-[var(--cream)] opacity-90 leading-tight">
                        {study.after.result}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 text-red-900 p-3 rounded space-y-1 text-xs animate-fadeIn">
                      <div className="flex justify-between font-mono font-bold text-red-700">
                        <span>LTV: {study.before.ltv}</span>
                        <span>Haircut: {study.before.haircut}</span>
                      </div>
                      <p className="body-sm text-[11px] text-red-800 leading-tight">
                        {study.before.limitation}
                      </p>
                    </div>
                  )}
                </div>

                <p className="body-sm text-xs text-[var(--charcoal)] leading-relaxed font-medium mb-4">
                  {study.summary}
                </p>
              </div>

              {/* Action link */}
              <div className="pt-3 border-t border-[var(--rule-light)] flex items-center justify-between">
                <span className="mono-label text-[10px] text-[var(--text-muted-light)] line-clamp-1">
                  {study.instrument}
                </span>
                <button
                  onClick={() => setSelectedCaseModal(study)}
                  className="mono-label text-[11px] text-[var(--bronze)] hover:text-[var(--bronze-hover)] font-semibold shrink-0 flex items-center gap-1"
                >
                  <span>Full Structuring Case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-2 border-[var(--bronze)] max-w-2xl w-full rounded-lg p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto corner-brackets">
            
            <button
              onClick={() => setSelectedCaseModal(null)}
              className="absolute top-4 right-4 p-2 text-[var(--charcoal)] hover:text-[var(--bronze)] rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div>
              <span className="mono-label text-xs text-[var(--bronze)] font-bold">
                {selectedCaseModal.category} &bull; {selectedCaseModal.location}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--charcoal)] mt-1">
                {selectedCaseModal.title}
              </h3>
              <p className="body-sm text-xs text-[var(--text-muted-light)] mt-1">
                Facility Size: <strong className="text-[var(--charcoal)] font-mono">{selectedCaseModal.dealSize}</strong> | Instrument: <strong className="text-[var(--charcoal)]">{selectedCaseModal.instrument}</strong>
              </p>
            </div>

            <div className="p-4 bg-[var(--paper-warm)] border border-[var(--rule-light)] rounded space-y-2">
              <h4 className="mono-label text-xs text-[var(--bronze)] font-bold">TRANSACTION STRUCTURE BREAKDOWN</h4>
              <ul className="space-y-2 text-xs">
                {selectedCaseModal.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-[var(--charcoal)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--bronze)] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-red-50 border border-red-200 rounded">
                <span className="block text-[10px] text-red-700 font-bold uppercase mb-1">Traditional Constraint</span>
                <div className="text-red-900 font-bold">{selectedCaseModal.before.ltv}</div>
                <div className="text-red-800 text-[11px] mt-1">{selectedCaseModal.before.haircut}</div>
              </div>
              <div className="p-3 bg-[var(--ink)] text-[var(--cream)] border border-[var(--bronze-light)] rounded">
                <span className="block text-[10px] text-[var(--bronze-light)] font-bold uppercase mb-1">Greystone Loss-Payee</span>
                <div className="font-bold text-[var(--bronze-light)]">{selectedCaseModal.after.ltv}</div>
                <div className="text-[11px] mt-1 opacity-90">{selectedCaseModal.after.haircut}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--rule-light)] flex justify-end">
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="btn btn-secondary text-xs"
              >
                Close Breakdown
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

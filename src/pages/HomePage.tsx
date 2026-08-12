import React from 'react';
import { HeadlineSwitcher } from '../components/HeadlineSwitcher';
import { CollateralCalculator } from '../components/CollateralCalculator';
import { PRODUCT_LINES } from '../data/products';
import { CASE_STUDIES } from '../data/caseStudies';
import {
  ShieldCheck, Ship, Building2, Coins, FileText,
  ArrowRight, ChevronRight, Check, AlertTriangle
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck, Ship, Building2, Coins, FileText,
};

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Risk Assessment',
    desc: 'Greystone underwriters conduct a comprehensive financial risk audit — reviewing lender covenants, asset valuations, counterparty credit exposures, and jurisdictional regulatory requirements.',
  },
  {
    num: '02',
    title: 'Policy Structuring',
    desc: 'A bespoke policy architecture is engineered — including Loss-Payee Endorsements, subrogation rights, claim timetables, and minimum cancellation notices required by bank credit committees.',
  },
  {
    num: '03',
    title: 'Underwriting',
    desc: 'Placement with A-rated reinsurance and Lloyd\'s syndicates. Greystone issues formal Underwriting Certificates of Financial Collateral directly to the lender\'s administrative agent.',
  },
  {
    num: '04',
    title: 'Claims Responsibility',
    desc: 'In the event of an insured loss, Greystone\'s global claims desk activates within 24 hours. Our responsibility commitment ensures lenders receive claim proceeds within agreed SLA timelines.',
  },
];

const TRUST_BADGES = [
  { label: 'A.M. Best Rated Syndicates', icon: ShieldCheck },
  { label: 'FCA / PRA Governance Standards', icon: Building2 },
  { label: 'Solvency II Compliant Framework', icon: ShieldCheck },
  { label: 'Basel III Credit Risk Mitigation', icon: Coins },
  { label: 'International Group P&I Alignment', icon: Ship },
  { label: 'ISO 31000 Risk Management', icon: FileText },
];

interface HomePageProps {
  onOpenUnderwritingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenUnderwritingModal, onNavigate }) => {
  return (
    <main>
      {/* === 1. HERO SECTION === */}
      <HeadlineSwitcher
        onOpenUnderwritingModal={onOpenUnderwritingModal}
        onNavigate={onNavigate}
      />

      {/* === 2. TRUST / ACCREDITATION BAR === */}
      <section className="bg-[var(--bg-dark-900)] border-b border-[var(--bg-dark-800)] py-5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 whitespace-nowrap shrink-0">
              Standards & Governance:
            </span>
            <div className="flex items-center gap-6 flex-nowrap">
              {TRUST_BADGES.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-slate-300 whitespace-nowrap text-sm font-medium shrink-0"
                >
                  <Icon className="w-4 h-4 text-[var(--bronze-500)] shrink-0" />
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === 3. INSURANCE AS FINANCIAL INSTRUMENT === */}
      <section className="py-20 bg-[var(--bg-dark-950)] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6">
              <div className="badge-bronze">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Insurance as a Financial Instrument</span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                A Greystone Policy Doesn't Just Protect Assets —{' '}
                <span className="text-gradient-bronze">It Makes Assets Bankable.</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Traditional insurance indemnifies loss. Greystone's institutional policies go further: by naming the lender as <strong className="text-white">first loss payee</strong>, the insured asset transforms from a discounted collateral item into a fully recognized credit security. Banks reduce their regulatory capital reserves. Borrowers expand their credit lines. Both parties share the benefit of institutional-grade risk transfer.
              </p>
              <div className="space-y-3">
                {[
                  'Loss-Payee Endorsements that satisfy bank covenant documentation requirements',
                  'Asset haircut elimination from 35% down to as low as 5% with Greystone placement',
                  'Basel III Credit Risk Mitigation qualification — reducing lender RWA calculations',
                  'Direct claim payout to lender within agreed SLA — no liquidity risk for the bank',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[var(--bronze-500)] shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('unlocking-financing')}
                  className="btn-primary-bronze text-sm group cursor-pointer"
                >
                  <span>Explore the Mechanics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onOpenUnderwritingModal}
                  className="btn-secondary-dark text-sm cursor-pointer"
                >
                  <span>Talk to an Underwriter</span>
                </button>
              </div>
            </div>

            {/* Inline mini-diagram */}
            <div className="space-y-3">
              {[
                {
                  step: 'Without Greystone',
                  desc: 'Lender applies 30–40% haircut on collateral. Borrowing base reduced. Higher interest margin. Equity dilution often required.',
                  highlight: false,
                  icon: AlertTriangle,
                  iconColor: 'text-slate-500',
                },
                {
                  step: 'With Greystone Loss-Payee Policy',
                  desc: 'Lender accepts asset at 95–100% face value. Borrowing base maximized. Margin reduced 40–75bps. No equity dilution.',
                  highlight: true,
                  icon: ShieldCheck,
                  iconColor: 'text-[var(--bronze-500)]',
                },
              ].map(({ step, desc, highlight, icon: Icon, iconColor }) => (
                <div
                  key={step}
                  className={`p-6 rounded-xl border relative overflow-hidden ${
                    highlight
                      ? 'bg-[var(--bg-dark-800)] border-[var(--bronze-500)]/50 shadow-lg'
                      : 'bg-[var(--bg-dark-850)] border-[var(--bg-dark-800)]'
                  }`}
                >
                  {highlight && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#D4AF37]" />
                  )}
                  <div className="flex items-start gap-3">
                    <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
                    <div>
                      <h4 className={`font-semibold text-sm mb-1.5 ${highlight ? 'text-[var(--bronze-500)]' : 'text-slate-400'}`}>
                        {step}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Asset Bankability Matrix Mini-Table */}
              <div className="p-4 rounded-xl bg-[var(--bg-dark-900)] border border-[var(--bg-dark-700)] overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[var(--bg-dark-700)]">
                      <th className="text-left py-2 pr-4 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Asset Type</th>
                      <th className="text-right py-2 pr-3 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">Standard Haircut</th>
                      <th className="text-right py-2 text-[var(--bronze-500)] font-semibold uppercase tracking-wider text-[10px]">Greystone Haircut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { asset: 'Trade Receivables', standard: '30%', greystone: '5%' },
                      { asset: 'Maritime Cargo (Transit)', standard: '35%', greystone: '5%' },
                      { asset: 'Commercial Property', standard: '40%', greystone: '10%' },
                      { asset: 'Equipment / Machinery', standard: '45%', greystone: '10%' },
                    ].map(({ asset, standard, greystone }) => (
                      <tr key={asset} className="border-b border-[var(--bg-dark-800)]">
                        <td className="py-2 pr-4 text-slate-200">{asset}</td>
                        <td className="py-2 pr-3 text-right text-slate-400 line-through">{standard}</td>
                        <td className="py-2 text-right font-bold text-[var(--bronze-500)]">{greystone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-[10px] text-slate-500 mt-2">*Illustrative estimates. Actual haircuts subject to underwriting assessment and lender credit committee approval.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === 4. COLLATERAL CALCULATOR === */}
      <section className="py-20 bg-[var(--bg-dark-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 badge-bronze mx-auto">
              <Coins className="w-3.5 h-3.5" />
              <span>Liquidity Impact Simulator</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              Calculate How Much Capital a Greystone Policy Unlocks
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            </p>
          </div>
          <div className="relative">
            <div className="glow-effect top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <CollateralCalculator onOpenUnderwritingModal={onOpenUnderwritingModal} />
            </div>
          </div>
        </div>
      </section>

      {/* === 5. PRODUCT PILLARS === */}
      <section className="py-20 bg-[var(--bg-dark-950)] relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 badge-bronze mx-auto">
              <FileText className="w-3.5 h-3.5" />
              <span>Core Lines of Business</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              Institutional-Grade Risk Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Each Greystone product line is engineered to function as a financial instrument — not merely an indemnity product. Every policy is structured with lender documentation and covenant compliance in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PRODUCT_LINES.map((product) => {
              const Icon = ICON_MAP[product.iconName] ?? ShieldCheck;
              return (
                <div
                  key={product.id}
                  className="glass-panel glass-panel-hover rounded-xl p-7 space-y-5 group cursor-pointer"
                  onClick={() => onNavigate('services')}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-lg bg-[#D4AF37]/15 border border-[var(--bronze-500)]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-all">
                      <Icon className="w-5 h-5 text-[var(--bronze-500)]" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[var(--bronze-500)] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-bold text-white mb-2 group-hover:text-[#F3E4C8] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{product.shortDesc}</p>
                  </div>
                  <div className="bronze-left-border pl-3 py-1">
                    <p className="text-xs text-[var(--bronze-500)] font-semibold leading-relaxed">{product.lossPayeeBenefit}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="btn-secondary-dark text-sm group cursor-pointer"
            >
              <span>View All Solutions & Coverage Details</span>
              <ArrowRight className="w-4 h-4 text-[var(--bronze-500)] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* === 6. PROCESS STRIP === */}
      <section className="py-20 bg-[var(--bg-dark-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              How Greystone Works
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto text-sm">
              From risk assessment to claims responsibility — our four-stage institutional process.
            </p>
            <div className="bronze-accent-line w-24 mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.num} className="relative">
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden xl:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-xl bg-[var(--bg-dark-850)] border border-[var(--bg-dark-800)] h-full space-y-4">
                  <div className="font-cinzel text-4xl font-black text-[var(--bronze-500)]/20 leading-none">
                    {step.num}
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <div className="w-10 h-px bg-[#D4AF37]" />
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 7. CASE STUDIES / SOCIAL PROOF === */}
      <section className="py-20 bg-[var(--bg-dark-950)] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 badge-bronze mx-auto">
              <Building2 className="w-3.5 h-3.5" />
              <span>Institutional Case Studies</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              Capital Unlocked. Responsibility Delivered.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Real-world examples of how Greystone structured risk transfer to satisfy lenders and release capital for enterprise growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="glass-panel rounded-xl p-7 border border-[var(--bg-dark-700)] space-y-5 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs text-[var(--bronze-500)] font-bold uppercase tracking-wider block mb-1">
                      {cs.clientIndustry}
                    </span>
                    <span className="text-[10px] text-slate-400">{cs.clientRegion}</span>
                  </div>
                  <span className="badge-bronze text-[10px]">{cs.facilitySize}</span>
                </div>
                <div className="space-y-3 flex-1">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge:</h4>
                    <p className="text-sm text-slate-200 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Greystone Solution:</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{cs.greystoneSolution}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-[var(--bg-dark-700)] space-y-2">
                  <h4 className="text-xs font-bold text-[var(--bronze-500)] uppercase tracking-wider">Capital Result:</h4>
                  <p className="text-sm font-semibold text-white leading-relaxed">{cs.capitalResult}</p>
                  <p className="text-[10px] text-slate-500">Mechanism: {cs.covenantMechanism}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-8 max-w-xl mx-auto">
            *Case study details are representative and anonymized for client confidentiality. Specific outcomes depend on underwriting assessment, terms and conditions, and lender approval.
          </p>
        </div>
      </section>

      {/* === 8. CLOSING CTA BANNER === */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2B2312 0%, #8B6D36 50%, #C59B27 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#0B0D11]/70 bg-[var(--bg-dark-950)]/10 px-4 py-1.5 rounded-full border border-[#0B0D11]/20">
            Your Risk. Our Responsibility.
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black text-[#0B0D11] leading-tight">
            Let's Structure Your Risk Into Opportunity.
          </h2>
          <p className="text-[#2B1A00] text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Speak directly with a Greystone underwriter to design a loss-payee collateral policy that satisfies your lender's covenants and unlocks capital for your next phase of growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenUnderwritingModal}
              className="bg-[var(--bg-dark-950)] text-white border border-white/30 font-bold px-8 py-4 rounded hover:bg-[var(--bg-dark-850)] transition-all text-sm uppercase tracking-wider flex items-center gap-2 group cursor-pointer shadow-xl"
            >
              <ShieldCheck className="w-5 h-5 text-[var(--bronze-500)]" />
              <span>Request Underwriting Review</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#0B0D11] font-semibold border border-[#0B0D11]/30 px-8 py-4 rounded hover:bg-[var(--bg-dark-950)]/10 transition-all text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Global Desk</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

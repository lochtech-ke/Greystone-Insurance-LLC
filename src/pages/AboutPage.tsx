import React from 'react';
import { Shield, Target, Globe, Award, ChevronRight, ArrowRight, Check } from 'lucide-react';

interface AboutPageProps {
  onOpenUnderwritingModal: () => void;
  onNavigate: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenUnderwritingModal, onNavigate }) => {
  const values = [
    {
      icon: Shield,
      title: 'Our Responsibility',
      desc: 'Every Greystone policy carries the full weight of our institutional commitment. "Your Risk. Our Responsibility." is not a tagline — it is the contractual standard by which we measure every underwriting decision, claims response, and client engagement.'
    },
    {
      icon: Target,
      title: 'Precision Over Volume',
      desc: 'Greystone operates as a specialist risk engineering firm, not a high-volume retail broker. We accept a limited number of mandates per quarter to ensure every client receives dedicated underwriting attention and bespoke policy architecture.'
    },
    {
      icon: Globe,
      title: 'Global Syndicate Access',
      desc: 'Through strategic partnerships with Lloyd\'s syndicates, A.M. Best-rated reinsurers, and specialist international underwriting markets, Greystone provides access to institutional capacity that most clients cannot reach independently.'
    },
    {
      icon: Award,
      title: 'Institutional Credibility',
      desc: 'Greystone policies are engineered to satisfy the scrutiny of bank credit committees, regulatory bodies, and institutional investors. Our underwriting certificates carry weight in documentation-heavy finance environments.'
    },
  ];

  const institutionalVsRetail = [
    { dimension: 'Policy Objective', institutional: 'Loss-payee collateral & covenant compliance', retail: 'Asset indemnification only' },
    { dimension: 'Structuring Process', institutional: 'Bespoke engineering with legal & lender review', retail: 'Standardized off-the-shelf product' },
    { dimension: 'Claims Flow', institutional: 'Direct to lender administrative agent', retail: 'Directly to policyholder' },
    { dimension: 'Underwriting Response', institutional: '48-hour structured assessment SLA', retail: 'Automated or broker-mediated' },
    { dimension: 'Basel III Recognition', institutional: 'Credit Risk Mitigation (CRM) eligible', retail: 'Not applicable' },
    { dimension: 'Target Client', institutional: 'CFOs, Treasurers, PE sponsors, project lenders', retail: 'SMEs and individual policyholders' },
  ];

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[#0B0D11] border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="badge-bronze">
              <Shield className="w-3.5 h-3.5" />
              <span>About Greystone Insurance LLC</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              The Financial Risk Engineering Firm That{' '}
              <span className="text-gradient-bronze">Turns Insurance Into Capital.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Greystone Insurance LLC was established to address a structural gap in the institutional finance market: the failure of conventional insurance to speak the language of lenders, debt covenants, and capital markets. We exist to bridge that gap with precision underwriting.
            </p>
            <div className="bronze-accent-line w-20" />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#11141A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif-display text-3xl font-bold text-white">
                Our Mandate: Risk Transferred. Capital Unlocked.
              </h2>
              <p className="text-slate-300 leading-relaxed">
                At Greystone, we operate on a singular conviction: <strong className="text-white">insurance is a financial instrument</strong>, not merely an indemnity product. When structured correctly — with loss-payee endorsements, subrogation rights, and lender-compatible documentation — a Greystone policy becomes the bridge between a borrower's risk profile and a lender's willingness to deploy capital.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our underwriters do not simply assess physical or financial risks. They study lender covenants, credit facility documentation, and Basel III capital adequacy frameworks to engineer policies that qualify as Credit Risk Mitigation instruments — recognized by bank credit committees and approved by institutional investors.
              </p>
              <div className="p-5 rounded-xl bg-[#202632] border-l-4 border-[#D4AF37]">
                <blockquote className="font-serif-display text-lg italic text-slate-200 leading-relaxed">
                  "Insurance that satisfies your lender is not an expense — it is leverage. Greystone is in the business of turning risk management into a strategic financing advantage."
                </blockquote>
                <p className="text-xs text-slate-400 mt-3 uppercase tracking-wider font-semibold">
                  — Greystone Risk Engineering Mandate
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass-panel glass-panel-hover p-6 rounded-xl space-y-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif-display text-base font-bold text-white">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Responsibility Philosophy */}
      <section className="py-20 bg-[#0B0D11] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 space-y-3">
            <div className="badge-bronze mx-auto inline-flex">
              <Shield className="w-3.5 h-3.5" />
              <span>Our Responsibility Philosophy</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              "Your Risk. Our Responsibility." — What It Means.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                phase: 'At Underwriting',
                icon: Shield,
                promise: 'Responsibility means engineering the policy correctly — not just issuing coverage. We review your lender\'s covenants before structuring to ensure the policy satisfies their documentation requirements.'
              },
              {
                phase: 'During the Policy Term',
                icon: Award,
                promise: 'Responsibility means proactive monitoring of your risk environment and credit exposures. Greystone notifies you — not the other way around — when market conditions warrant a policy review.'
              },
              {
                phase: 'At Claims',
                icon: Target,
                promise: 'Responsibility means our 24-hour claims activation protocol. We deploy adjusters, represent your interests with reinsurers, and direct proceeds to your lender within documented SLA timelines.'
              },
            ].map(({ phase, icon: Icon, promise }) => (
              <div key={phase} className="glass-panel rounded-xl p-8 space-y-5 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif-display text-lg font-bold text-white">{phase}</h3>
                <div className="bronze-accent-line w-12 mx-auto" />
                <p className="text-slate-300 text-sm leading-relaxed">{promise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional vs Retail Comparison */}
      <section className="py-20 bg-[#11141A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              Institutional-Grade Risk Transfer
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Greystone operates at a different level to conventional insurance brokers. Here is the structural distinction.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-[#181C24] border-b border-white/10">
                  <th className="py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-slate-400">Dimension</th>
                  <th className="py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-[#D4AF37]">Greystone Institutional</th>
                  <th className="py-4 px-6 text-left text-xs font-bold uppercase tracking-widest text-slate-500">Standard Retail</th>
                </tr>
              </thead>
              <tbody>
                {institutionalVsRetail.map(({ dimension, institutional, retail }, i) => (
                  <tr key={dimension} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-[#11141A]' : 'bg-[#181C24]/50'}`}>
                    <td className="py-4 px-6 text-slate-200 text-sm font-semibold">{dimension}</td>
                    <td className="py-4 px-6 text-slate-200 text-sm flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      {institutional}
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-sm">{retail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regulatory & Capacity Standards */}
      <section className="py-16 bg-[#0B0D11] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'FCA / PRA Governance', sub: 'UK Regulatory Alignment' },
              { label: 'Solvency II Compliant', sub: 'EU Capital Framework' },
              { label: 'A.M. Best Syndicate Placement', sub: 'Financial Strength Verified' },
              { label: 'Basel III CRM Eligible', sub: 'Bank Capital Mitigation' },
            ].map(({ label, sub }) => (
              <div key={label} className="text-center p-5 rounded-xl bg-[#181C24] border border-white/8 space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mx-auto">
                  <Shield className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h4 className="text-white text-sm font-bold">{label}</h4>
                <p className="text-slate-400 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-16 bg-[#11141A] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
            Ready to Engage the Greystone Risk Desk?
          </h2>
          <p className="text-slate-400 text-sm">
            Our underwriting team accepts a limited number of new client mandates each quarter. Inquire now to schedule a preliminary risk structuring consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onOpenUnderwritingModal}
              className="btn-primary-bronze text-sm group cursor-pointer"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('unlocking-financing')}
              className="btn-secondary-dark text-sm cursor-pointer"
            >
              <span>Learn the Financial Mechanics</span>
              <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

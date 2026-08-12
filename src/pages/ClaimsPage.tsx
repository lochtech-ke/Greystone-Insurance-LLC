import React, { useState } from 'react';
import { Shield, Phone, Mail, Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ClaimsPageProps {
  onOpenUnderwritingModal: () => void;
}

const CLAIMS_STEPS = [
  {
    num: '01',
    title: '24-Hour Activation',
    sla: 'Within 24 hours of incident notification',
    desc: 'Upon receiving notification of an insured incident, Greystone\'s Global Claims Desk activates immediately. A dedicated claims handler is assigned within 4 business hours. Initial loss triage and lender notification are issued within 24 hours.',
    contacts: ['claims@greystoneinsurance.com', '+44 20 7946 0001 (London, 24/7)', '+1 212 555 0199 (New York)'],
  },
  {
    num: '02',
    title: 'Loss Assessment & Documentation',
    sla: 'Within 5 business days of activation',
    desc: 'Greystone appoints a qualified Loss Adjuster and coordinates with the insured\'s legal counsel. For policies with lender Loss-Payee clauses, Greystone simultaneously notifies the lender\'s administrative agent of the loss event and estimated quantum.',
    contacts: [],
  },
  {
    num: '03',
    title: 'Reinsurance Recovery & Settlement',
    sla: 'Aligned with policy settlement terms',
    desc: 'Greystone manages reinsurance recovery on behalf of the insured. For loss-payee policies, claim proceeds are directed directly to the named lender, eliminating any risk of proceeds being diverted or delayed by borrower liquidity constraints.',
    contacts: [],
  },
  {
    num: '04',
    title: 'Claims Resolution & Responsibility Fulfilled',
    sla: 'Full settlement within agreed SLA',
    desc: 'Final claim payment is made per the policy\'s stated SLA commitment. Greystone issues a formal Claim Closure Certificate to both the insured and the named lender, confirming full responsibility has been fulfilled in accordance with the policy terms.',
    contacts: [],
  },
];

const CLAIMS_FAQ = [
  {
    q: 'Can I file a claim directly without going through a broker?',
    a: 'Yes. Greystone operates a direct claims desk for all institutional policyholders. You do not need to file through an intermediary broker. Contact claims@greystoneinsurance.com or our 24/7 London line directly.'
  },
  {
    q: 'How quickly will my lender be notified after a loss?',
    a: 'Lenders named as Loss Payees receive written notification of any insured incident within 24 hours of Greystone receiving formal claims notification. This is a standard covenant in all loss-payee endorsed policies.'
  },
  {
    q: 'What documentation is required to initiate a claim?',
    a: 'Required documentation varies by policy type. Generally: (1) Written notice of incident, (2) Policy schedule reference, (3) Preliminary loss quantum estimate, (4) Supporting evidence (surveys, reports, invoices). Your claims handler will issue a full document checklist upon activation.'
  },
  {
    q: 'Can Greystone\'s claim proceeds be used for purposes other than debt repayment?',
    a: 'Under a Greystone Loss-Payee Endorsed policy, proceeds are paid directly to the named lender as first priority. Any surplus above the outstanding debt balance may be remitted to the insured, subject to policy and facility agreement terms.'
  },
  {
    q: 'What is the claims SLA for credit protection policies?',
    a: 'For Credit Protection Insurance policies covering buyer insolvency or protracted default, Greystone\'s standard indemnity payout SLA is 60 days from date of confirmed loss event. Specific terms are defined in each individual policy schedule.'
  },
];

export const ClaimsPage: React.FC<ClaimsPageProps> = ({ onOpenUnderwritingModal: _onOpenUnderwritingModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[var(--bg-dark-950)] border-b border-[var(--bronze-500)]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="badge-bronze">
              <Shield className="w-3.5 h-3.5" />
              <span>Claims — Our Responsibility In Action</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              When it Matters Most,{' '}
              <span className="text-gradient-bronze">Greystone Delivers.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our commitment to "Your Risk. Our Responsibility." is never more consequential than at the moment of a claim. Greystone's global claims protocol is built around speed, precision, and the guaranteed protection of lender interests.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Claims Bar */}
      <section className="bg-[var(--bronze-900)] border-b border-[var(--bronze-500)]/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="font-bold text-white text-sm">24/7 Global Claims Desk — Active</span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="mailto:claims@greystoneinsurance.com" className="flex items-center gap-2 text-[var(--bronze-500)] hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>claims@greystoneinsurance.com</span>
              </a>
              <a href="tel:+442079460001" className="flex items-center gap-2 text-[var(--bronze-500)] hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>London +44 20 7946 0001</span>
              </a>
              <a href="tel:+12125550199" className="flex items-center gap-2 text-[var(--bronze-500)] hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>New York +1 212 555 0199</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Claims Process */}
      <section className="py-20 bg-[var(--bg-dark-900)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div className="badge-bronze mx-auto inline-flex">
              <Clock className="w-3.5 h-3.5" />
              <span>Institutional Claims Protocol</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white">
              The Greystone Four-Stage Claims Response
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              From first notification to final settlement. Every step of our claims protocol is designed to protect the interests of both the insured and the named lender.
            </p>
          </div>

          <div className="space-y-6">
            {CLAIMS_STEPS.map((step) => (
              <div key={step.num} className="glass-panel rounded-xl p-8 border border-[var(--bg-dark-700)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-2 flex items-center gap-4">
                  <div className="font-cinzel text-4xl font-black text-[var(--bronze-500)]/30 leading-none">{step.num}</div>
                </div>
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="font-serif-display text-xl font-bold text-white">{step.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--bronze-500)] font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>SLA: {step.sla}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
                  {step.contacts.length > 0 && (
                    <div className="space-y-1 pt-2">
                      {step.contacts.map((contact) => (
                        <div key={contact} className="text-xs text-[var(--bronze-500)] font-mono">{contact}</div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 p-3 rounded bg-[#D4AF37]/10 border border-[var(--bronze-500)]/30">
                    <CheckCircle2 className="w-4 h-4 text-[var(--bronze-500)] shrink-0" />
                    <span className="text-xs text-slate-200 font-medium">Documented SLA Commitment</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims FAQ */}
      <section className="py-20 bg-[var(--bg-dark-950)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <h2 className="font-serif-display text-3xl font-bold text-white">Claims FAQs</h2>
            <p className="text-slate-400 text-sm">Common questions about the Greystone claims process for policyholders and lenders.</p>
          </div>
          <div className="space-y-3">
            {CLAIMS_FAQ.map(({ q, a }, i) => (
              <div key={i} className="glass-panel rounded-xl border border-[var(--bg-dark-700)] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white text-sm pr-4">{q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[var(--bronze-500)] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <div className="w-full h-px bg-white/10 mb-4" />
                    <p className="text-slate-300 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claims CTA */}
      <section className="py-16 bg-[var(--bg-dark-900)] border-t border-[var(--bronze-500)]/20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
            Need to Initiate a Claim?
          </h2>
          <p className="text-slate-400 text-sm">
            Contact our dedicated claims desk directly. Do not wait — timely notification is critical for all claim types.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:claims@greystoneinsurance.com"
              className="btn-primary-bronze text-sm group cursor-pointer justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>Email Claims Desk</span>
            </a>
            <a
              href="tel:+442079460001"
              className="btn-secondary-dark text-sm cursor-pointer justify-center"
            >
              <Phone className="w-4 h-4 text-[var(--bronze-500)]" />
              <span>Call London 24/7 Line</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

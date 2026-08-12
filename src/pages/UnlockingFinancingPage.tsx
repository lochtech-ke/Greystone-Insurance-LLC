import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { FinancingTriangleDiagram } from '../components/FinancingTriangleDiagram';
import { CaseStudyShowcase } from '../components/CaseStudyShowcase';

import marineTradeImg from '../assets/marine-trade.png';

import {
  ShieldCheck, BookOpen, AlertTriangle,
  Building2, Landmark, Users, Calculator
} from 'lucide-react';

export const UnlockingFinancingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Unlocking Financing — The Mechanisms of Insurance Collateral | Greystone"
        description="Learn how a Greystone insurance policy functions as bankable loss-payee collateral under Basel III framework to unlock senior debt facilities."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-24 border-b border-[var(--rule-dark)] relative overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url(${marineTradeImg})` }}
          />

          <div className="container relative z-10">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2 border-[var(--bronze-light)] text-[var(--bronze-light)]">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Flagship Educational Guide &amp; Mechanics</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  How Insurance Unlocks Access to <span className="text-gold-gradient">Institutional Capital</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed text-sm sm:text-base">
                  A clear explanation of loss-payee mechanics, credit risk mitigation, and how underwritten policy instruments transform uncollateralized commercial exposures into lender-recognized collateral.
                </p>
                
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    to="/talk-to-an-underwriter"
                    className="btn btn-primary btn-sm font-mono uppercase font-bold"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Talk to an Underwriter</span>
                  </Link>
                  <a
                    href="#calculator"
                    className="btn btn-secondary btn-sm text-[var(--cream)] border-[var(--bronze-light)] font-mono uppercase text-xs"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[var(--bronze-light)]" />
                    <span>Run Leverage Simulation</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Honest Caveat Banner */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="flex items-start gap-3 text-xs text-[var(--charcoal)]">
              <AlertTriangle className="w-4 h-4 text-[var(--bronze)] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[var(--charcoal)] font-semibold">Important Caveat:</strong> Financing availability, collateral haircut recognition, and borrowing base approvals are strictly subject to individual Greystone underwriting assessment and the receiving bank&apos;s credit committee policies. Greystone provides underwritten risk transfer instruments; we do not guarantee third-party debt approvals.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: The Interactive Three-Node Mechanism & Diagram */}
        <section className="section bg-[var(--paper)]">
          <div className="container space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Structural Architecture</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  The Risk &rarr; Policy &rarr; Lender &rarr; Capital Mechanism
                </h2>
                <p className="body-default text-[var(--text-muted-light)] text-xs sm:text-sm">
                  How an underwritten insurance policy acts as a bridge between commercial risk exposures and institutional capital providers.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <FinancingTriangleDiagram />
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Loss-Payee Assignment & Basel III Explanation */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              <ScrollReveal>
                <div className="text-center space-y-3">
                  <span className="mono-label text-[var(--bronze)]">Plain Language Primer</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                    Understanding Loss-Payee Assignment &amp; Basel III
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid-3">
                <ScrollReveal delay={0}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)] font-bold">01 &bull; Direct Legal Assignment</span>
                      <h3 className="font-serif text-xl font-bold mb-3">Loss-Payee Endorsement</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        A Loss-Payee Endorsement is a legally binding policy amendment naming the lending institution as primary beneficiary. In default, claim proceeds bypass the borrower and pay straight to the bank.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)] font-bold">02 &bull; Credit Substitution</span>
                      <h3 className="font-serif text-xl font-bold mb-3">Basel III Framework</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        Under Basel III Credit Risk Mitigation (CRM) rules, banks substitute the credit rating of a high-risk borrower with the financial strength rating of the A-rated underwriting syndicate.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)] font-bold">03 &bull; Collateral Unlocked</span>
                      <h3 className="font-serif text-xl font-bold mb-3">Expanded LTV Ceiling</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        Instead of heavy asset haircuts (e.g. 50% discount), borrowers secure up to 90%+ Loan-to-Value borrowing base allocations without diluting equity.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Who This Is For */}
        <section className="section bg-[var(--paper)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Target Stakeholders</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Who Beneficially Deploys This Mechanism
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid-3">
              <ScrollReveal delay={0}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Corporate Borrowers</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Enterprises seeking asset-backed financing or receivable discounting lines who face lender concentration limits or asset haircut constraints.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Procurement Bidders</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Contractors and suppliers bidding on major tenders who require Advance Payment Guarantees, Bid Bonds, or Performance Bonds without encumbering bank credit lines.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2">Banks &amp; Lenders</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Commercial debt syndicates and private debt funds seeking third-party credit enhancement to de-risk high-yield commercial or cross-border facilities.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section 4: Real-World Case Studies */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="mono-label text-[var(--bronze)]">Proven Structuring</span>
              <h2 className="font-serif text-3xl font-bold">Transaction Case Studies</h2>
            </div>
            <CaseStudyShowcase />
          </div>
        </section>

        {/* Conversion Section */}
        <section className="section-dark guilloche-bg py-24 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Structuring Conversation</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Explore Structure For Your Transaction
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90 text-sm sm:text-base">
                  Discuss your transaction terms, asset profile, and lender requirements directly with a Greystone underwriter.
                </p>
                <div className="pt-4">
                  <Link
                    to="/talk-to-an-underwriter"
                    className="btn btn-primary btn-lg shadow-xl gold-glow-hover"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Talk to an Underwriter</span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
};

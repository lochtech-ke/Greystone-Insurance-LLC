import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { FinancingTriangleDiagram } from '../components/FinancingTriangleDiagram';
import {
  ShieldCheck, BookOpen, AlertTriangle,
  Building2, Landmark, Users
} from 'lucide-react';

export const UnlockingFinancingPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Unlocking Financing — The Mechanisms of Insurance Collateral"
        description="Learn how a Greystone insurance policy functions as bankable loss-payee collateral under Basel III framework to unlock senior debt facilities."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Flagship Educational Guide</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  How Insurance Unlocks Access to <span className="text-[var(--bronze-light)]">Institutional Capital</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed">
                  A clear explanation of loss-payee mechanics, credit risk mitigation, and how underwritten policy instruments transform uncollateralized commercial exposures into lender-recognized collateral.
                </p>
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

        {/* Section 1: The Three-Node Mechanism & Diagram */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Structural Architecture</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  The Risk &rarr; Policy &rarr; Lender &rarr; Capital Mechanism
                </h2>
                <p className="body-default text-[var(--text-muted-light)]">
                  How an underwritten insurance policy acts as a bridge between commercial risk exposures and institutional capital providers.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <FinancingTriangleDiagram />
            </ScrollReveal>
          </div>
        </section>

        {/* Section 2: Loss-Payee Assignment Explained */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              <ScrollReveal>
                <div className="text-center space-y-3">
                  <span className="mono-label text-[var(--bronze)]">Plain Language Primer</span>
                  <h2 className="font-serif text-3xl font-bold">
                    Understanding Loss-Payee Assignment
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid-3">
                <ScrollReveal delay={0}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">01 &bull; What It Is</span>
                      <h3 className="font-serif text-xl font-semibold mb-3">Direct Legal Assignment</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        A Loss-Payee Endorsement is a legally binding policy amendment that names the lending institution as the primary payee. In the event of a covered loss or buyer default, claim proceeds bypass the borrower and are paid directly to the bank.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">02 &bull; Why Lenders Accept It</span>
                      <h3 className="font-serif text-xl font-semibold mb-3">Credit Risk Substitution</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        Under Basel III guidelines, banks can substitute the credit rating of a high-risk borrower with the financial strength rating of the underwriting syndicate. This lowers regulatory capital reserve requirements for the bank.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">03 &bull; What Changes for Borrower</span>
                      <h3 className="font-serif text-xl font-semibold mb-3">Unlocked Credit Capacity</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                        Instead of having assets heavily discounted or rejected as unbankable, the borrower secures higher Loan-to-Value (LTV) ratios, extended repayment terms, and expanded facility ceilings without giving up equity.
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
                <h2 className="font-serif text-3xl font-bold">
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
                    <h3 className="font-serif text-xl font-semibold mb-2">Corporate Borrowers</h3>
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
                    <h3 className="font-serif text-xl font-semibold mb-2">Procurement Bidders</h3>
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
                    <h3 className="font-serif text-xl font-semibold mb-2">Banks &amp; Lenders</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Commercial debt syndicates and private debt funds seeking third-party credit enhancement to de-risk high-yield commercial or cross-border facilities.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
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
                <p className="body-lg text-[var(--cream)] opacity-90">
                  Discuss your transaction terms, asset profile, and lender requirements directly with a Greystone underwriter.
                </p>
                <div className="pt-4">
                  <Link
                    to="/talk-to-an-underwriter"
                    className="btn btn-primary btn-lg"
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

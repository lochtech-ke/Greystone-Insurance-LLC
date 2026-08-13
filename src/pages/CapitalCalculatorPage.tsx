import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { CapitalCalculator } from '../components/CapitalCalculator';
import { Calculator, ShieldCheck, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CapitalCalculatorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Interactive Capital & Collateral Modeler | Greystone Insurance LLC"
        description="Simulate how a Greystone Loss-Payee policy expands senior debt borrowing capacity, reduces collateral haircuts, and complies with Basel III Credit Risk Mitigation guidelines."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2 border-[var(--bronze-light)] text-[var(--bronze-light)]">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Risk Engineering Tool</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Financial Collateral &amp; <span className="text-gold-gradient">Leverage Modeler</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed text-sm sm:text-base">
                  Simulate your target debt facility terms, contract exposure, and counterparty credit rating to calculate estimated borrowing base expansion under Basel III Credit Risk Mitigation (CRM) rules.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SLA & Methodology Bar */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-3.5">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--charcoal)] font-mono">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[var(--bronze)] shrink-0" />
                <span>
                  <strong>Methodology:</strong> Based on Basel III CRE22 Credit Risk Substitution &amp; Loss-Payee Standard.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--bronze)] font-bold">Indicative SLA: 3–5 Business Days for Formal Underwriting Review</span>
              </div>
            </div>
          </div>
        </section>

        {/* Standalone Calculator Section */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <ScrollReveal>
              <CapitalCalculator />
            </ScrollReveal>
          </div>
        </section>

        {/* Methodology & Guide Breakdown */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <ScrollReveal>
                <div className="text-center space-y-3">
                  <span className="mono-label text-[var(--bronze)]">Calculation Mechanics</span>
                  <h2 className="font-serif text-3xl font-bold">How The Model Calculates Leverage Boost</h2>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="clause-card bg-white p-6 rounded border border-[var(--rule-light)] space-y-3">
                  <span className="mono-label text-[10px] text-[var(--bronze)] block font-bold">STEP 01</span>
                  <h3 className="font-serif text-lg font-bold">Baseline Haircut Audit</h3>
                  <p className="body-sm text-xs text-[var(--text-muted-light)] leading-relaxed">
                    Unbacked commercial receivables or inventory typically suffer 50% to 65% lender haircuts, limiting borrowing bases to 35%–50% LTV.
                  </p>
                </div>

                <div className="clause-card bg-white p-6 rounded border border-[var(--rule-light)] space-y-3">
                  <span className="mono-label text-[10px] text-[var(--bronze)] block font-bold">STEP 02</span>
                  <h3 className="font-serif text-lg font-bold">Syndicate Substitution</h3>
                  <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                    Assigning a Greystone Loss-Payee policy transfers default risk to an A-rated syndicate market, slashing regulatory reserve charges.
                  </p>
                </div>

                <div className="clause-card bg-white p-6 rounded border border-[var(--rule-light)] space-y-3">
                  <span className="mono-label text-[10px] text-[var(--bronze)] block font-bold">STEP 03</span>
                  <h3 className="font-serif text-lg font-bold">Borrowing Base Boost</h3>
                  <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                    The senior lender expands the borrowing facility cap to 85%–92% LTV without requiring additional cash escrow or equity dilution.
                  </p>
                </div>

              </div>

              <div className="text-center pt-4">
                <Link
                  to="/unlocking-financing"
                  className="inline-flex items-center gap-2 mono-label text-xs font-semibold text-[var(--bronze)] hover:text-[var(--bronze-hover)]"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read full legal &amp; regulatory documentation in Unlocking Financing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Formal Underwriting Review</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Ready to Transfer Simulated Parameters to an Underwriter?
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90 text-sm sm:text-base">
                  Our risk engineering desk will evaluate your transaction metrics and issue indicative underwriting terms.
                </p>
                <div className="pt-2">
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

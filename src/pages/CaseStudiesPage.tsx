import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { CaseStudyShowcase } from '../components/CaseStudyShowcase';
import { ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Institutional Case Studies & Deal Structuring | Greystone Insurance LLC"
        description="Explore how Greystone Loss-Payee structures solved collateral bottlenecks for global borrowers, trade exporters, and procurement syndicates."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2 border-[var(--bronze-light)] text-[var(--bronze-light)]">
                  <Award className="w-4 h-4" />
                  <span>Institutional Track Record</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Case Studies &amp; <span className="text-gold-gradient">Deal Structuring</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed text-sm sm:text-base">
                  Real-world transaction breakdowns demonstrating how underwritten risk transfer instruments unlocked senior debt capacity, satisfied procurement mandates, and eliminated collateral haircuts.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Case Studies Showcase Tool Section */}
        <section className="section bg-[var(--paper)]">
          <div className="container space-y-8">
            <ScrollReveal>
              <CaseStudyShowcase />
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Transaction Consultation</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Have a Similar Facility Challenge?
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90 text-sm sm:text-base">
                  Discuss your trade receivables, tender guarantees, or cargo transit risk directly with our underwriting team.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <Link
                    to="/talk-to-an-underwriter"
                    className="btn btn-primary btn-lg shadow-xl gold-glow-hover"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Talk to an Underwriter</span>
                  </Link>
                  <Link
                    to="/calculator"
                    className="btn btn-secondary btn-lg text-[var(--cream)] border-[var(--bronze-light)]"
                  >
                    <span>Simulate Facility Leverage</span>
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

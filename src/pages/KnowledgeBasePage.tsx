import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { RiskKnowledgeBase } from '../components/RiskKnowledgeBase';
import { BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const KnowledgeBasePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Risk & Regulatory Knowledge Base | Greystone Insurance LLC"
        description="Searchable reference matrix covering Loss-Payee legal covenants, Basel III Credit Risk Mitigation guidelines, Lloyd's syndicate ratings, and claims assignment SLAs."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2 border-[var(--bronze-light)] text-[var(--bronze-light)]">
                  <BookOpen className="w-4 h-4" />
                  <span>Institutional Reference Matrix</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Risk &amp; Regulatory <span className="text-gold-gradient">Knowledge Base</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed text-sm sm:text-base">
                  Instant reference search covering Loss-Payee Endorsement legal covenants, Basel III Credit Risk Mitigation (CRM) framework rules, syndicate ratings, and claims assignment SLAs.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Knowledge Base Search Matrix Section */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <ScrollReveal>
              <RiskKnowledgeBase />
            </ScrollReveal>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Direct Underwriter Inquiry</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Have a Specific Legal or Regulatory Question?
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90 text-sm sm:text-base">
                  Our risk engineering desk assists bank credit committees, DFI underwriters, and corporate treasurers with custom covenant structuring.
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

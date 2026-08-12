import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  ShieldCheck, ArrowRight, ChevronRight, FileCheck,
  Coins, Award, Ship
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Coins,
  FileCheck,
  Award,
  Ship,
};

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Institutional Risk & Surety House"
        description="Greystone Insurance LLC structures credit protection, advance payment guarantees, performance bonds, bid bonds, and marine insurance to transform risk into bankable collateral."
      />

      <main className="pt-20">
        
        {/* HERO SECTION — Certificate / Guilloché Signature Style */}
        <section className="section-dark guilloche-bg py-24 sm:py-32 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 badge">
                  <ShieldCheck className="w-4 h-4 text-[var(--bronze-light)]" />
                  <span>Institutional Risk &amp; Financial Instruments</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="corner-brackets p-8 sm:p-14 bg-[var(--ink-overlay)] border border-[var(--rule-dark)] shadow-card">
                  <span className="mono-label text-[var(--bronze-light)] text-xs block mb-4">
                    CERTIFICATE OF FINANCIAL COLLATERAL STRUCTURE
                  </span>
                  <h1 className="display-heading text-[var(--cream)] mb-6">
                    Where Risk Becomes <span className="text-[var(--bronze-light)]">Capital.</span>
                  </h1>
                  <p className="body-lg text-[var(--cream)] opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Greystone Insurance LLC structures underwritten financial instruments—converting uncollateralized receivables, trade contracts, and asset exposures into bankable loss-payee security that unlocks senior debt facilities.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/talk-to-an-underwriter"
                      className="btn btn-primary btn-lg w-full sm:w-auto"
                    >
                      <ShieldCheck className="w-5 h-5" />
                      <span>Talk to an Underwriter</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/unlocking-financing"
                      className="btn btn-secondary btn-lg w-full sm:w-auto"
                    >
                      <span>See How It Works</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* TRUST STRIP — Placeholder Licensing */}
        <section className="bg-[var(--paper-warm)] border-y border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="placeholder-flag">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
                <span className="mono-label text-[var(--charcoal)] font-semibold">
                  REGULATORY &amp; LICENSING STATUS:
                </span>
                <span className="body-sm text-[var(--charcoal)] font-medium">
                  Formal licensing declarations and underwriting syndicate credentials pending confirmation from management.
                </span>
                <span className="mono-label text-[var(--bronze)] font-semibold shrink-0">
                  REF: GREY-LIC-TBD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* "INSURANCE AS A FINANCIAL INSTRUMENT" TEASER */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">The Core Mechanism</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
                  Insurance as a Financial Instrument
                </h2>
                <div className="rule-bronze my-6" />
                <p className="body-lg text-[var(--charcoal)] leading-relaxed">
                  A Greystone instrument doesn&apos;t just cover operational risk — it changes the fundamental credit profile of your assets. By transferring counterparty default and performance risk directly to rated underwriting syndicates, your receiving bank or lender treats your contract as high-grade collateral.
                </p>
                <div className="pt-6">
                  <Link
                    to="/unlocking-financing"
                    className="inline-flex items-center gap-2 mono-label text-sm font-semibold text-[var(--bronze)] hover:text-[var(--bronze-hover)] group"
                  >
                    <span>Read the full mechanism</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* PRODUCTS PREVIEW — 5 Cards */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Underwritten Lines</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Five Core Financial Instruments
                </h2>
                <p className="body-sm text-[var(--text-muted-light)]">
                  Each instrument is structured to satisfy specific institutional debt covenants and procurement bonding mandates.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid-5">
              {PRODUCT_INSTRUMENTS.map((product, idx) => {
                const IconComponent = ICON_MAP[product.iconName] || ShieldCheck;
                return (
                  <ScrollReveal key={product.id} delay={idx * 80}>
                    <div className="clause-card h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--rule-light)]">
                          <span className="clause-number">{product.clauseNumber}</span>
                          <div className="w-8 h-8 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)]">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="font-serif text-lg font-semibold mb-3">
                          {product.title}
                        </h3>
                        <p className="body-sm text-[var(--text-muted-light)] mb-6 text-xs leading-relaxed">
                          {product.shortDesc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-[var(--rule-light)]">
                        <Link
                          to={`/services#${product.id}`}
                          className="mono-label text-[11px] text-[var(--bronze)] hover:text-[var(--bronze-hover)] flex items-center justify-between font-semibold"
                        >
                          <span>Explore Instrument</span>
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS PREVIEW — Compressed 4-Step Strip */}
        <section className="section bg-[var(--paper)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Structuring Protocol</span>
                <h2 className="font-serif text-3xl font-bold">
                  Four-Step Execution Path
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <div className="process-strip border border-[var(--rule-light)] corner-brackets">
                
                <div className="process-step">
                  <span className="mono-label text-[var(--bronze)] block mb-1">01 &bull; Structure</span>
                  <h4 className="font-serif font-semibold text-base mb-1">Risk Engineering</h4>
                  <p className="body-sm text-xs text-[var(--text-muted-light)]">Audit lender covenants and identify collateral gap.</p>
                </div>

                <div className="process-step">
                  <span className="mono-label text-[var(--bronze)] block mb-1">02 &bull; Underwrite</span>
                  <h4 className="font-serif font-semibold text-base mb-1">Syndicate Binder</h4>
                  <p className="body-sm text-xs text-[var(--text-muted-light)]">Place coverage with rated reinsurance markets.</p>
                </div>

                <div className="process-step">
                  <span className="mono-label text-[var(--bronze)] block mb-1">03 &bull; Bind</span>
                  <h4 className="font-serif font-semibold text-base mb-1">Policy Execution</h4>
                  <p className="body-sm text-xs text-[var(--text-muted-light)]">Issue formal certificate and policy schedule.</p>
                </div>

                <div className="process-step">
                  <span className="mono-label text-[var(--bronze)] block mb-1">04 &bull; Assign</span>
                  <h4 className="font-serif font-semibold text-base mb-1">Loss-Payee Filing</h4>
                  <p className="body-sm text-xs text-[var(--text-muted-light)]">Assign policy proceeds directly to lender.</p>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CLOSING CTA BANNER */}
        <section className="section-dark guilloche-bg py-24 border-t border-[var(--rule-dark)]">
          <div className="container text-center">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Underwriting Desk</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Ready to Transform Risk Into Bankable Capital?
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90">
                  Initiate a confidential underwriting conversation with our risk engineering team. We respond within structured turnaround windows.
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

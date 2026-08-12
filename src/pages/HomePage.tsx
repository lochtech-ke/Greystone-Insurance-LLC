import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { CapitalCalculator } from '../components/CapitalCalculator';
import { CaseStudyShowcase } from '../components/CaseStudyShowcase';
import { FinancingTriangleDiagram } from '../components/FinancingTriangleDiagram';
import { RiskKnowledgeBase } from '../components/RiskKnowledgeBase';
import { PRODUCT_INSTRUMENTS } from '../data/products';

import heroDeskImg from '../assets/hero-desk.png';
import certificateBgImg from '../assets/certificate-bg.png';

import {
  ShieldCheck, ArrowRight, ChevronRight, FileCheck,
  Coins, Award, Ship, Calculator
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
        title="Institutional Risk & Surety House | Greystone Insurance LLC"
        description="Greystone Insurance LLC structures underwritten financial instruments—converting uncollateralized receivables, trade contracts, and asset exposures into bankable loss-payee security."
      />

      <main className="pt-20">
        
        {/* HERO SECTION — Certificate & Luxury Financial Aesthetic */}
        <section className="section-dark guilloche-bg py-24 sm:py-36 relative overflow-hidden">
          
          {/* Subtle background image overlay */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url(${heroDeskImg})` }}
          />

          {/* Radial Gold Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--bronze-light)] opacity-10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 badge border-[var(--bronze-light)] bg-[var(--bronze)]/20 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[var(--bronze-light)]" />
                  <span>Institutional Financial Instruments &amp; Loss-Payee Security</span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="corner-brackets p-8 sm:p-14 bg-[var(--ink-overlay)]/90 border border-[var(--glass-border)] shadow-2xl backdrop-blur-md">
                  <span className="mono-label text-[var(--bronze-light)] text-xs block mb-4 tracking-widest">
                    CERTIFICATE OF FINANCIAL COLLATERAL STRUCTURE
                  </span>
                  <h1 className="display-heading text-[var(--cream)] mb-6">
                    Where Risk Becomes <span className="text-gold-gradient">Capital.</span>
                  </h1>
                  <p className="body-lg text-[var(--cream)] opacity-95 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Greystone Insurance LLC structures underwritten financial instruments—converting uncollateralized receivables, trade contracts, and asset exposures into bankable loss-payee security that unlocks senior debt facilities.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/talk-to-an-underwriter"
                      className="btn btn-primary btn-lg w-full sm:w-auto shadow-xl gold-glow-hover font-bold"
                    >
                      <ShieldCheck className="w-5 h-5" />
                      <span>Talk to an Underwriter</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#calculator"
                      className="btn btn-secondary btn-lg w-full sm:w-auto text-[var(--cream)] border-[var(--bronze-light)] hover:bg-[var(--bronze-light)] hover:text-[var(--ink)]"
                    >
                      <Calculator className="w-4 h-4 text-[var(--bronze-light)]" />
                      <span>Model Capital Leverage</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

        {/* QUICK STATS TICKER STRIP */}
        <section className="bg-[var(--ink)] border-y border-[var(--rule-dark)] py-6 text-[var(--cream)] relative z-20">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              
              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--bronze-light)] block font-semibold">MAX FACILITY SIZE</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-gold-gradient">$100M+ USD</span>
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Single Transaction Exposure</span>
              </div>

              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--bronze-light)] block font-semibold">COLLATERAL BOOST</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-gold-gradient">Up to 90% LTV</span>
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Senior Debt Borrowing Base</span>
              </div>

              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--bronze-light)] block font-semibold">UNDERWRITING SLA</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-gold-gradient">3–5 Days</span>
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Indicative Terms Turnaround</span>
              </div>

              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--bronze-light)] block font-semibold">REGULATORY COMPLIANCE</span>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-gold-gradient">Basel III CRM</span>
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Loss-Payee Standard</span>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST STRIP — Regulatory & Licensing Note */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="placeholder-flag">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
                <span className="mono-label text-[var(--charcoal)] font-semibold">
                  REGULATORY &amp; LICENSING STATUS:
                </span>
                <span className="body-sm text-[var(--charcoal)] font-medium text-xs sm:text-sm">
                  Formal licensing declarations and underwriting syndicate credentials pending confirmation from management.
                </span>
                <span className="mono-label text-[var(--bronze)] font-semibold shrink-0">
                  REF: GREY-LIC-TBD
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CAPITAL CALCULATOR SECTION */}
        <section id="calculator" className="section bg-[var(--paper)] scroll-mt-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Simulate Facility Leverage</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Interactive Capital &amp; Collateral Modeler
                </h2>
                <div className="rule-bronze my-4" />
                <p className="body-sm text-[var(--text-muted-light)]">
                  Adjust contract value, tenor, and counterparty rating below to see how a Loss-Payee endorsement converts uncollateralized assets into senior debt capacity.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <CapitalCalculator />
            </ScrollReveal>
          </div>
        </section>

        {/* "INSURANCE AS A FINANCIAL INSTRUMENT" TEASER */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <ScrollReveal>
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                  <span className="mono-label text-[var(--bronze)]">The Core Mechanism</span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                    Insurance as a Financial Instrument
                  </h2>
                  <p className="body-lg text-[var(--charcoal)] leading-relaxed">
                    A Greystone instrument doesn&apos;t just cover operational risk — it changes the fundamental credit profile of your assets. By transferring counterparty default and performance risk directly to rated underwriting syndicates, your receiving bank or lender treats your contract as high-grade collateral.
                  </p>
                </div>
              </ScrollReveal>

              {/* 3 Core Value Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <ScrollReveal delay={0}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4 font-mono font-bold text-sm">
                        01
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-2">Credit Substitution</h3>
                      <p className="body-sm text-xs text-[var(--text-muted-light)] leading-relaxed">
                        Lending banks substitute the borrower credit profile with an A-rated underwriting syndicate, slashing capital reserve charges.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4 font-mono font-bold text-sm">
                        02
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-2">Haircut Elimination</h3>
                      <p className="body-sm text-xs text-[var(--text-muted-light)] leading-relaxed">
                        Trade receivables and inventory haircuts drop from 50% to under 10%, unlocking 90%+ Loan-to-Value borrowing base ceilings.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="clause-card h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] mb-4 font-mono font-bold text-sm">
                        03
                      </div>
                      <h3 className="font-serif text-lg font-bold mb-2">Zero Equity Dilution</h3>
                      <p className="body-sm text-xs text-[var(--text-muted-light)] leading-relaxed">
                        Secure non-dilutive debt facilities for major tenders or supply chain expansion without giving up corporate equity.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

              </div>

              <div className="text-center pt-2">
                <Link
                  to="/unlocking-financing"
                  className="inline-flex items-center gap-2 mono-label text-sm font-semibold text-[var(--bronze)] hover:text-[var(--bronze-hover)] group"
                >
                  <span>Explore full Loss-Payee mechanics &amp; Basel III framework</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* PRODUCTS PREVIEW — 5 Cards */}
        <section className="section bg-[var(--paper)] border-t border-[var(--rule-light)]">
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
                    <div className="clause-card h-full flex flex-col justify-between group hover:border-[var(--bronze)] hover:shadow-xl transition-all duration-300">
                      <div>
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--rule-light)]">
                          <span className="clause-number font-bold text-xs">{product.clauseNumber}</span>
                          <div className="w-8 h-8 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] group-hover:bg-[var(--bronze)] group-hover:text-[var(--cream)] transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>
                        <h3 className="font-serif text-lg font-bold mb-3 group-hover:text-[var(--bronze)] transition-colors">
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
                          <span>Explore Clause</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE WORKFLOW DIAGRAM */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <ScrollReveal>
              <FinancingTriangleDiagram />
            </ScrollReveal>
          </div>
        </section>

        {/* CASE STUDIES & DEAL SHOWCASE */}
        <section className="section bg-[var(--paper)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Track Record &amp; Transactions</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Institutional Case Studies
                </h2>
                <p className="body-sm text-[var(--text-muted-light)]">
                  Explore how Greystone Loss-Payee structures solved collateral bottlenecks for global borrowers and procurement syndicates.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <CaseStudyShowcase />
            </ScrollReveal>
          </div>
        </section>

        {/* RISK KNOWLEDGE BASE / FAQ MATRIX */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Underwriting Matrix &amp; Covenants</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Risk &amp; Regulatory Knowledge Base
                </h2>
                <p className="body-sm text-[var(--text-muted-light)]">
                  Search key questions regarding Loss-Payee assignment legal frameworks, Basel III guidelines, and underwriting SLAs.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <RiskKnowledgeBase />
            </ScrollReveal>
          </div>
        </section>

        {/* CLOSING CTA BANNER */}
        <section className="section-dark guilloche-bg py-24 border-t border-[var(--rule-dark)] relative overflow-hidden">
          
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url(${certificateBgImg})` }}
          />

          <div className="container text-center relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Underwriting Desk Intake</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Ready to Transform Risk Into Bankable Capital?
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90">
                  Initiate a confidential underwriting conversation with our risk engineering team. We respond within structured turnaround windows.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/talk-to-an-underwriter"
                    className="btn btn-primary btn-lg w-full sm:w-auto shadow-xl gold-glow-hover"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Talk to an Underwriter</span>
                  </Link>
                  <Link
                    to="/unlocking-financing"
                    className="btn btn-secondary btn-lg w-full sm:w-auto text-[var(--cream)] border-[var(--bronze-light)]"
                  >
                    <span>Read Structuring Primer</span>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  ShieldCheck, ArrowRight, CheckCircle2, AlertTriangle, Coins,
  FileCheck, Award, Ship, Calculator
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Coins,
  FileCheck,
  Award,
  Ship,
};

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services & Financial Instruments | Greystone Insurance LLC"
        description="Detailed specification of Greystone's five core financial instruments: Credit Protection, Advance Payment Guarantee, Performance Bonds, Bid Bonds, and Marine & All Risk Insurance."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze-light)]">Product Directory</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Underwritten <span className="text-gold-gradient">Financial Instruments</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed">
                  Five specialized risk transfer structures engineered to satisfy institutional bank covenants, protect buyer capital, and satisfy procurement bonding mandates.
                </p>
                
                <div className="pt-2">
                  <Link
                    to="/#calculator"
                    className="btn btn-secondary btn-sm text-[var(--cream)] border-[var(--bronze-light)] font-mono text-xs gap-2"
                  >
                    <Calculator className="w-4 h-4 text-[var(--bronze-light)]" />
                    <span>Open Interactive Modeler</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Industry Caveat Bar */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="flex items-start gap-3 text-xs text-[var(--charcoal)]">
              <AlertTriangle className="w-4 h-4 text-[var(--bronze)] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong className="text-[var(--charcoal)] font-semibold">Underwriting Notice:</strong> The descriptions below outline standard institutional instrument frameworks. Exact policy wording, coverage scope, deductibles, exclusions, and eligibility are determined exclusively through formal Greystone underwriting documentation for each transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Jump-Link Navigation Bar */}
        <section className="bg-[var(--paper)] border-b border-[var(--rule-light)] sticky top-[72px] z-40 py-3 shadow-sm">
          <div className="container">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-hide py-1">
              <span className="mono-label text-xs text-[var(--bronze)] shrink-0 font-semibold">Jump to Clause:</span>
              {PRODUCT_INSTRUMENTS.map((prod) => (
                <a
                  key={prod.id}
                  href={`#${prod.id}`}
                  className="mono-label text-[11px] px-3 py-1.5 rounded border border-[var(--rule-light)] hover:border-[var(--bronze)] hover:text-[var(--bronze)] bg-white shrink-0 transition-colors font-semibold"
                >
                  {prod.clauseNumber} &bull; {prod.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 5 Instrument Clauses */}
        <section className="section bg-[var(--paper)]">
          <div className="container space-y-16">
            {PRODUCT_INSTRUMENTS.map((product) => {
              const IconComponent = ICON_MAP[product.iconName] || ShieldCheck;
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className="scroll-mt-32 clause-card corner-brackets border border-[var(--rule-light)] p-8 sm:p-12 relative shadow-md"
                >
                  <ScrollReveal>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[var(--rule-light)] gap-4">
                      <div>
                        <span className="clause-number text-base block font-bold mb-1">{product.clauseNumber}</span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">
                          {product.title}
                        </h2>
                      </div>
                      <div className="w-12 h-12 rounded bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] border border-[var(--rule-light)] shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid-2 py-8 gap-8">
                      {/* Left: What it is & Who needs it */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="mono-label text-[var(--bronze)] mb-2 font-bold">01 &bull; What It Is</h4>
                          <p className="body-default text-[var(--charcoal)] leading-relaxed">
                            {product.whatItIs}
                          </p>
                        </div>

                        <div>
                          <h4 className="mono-label text-[var(--bronze)] mb-3 font-bold">02 &bull; Who Needs It</h4>
                          <ul className="space-y-3 body-sm">
                            {product.whoNeedsIt.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-[var(--bronze)] shrink-0 mt-1" />
                                <span className="text-[var(--charcoal)] text-sm leading-normal">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: What it unlocks & Covenant Mechanics */}
                      <div className="space-y-6 bg-[var(--paper-warm)] p-6 sm:p-8 border border-[var(--rule-light)] corner-brackets">
                        <div>
                          <h4 className="mono-label text-[var(--bronze)] mb-2 font-bold">03 &bull; What It Unlocks / Collateralizes</h4>
                          <p className="body-sm text-[var(--charcoal)] text-sm leading-relaxed font-medium">
                            {product.whatItUnlocks}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[var(--rule-light)]">
                          <h4 className="mono-label text-[var(--bronze)] mb-2 font-bold">04 &bull; Covenant &amp; Loss-Payee Mechanics</h4>
                          <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                            {product.covenantMechanism}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Footer CTA specific to product */}
                    <div className="pt-6 border-t border-[var(--rule-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <span className="mono-label text-xs text-[var(--text-muted-light)] font-medium">
                        REF: INSTRUMENT-{product.romanNumeral} &bull; Underwritten by Greystone
                      </span>
                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Link
                          to={`/#calculator`}
                          className="btn btn-secondary btn-sm font-mono text-xs w-full sm:w-auto"
                        >
                          <Calculator className="w-3.5 h-3.5" />
                          <span>Simulate Terms</span>
                        </Link>
                        <Link
                          to={`/talk-to-an-underwriter?product=${encodeURIComponent(product.id)}`}
                          className="btn btn-primary btn-sm w-full sm:w-auto font-mono text-xs"
                        >
                          <ShieldCheck className="w-4 h-4" />
                          <span>Structure Clause</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Conversion Banner */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)] mb-4">
                Require a Custom Risk Transfer Structure?
              </h2>
              <p className="body-lg text-[var(--cream)] opacity-90 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Our underwriting desk constructs bespoke endorsements and loss-payee deeds tailored to syndicated loan covenants and project finance facilities.
              </p>
              <Link to="/talk-to-an-underwriter" className="btn btn-primary btn-lg shadow-xl gold-glow-hover">
                <ShieldCheck className="w-5 h-5" />
                <span>Talk to an Underwriter</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </>
  );
};

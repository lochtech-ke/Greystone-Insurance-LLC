import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  ShieldCheck, ArrowRight, CheckCircle2, Coins,
  FileCheck, Award, Ship, Calculator, ChevronLeft
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Coins,
  FileCheck,
  Award,
  Ship,
};

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = PRODUCT_INSTRUMENTS.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = ICON_MAP[product.iconName] || ShieldCheck;

  return (
    <>
      <SEOHead
        title={`${product.title} (${product.clauseNumber}) | Greystone Insurance LLC`}
        description={product.shortDesc}
      />

      <main className="pt-20">
        
        {/* Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-4xl space-y-4">
              <ScrollReveal>
                <div className="flex items-center gap-2 mb-2">
                  <Link
                    to="/services"
                    className="mono-label text-xs text-[var(--bronze-light)] hover:text-white flex items-center gap-1 font-semibold"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Back to All Instruments</span>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="clause-number text-sm block font-bold mb-1 text-[var(--bronze-light)]">
                      {product.clauseNumber} &bull; INSTRUMENT {product.romanNumeral}
                    </span>
                    <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[var(--cream)]">
                      {product.title}
                    </h1>
                  </div>

                  <div className="w-14 h-14 rounded bg-[var(--bronze)]/20 border border-[var(--bronze-light)] flex items-center justify-center text-[var(--bronze-light)] shrink-0">
                    <IconComponent className="w-7 h-7" />
                  </div>
                </div>

                <p className="body-lg text-[var(--cream)] opacity-95 mt-4 leading-relaxed max-w-3xl text-sm sm:text-base">
                  {product.shortDesc}
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Link
                    to={`/talk-to-an-underwriter?product=${encodeURIComponent(product.id)}`}
                    className="btn btn-primary btn-sm font-mono text-xs uppercase font-bold shadow-md gold-glow-hover"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Structure This Clause</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={`/calculator?product=${encodeURIComponent(product.id)}`}
                    className="btn btn-secondary btn-sm font-mono text-xs uppercase text-[var(--cream)] border-[var(--bronze-light)]"
                  >
                    <Calculator className="w-4 h-4 text-[var(--bronze-light)]" />
                    <span>Simulate Facility Leverage</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Grid: Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left 7 cols */}
                <div className="md:col-span-7 space-y-8">
                  
                  <ScrollReveal>
                    <div className="space-y-3">
                      <span className="mono-label text-[var(--bronze)] font-bold">01 &bull; INSTRUMENT OVERVIEW</span>
                      <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)]">What It Is</h2>
                      <p className="body-default text-[var(--charcoal)] leading-relaxed">
                        {product.whatItIs}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={100}>
                    <div className="space-y-3">
                      <span className="mono-label text-[var(--bronze)] font-bold">02 &bull; TARGET APPLICANTS</span>
                      <h2 className="font-serif text-2xl font-bold text-[var(--charcoal)]">Who Requires This Instrument</h2>
                      <ul className="space-y-3">
                        {product.whoNeedsIt.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 p-3 bg-[var(--paper-warm)] rounded border border-[var(--rule-light)]">
                            <CheckCircle2 className="w-4 h-4 text-[var(--bronze)] shrink-0 mt-0.5" />
                            <span className="text-[var(--charcoal)] text-xs sm:text-sm leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                </div>

                {/* Right 5 cols */}
                <div className="md:col-span-5 space-y-6">
                  
                  <ScrollReveal delay={150}>
                    <div className="corner-brackets bg-[var(--paper-warm)] border border-[var(--rule-light)] p-6 space-y-6 shadow-sm">
                      <div>
                        <span className="mono-label text-[var(--bronze)] block mb-1 font-bold">03 &bull; CAPITAL UNLOCKED</span>
                        <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">Financial Impact</h3>
                        <p className="body-sm text-xs text-[var(--charcoal)] leading-relaxed font-medium">
                          {product.whatItUnlocks}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[var(--rule-light)]">
                        <span className="mono-label text-[var(--bronze)] block mb-1 font-bold">04 &bull; COVENANT MECHANIC</span>
                        <h3 className="font-serif text-lg font-bold text-[var(--charcoal)] mb-2">Loss-Payee Execution</h3>
                        <p className="body-sm text-xs text-[var(--text-muted-light)] leading-relaxed">
                          {product.covenantMechanism}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <div className="p-4 bg-[var(--ink)] text-[var(--cream)] rounded border border-[var(--bronze-light)] text-xs font-mono space-y-2">
                    <span className="text-[var(--bronze-light)] block font-bold">REGULATORY SPECIFICATION</span>
                    <p className="text-[var(--text-muted-dark)] text-[11px] leading-tight">
                      Underwritten under Basel III Credit Risk Mitigation standards with direct syndicate assignment.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto space-y-6">
                <span className="mono-label text-[var(--bronze-light)]">Underwriting Intake</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)]">
                  Structure {product.title}
                </h2>
                <p className="body-lg text-[var(--cream)] opacity-90 text-sm sm:text-base">
                  Discuss terms with a senior underwriter or model your borrowing base leverage.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to={`/talk-to-an-underwriter?product=${encodeURIComponent(product.id)}`}
                    className="btn btn-primary btn-lg shadow-xl gold-glow-hover"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Talk to an Underwriter</span>
                  </Link>
                  <Link
                    to={`/calculator?product=${encodeURIComponent(product.id)}`}
                    className="btn btn-secondary btn-lg text-[var(--cream)] border-[var(--bronze-light)]"
                  >
                    <span>Simulate Collateral Value</span>
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

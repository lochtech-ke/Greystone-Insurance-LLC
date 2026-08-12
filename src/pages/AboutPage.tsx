import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, User, Building, Scale } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Greystone Insurance LLC"
        description="Learn about Greystone Insurance LLC — our financing-first underwriting philosophy, institutional risk discipline, and commitment to transforming risk into bankable collateral."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze-light)]">Corporate Profile</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Your Risk. <span className="text-[var(--bronze-light)]">Our Responsibility.</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 mt-4 leading-relaxed">
                  Greystone Insurance LLC operates at the intersection of institutional underwriting and financial collateral engineering. We design risk transfer structures specifically to satisfy bank loan covenants and procurement bonding mandates.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Mission & Operating Philosophy */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="grid-2 items-center gap-12">
              <ScrollReveal>
                <div className="space-y-6">
                  <span className="mono-label text-[var(--bronze)]">Operating Philosophy</span>
                  <h2 className="font-serif text-3xl font-bold">
                    More Than a Tagline: Risk as an Asset Class
                  </h2>
                  <p className="body-default text-[var(--charcoal)] leading-relaxed">
                    To most commercial enterprises, insurance is viewed as an unavoidable operational expense. At Greystone, we view insurance as a financial instrument — a balance-sheet enhancer capable of transforming illiquid or high-risk assets into AAA/A-rated security.
                  </p>
                  <p className="body-default text-[var(--charcoal)] leading-relaxed">
                    &ldquo;Your Risk, Our Responsibility&rdquo; reflects our commitment to absorbing counterparty default, performance failure, and physical loss risks so that our clients can secure credit facilities, win competitive tenders, and deploy capital with absolute confidence.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="corner-brackets p-8 sm:p-10 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-6 shadow-sm">
                  <span className="mono-label text-[var(--bronze)] text-xs block border-b border-[var(--rule-light)] pb-3">
                    INSTITUTIONAL CORE TENETS
                  </span>
                  <ul className="space-y-5 body-sm">
                    <li className="flex items-start gap-3.5">
                      <ShieldCheck className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[var(--charcoal)] font-semibold text-sm">Financing-First Underwriting</strong>
                        <span className="text-[var(--text-muted-light)] text-xs leading-normal">Every policy is structured to meet specific bank credit committee and DFI requirements.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <Scale className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[var(--charcoal)] font-semibold text-sm">Institutional Discipline</strong>
                        <span className="text-[var(--text-muted-light)] text-xs leading-normal">Underwritten strictly against verifiable cash flows, counterparty ratings, and legal enforceability.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3.5">
                      <Building className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-[var(--charcoal)] font-semibold text-sm">Direct Loss-Payee Execution</strong>
                        <span className="text-[var(--text-muted-light)] text-xs leading-normal">Policy endorsements formatted for seamless assignment to senior debt syndicates.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Makes Greystone Different */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze)]">Institutional Positioning</span>
                <h2 className="font-serif text-3xl font-bold">
                  What Makes Greystone Different
                </h2>
                <p className="body-sm text-[var(--text-muted-light)]">
                  Framed for CFOs, Procurement Officers, and Bank Relationship Managers who require rigor, speed, and structural precision.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid-3">
              <ScrollReveal delay={0}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">01 &bull; For CFOs</span>
                    <h3 className="font-serif text-xl font-semibold mb-3">Capital Base Expansion</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      We expand your borrowing base without diluting equity or incurring high-cost mezzanine debt. By insuring receivables or equipment, your senior lender applies lower haircut discounts to your collateral.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">02 &bull; For Procurement Heads</span>
                    <h3 className="font-serif text-xl font-semibold mb-3">Unlocking Tender Pre-Qualification</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Our Advance Payment Guarantees, Performance Bonds, and Bid Bonds satisfy rigorous public and private procurement standards, enabling bidders to qualify for major contracts without freezing working capital.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="clause-card h-full flex flex-col justify-between">
                  <div>
                    <span className="mono-label text-[var(--bronze)] block mb-3 pb-2 border-b border-[var(--rule-light)]">03 &bull; For Lenders &amp; Brokers</span>
                    <h3 className="font-serif text-xl font-semibold mb-3">Basel III Risk Mitigation</h3>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs leading-relaxed">
                      Greystone policies transfer counterparty default risk to rated underwriting syndicates, helping commercial banks reduce regulatory capital reserves and approve facilities that exceed single-borrower concentration limits.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Leadership & Executive Team — PLACEHOLDER FLAGGED */}
        <section className="section bg-[var(--paper)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <ScrollReveal>
                <div className="text-center space-y-3 mb-8">
                  <span className="mono-label text-[var(--bronze)]">Leadership &amp; Underwriting Team</span>
                  <h2 className="font-serif text-3xl font-bold">Executive Leadership</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="placeholder-flag text-center py-12 px-6">
                  <User className="w-10 h-10 text-[var(--bronze)] mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold mb-2">Executive Bios &amp; Leadership Directory</h3>
                  <p className="body-sm text-[var(--text-muted-light)] max-w-md mx-auto mb-4">
                    Official leadership biographies, underwriting committee profiles, and executive credentials will be published here upon final confirmation from management.
                  </p>
                  <span className="mono-label text-xs text-[var(--bronze)] font-semibold">
                    REF: GREY-TEAM-PENDING
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Licensing & Regulatory Affiliations — PLACEHOLDER FLAGGED */}
        <section className="section bg-[var(--paper-warm)] border-t border-[var(--rule-light)]">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <ScrollReveal>
                <div className="text-center space-y-3 mb-8">
                  <span className="mono-label text-[var(--bronze)]">Governance Framework</span>
                  <h2 className="font-serif text-3xl font-bold">Licensing &amp; Regulatory Affiliations</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="placeholder-flag py-8 px-6 text-center">
                  <Scale className="w-8 h-8 text-[var(--bronze)] mx-auto mb-3" />
                  <p className="body-sm text-[var(--text-muted-light)] max-w-lg mx-auto mb-3">
                    Greystone Insurance LLC operates under strict compliance standards. Specific regulatory registration numbers, licensing jurisdictions, and syndicate capacity details will be populated once verified by counsel.
                  </p>
                  <span className="mono-label text-xs text-[var(--bronze)] font-semibold">
                    REF: GREY-REG-TBD
                  </span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-dark guilloche-bg py-20 border-t border-[var(--rule-dark)] text-center">
          <div className="container">
            <ScrollReveal>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--cream)] mb-4">
                Structure Your Facility With Greystone
              </h2>
              <p className="body-lg text-[var(--cream)] opacity-90 max-w-xl mx-auto mb-8">
                Connect directly with our underwriting desk to discuss your borrowing base, procurement tender, or trade finance requirements.
              </p>
              <Link to="/talk-to-an-underwriter" className="btn btn-primary btn-lg">
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

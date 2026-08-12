import React from 'react';
import { Link } from 'react-router-dom';
import logoDarkSvg from '../assets/logo-greystone-dark.svg';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PRODUCT_INSTRUMENTS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="section-dark border-t border-[var(--rule-dark)] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="rule-bronze mb-12" />

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--rule-dark)]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="h-12 w-auto max-w-[280px]">
              <img
                src={logoDarkSvg}
                alt="Greystone Insurance LLC"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-[var(--text-muted-dark)] max-w-md pt-1 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              <strong className="text-[var(--cream)] font-medium">Greystone Insurance LLC</strong> is an institutional financial risk and surety house. We structure bespoke insurance policies that serve as bankable loss-payee collateral, de-risking capital and unlocking financing that would otherwise stay out of reach.
            </p>
            <div className="pt-1 flex items-center gap-3">
              <span className="badge">Your Risk. Our Responsibility.</span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="mono-label text-[var(--bronze-light)] mb-5 font-semibold">
              Financial Instruments
            </h4>
            <ul className="space-y-3">
              {PRODUCT_INSTRUMENTS.map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/services#${product.id}`}
                    className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors inline-flex items-center gap-1"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    <span>{product.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="mono-label text-[var(--bronze-light)] mb-5 font-semibold">
              Institutional Framework
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors" style={{ fontSize: '0.9375rem' }}>
                  About Greystone
                </Link>
              </li>
              <li>
                <Link to="/unlocking-financing" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors inline-flex items-center gap-2" style={{ fontSize: '0.9375rem' }}>
                  <span>Unlocking Financing</span>
                  <span
                    className="mono-label text-[var(--bronze-light)] px-1.5 py-0.5 rounded border border-[var(--bronze-light)]"
                    style={{ fontSize: '0.5625rem', background: 'rgba(194, 155, 92, 0.12)' }}
                  >
                    Flagship
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors" style={{ fontSize: '0.9375rem' }}>
                  General Contact
                </Link>
              </li>
              <li>
                <Link to="/talk-to-an-underwriter" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors inline-flex items-center gap-1.5" style={{ fontSize: '0.9375rem' }}>
                  <span>Talk to an Underwriter</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--bronze-light)]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Engagement / Desk Column */}
          <div>
            <h4 className="mono-label text-[var(--bronze-light)] mb-5 font-semibold">
              Underwriting Desk
            </h4>
            <p className="text-[var(--text-muted-dark)] mb-5 leading-relaxed" style={{ fontSize: '0.9375rem' }}>
              Direct structuring inquiries for borrowers, procurement bidders, and financial institutions.
            </p>
            <Link
              to="/talk-to-an-underwriter"
              className="btn btn-secondary btn-sm w-full justify-center"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inquire with Underwriters</span>
            </Link>
          </div>

        </div>

        {/* Placeholder Licensing Line */}
        <div className="py-6 border-b border-[var(--rule-dark)]">
          <div className="placeholder-flag">
            <p className="text-[var(--text-muted-dark)]" style={{ fontSize: '0.8125rem', lineHeight: '1.5' }}>
              <strong className="text-[var(--cream)]">Regulatory &amp; Licensing Disclosure:</strong> Licensing details, regulatory affiliations, and jurisdiction registrations pending final underwriting confirmation from management prior to publication.
            </p>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ fontSize: '0.8125rem' }}>
          <p className="text-[var(--text-muted-dark)]">
            &copy; {new Date().getFullYear()} Greystone Insurance LLC. All rights reserved. &ldquo;Your Risk. Our Responsibility.&rdquo; is an operating philosophy of Greystone Insurance LLC.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/contact" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors">Regulatory Disclosures</Link>
            <Link to="/contact" className="text-[var(--text-muted-dark)] hover:text-[var(--cream)] transition-colors">Privacy Policy</Link>
            <span className="text-[var(--bronze-light)] font-mono font-semibold">WCAG AA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

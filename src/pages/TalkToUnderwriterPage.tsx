import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  ShieldCheck, Lock, CheckCircle2, Clock, Calendar
} from 'lucide-react';

export const TalkToUnderwriterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    products: initialProduct ? [initialProduct] : [] as string[],
    facilitySize: '$5M – $25M',
    lenderBank: '',
    transactionDetails: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialProduct && !formData.products.includes(initialProduct)) {
      setFormData(prev => ({ ...prev, products: [initialProduct] }));
    }
  }, [initialProduct]);

  const handleProductToggle = (productId: string) => {
    setFormData(prev => {
      const exists = prev.products.includes(productId);
      if (exists) {
        return { ...prev, products: prev.products.filter(id => id !== productId) };
      } else {
        return { ...prev, products: [...prev.products, productId] };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.role.trim()) errs.role = 'Your title or role is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (formData.products.length === 0) {
      errs.products = 'Select at least one financial instrument of interest';
    }
    if (!formData.transactionDetails.trim()) {
      errs.transactionDetails = 'Briefly describe your facility or transaction';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Talk to an Underwriter — Structure Your Facility"
        description="Submit a confidential structuring inquiry to the Greystone Insurance LLC underwriting desk."
      />

      <main className="pt-20">
        
        {/* Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <div className="badge mb-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--bronze-light)]" />
                  <span>Primary Underwriting Intake</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Talk to an <span className="text-[var(--bronze-light)]">Underwriter</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 leading-relaxed mt-4">
                  Initiate a confidential risk structuring review. Whether you are a corporate borrower, procurement bidder, or institutional lender, our team will evaluate your transaction terms.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Turnaround SLA Framing Bar */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--charcoal)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--bronze)] shrink-0" />
                <span>
                  <strong className="text-[var(--charcoal)] font-semibold">Underwriting SLA:</strong> Submissions are reviewed by senior underwriters within <span className="placeholder-flag px-2 py-0.5 font-mono text-[11px] inline-block font-semibold">[X business days — awaiting SLA confirmation]</span>.
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--bronze)] shrink-0 font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>Strict Confidentiality Guaranteed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              
              {submitted ? (
                <ScrollReveal>
                  <div className="p-12 bg-[var(--paper-warm)] border border-[var(--bronze)] text-center space-y-6 corner-brackets">
                    <CheckCircle2 className="w-16 h-16 text-[var(--bronze)] mx-auto" />
                    <h2 className="font-serif text-3xl font-bold text-[var(--charcoal)]">
                      Structuring Intake Received
                    </h2>
                    <p className="body-lg text-[var(--charcoal)] max-w-lg mx-auto">
                      Thank you, <strong className="text-[var(--charcoal)]">{formData.name}</strong>. Your structuring inquiry for <strong className="text-[var(--charcoal)]">{formData.company}</strong> has been logged with our senior underwriting desk.
                    </p>

                    <div className="p-5 bg-white border border-[var(--rule-light)] max-w-md mx-auto text-left text-xs font-mono space-y-2 corner-brackets">
                      <div className="text-[var(--charcoal)] font-semibold">Inquiry Reference: GREY-UW-{Math.floor(100000 + Math.random() * 900000)}</div>
                      <div className="text-[var(--text-muted-light)]">Selected Instruments: {formData.products.join(', ') || 'N/A'}</div>
                      <div className="text-[var(--text-muted-light)]">Target Size: {formData.facilitySize}</div>
                    </div>

                    <p className="body-sm text-xs text-[var(--text-muted-light)]">
                      An underwriter will contact you via email or phone to request supporting credit documentation.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-secondary font-mono uppercase text-xs"
                    >
                      Submit Another Transaction Inquiry
                    </button>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal>
                  <div className="space-y-8">
                    
                    {/* Intro Framing */}
                    <div className="space-y-2">
                      <span className="mono-label text-[var(--bronze)] font-semibold">Confidential Facility Intake</span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold">Transaction &amp; Risk Structuring Intake</h2>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs sm:text-sm">
                        Complete this structured questionnaire so our underwriting team can assess collateral feasibility and policy requirements for your transaction.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                      
                      {/* Step 1: Contact Information */}
                      <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-5 corner-brackets">
                        <span className="mono-label text-[var(--bronze)] text-xs block font-semibold border-b border-[var(--rule-light)] pb-2">SECTION 01 &bull; APPLICANT IDENTIFICATION</span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="form-group">
                            <label className="form-label" htmlFor="uw-name">Full Name *</label>
                            <input
                              id="uw-name"
                              type="text"
                              className={`form-input ${errors.name ? 'error' : ''}`}
                              placeholder="e.g. Marcus Thorne"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                          </div>

                          <div className="form-group">
                            <label className="form-label" htmlFor="uw-company">Company / Firm Name *</label>
                            <input
                              id="uw-company"
                              type="text"
                              className={`form-input ${errors.company ? 'error' : ''}`}
                              placeholder="e.g. Meridian Global Partners"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                            {errors.company && <span className="form-error">{errors.company}</span>}
                          </div>

                          <div className="form-group">
                            <label className="form-label" htmlFor="uw-role">Your Role / Title *</label>
                            <input
                              id="uw-role"
                              type="text"
                              className={`form-input ${errors.role ? 'error' : ''}`}
                              placeholder="e.g. CFO / Treasurer / Director"
                              value={formData.role}
                              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                            />
                            {errors.role && <span className="form-error">{errors.role}</span>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                          <div className="form-group">
                            <label className="form-label" htmlFor="uw-email">Direct Corporate Email *</label>
                            <input
                              id="uw-email"
                              type="email"
                              className={`form-input ${errors.email ? 'error' : ''}`}
                              placeholder="e.g. m.thorne@meridianglobal.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                          </div>

                          <div className="form-group">
                            <label className="form-label" htmlFor="uw-phone">Direct Phone Number</label>
                            <input
                              id="uw-phone"
                              type="tel"
                              className="form-input"
                              placeholder="+1 (555) 019-2831"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Step 2: Instrument of Interest */}
                      <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-5 corner-brackets">
                        <div className="flex items-center justify-between border-b border-[var(--rule-light)] pb-2">
                          <span className="mono-label text-[var(--bronze)] text-xs font-semibold">SECTION 02 &bull; INSTRUMENTS OF INTEREST *</span>
                          <span className="mono-label text-[11px] text-[var(--text-muted-light)]">Select all that apply</span>
                        </div>

                        {errors.products && <span className="form-error block">{errors.products}</span>}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {PRODUCT_INSTRUMENTS.map((inst) => {
                            const isChecked = formData.products.includes(inst.id);
                            return (
                              <label
                                key={inst.id}
                                className={`flex items-start gap-3 p-4 border cursor-pointer transition-all ${
                                  isChecked
                                    ? 'bg-white border-[var(--bronze)] shadow-sm'
                                    : 'bg-[var(--paper)] border-[var(--rule-light)] hover:border-[var(--bronze-light)]'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  className="mt-1 accent-[var(--bronze)] w-4 h-4"
                                  checked={isChecked}
                                  onChange={() => handleProductToggle(inst.id)}
                                />
                                <div>
                                  <strong className="block text-xs font-mono text-[var(--charcoal)] font-semibold">
                                    {inst.clauseNumber}: {inst.title}
                                  </strong>
                                  <span className="text-xs text-[var(--text-muted-light)] leading-tight block mt-1">
                                    {inst.shortDesc}
                                  </span>
                                </div>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step 3: Transaction Parameters */}
                      <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-5 corner-brackets">
                        <span className="mono-label text-[var(--bronze)] text-xs block font-semibold border-b border-[var(--rule-light)] pb-2">SECTION 03 &bull; TRANSACTION PARAMETERS</span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="form-group">
                            <label className="form-label" htmlFor="facilitySize">Facility / Transaction Size Range *</label>
                            <select
                              id="facilitySize"
                              className="form-select"
                              value={formData.facilitySize}
                              onChange={(e) => setFormData({ ...formData, facilitySize: e.target.value })}
                            >
                              <option value="Under $1M">Under $1,000,000 USD</option>
                              <option value="$1M – $5M">$1,000,000 – $5,000,000 USD</option>
                              <option value="$5M – $25M">$5,000,000 – $25,000,000 USD</option>
                              <option value="$25M – $100M">$25,000,000 – $100,000,000 USD</option>
                              <option value="Above $100M">Above $100,000,000 USD</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label className="form-label" htmlFor="lenderBank">Lender / Financial Institution (Optional)</label>
                            <input
                              id="lenderBank"
                              type="text"
                              className="form-input"
                              placeholder="e.g. Senior Syndicate Bank / DFI"
                              value={formData.lenderBank}
                              onChange={(e) => setFormData({ ...formData, lenderBank: e.target.value })}
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="transactionDetails">Brief Risk / Transaction Overview *</label>
                          <textarea
                            id="transactionDetails"
                            className={`form-textarea ${errors.transactionDetails ? 'error' : ''}`}
                            placeholder="Describe underlying asset/receivable, counterparty profile, current lender haircut or covenant requirement, and desired insurance outcome..."
                            value={formData.transactionDetails}
                            onChange={(e) => setFormData({ ...formData, transactionDetails: e.target.value })}
                          />
                          {errors.transactionDetails && <span className="form-error">{errors.transactionDetails}</span>}
                        </div>
                      </div>

                      {/* Reassurance & Consent Strip */}
                      <div className="p-4 bg-white border border-[var(--rule-light)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--text-muted-light)]">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-[var(--bronze)] shrink-0" />
                          <span>Strictly confidential. No obligation. Information used solely for underwriting assessment.</span>
                        </div>
                        <span className="mono-label text-[10px] text-[var(--bronze)] shrink-0 font-semibold">No Pre-checked Consent</span>
                      </div>

                      {/* Submit Action */}
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-full py-4 justify-center"
                      >
                        <ShieldCheck className="w-5 h-5" />
                        <span>Submit Confidential Underwriting Intake</span>
                      </button>

                    </form>

                    {/* Optional Scheduling Integration Placeholder */}
                    <div className="pt-8 border-t border-[var(--rule-light)]">
                      <div className="placeholder-flag text-center py-6 px-4 space-y-2">
                        <Calendar className="w-6 h-6 text-[var(--bronze)] mx-auto mb-1" />
                        <h4 className="font-serif text-sm font-semibold">Direct Calendar Scheduling Integration</h4>
                        <p className="body-sm text-xs text-[var(--text-muted-light)] max-w-sm mx-auto">
                          If Greystone deploys an automated scheduling tool (e.g. Calendly / HubSpot Meetings), the interactive booking widget will embed here.
                        </p>
                        <span className="mono-label text-[10px] text-[var(--bronze)] font-semibold">
                          REF: INTEGRATION-CALENDAR-PLACEHOLDER
                        </span>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              )}

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

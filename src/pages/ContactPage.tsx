import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'General',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
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
        title="Contact Greystone Insurance LLC"
        description="General inquiries and corporate contact desk for Greystone Insurance LLC."
      />

      <main className="pt-20">
        
        {/* Page Header */}
        <section className="section-dark guilloche-bg py-20 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <ScrollReveal>
                <span className="mono-label text-[var(--bronze-light)]">Corporate Desk</span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  General Inquiries &amp; Contact
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 leading-relaxed mt-2">
                  For general corporate correspondence, media inquiries, or institutional partnerships.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Primary Route Notice to Underwriting Page */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-4">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-white border border-[var(--rule-light)] corner-brackets shadow-sm">
              <div className="flex items-center gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[var(--bronze)] shrink-0" />
                <p className="body-sm text-[var(--charcoal)] text-xs sm:text-sm">
                  <strong className="font-semibold text-[var(--charcoal)]">Seeking Transaction or Policy Structuring?</strong> If you have a specific credit facility, tender, or shipment requiring underwriting, please use our dedicated Underwriting Desk.
                </p>
              </div>
              <Link
                to="/talk-to-an-underwriter"
                className="btn btn-primary btn-sm shrink-0"
              >
                <span>Talk to an Underwriter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content: Form + Office Placeholders */}
        <section className="section bg-[var(--paper)]">
          <div className="container">
            <div className="grid-2 gap-12">
              
              {/* General Contact Form */}
              <ScrollReveal>
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-2">General Inquiry Form</h2>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs">
                      Complete the fields below for non-underwriting inquiries. All submissions are handled confidentially.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 bg-[var(--paper-warm)] border border-[var(--bronze)] text-center space-y-4 corner-brackets">
                      <CheckCircle2 className="w-12 h-12 text-[var(--bronze)] mx-auto" />
                      <h3 className="font-serif text-xl font-semibold">Message Received</h3>
                      <p className="body-sm text-[var(--text-muted-light)] text-xs max-w-sm mx-auto">
                        Thank you for contacting Greystone Insurance LLC. Our corporate team will review your message and respond promptly.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', inquiryType: 'General', message: '' }); }}
                        className="btn btn-secondary btn-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="form-group">
                          <label className="form-label" htmlFor="name">Your Name *</label>
                          <input
                            id="name"
                            type="text"
                            className={`form-input ${errors.name ? 'error' : ''}`}
                            placeholder="e.g. Eleanor Vance"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                          {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="company">Company / Institution</label>
                          <input
                            id="company"
                            type="text"
                            className="form-input"
                            placeholder="e.g. Apex Holdings"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="form-group">
                          <label className="form-label" htmlFor="email">Email Address *</label>
                          <input
                            id="email"
                            type="email"
                            className={`form-input ${errors.email ? 'error' : ''}`}
                            placeholder="e.g. e.vance@apexholdings.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                          {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                          <label className="form-label" htmlFor="phone">Phone Number</label>
                          <input
                            id="phone"
                            type="tel"
                            className="form-input"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="inquiryType">Inquiry Type</label>
                        <select
                          id="inquiryType"
                          className="form-select"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        >
                          <option value="General">General Inquiry</option>
                          <option value="Partnership">Institutional Partnership</option>
                          <option value="Media">Media &amp; Press</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="message">Message *</label>
                        <textarea
                          id="message"
                          className={`form-textarea ${errors.message ? 'error' : ''}`}
                          placeholder="How can we assist you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        {errors.message && <span className="form-error">{errors.message}</span>}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-full py-3.5"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

              {/* Office Details & Map Placeholder — PLACEHOLDER FLAGGED */}
              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-2">Corporate Headquarters</h2>
                    <p className="body-sm text-[var(--text-muted-light)] text-xs">
                      Official contact details and physical address information.
                    </p>
                  </div>

                  <div className="placeholder-flag space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs font-mono text-[var(--charcoal)] uppercase">Physical Address</strong>
                        <p className="body-sm text-xs text-[var(--text-muted-light)]">
                          Official corporate address details pending confirmation from management.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs font-mono text-[var(--charcoal)] uppercase">Telephone</strong>
                        <p className="body-sm text-xs text-[var(--text-muted-light)]">
                          Direct phone lines pending confirmation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[var(--bronze)] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-xs font-mono text-[var(--charcoal)] uppercase">Email Desk</strong>
                        <p className="body-sm text-xs text-[var(--text-muted-light)]">
                          Official email contacts pending confirmation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Map Embed Placeholder */}
                  <div className="border border-[var(--rule-light)] bg-[var(--paper-warm)] p-8 text-center space-y-2 corner-brackets">
                    <MapPin className="w-8 h-8 text-[var(--bronze)] mx-auto opacity-70" />
                    <span className="mono-label text-xs block text-[var(--bronze)]">Interactive Map Embed</span>
                    <p className="body-sm text-xs text-[var(--text-muted-light)] max-w-xs mx-auto">
                      Map embed will be integrated upon location confirmation.
                    </p>
                  </div>

                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </main>
    </>
  );
};

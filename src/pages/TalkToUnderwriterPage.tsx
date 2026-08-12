import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ScrollReveal } from '../components/ScrollReveal';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  ShieldCheck, Lock, CheckCircle2, Clock, FileText,
  UploadCloud, ArrowRight, ChevronLeft
} from 'lucide-react';

export const TalkToUnderwriterPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || '';
  const initialValue = searchParams.get('value') || '';
  const initialTenor = searchParams.get('tenor') || '';

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    products: initialProduct ? [initialProduct] : [] as string[],
    facilitySize: initialValue ? `$${(Number(initialValue) / 1000000).toFixed(0)}M` : '$5M – $25M',
    tenorMonths: initialTenor ? `${initialTenor} Months` : '24 Months',
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

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!formData.name.trim()) errs.name = 'Full name is required';
      if (!formData.company.trim()) errs.company = 'Company name is required';
      if (!formData.role.trim()) errs.role = 'Your title or role is required';
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Enter a valid corporate email address';
      }
    } else if (step === 2) {
      if (formData.products.length === 0) {
        errs.products = 'Select at least one financial instrument of interest';
      }
    } else if (step === 3) {
      if (!formData.transactionDetails.trim()) {
        errs.transactionDetails = 'Briefly describe your facility or transaction';
      }
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      setSubmitted(true);
    }
  };

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  return (
    <>
      <SEOHead
        title="Talk to an Underwriter | Greystone Insurance LLC"
        description="Submit a confidential structuring inquiry to the Greystone Insurance LLC underwriting desk."
      />

      <main className="pt-20">
        
        {/* Header Banner */}
        <section className="section-dark guilloche-bg py-16 border-b border-[var(--rule-dark)]">
          <div className="container">
            <div className="max-w-3xl space-y-3">
              <ScrollReveal>
                <div className="badge mb-2 border-[var(--bronze-light)] text-[var(--bronze-light)]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Primary Underwriting Intake Desk</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--cream)]">
                  Talk to an <span className="text-gold-gradient">Underwriter</span>
                </h1>
                <p className="body-lg text-[var(--cream)] opacity-90 leading-relaxed mt-2 text-sm sm:text-base">
                  Initiate a confidential risk structuring review. Whether you are a corporate borrower, procurement bidder, or institutional lender, our risk engineering team will evaluate your transaction.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Turnaround SLA framing bar */}
        <section className="bg-[var(--paper-warm)] border-b border-[var(--rule-light)] py-3.5">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--charcoal)]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--bronze)] shrink-0" />
                <span>
                  <strong className="font-semibold text-[var(--charcoal)]">Underwriting SLA:</strong> Submissions are reviewed by senior underwriters within <span className="font-mono text-[11px] font-bold text-[var(--bronze)]">3–5 Business Days</span>.
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--bronze)] font-semibold">
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
                  <div className="p-8 sm:p-14 bg-[var(--paper-warm)] border-2 border-[var(--bronze)] text-center space-y-6 corner-brackets shadow-2xl">
                    <CheckCircle2 className="w-16 h-16 text-[var(--bronze)] mx-auto animate-bounce" />
                    <h2 className="font-serif text-3xl font-bold text-[var(--charcoal)]">
                      Structuring Intake Received
                    </h2>
                    <p className="body-lg text-[var(--charcoal)] max-w-lg mx-auto text-sm sm:text-base">
                      Thank you, <strong className="text-[var(--charcoal)]">{formData.name}</strong>. Your transaction structuring inquiry for <strong className="text-[var(--charcoal)]">{formData.company}</strong> has been assigned to our senior underwriting desk.
                    </p>

                    <div className="p-6 bg-[var(--ink)] text-[var(--cream)] border border-[var(--bronze-light)] max-w-lg mx-auto text-left text-xs font-mono space-y-3 corner-brackets rounded shadow-lg">
                      <div className="flex items-center justify-between pb-2 border-b border-[var(--rule-dark)]">
                        <span className="text-[var(--bronze-light)] font-bold">SUMMARY CONFIRMATION SLIP</span>
                        <span className="text-[10px] bg-[var(--bronze)] px-2 py-0.5 rounded text-[var(--cream)]">PENDING REVIEW</span>
                      </div>
                      <div className="text-[var(--cream)] font-bold">Inquiry Ref: GREY-UW-{Math.floor(100000 + Math.random() * 900000)}</div>
                      <div className="text-[var(--text-muted-dark)]">Selected Line: {formData.products.join(', ') || 'General Credit Protection'}</div>
                      <div className="text-[var(--text-muted-dark)]">Facility Exposure: {formData.facilitySize} ({formData.tenorMonths})</div>
                      {uploadedFiles.length > 0 && (
                        <div className="text-[var(--bronze-light)] text-[11px]">
                          Attached Documents: {uploadedFiles.length} file(s) ({uploadedFiles.join(', ')})
                        </div>
                      )}
                    </div>

                    <p className="body-sm text-xs text-[var(--text-muted-light)]">
                      A senior underwriter will reach out via <strong className="text-[var(--charcoal)]">{formData.email}</strong> to review credit covenants.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={() => { setSubmitted(false); setCurrentStep(1); }}
                        className="btn btn-secondary font-mono uppercase text-xs"
                      >
                        Submit Another Inquiry
                      </button>
                      <Link to="/" className="btn btn-primary text-xs font-mono uppercase">
                        Return to Homepage
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ) : (
                <ScrollReveal>
                  <div className="space-y-8">
                    
                    {/* WIZARD STEP PROGRESS BAR */}
                    <div className="bg-[var(--paper-warm)] border border-[var(--rule-light)] p-4 rounded-lg corner-brackets">
                      <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                        
                        <button
                          type="button"
                          onClick={() => currentStep > 1 && setCurrentStep(1)}
                          className={`p-2.5 rounded border transition-all ${
                            currentStep === 1
                              ? 'bg-[var(--ink)] text-[var(--bronze-light)] border-[var(--bronze-light)] font-bold shadow-md'
                              : currentStep > 1
                              ? 'bg-white border-[var(--bronze)] text-[var(--bronze)]'
                              : 'bg-white/50 border-[var(--rule-light)] text-[var(--text-muted-light)]'
                          }`}
                        >
                          <span className="block text-[10px]">STEP 01</span>
                          <span className="truncate block font-sans font-semibold">Applicant Info</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => currentStep > 2 && setCurrentStep(2)}
                          className={`p-2.5 rounded border transition-all ${
                            currentStep === 2
                              ? 'bg-[var(--ink)] text-[var(--bronze-light)] border-[var(--bronze-light)] font-bold shadow-md'
                              : currentStep > 2
                              ? 'bg-white border-[var(--bronze)] text-[var(--bronze)]'
                              : 'bg-white/50 border-[var(--rule-light)] text-[var(--text-muted-light)]'
                          }`}
                        >
                          <span className="block text-[10px]">STEP 02</span>
                          <span className="truncate block font-sans font-semibold">Instruments</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => currentStep > 3 && setCurrentStep(3)}
                          className={`p-2.5 rounded border transition-all ${
                            currentStep === 3
                              ? 'bg-[var(--ink)] text-[var(--bronze-light)] border-[var(--bronze-light)] font-bold shadow-md'
                              : currentStep > 3
                              ? 'bg-white border-[var(--bronze)] text-[var(--bronze)]'
                              : 'bg-white/50 border-[var(--rule-light)] text-[var(--text-muted-light)]'
                          }`}
                        >
                          <span className="block text-[10px]">STEP 03</span>
                          <span className="truncate block font-sans font-semibold">Deal Parameters</span>
                        </button>

                        <div
                          className={`p-2.5 rounded border transition-all ${
                            currentStep === 4
                              ? 'bg-[var(--ink)] text-[var(--bronze-light)] border-[var(--bronze-light)] font-bold shadow-md'
                              : 'bg-white/50 border-[var(--rule-light)] text-[var(--text-muted-light)]'
                          }`}
                        >
                          <span className="block text-[10px]">STEP 04</span>
                          <span className="truncate block font-sans font-semibold">Summary &amp; Submit</span>
                        </div>

                      </div>
                    </div>

                    {/* FORM STEP CONTENT */}
                    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                      
                      {/* STEP 1: Applicant Identification */}
                      {currentStep === 1 && (
                        <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-6 corner-brackets animate-fadeIn">
                          <div className="border-b border-[var(--rule-light)] pb-3">
                            <span className="mono-label text-[var(--bronze)] text-xs font-bold block">SECTION 01 &bull; APPLICANT IDENTIFICATION</span>
                            <p className="body-sm text-xs text-[var(--text-muted-light)] mt-1">Provide your primary contact and organizational credentials.</p>
                          </div>

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

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                          <div className="flex justify-end pt-4 border-t border-[var(--rule-light)]">
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="btn btn-primary font-mono text-xs uppercase flex items-center gap-2"
                            >
                              <span>Next: Instruments of Interest</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: Instrument Selector */}
                      {currentStep === 2 && (
                        <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-6 corner-brackets animate-fadeIn">
                          <div className="flex items-center justify-between border-b border-[var(--rule-light)] pb-3">
                            <div>
                              <span className="mono-label text-[var(--bronze)] text-xs font-bold block">SECTION 02 &bull; INSTRUMENTS OF INTEREST *</span>
                              <p className="body-sm text-xs text-[var(--text-muted-light)] mt-1">Select all coverage lines required for your transaction.</p>
                            </div>
                            <span className="mono-label text-[10px] text-[var(--bronze)] font-semibold">Multi-Select</span>
                          </div>

                          {errors.products && <span className="form-error block">{errors.products}</span>}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {PRODUCT_INSTRUMENTS.map((inst) => {
                              const isChecked = formData.products.includes(inst.id);
                              return (
                                <label
                                  key={inst.id}
                                  className={`flex items-start gap-3 p-4 border rounded cursor-pointer transition-all ${
                                    isChecked
                                      ? 'bg-white border-2 border-[var(--bronze)] shadow-md'
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
                                    <strong className="block text-xs font-mono text-[var(--charcoal)] font-bold">
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

                          <div className="flex items-center justify-between pt-4 border-t border-[var(--rule-light)]">
                            <button
                              type="button"
                              onClick={handlePrevStep}
                              className="btn btn-secondary font-mono text-xs uppercase flex items-center gap-1.5"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Back</span>
                            </button>
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="btn btn-primary font-mono text-xs uppercase flex items-center gap-2"
                            >
                              <span>Next: Deal Parameters</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 3: Transaction Parameters & Document Drop Zone */}
                      {currentStep === 3 && (
                        <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-6 corner-brackets animate-fadeIn">
                          <div className="border-b border-[var(--rule-light)] pb-3">
                            <span className="mono-label text-[var(--bronze)] text-xs font-bold block">SECTION 03 &bull; TRANSACTION PARAMETERS &amp; DOCUMENTS</span>
                            <p className="body-sm text-xs text-[var(--text-muted-light)] mt-1">Specify facility size and attach draft term sheets or contract specs if available.</p>
                          </div>

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

                          {/* Drag and Drop Document Upload Zone */}
                          <div className="space-y-2">
                            <label className="form-label">Attach Transaction Documents (Optional)</label>
                            <div
                              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                              onDragLeave={() => setIsDragging(false)}
                              onDrop={handleDrop}
                              className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                                isDragging
                                  ? 'border-[var(--bronze)] bg-[var(--bronze)]/5'
                                  : 'border-[var(--rule-light)] bg-white hover:border-[var(--bronze-light)]'
                              }`}
                            >
                              <UploadCloud className="w-8 h-8 text-[var(--bronze)] mx-auto mb-2" />
                              <p className="text-xs text-[var(--charcoal)] font-semibold">
                                Drag &amp; drop term sheets, draft contracts, or borrower profiles here
                              </p>
                              <p className="text-[11px] text-[var(--text-muted-light)] mt-1">
                                PDF, DOCX, XLSX up to 25MB per file
                              </p>
                              <label className="mt-3 inline-block btn btn-secondary btn-sm text-[11px] cursor-pointer">
                                <span>Browse Files</span>
                                <input
                                  type="file"
                                  multiple
                                  onChange={handleSimulatedFileUpload}
                                  className="hidden"
                                />
                              </label>
                            </div>

                            {/* Uploaded file badges */}
                            {uploadedFiles.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-2">
                                {uploadedFiles.map((fn, idx) => (
                                  <div key={idx} className="inline-flex items-center gap-1.5 bg-white px-2.5 py-1 rounded border border-[var(--rule-light)] text-xs font-mono text-[var(--bronze)]">
                                    <FileText className="w-3.5 h-3.5" />
                                    <span className="truncate max-w-[200px]">{fn}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[var(--rule-light)]">
                            <button
                              type="button"
                              onClick={handlePrevStep}
                              className="btn btn-secondary font-mono text-xs uppercase flex items-center gap-1.5"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Back</span>
                            </button>
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="btn btn-primary font-mono text-xs uppercase flex items-center gap-2"
                            >
                              <span>Review Summary Slip</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* STEP 4: Summary Preview & Final Submission */}
                      {currentStep === 4 && (
                        <div className="p-6 sm:p-8 bg-[var(--paper-warm)] border border-[var(--rule-light)] space-y-6 corner-brackets animate-fadeIn">
                          <div className="border-b border-[var(--rule-light)] pb-3">
                            <span className="mono-label text-[var(--bronze)] text-xs font-bold block">SECTION 04 &bull; UNDERWRITING INTAKE SUMMARY</span>
                            <p className="body-sm text-xs text-[var(--text-muted-light)] mt-1">Review your parameters before sending to senior risk engineers.</p>
                          </div>

                          <div className="p-6 bg-[var(--ink)] text-[var(--cream)] border-2 border-[var(--bronze-light)] rounded-lg space-y-4 shadow-xl relative glow-active">
                            <div className="flex items-center justify-between pb-3 border-b border-[var(--rule-dark)]">
                              <span className="mono-label text-xs text-[var(--bronze-light)] font-bold">PREVIEW DRAFT POLICY INTAKE SLIP</span>
                              <span className="mono-label text-[10px] bg-[var(--bronze)] px-2 py-0.5 rounded font-semibold text-[var(--cream)]">
                                READY FOR SUBMISSION
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                              <div>
                                <span className="text-[var(--text-muted-dark)] block text-[10px]">APPLICANT NAME</span>
                                <span className="font-bold text-[var(--cream)] text-sm">{formData.name}</span>
                              </div>
                              <div>
                                <span className="text-[var(--text-muted-dark)] block text-[10px]">COMPANY / FIRM</span>
                                <span className="font-bold text-[var(--cream)] text-sm">{formData.company} ({formData.role})</span>
                              </div>
                              <div>
                                <span className="text-[var(--text-muted-dark)] block text-[10px]">DIRECT EMAIL</span>
                                <span className="text-[var(--bronze-light)]">{formData.email}</span>
                              </div>
                              <div>
                                <span className="text-[var(--text-muted-dark)] block text-[10px]">FACILITY EXPOSURE</span>
                                <span className="font-bold text-[var(--cream)]">{formData.facilitySize} ({formData.tenorMonths})</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-[var(--rule-dark)] text-xs">
                              <span className="text-[var(--text-muted-dark)] block text-[10px] font-mono">SELECTED COVERAGE LINES</span>
                              <span className="font-mono text-[var(--bronze-light)] font-bold">
                                {formData.products.join(', ') || 'General Credit Risk Protection'}
                              </span>
                            </div>

                            <div className="pt-2 border-t border-[var(--rule-dark)] text-xs">
                              <span className="text-[var(--text-muted-dark)] block text-[10px] font-mono">TRANSACTION OVERVIEW</span>
                              <p className="body-sm text-[11px] text-[var(--cream)] opacity-90 line-clamp-3 mt-1">
                                {formData.transactionDetails || 'No details provided.'}
                              </p>
                            </div>
                          </div>

                          <div className="p-4 bg-white border border-[var(--rule-light)] rounded flex items-center gap-3 text-xs text-[var(--text-muted-light)]">
                            <Lock className="w-4 h-4 text-[var(--bronze)] shrink-0" />
                            <span>Strictly confidential. Submission is governed by non-disclosure protocols and used solely for underwriting risk assessment.</span>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[var(--rule-light)]">
                            <button
                              type="button"
                              onClick={handlePrevStep}
                              className="btn btn-secondary font-mono text-xs uppercase flex items-center gap-1.5"
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span>Edit Parameters</span>
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary font-mono text-xs uppercase py-3.5 px-6 font-bold flex items-center gap-2 shadow-lg gold-glow-hover"
                            >
                              <ShieldCheck className="w-4 h-4" />
                              <span>Submit Underwriting Intake</span>
                            </button>
                          </div>

                        </div>
                      )}

                    </form>

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

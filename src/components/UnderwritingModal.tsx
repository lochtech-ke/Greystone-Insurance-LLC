import React, { useState } from 'react';
import { X, FileCheck, ArrowRight, User, Building2, DollarSign, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';

interface UnderwritingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UnderwritingModal: React.FC<UnderwritingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    role: '',
    company: '',
    jurisdiction: '',
    riskCategory: '',
    facilitySize: '',
    lenderBank: '',
    policyObjective: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const riskCategories = [
    'Credit Protection & Receivables',
    'Marine Cargo & Supply Chain Financing',
    'Product Liability Collateral',
    'Asset-Backed & Property Insurance',
    'Corporate Risk Advisory & Structuring',
    'Multi-Line / Syndicated Program',
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0D11]/80 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-2xl glass-panel rounded-2xl border border-[#D4AF37]/40 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden animate-fade-in">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#181C24] to-[#11141A] px-6 py-5 flex items-start justify-between border-b border-[#D4AF37]/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <div>
            <div className="badge-bronze mb-2">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Underwriting Risk Structuring Inquiry</span>
            </div>
            <h2 className="font-serif-display text-xl font-bold text-white">
              Request Institutional Underwriting
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Step {step} of 3 — {step === 1 ? 'Client Profile' : step === 2 ? 'Risk & Facility Details' : 'Contact & Objectives'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-md transition-all cursor-pointer"
            aria-label="Close Underwriting Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="flex bg-[#0B0D11]">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1 transition-all duration-300 ${
                s <= step ? 'bg-[#D4AF37]' : 'bg-[#202632]'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-6 py-6 space-y-5 max-h-[60vh] overflow-y-auto">

            {submitted ? (
              <div className="text-center py-12 space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto animate-pulse-glow">
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-white">
                  Inquiry Received
                </h3>
                <p className="text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your institutional risk structuring inquiry has been received. A Greystone underwriter will respond within <strong className="text-[#D4AF37]">48 business hours</strong> with a preliminary risk assessment and policy structuring proposal.
                </p>
                <div className="inline-flex items-center gap-2 bg-[#202632] border border-[#D4AF37]/30 px-4 py-2 rounded text-sm text-slate-300">
                  <Shield className="w-4 h-4 text-[#D4AF37]" />
                  <span>Reference: GIL-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-primary-bronze mx-auto mt-4 text-sm cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Step 1: Client Profile */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Full Name <span className="text-[#D4AF37]">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="e.g. James Whitmore"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Role / Function <span className="text-[#D4AF37]">*</span>
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                          required
                        >
                          <option value="" disabled>Select your role...</option>
                          <option>Chief Financial Officer (CFO)</option>
                          <option>Corporate Treasurer</option>
                          <option>Chief Risk Officer (CRO)</option>
                          <option>Private Equity Sponsor / Partner</option>
                          <option>Lender / Bank Credit Officer</option>
                          <option>Project Finance Arranger</option>
                          <option>Legal / Compliance Counsel</option>
                          <option>Other Executive</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Company / Organization <span className="text-[#D4AF37]">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="e.g. Northgate Capital Group"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Jurisdiction / Region <span className="text-[#D4AF37]">*</span>
                        </label>
                        <select
                          name="jurisdiction"
                          value={formData.jurisdiction}
                          onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                          required
                        >
                          <option value="" disabled>Select jurisdiction...</option>
                          <option>United Kingdom (FCA / PRA)</option>
                          <option>United States (State-regulated)</option>
                          <option>European Union (Solvency II)</option>
                          <option>Singapore (MAS)</option>
                          <option>Dubai / UAE (DFSA / DIFC)</option>
                          <option>Cross-Border / Multi-Jurisdiction</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Risk & Facility Details */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Risk / Insurance Line Required <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {riskCategories.map((cat) => (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => setFormData(f => ({ ...f, riskCategory: cat }))}
                            className={`text-left p-3 rounded text-xs font-medium border transition-all cursor-pointer ${
                              formData.riskCategory === cat
                                ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8] font-bold'
                                : 'bg-[#181C24] text-slate-300 border-white/10 hover:border-[#D4AF37]/40'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Estimated Facility / Exposure Size
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <select
                            name="facilitySize"
                            value={formData.facilitySize}
                            onChange={handleChange}
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer"
                          >
                            <option value="" disabled>Select range...</option>
                            <option>Under $5M</option>
                            <option>$5M – $25M</option>
                            <option>$25M – $100M</option>
                            <option>$100M – $500M</option>
                            <option>$500M+</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Lender / Bank Name (if applicable)
                        </label>
                        <input
                          name="lenderBank"
                          value={formData.lenderBank}
                          onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                          placeholder="e.g. Barclays Corporate Banking"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Details & Objectives */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Business Email <span className="text-[#D4AF37]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                          Direct Phone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                          placeholder="+44 20 7946 0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Policy Objective & Structuring Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors resize-none"
                        placeholder="Describe your risk transfer objective, the lender covenants you need to satisfy, and any specific policy requirements (e.g. loss payee naming, minimum coverage amounts, coverage territory)..."
                      />
                    </div>
                    <div className="p-3 rounded bg-[#11141A] border border-[#D4AF37]/20 text-xs text-slate-400">
                      <strong className="text-slate-200">Confidentiality Notice:</strong> All information submitted is treated as commercially confidential. Greystone does not share client inquiry details with third parties. A preliminary Non-Disclosure Agreement (NDA) is available on request.
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Modal Footer Navigation */}
          {!submitted && (
            <div className="px-6 py-4 border-t border-white/10 bg-[#11141A] flex items-center justify-between gap-4">
              <div>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-secondary-dark text-xs py-2 px-4 cursor-pointer"
                  >
                    ← Back
                  </button>
                )}
              </div>
              <div>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn-primary-bronze text-xs py-2.5 px-6 uppercase font-bold tracking-wider cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary-bronze text-xs py-2.5 px-6 uppercase font-bold tracking-wider cursor-pointer"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Submit Inquiry to Underwriting</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

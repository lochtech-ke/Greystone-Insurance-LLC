import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onOpenUnderwritingModal: () => void;
}

const OFFICES = [
  {
    city: 'London',
    region: 'EMEA Hub',
    address: 'Leadenhall Street, City of London, EC3V 4AB',
    phone: '+44 20 7946 0100',
    email: 'london@greystoneinsurance.com',
    timezone: 'GMT / BST',
    hours: 'Mon–Fri 08:00–18:00',
  },
  {
    city: 'New York',
    region: 'Americas Hub',
    address: '100 Wall Street, Financial District, New York, NY 10005',
    phone: '+1 212 555 0100',
    email: 'newyork@greystoneinsurance.com',
    timezone: 'EST / EDT',
    hours: 'Mon–Fri 08:00–18:00',
  },
  {
    city: 'Singapore',
    region: 'Asia-Pacific Hub',
    address: 'Marina Bay Financial Centre, 018981, Singapore',
    phone: '+65 6388 0100',
    email: 'singapore@greystoneinsurance.com',
    timezone: 'SGT (UTC+8)',
    hours: 'Mon–Fri 09:00–18:00',
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenUnderwritingModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', role: '', email: '', phone: '',
    subject: '', message: '', consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[#0B0D11] border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="badge-bronze">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Greystone</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Reach the{' '}
              <span className="text-gradient-bronze">Greystone Risk Desk.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Our global underwriting and risk structuring desks are available across London, New York, and Singapore. For institutional inquiries, we respond within 48 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Offices */}
      <section className="py-20 bg-[#11141A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Form — Left */}
            <div className="lg:col-span-7">
              <div className="glass-panel rounded-2xl p-8 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <h2 className="font-serif-display text-2xl font-bold text-white">Send a Structured Inquiry</h2>
                      <p className="text-slate-400 text-sm mt-1">For complex risk structuring mandates, use our{' '}
                        <button onClick={onOpenUnderwritingModal} className="text-[#D4AF37] underline cursor-pointer hover:text-white transition-colors">
                          dedicated Underwriting Modal
                        </button>.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Full Name <span className="text-[#D4AF37]">*</span></label>
                          <input name="name" value={form.name} onChange={handleChange} required
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="James Whitmore" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Company</label>
                          <input name="company" value={form.company} onChange={handleChange}
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="Northgate Capital Group" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Email <span className="text-[#D4AF37]">*</span></label>
                          <input type="email" name="email" value={form.email} onChange={handleChange} required
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="name@company.com" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Phone</label>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                            className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors"
                            placeholder="+44 20 7946 0000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Subject / Inquiry Type</label>
                        <select name="subject" value={form.subject} onChange={handleChange}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#D4AF37]/60 transition-colors cursor-pointer">
                          <option value="" disabled>Select inquiry type...</option>
                          <option>Underwriting & Risk Structuring</option>
                          <option>Claims Inquiry</option>
                          <option>Regulatory Documentation</option>
                          <option>Business Development & Partnerships</option>
                          <option>General Corporate Inquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">Message <span className="text-[#D4AF37]">*</span></label>
                        <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                          className="w-full bg-[#181C24] border border-white/10 rounded-md py-2.5 px-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-colors resize-none"
                          placeholder="Describe your inquiry, risk structuring requirement, or question..." />
                      </div>
                      <div className="flex items-start gap-3">
                        <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange}
                          className="mt-1 cursor-pointer accent-[#D4AF37]" id="consent-check" />
                        <label htmlFor="consent-check" className="text-xs text-slate-400 cursor-pointer leading-relaxed">
                          I consent to Greystone Insurance LLC processing my information to respond to this inquiry. I understand that information provided is treated as commercially confidential. See our Privacy Policy for details.
                        </label>
                      </div>
                      <button type="submit" className="btn-primary-bronze w-full justify-center py-3.5 text-sm uppercase font-bold tracking-wider cursor-pointer">
                        <Shield className="w-4 h-4" />
                        <span>Submit Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-16 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center mx-auto animate-pulse-glow">
                      <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-serif-display text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Greystone. A member of our team will respond to your inquiry within <strong className="text-[#D4AF37]">48 business hours</strong>. For urgent claims, please contact our direct line at <strong>+44 20 7946 0001</strong>.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary-dark text-sm cursor-pointer mx-auto">
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Office Information — Right */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-serif-display text-2xl font-bold text-white mb-6">Global Risk Hubs</h2>
              {OFFICES.map((office) => (
                <div key={office.city} className="glass-panel glass-panel-hover rounded-xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif-display text-lg font-bold text-white">{office.city}</h3>
                      <span className="badge-bronze text-[10px] mt-1 inline-flex">{office.region}</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-slate-300">
                      <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <a href={`tel:${office.phone}`} className="hover:text-white transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">{office.email}</a>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{office.hours} ({office.timezone})</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Claims */}
              <div className="p-5 rounded-xl bg-[#1D170A] border border-[#D4AF37]/40 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  <h3 className="font-bold text-[#D4AF37] text-sm uppercase tracking-wider">24/7 Emergency Claims Line</h3>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  For urgent claims requiring immediate activation, contact our always-on London claims desk:
                </p>
                <a href="tel:+442079460001" className="flex items-center gap-2 font-cinzel text-lg font-bold text-[#D4AF37] hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  +44 20 7946 0001
                </a>
              </div>

              {/* Regulatory Disclosure */}
              <div className="p-4 rounded-xl bg-[#11141A] border border-white/5 text-xs text-slate-500 leading-relaxed">
                <strong className="text-slate-300">Regulatory Disclosures:</strong> Greystone Insurance LLC operates in compliance with applicable financial regulatory frameworks including FCA/PRA standards (UK), applicable state regulations (USA), and MAS guidelines (Singapore). Insurance products are subject to regulatory approval in each jurisdiction. Policy terms and conditions apply.
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

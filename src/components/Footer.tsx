import React from 'react';
import logoSvg from '../assets/logo-greystone.svg';
import { Shield, Building2, MapPin, Lock, Scale } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenUnderwritingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenUnderwritingModal }) => {
  return (
    <footer className="bg-[var(--bg-dark-950)] border-t border-[var(--bronze-500)]/30 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--bg-dark-700)]">
          
          
          <div className="lg:col-span-2 space-y-4">
            <div className="h-14 w-auto max-w-[320px]">
              <img 
                src={logoSvg} 
                alt="Greystone Insurance LLC" 
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md pt-2">
              <strong className="text-white font-semibold">Greystone Insurance LLC</strong> is an institutional financial risk and collateral engineering firm. We structure bespoke insurance policies that serve as bankable loss-payee collateral, de-risking capital and unlocking senior debt financing for enterprise clients.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="badge-bronze">Your Risk. Our Responsibility.</span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[var(--bronze-500)]" /> Solvency II Compliant
              </span>
            </div>
          </div>

          
          <div>
            <h4 className="font-cinzel text-white text-sm font-bold tracking-wider uppercase mb-4 text-[var(--bronze-500)]">
              Solutions & Lines
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Credit Protection Insurance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Marine Cargo (Clauses A/B/C)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Product Liability Collateral
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Asset-Backed Financial Risk
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Corporate Risk Advisory
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-cinzel text-white text-sm font-bold tracking-wider uppercase mb-4 text-[var(--bronze-500)]">
              Firm & Mechanics
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  About Greystone
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('unlocking-financing')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left flex items-center gap-1.5">
                  <span>How Insurance Unlocks Financing</span>
                  <span className="text-[10px] bg-[#D4AF37]/20 text-[var(--bronze-500)] px-1 rounded border border-[var(--bronze-500)]/40">Guide</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('claims')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Claims Protocol & SLA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Insights & Research
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[var(--bronze-500)] transition-colors cursor-pointer text-left">
                  Underwriting & Risk Desk
                </button>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-cinzel text-white text-sm font-bold tracking-wider uppercase mb-4 text-[var(--bronze-500)]">
              Global Risk Hubs
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--bronze-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">London Hub</strong>
                  <span>Leadenhall Street, City of London EC3V</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--bronze-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">New York Hub</strong>
                  <span>Wall Street, Financial District, NY 10005</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--bronze-500)] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Singapore Hub</strong>
                  <span>Marina Bay Financial Centre, 018981</span>
                </div>
              </li>
            </ul>
            <div className="pt-4">
              <button
                onClick={onOpenUnderwritingModal}
                className="w-full btn-secondary-dark text-xs py-2 justify-center"
              >
                <span>Inquire with Underwriters</span>
              </button>
            </div>
          </div>

        </div>

        
        <div className="py-6 border-b border-[var(--bg-dark-800)] grid grid-cols-1 md:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[var(--bronze-500)]" />
            <span>A.M. Best Rated Syndicate Placement</span>
          </div>
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[var(--bronze-500)]" />
            <span>FCA / PRA Governance Compliant Standards</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[var(--bronze-500)]" />
            <span>Basel III Credit Risk Mitigation Qualified</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[var(--bronze-500)]" />
            <span>International Group P&I Alignment</span>
          </div>
        </div>

        
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Greystone Insurance LLC. All rights reserved. "Your Risk. Our Responsibility." is a registered trademark of Greystone Insurance LLC.</p>
          <div className="flex items-center space-x-6">
            <span>Regulatory Disclosures</span>
            <span>Privacy & Security</span>
            <span>Terms of Cover</span>
            <span className="text-slate-400">WCAG AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

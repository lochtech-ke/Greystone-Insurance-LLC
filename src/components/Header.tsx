import React, { useState, useEffect } from 'react';
import logoSvg from '../assets/logo-greystone.svg';
import { Menu, X, ArrowRight, FileCheck } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenUnderwritingModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenUnderwritingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Greystone' },
    { id: 'services', label: 'Services & Products' },
    { id: 'unlocking-financing', label: 'Unlocking Financing', badge: 'Flagship' },
    { id: 'claims', label: 'Claims' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--bg-dark-950)]/90 backdrop-blur-md border-b border-[var(--bronze-500)]/20 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-[#0B0D11]/95 to-[#0B0D11]/60 py-4 border-b border-[var(--bg-dark-800)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          
          <button 
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
          >
            <div className="h-11 w-auto max-w-[280px] sm:max-w-[340px] transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src={logoSvg} 
                alt="Greystone Insurance LLC Logo — Your Risk. Our Responsibility." 
                className="h-full w-auto object-contain"
              />
            </div>
          </button>

          
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-all duration-200 relative flex items-center gap-1.5 cursor-pointer ${
                    isActive 
                      ? 'text-[var(--bronze-500)] font-semibold bg-[var(--bg-dark-800)]/80 border border-[var(--bronze-500)]/30' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="bg-[#C59B27]/20 text-[var(--bronze-500)] text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border border-[var(--bronze-500)]/30 animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenUnderwritingModal}
              className="btn-primary-bronze text-xs uppercase font-bold tracking-wider py-2.5 px-4 rounded shadow-lg flex items-center gap-2 group cursor-pointer"
            >
              <FileCheck className="w-4 h-4 text-[#0B0D11]" />
              <span>Talk to an Underwriter</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenUnderwritingModal}
              className="btn-primary-bronze text-[11px] uppercase font-bold px-2.5 py-1.5 rounded flex items-center gap-1"
            >
              <span>Underwriter</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--bronze-500)]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-dark-900)] border-b border-[var(--bronze-500)]/30 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
                currentTab === item.id 
                  ? 'bg-[var(--bg-dark-800)] text-[var(--bronze-500)] border-l-4 border-[var(--bronze-500)]' 
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="bg-[#C59B27]/20 text-[var(--bronze-500)] text-xs px-2 py-0.5 rounded border border-[var(--bronze-500)]/30">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
          <div className="pt-4 border-t border-[var(--bg-dark-700)]">
            <button
              onClick={() => {
                onOpenUnderwritingModal();
                setMobileMenuOpen(false);
              }}
              className="w-full btn-primary-bronze justify-center py-3 text-sm font-bold uppercase tracking-wider"
            >
              <FileCheck className="w-4 h-4" />
              <span>Talk to an Underwriter</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

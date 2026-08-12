import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoDarkSvg from '../assets/logo-greystone-dark.svg';
import { Menu, X, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Greystone' },
    { path: '/services', label: 'Services & Products' },
    { path: '/unlocking-financing', label: 'Unlocking Financing', flag: true },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--ink)]/95 border-b border-[var(--rule-dark)] shadow-xl py-3 backdrop-blur-md'
          : 'bg-[var(--ink-overlay)] border-b border-[var(--rule-dark)] py-4 backdrop-blur-sm'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center focus-visible:outline-none shrink-0 group"
            aria-label="Greystone Insurance LLC — Return to homepage"
          >
            <img
              src={logoDarkSvg}
              alt="Greystone Insurance LLC"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded font-sans text-[0.9375rem] font-medium transition-all duration-200 flex items-center gap-2 relative ${
                    isActive
                      ? 'text-[var(--bronze-light)] font-semibold border-b-2 border-[var(--bronze-light)]'
                      : 'text-[var(--cream)] opacity-85 hover:opacity-100 hover:bg-white/5'
                  }`
                }
              >
                <span>{item.label}</span>
                {item.flag && (
                  <span
                    className="mono-label px-1.5 py-0.5 rounded border border-[var(--bronze-light)] text-[var(--bronze-light)] bg-[var(--bronze)]/20"
                    style={{ fontSize: '0.625rem' }}
                  >
                    Flagship
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Action Group */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/#calculator"
              className="btn btn-secondary btn-sm text-[12px] font-mono gap-1.5 border-[var(--bronze-light)]/40 hover:border-[var(--bronze-light)] text-[var(--cream)]"
            >
              <Calculator className="w-3.5 h-3.5 text-[var(--bronze-light)]" />
              <span>Model Structure</span>
            </Link>

            <Link
              to="/talk-to-an-underwriter"
              className="btn btn-primary btn-sm shadow-md gold-glow-hover"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Talk to Underwriter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/talk-to-an-underwriter"
              className="btn btn-primary btn-sm px-3 py-1.5"
              style={{ fontSize: '0.6875rem' }}
            >
              Underwriter
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md transition-colors text-[var(--cream)] hover:bg-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[var(--bronze-light)]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[var(--ink)] border-b border-[var(--rule-dark)] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `w-full text-left px-4 py-3 rounded font-sans text-base font-medium flex items-center justify-between ${
                  isActive
                    ? 'bg-[var(--ink-light)] text-[var(--bronze-light)] border-l-[3px] border-[var(--bronze-light)] font-semibold'
                    : 'text-[var(--cream)] hover:bg-white/5'
                }`
              }
            >
              <span>{item.label}</span>
              {item.flag && (
                <span
                  className="mono-label px-2 py-0.5 rounded border border-[var(--bronze-light)] text-[var(--bronze-light)]"
                  style={{ fontSize: '0.625rem' }}
                >
                  Flagship
                </span>
              )}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-[var(--rule-dark)] space-y-2">
            <Link
              to="/talk-to-an-underwriter"
              className="w-full btn btn-primary justify-center py-3"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Talk to an Underwriter</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

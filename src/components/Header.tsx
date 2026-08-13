import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logoDarkSvg from '../assets/logo-greystone-dark.svg';
import { Menu, X, ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { PRODUCT_INSTRUMENTS } from '../data/products';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu & dropdown on route change */
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Greystone' },
    { path: '/services', label: 'Services & Products', hasDropdown: true },
    { path: '/unlocking-financing', label: 'Unlocking Financing', flag: true },
    { path: '/calculator', label: 'Capital Modeler' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/knowledge-base', label: 'Knowledge Base' },
    { path: '/contact', label: 'Contact Us' },
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
              className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded font-sans text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                          isActive || location.pathname.startsWith('/services')
                            ? 'text-[var(--bronze-light)] font-semibold border-b-2 border-[var(--bronze-light)]'
                            : 'text-[var(--cream)] opacity-85 hover:opacity-100 hover:bg-white/5'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-[var(--bronze-light)]" />
                    </NavLink>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-[var(--ink)] border border-[var(--rule-dark)] shadow-2xl rounded p-2 text-xs space-y-1 animate-fadeIn">
                        <Link
                          to="/services"
                          className="block px-3 py-2 rounded hover:bg-white/10 text-[var(--bronze-light)] font-mono font-bold uppercase border-b border-[var(--rule-dark)]"
                        >
                          All Products Directory
                        </Link>
                        {PRODUCT_INSTRUMENTS.map((p) => (
                          <Link
                            key={p.id}
                            to={`/services/${p.id}`}
                            className="block px-3 py-2 rounded hover:bg-white/5 text-[var(--cream)] opacity-90 hover:opacity-100 transition-colors"
                          >
                            <span className="text-[var(--bronze-light)] font-mono text-[10px] block font-bold">{p.clauseNumber}</span>
                            <span className="font-medium text-xs block">{p.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded font-sans text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'text-[var(--bronze-light)] font-semibold border-b-2 border-[var(--bronze-light)]'
                        : 'text-[var(--cream)] opacity-85 hover:opacity-100 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  {item.flag && (
                    <span
                      className="mono-label px-1 py-0.5 rounded border border-[var(--bronze-light)] text-[var(--bronze-light)] bg-[var(--bronze)]/20"
                      style={{ fontSize: '0.5625rem' }}
                    >
                      Flagship
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Primary Action CTA */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/talk-to-an-underwriter"
              className="btn btn-primary btn-sm shadow-md gold-glow-hover text-xs font-mono"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Talk to Underwriter</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="xl:hidden flex items-center gap-2">
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden bg-[var(--ink)] border-b border-[var(--rule-dark)] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn max-h-[85vh] overflow-y-auto"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `w-full text-left px-4 py-2.5 rounded font-sans text-sm font-medium flex items-center justify-between ${
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
          
          <div className="pt-3 border-t border-[var(--rule-dark)] space-y-1">
            <span className="mono-label text-[10px] text-[var(--bronze-light)] px-4 block font-bold">CLAUSE PRODUCTS</span>
            {PRODUCT_INSTRUMENTS.map((p) => (
              <Link
                key={p.id}
                to={`/services/${p.id}`}
                className="block px-4 py-1.5 text-xs text-[var(--cream)] opacity-80 hover:opacity-100"
              >
                {p.clauseNumber}: {p.title}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[var(--rule-dark)]">
            <Link
              to="/talk-to-an-underwriter"
              className="w-full btn btn-primary justify-center py-3 text-xs font-mono uppercase"
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

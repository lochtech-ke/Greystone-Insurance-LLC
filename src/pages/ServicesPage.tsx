import React, { useState } from 'react';
import { PRODUCT_LINES } from '../data/products';
import type { ProductLine } from '../data/products';
import { ShieldCheck, Ship, Building2, Coins, FileText, ArrowRight, Check, X, ChevronRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = { ShieldCheck, Ship, Building2, Coins, FileText };

const INDUSTRY_FILTERS = [
  { id: 'all', label: 'All Solutions' },
  { id: 'credit', label: 'Credit & Finance' },
  { id: 'maritime', label: 'Maritime & Trade' },
  { id: 'liability', label: 'Corporate Liability' },
  { id: 'asset-backed', label: 'Asset-Backed' },
  { id: 'advisory', label: 'Advisory' },
];

interface ServicesPageProps {
  onOpenUnderwritingModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenUnderwritingModal }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductLine | null>(null);

  const filtered = activeFilter === 'all'
    ? PRODUCT_LINES
    : PRODUCT_LINES.filter(p => p.category === activeFilter);

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="py-20 bg-[#0B0D11] border-b border-[#D4AF37]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="badge-bronze">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Services & Solutions</span>
            </div>
            <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Risk Solutions Engineered{' '}
              <span className="text-gradient-bronze">For Capital Markets.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Each Greystone product line is a financial instrument first, an insurance policy second. Every coverage structure is designed to satisfy lender documentation requirements, improve collateral recognition, and unlock senior debt financing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-[#11141A] border-b border-white/5 py-4 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {INDUSTRY_FILTERS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  activeFilter === id
                    ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8]'
                    : 'bg-[#181C24] text-slate-300 border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 bg-[#0B0D11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const Icon = ICON_MAP[product.iconName] ?? ShieldCheck;
              return (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="glass-panel glass-panel-hover rounded-xl p-7 text-left space-y-5 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 cursor-pointer w-full"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center group-hover:bg-[#D4AF37]/25 transition-all">
                      <Icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-lg font-bold text-white mb-2 group-hover:text-[#F3E4C8] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{product.shortDesc}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Lender Benefit:</h4>
                    <div className="bronze-left-border pl-3 py-1">
                      <p className="text-xs text-[#D4AF37] font-semibold leading-relaxed">{product.lossPayeeBenefit}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">Target Clients:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.targetClients.slice(0, 2).map((client) => (
                        <span key={client} className="text-[10px] bg-[#202632] text-slate-300 px-2 py-1 rounded border border-white/10">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0D11]/85 backdrop-blur-md"
          onClick={(e) => { if (e.target === e.currentTarget) setSelectedProduct(null); }}
        >
          <div className="w-full max-w-3xl glass-panel rounded-2xl border border-[#D4AF37]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in">
            {/* Modal Header */}
            <div className="px-7 py-5 border-b border-white/10 bg-[#181C24] flex items-start justify-between relative">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              <div className="flex items-center gap-4">
                {(() => { const Icon = ICON_MAP[selectedProduct.iconName] ?? ShieldCheck; return <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center shrink-0"><Icon className="w-6 h-6 text-[#D4AF37]" /></div>; })()}
                <div>
                  <h2 className="font-serif-display text-xl font-bold text-white">{selectedProduct.title}</h2>
                  <span className="badge-bronze text-[10px] mt-1 inline-flex">{selectedProduct.category.replace('-', ' ').toUpperCase()}</span>
                </div>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-white p-2 rounded hover:bg-white/10 transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-7 py-6 space-y-7">
              <p className="text-slate-300 leading-relaxed">{selectedProduct.fullDesc}</p>

              {/* Financing Enabler Role */}
              <div className="p-5 rounded-xl bg-[#202632] border border-[#D4AF37]/40 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] flex items-center gap-2">
                  <Coins className="w-4 h-4" /> Financing Enabler Role
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed">{selectedProduct.financingEnablerRole}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Coverage Scope */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Coverage Scope:</h3>
                  <ul className="space-y-2">
                    {selectedProduct.coverageScope.map((scope) => (
                      <li key={scope} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        {scope}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Clients */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Target Institutional Clients:</h3>
                  <ul className="space-y-2">
                    {selectedProduct.targetClients.map((client) => (
                      <li key={client} className="flex items-start gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Covenant Mechanics */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Covenant Mechanics:</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.covenantMechanics}</p>
              </div>

              {/* Loss Payee Benefit */}
              <div className="bronze-left-border pl-4 py-2">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Loss-Payee Benefit:</h3>
                <p className="text-[#D4AF37] font-semibold text-sm">{selectedProduct.lossPayeeBenefit}</p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="px-7 py-4 border-t border-white/10 bg-[#11141A] flex items-center justify-between gap-4">
              <button onClick={() => setSelectedProduct(null)} className="btn-secondary-dark text-xs py-2 px-4 cursor-pointer">← Back</button>
              <button
                onClick={() => { setSelectedProduct(null); onOpenUnderwritingModal(); }}
                className="btn-primary-bronze text-xs py-2.5 px-6 uppercase font-bold tracking-wider cursor-pointer"
              >
                <span>Request Underwriting for {selectedProduct.title.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Services CTA Banner */}
      <section className="py-16 bg-[#11141A] border-t border-[#D4AF37]/20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-5">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
            Can't Find the Exact Structure You Need?
          </h2>
          <p className="text-slate-400 text-sm">
            Greystone underwrites complex, multi-line, and cross-border risk programs that don't fit standard categories. Speak with our structuring desk to design a bespoke solution.
          </p>
          <button
            onClick={onOpenUnderwritingModal}
            className="btn-primary-bronze text-sm group cursor-pointer"
          >
            <span>Request Bespoke Risk Structuring</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
};

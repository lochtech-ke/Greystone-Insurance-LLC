import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_INSTRUMENTS } from '../data/products';
import {
  Calculator, ShieldCheck, ArrowRight, TrendingUp, CheckCircle, Award
} from 'lucide-react';

export const CapitalCalculator: React.FC = () => {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(PRODUCT_INSTRUMENTS[0].id);
  const [contractValue, setContractValue] = useState<number>(15000000); // $15M default
  const [tenorMonths, setTenorMonths] = useState<number>(24); // 24 months default
  const [creditRating, setCreditRating] = useState<string>('A_BBB'); // AAA_AA, A_BBB, BB_UNRATED
  const [lenderType, setLenderType] = useState<string>('COMMERCIAL_BANK'); // COMMERCIAL_BANK, PRIVATE_DEBT, DFI

  // Dynamic Calculation Logic
  const calculateMetrics = () => {
    let ltvBase = 50;
    let ltvBoosted = 85;
    let haircutReduction = 70;
    let premiumMinRate = 1.2;
    let premiumMaxRate = 2.1;
    let slaDays = 5;

    // Adjustments by rating
    if (creditRating === 'AAA_AA') {
      ltvBoosted = 92;
      haircutReduction = 85;
      premiumMinRate = 0.85;
      premiumMaxRate = 1.45;
      slaDays = 3;
    } else if (creditRating === 'BB_UNRATED') {
      ltvBoosted = 78;
      haircutReduction = 60;
      premiumMinRate = 1.95;
      premiumMaxRate = 3.25;
      slaDays = 7;
    }

    // Adjustments by instrument
    if (selectedProduct === 'advance-payment-guarantee') {
      ltvBoosted += 3;
      premiumMinRate += 0.2;
    } else if (selectedProduct === 'performance-bonds') {
      haircutReduction += 5;
    } else if (selectedProduct === 'bid-bonds') {
      premiumMinRate = 0.45;
      premiumMaxRate = 0.95;
      slaDays = 2;
    }

    const maxLtv = Math.min(ltvBoosted, 95);
    const collateralValue = (contractValue * maxLtv) / 100;
    const additionalCapitalUnlocked = collateralValue - (contractValue * (ltvBase / 100));
    const annualEstPremiumMin = (contractValue * (premiumMinRate / 100));
    const annualEstPremiumMax = (contractValue * (premiumMaxRate / 100));

    return {
      ltvBase,
      maxLtv,
      haircutReduction,
      collateralValue,
      additionalCapitalUnlocked,
      premiumMinRate,
      premiumMaxRate,
      annualEstPremiumMin,
      annualEstPremiumMax,
      slaDays,
    };
  };

  const metrics = calculateMetrics();

  const handleApplyToForm = () => {
    const params = new URLSearchParams({
      product: selectedProduct,
      value: contractValue.toString(),
      tenor: tenorMonths.toString(),
      rating: creditRating,
      lender: lenderType,
    });
    navigate(`/talk-to-an-underwriter?${params.toString()}`);
  };

  const formatCurrency = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(1)}M`;
    }
    return `$${(val / 1000).toFixed(0)}K`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-[var(--ink-light)] border border-[var(--glass-border)] rounded-lg p-6 sm:p-10 shadow-2xl relative overflow-hidden text-[var(--cream)] corner-brackets">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--bronze-light)] opacity-5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[var(--rule-dark)]">
        <div>
          <div className="inline-flex items-center gap-2 badge mb-2">
            <Calculator className="w-3.5 h-3.5 text-[var(--bronze-light)]" />
            <span>Interactive Underwriting Modeler</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--cream)]">
            Financial Collateral &amp; Leverage Modeler
          </h3>
          <p className="body-sm text-[var(--text-muted-dark)] text-xs sm:text-sm mt-1">
            Simulate how a Greystone Loss-Payee policy expands borrowing capacity under Basel III credit risk mitigation guidelines.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[var(--ink)] px-4 py-2.5 rounded border border-[var(--rule-dark)] shrink-0">
          <Award className="w-5 h-5 text-[var(--bronze-light)]" />
          <div className="text-left">
            <span className="mono-label text-[10px] text-[var(--bronze-light)] block font-semibold">Loss-Payee Standard</span>
            <span className="font-mono text-xs font-bold text-[var(--cream)]">Basel III Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls vs Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        
        {/* Left Column: Interactive Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Instrument Selector */}
          <div className="space-y-2">
            <label className="mono-label text-[var(--bronze-light)] text-xs block font-semibold">
              01 &bull; Select Financial Instrument
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCT_INSTRUMENTS.map((inst) => {
                const active = selectedProduct === inst.id;
                return (
                  <button
                    key={inst.id}
                    type="button"
                    onClick={() => setSelectedProduct(inst.id)}
                    className={`p-3 text-left rounded text-xs font-mono transition-all border ${
                      active
                        ? 'bg-[var(--bronze)] border-[var(--bronze-light)] text-[var(--cream)] shadow-md font-semibold'
                        : 'bg-[var(--ink)] border-[var(--rule-dark)] text-[var(--cream)] opacity-70 hover:opacity-100 hover:border-[var(--bronze-light)]'
                    }`}
                  >
                    <span className="block text-[10px] text-[var(--bronze-light)] font-bold mb-0.5">{inst.clauseNumber}</span>
                    <span className="line-clamp-1 font-sans font-medium text-xs">{inst.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slider 1: Contract Value */}
          <div className="space-y-2 bg-[var(--ink)] p-4 rounded border border-[var(--rule-dark)]">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="contract-value-slider" className="mono-label text-[var(--cream)] font-medium">
                02 &bull; Total Exposure / Contract Value
              </label>
              <span className="font-mono text-base font-bold text-[var(--bronze-light)]">
                {formatCurrency(contractValue)} USD
              </span>
            </div>
            <input
              id="contract-value-slider"
              type="range"
              min="1000000"
              max="100000000"
              step="1000000"
              value={contractValue}
              onChange={(e) => setContractValue(Number(e.target.value))}
              className="gold-slider"
            />
            <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted-dark)]">
              <span>$1,000,000</span>
              <span>$50,000,000</span>
              <span>$100,000,000+</span>
            </div>
          </div>

          {/* Slider 2: Facility Tenor */}
          <div className="space-y-2 bg-[var(--ink)] p-4 rounded border border-[var(--rule-dark)]">
            <div className="flex items-center justify-between text-xs">
              <label htmlFor="tenor-slider" className="mono-label text-[var(--cream)] font-medium">
                03 &bull; Facility Tenor / Duration
              </label>
              <span className="font-mono text-base font-bold text-[var(--bronze-light)]">
                {tenorMonths} Months ({ (tenorMonths / 12).toFixed(1) } Yrs)
              </span>
            </div>
            <input
              id="tenor-slider"
              type="range"
              min="6"
              max="60"
              step="6"
              value={tenorMonths}
              onChange={(e) => setTenorMonths(Number(e.target.value))}
              className="gold-slider"
            />
            <div className="flex justify-between text-[10px] font-mono text-[var(--text-muted-dark)]">
              <span>6 Months</span>
              <span>24 Months</span>
              <span>60 Months</span>
            </div>
          </div>

          {/* Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Credit Rating */}
            <div className="space-y-1.5">
              <label className="mono-label text-[var(--bronze-light)] text-[11px] block font-semibold" htmlFor="calc-rating">
                Counterparty Rating Profile
              </label>
              <select
                id="calc-rating"
                value={creditRating}
                onChange={(e) => setCreditRating(e.target.value)}
                className="form-select bg-[var(--ink)] border-[var(--rule-dark)] text-xs text-[var(--cream)] focus:border-[var(--bronze-light)]"
              >
                <option value="AAA_AA">Investment Grade (AAA to AA-)</option>
                <option value="A_BBB">Standard Commercial (A+ to BBB-)</option>
                <option value="BB_UNRATED">Unrated / High-Yield (BB+ or below)</option>
              </select>
            </div>

            {/* Lender Type */}
            <div className="space-y-1.5">
              <label className="mono-label text-[var(--bronze-light)] text-[11px] block font-semibold" htmlFor="calc-lender">
                Lender / Capital Partner
              </label>
              <select
                id="calc-lender"
                value={lenderType}
                onChange={(e) => setLenderType(e.target.value)}
                className="form-select bg-[var(--ink)] border-[var(--rule-dark)] text-xs text-[var(--cream)] focus:border-[var(--bronze-light)]"
              >
                <option value="COMMERCIAL_BANK">Commercial Bank Syndicate</option>
                <option value="PRIVATE_DEBT">Private Debt Fund / Lender</option>
                <option value="DFI">Development Finance Institution (DFI)</option>
              </select>
            </div>

          </div>

        </div>

        {/* Right Column: Live Calculated Results Display (5 cols) */}
        <div className="lg:col-span-5 bg-[var(--ink)] border-2 border-[var(--bronze-light)] rounded-lg p-6 flex flex-col justify-between space-y-6 shadow-xl relative glow-active">
          
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[var(--rule-dark)] mb-4">
              <span className="mono-label text-xs text-[var(--bronze-light)] font-bold">ESTIMATED COLLATERAL RESULTS</span>
              <span className="mono-label text-[10px] bg-[var(--bronze)] text-[var(--cream)] px-2 py-0.5 rounded font-semibold">
                LIVE MODEL
              </span>
            </div>

            {/* Result Metric 1: Collateral Boost */}
            <div className="space-y-1 mb-5">
              <span className="body-sm text-xs text-[var(--text-muted-dark)]">Target Senior Debt Capacity</span>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-gold-gradient">
                {formatCurrency(metrics.collateralValue)} USD
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[var(--bronze-light)] font-mono mt-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+ {formatCurrency(metrics.additionalCapitalUnlocked)} extra liquidity vs. unbacked asset</span>
              </div>
            </div>

            {/* Visual Comparison Bar Chart */}
            <div className="space-y-3 p-3 bg-[var(--ink-light)] rounded border border-[var(--rule-dark)] mb-4">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-[var(--text-muted-dark)]">Borrowing Base Comparison:</span>
                <span className="text-[var(--bronze-light)] font-bold">LTV Comparison</span>
              </div>
              
              {/* Bar 1: Unbacked */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[var(--text-muted-dark)] font-mono">
                  <span>Standard Bank Haircut ({metrics.ltvBase}% LTV)</span>
                  <span>{formatCurrency(contractValue * (metrics.ltvBase / 100))}</span>
                </div>
                <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-white/10">
                  <div 
                    className="h-full bg-slate-500 rounded-full transition-all duration-500" 
                    style={{ width: `${metrics.ltvBase}%` }} 
                  />
                </div>
              </div>

              {/* Bar 2: Greystone Loss-Payee Boosted */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] text-[var(--bronze-light)] font-mono font-bold">
                  <span>Greystone Loss-Payee Base ({metrics.maxLtv}% LTV)</span>
                  <span>{formatCurrency(metrics.collateralValue)}</span>
                </div>
                <div className="w-full h-2.5 bg-black/40 rounded-full overflow-hidden border border-[var(--glass-border)]">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--bronze)] to-[var(--bronze-light)] rounded-full transition-all duration-500 shadow-md" 
                    style={{ width: `${metrics.maxLtv}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--rule-dark)] text-xs">
              
              <div className="bg-[var(--ink-light)] p-3 rounded border border-[var(--rule-dark)]">
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">LTV Ceiling Boost</span>
                <div className="font-mono text-base font-bold text-[var(--cream)] mt-1">
                  {metrics.ltvBase}% &rarr; <span className="text-[var(--bronze-light)]">{metrics.maxLtv}%</span>
                </div>
              </div>

              <div className="bg-[var(--ink-light)] p-3 rounded border border-[var(--rule-dark)]">
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Haircut Reduction</span>
                <div className="font-mono text-base font-bold text-[var(--cream)] mt-1">
                  -{metrics.haircutReduction}% Reduction
                </div>
              </div>

              <div className="bg-[var(--ink-light)] p-3 rounded border border-[var(--rule-dark)]">
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Est. Premium Rate</span>
                <div className="font-mono text-xs font-bold text-[var(--bronze-light)] mt-1">
                  {metrics.premiumMinRate}% – {metrics.premiumMaxRate}% p.a.
                </div>
              </div>

              <div className="bg-[var(--ink-light)] p-3 rounded border border-[var(--rule-dark)]">
                <span className="body-sm text-[11px] text-[var(--text-muted-dark)] block">Underwriting SLA</span>
                <div className="font-mono text-xs font-bold text-[var(--cream)] mt-1">
                  {metrics.slaDays} Business Days
                </div>
              </div>

            </div>

            {/* Proof callout */}
            <div className="mt-4 p-3 bg-white/5 rounded border border-white/10 flex items-start gap-2.5 text-[11px] text-[var(--cream)] opacity-90">
              <CheckCircle className="w-4 h-4 text-[var(--bronze-light)] shrink-0 mt-0.5" />
              <span>Direct Loss-Payee Endorsement substitutes borrower credit profile with rated underwriting syndicate.</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[var(--rule-dark)] space-y-2">
            <button
              onClick={handleApplyToForm}
              className="w-full btn btn-primary py-3.5 text-xs font-mono uppercase tracking-wider justify-center gap-2 font-bold shadow-lg"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Apply Parameters to Underwriter Intake</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-[10px] text-[var(--text-muted-dark)]">
              Indicative modeling only. Subject to Greystone underwriting review.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

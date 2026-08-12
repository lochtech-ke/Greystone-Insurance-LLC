import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

interface CollateralCalculatorProps {
  onOpenUnderwritingModal: () => void;
}

export const CollateralCalculator: React.FC<CollateralCalculatorProps> = ({ onOpenUnderwritingModal }) => {
  const [assetValuation, setAssetValuation] = useState<number>(50000000); // $50M default
  const [assetCategory, setAssetCategory] = useState<string>('receivables');
  const [lenderLtvTarget, setLenderLtvTarget] = useState<number>(80);

  // Haircut calculations
  // Without Greystone: lender applies heavy haircut (e.g. 35%)
  // With Greystone Loss Payee: lender haircut reduced to 5%
  const standardHaircut = assetCategory === 'maritime' ? 0.35 : assetCategory === 'receivables' ? 0.30 : 0.40;
  const greystoneHaircut = 0.05;

  const unInsuredBorrowingBase = assetValuation * (1 - standardHaircut) * (lenderLtvTarget / 100);
  const greystoneBorrowingBase = assetValuation * (1 - greystoneHaircut) * (lenderLtvTarget / 100);
  const unlockedCapital = greystoneBorrowingBase - unInsuredBorrowingBase;

  const estimatedBpsSaving = assetCategory === 'maritime' ? 65 : assetCategory === 'receivables' ? 50 : 75;
  const annualInterestSavings = (greystoneBorrowingBase * (estimatedBpsSaving / 10000));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-[var(--bronze-500)]/30 shadow-2xl relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8 border-b border-[var(--bg-dark-700)] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-[var(--bg-dark-800)] border border-[var(--bronze-500)]/40 px-3 py-1 rounded text-xs font-bold text-[var(--bronze-500)] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Instrument Simulator</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
            Calculate Unlocked Borrowing Capacity
          </h3>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">
            See how a Greystone Loss-Payee Endorsement eliminates lender collateral haircuts and expands your credit line availability.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[var(--bg-dark-900)] p-2 rounded-lg border border-[var(--bg-dark-700)]">
          <Lock className="w-4 h-4 text-[var(--bronze-500)]" />
          <span className="text-xs text-slate-300">Basel III Capital Mitigation Standard</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        
        <div className="lg:col-span-6 space-y-6">
          
          
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Select Asset / Exposure Type:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAssetCategory('receivables')}
                className={`p-3 rounded text-xs font-semibold border transition-all text-left ${
                  assetCategory === 'receivables'
                    ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8] font-bold'
                    : 'bg-[var(--bg-dark-850)] text-slate-300 border-[var(--bg-dark-700)] hover:border-[var(--bronze-500)]/40'
                }`}
              >
                Trade Receivables
              </button>
              <button
                type="button"
                onClick={() => setAssetCategory('maritime')}
                className={`p-3 rounded text-xs font-semibold border transition-all text-left ${
                  assetCategory === 'maritime'
                    ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8] font-bold'
                    : 'bg-[var(--bg-dark-850)] text-slate-300 border-[var(--bg-dark-700)] hover:border-[var(--bronze-500)]/40'
                }`}
              >
                Maritime Cargo
              </button>
              <button
                type="button"
                onClick={() => setAssetCategory('property')}
                className={`p-3 rounded text-xs font-semibold border transition-all text-left ${
                  assetCategory === 'property'
                    ? 'bg-[#C59B27] text-[#0B0D11] border-[#F3E4C8] font-bold'
                    : 'bg-[var(--bg-dark-850)] text-slate-300 border-[var(--bg-dark-700)] hover:border-[var(--bronze-500)]/40'
                }`}
              >
                Equipment / Asset
              </button>
            </div>
          </div>

          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Asset Portfolio Valuation:
              </span>
              <span className="font-cinzel text-lg font-bold text-[var(--bronze-500)]">
                {formatCurrency(assetValuation)}
              </span>
            </div>
            <input
              type="range"
              min="5000000"
              max="250000000"
              step="5000000"
              value={assetValuation}
              onChange={(e) => setAssetValuation(Number(e.target.value))}
              className="w-full h-2 bg-[var(--bg-dark-800)] rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>$5M</span>
              <span>$100M</span>
              <span>$250M+</span>
            </div>
          </div>

          
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Target Debt LTV Ratio:
              </span>
              <span className="font-cinzel text-lg font-bold text-white">
                {lenderLtvTarget}%
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="90"
              step="5"
              value={lenderLtvTarget}
              onChange={(e) => setLenderLtvTarget(Number(e.target.value))}
              className="w-full h-2 bg-[var(--bg-dark-800)] rounded-lg appearance-none cursor-pointer"
            />
          </div>

          
          <div className="p-4 rounded-lg bg-[var(--bg-dark-900)] border border-[var(--bronze-500)]/20 text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-[var(--bronze-500)] font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>How Greystone Unlocks This Liquidity:</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Standard commercial lenders discount un-insured assets by up to <strong className="text-white">{(standardHaircut * 100).toFixed(0)}%</strong>. When a Greystone Loss-Payee Endorsement is attached, the risk is transferred to A-rated underwriters, reducing haircut loss to <strong className="text-[var(--bronze-500)]">{(greystoneHaircut * 100).toFixed(0)}%</strong>.
            </p>
          </div>

        </div>

        
        <div className="lg:col-span-6 bg-[var(--bg-dark-900)] rounded-xl p-6 border border-[var(--bronze-500)]/30 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4 pb-2 border-b border-[var(--bg-dark-700)] flex items-center justify-between">
              <span>Estimated Credit Base Comparison</span>
              <span className="text-[var(--bronze-500)] font-normal">Standard vs Greystone</span>
            </div>

            
            <div className="space-y-4">
              
              
              <div className="p-3 rounded bg-[var(--bg-dark-850)] border border-[var(--bg-dark-800)] flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Standard Un-Insured Facility:</span>
                  <span className="text-xs text-slate-500 font-mono">Haircut: {(standardHaircut * 100).toFixed(0)}%</span>
                </div>
                <span className="font-cinzel text-lg font-bold text-slate-400">
                  {formatCurrency(unInsuredBorrowingBase)}
                </span>
              </div>

              
              <div className="p-4 rounded bg-[var(--bg-dark-800)] border border-[var(--bronze-500)]/50 flex items-center justify-between relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]" />
                <div>
                  <span className="text-xs font-bold text-[var(--bronze-500)] block uppercase tracking-wider">
                    With Greystone Loss-Payee Policy:
                  </span>
                  <span className="text-xs text-slate-300 font-mono">Haircut: {(greystoneHaircut * 100).toFixed(0)}%</span>
                </div>
                <span className="font-cinzel text-xl sm:text-2xl font-black text-white">
                  {formatCurrency(greystoneBorrowingBase)}
                </span>
              </div>

            </div>

            
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#2B2312] to-[#1D170A] border border-[var(--bronze-500)]/40 text-center space-y-1">
              <span className="text-xs text-[var(--bronze-500)] font-bold uppercase tracking-wider block">
                Additional Capital Unlocked:
              </span>
              <div className="font-cinzel text-3xl sm:text-4xl font-extrabold text-gradient-bronze">
                +{formatCurrency(unlockedCapital)}
              </div>
              <p className="text-[11px] text-slate-300 pt-1">
                Estimated Annual Interest Savings: <strong className="text-white">{formatCurrency(annualInterestSavings)}</strong> ({estimatedBpsSaving} bps margin improvement)
              </p>
            </div>
          </div>

          
          <button
            onClick={onOpenUnderwritingModal}
            className="btn-primary-bronze w-full py-3.5 text-sm uppercase font-bold justify-center shadow-xl cursor-pointer"
          >
            <span>Structure This Capital with Underwriter</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

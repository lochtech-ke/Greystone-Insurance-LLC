export interface ProductLine {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'credit' | 'maritime' | 'liability' | 'asset-backed' | 'advisory';
  iconName: string;
  financingEnablerRole: string;
  coverageScope: string[];
  targetClients: string[];
  covenantMechanics: string;
  lossPayeeBenefit: string;
}

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: 'credit-protection',
    title: 'Credit Protection Insurance',
    shortDesc: 'Satisfy lender collateral covenants by insuring trade receivables and debt obligations against counterparty default.',
    fullDesc: 'Greystone’s Credit Protection Insurance operates as a tier-1 financial instrument that converts commercial accounts receivable and credit extensions into bankable asset collateral. By transferring insolvency and payment default risk to A-rated underwriting syndicates, corporate borrowers satisfy stringent lender covenants and secure higher borrowing limits.',
    category: 'credit',
    iconName: 'ShieldCheck',
    financingEnablerRole: 'Serves as primary collateral enhancement, allowing commercial banks to decrease regulatory capital reserves under Basel III and increase credit facility leverage by up to 35%.',
    coverageScope: [
      'Commercial Insolvency & Buyer Bankruptcy',
      'Protracted Default (Unpaid Invoices >90 Days)',
      'Political Risk & Sovereign Currency Inconvertibility',
      'Cross-Border Buyer Non-Payment'
    ],
    targetClients: [
      'Middle-Market & Enterprise Manufacturers',
      'Global Commodity Traders & Exporters',
      'Asset-Based Lenders (ABLs) & Private Debt Funds'
    ],
    covenantMechanics: 'The policy includes a direct Loss-Payee Endorsement naming the senior lender. In the event of buyer default, claim proceeds bypass general corporate liquidity and flow directly to service outstanding debt.',
    lossPayeeBenefit: 'Transform unsecured trade debt into AAA-grade receivables recognized by commercial loan syndicates.'
  },
  {
    id: 'marine-cargo',
    title: 'Marine Cargo & Logistics Collateral',
    shortDesc: 'Comprehensive Institute Cargo Clauses (A, B, & C) tailored to de-risk physical transit inventory for trade finance facilities.',
    fullDesc: 'In transit goods are inherently high-risk assets for trade finance lenders. Greystone Marine Cargo Solutions provide institutional-grade protection under Institute Cargo Clauses A (All Risks), B, and C. Designed specifically to interface with Letters of Credit (LCs) and Warehouse Receipt Financing, our policies unlock liquidity for global supply chains.',
    category: 'maritime',
    iconName: 'Ship',
    financingEnablerRole: 'Fulfills mandatory bank Letter of Credit (LC) insurance requirements and enables collateralized inventory financing while goods are in transit or bonded storage.',
    coverageScope: [
      'Institute Cargo Clauses (A) — All Risks Coverage',
      'Clauses (B) & (C) Major Maritime Casualties',
      'War, Strikes, Riots & Civil Commotions (WSRCC)',
      'Stockthroughput (STP) & Warehouse Storage Collateral'
    ],
    targetClients: [
      'International Freight Forwarders & Charterers',
      'Commodity Trading Houses (Agri, Energy, Metals)',
      'Trade Finance Syndicate Banks'
    ],
    covenantMechanics: 'Full assignment of policy proceeds via Banker’s Loss Payee Clause, providing lenders with immediate subrogation rights upon vessel casualty or transit loss.',
    lossPayeeBenefit: 'Eliminates inventory haircut discounts applied by lenders during international transit.'
  },
  {
    id: 'product-liability',
    title: 'Product Liability & Indemnity Collateral',
    shortDesc: 'Protect enterprise balance sheets from catastrophic product recall or third-party indemnification claims.',
    fullDesc: 'Enterprise lenders require corporate borrowers to maintain robust liability buffers to prevent sudden operational distress from liability litigation or product recalls. Greystone structures custom Product Liability policies that satisfy institutional debt covenants, ensuring continuous access to working capital credit lines.',
    category: 'liability',
    iconName: 'Building2',
    financingEnablerRole: 'Shields debt service liquidity from unexpected product defect litigation, preserving corporate credit ratings and debt service coverage ratios (DSCR).',
    coverageScope: [
      'Global Third-Party Bodily Injury & Property Damage',
      'Comprehensive Product Recall & Contamination Expenses',
      'Contractual Indemnity & Customer Warranty Backstop',
      'Cross-Border Jurisdiction Defense & Settlement'
    ],
    targetClients: [
      'Pharmaceutical & Medical Device Manufacturers',
      'Automotive & Industrial Component OEMs',
      'Consumer Goods & Technology Enterprises'
    ],
    covenantMechanics: 'Structured with lender notice of cancellation and mandatory maintenance covenants tied directly to debt facility agreements.',
    lossPayeeBenefit: 'Assures debt syndicates that operational legal contingencies will not trigger default covenants.'
  },
  {
    id: 'asset-backed-risk',
    title: 'Asset-Backed Financial Risk Insurance',
    shortDesc: 'De-risk tangible equipment, commercial real estate, and infrastructure portfolios to unlock non-recourse debt financing.',
    fullDesc: 'Asset-backed lending hinges on asset valuation resilience. Greystone’s Asset-Backed Insurance covers residual value loss, physical asset destruction, and operational disruption for high-value machinery, energy infrastructure, and commercial property portfolios.',
    category: 'asset-backed',
    iconName: 'Coins',
    financingEnablerRole: 'Reduces lender loan-to-value (LTV) haircut constraints from 40% down to 10%, unlocking substantial equity liquidity for refinancing or expansion.',
    coverageScope: [
      'All-Risk Physical Property & Specialized Machinery Loss',
      'Residual Asset Value Guarantee (RVG)',
      'Business Interruption & Loss of Revenue Indemnity',
      'Environmental Remediation & Decommissioning Protection'
    ],
    targetClients: [
      'Infrastructure Capital & Energy Transition Developers',
      'Equipment Leasing & Fleet Management Firms',
      'Commercial Real Estate Investment Trusts (REITs)'
    ],
    covenantMechanics: 'Includes first-loss payee status, joint-loss adjusting representation, and lender mortgage/security interest clauses.',
    lossPayeeBenefit: 'Enables high-LTV non-recourse debt placement for heavy capital equipment and real estate.'
  },
  {
    id: 'corporate-advisory',
    title: 'Corporate Risk Advisory & Capital Structuring',
    shortDesc: 'Bespoke financial risk engineering to align corporate insurance programs with bank syndicated loan documentation.',
    fullDesc: 'Insurance programs and debt covenants are frequently misaligned, leaving dangerous gaps in lender protection or resulting in redundant premium spend. Greystone’s Advisory division reviews corporate debt covenants, audits existing policies, and architects unified risk transfer structures that optimize both financing terms and insurance spend.',
    category: 'advisory',
    iconName: 'FileText',
    financingEnablerRole: 'Directly negotiates policy language with bank credit committees, eliminating restrictive insurance-related borrowing conditions.',
    coverageScope: [
      'Lender Covenant & Loan Agreement Compliance Audits',
      'Structured Risk Transfer & Captive Insurance Feasibility',
      'Specialized Loss-Payee & Subrogation Clause Engineering',
      'Syndicated Loan Risk Verification & Certification'
    ],
    targetClients: [
      'Chief Financial Officers & Corporate Treasurers',
      'Private Equity Sponsor Portfolio Companies',
      'Project Finance Arrangers & Advisory Desks'
    ],
    covenantMechanics: 'Greystone issues formal Underwriting Certificates of Financial Collateral directly to bank administrative agents.',
    lossPayeeBenefit: 'Harmonizes enterprise risk management with debt facility covenants to streamline loan closings.'
  }
];

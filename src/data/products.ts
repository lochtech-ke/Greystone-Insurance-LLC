export interface ProductInstrument {
  id: string;
  clauseNumber: string; // 'Clause I' through 'Clause V'
  romanNumeral: string; // 'I', 'II', 'III', 'IV', 'V'
  title: string;
  shortDesc: string;
  whatItIs: string;
  whoNeedsIt: string[];
  whatItUnlocks: string;
  covenantMechanism: string;
  iconName: string;
}

export const PRODUCT_INSTRUMENTS: ProductInstrument[] = [
  {
    id: 'credit-protection',
    clauseNumber: 'Clause I',
    romanNumeral: 'I',
    title: 'Credit Protection Policy',
    shortDesc: 'Protects lenders and trade creditors against counterparty default on debt facilities or accounts receivable.',
    whatItIs: 'An institutional risk-transfer policy that insures credit extensions, commercial receivables, and debt repayment obligations against buyer or counterparty insolvency, default, or political risk.',
    whoNeedsIt: [
      'Commercial lenders and private debt funds extending credit facilities',
      'Corporate sellers offering deferred payment terms on trade receivables',
      'Borrowers seeking higher borrowing base allocations from senior debt syndicates'
    ],
    whatItUnlocks: 'Allows lenders and sellers to extend substantial credit terms or loan limits that would otherwise be declined due to counterparty concentration or risk limits.',
    covenantMechanism: 'Endorsed with a direct Loss-Payee clause naming the lending institution as primary beneficiary, automatically converting insured receivables into Basel III-qualified collateral.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'advance-payment-guarantee',
    clauseNumber: 'Clause II',
    romanNumeral: 'II',
    title: 'Advance Payment Guarantee',
    shortDesc: 'Guarantees the recovery of upfront buyer funds if a contractor or supplier fails to deliver.',
    whatItIs: 'A financial surety instrument guaranteeing that advance payments or mobilisation deposits made by a buyer/employer to a supplier or contractor will be refunded in full if contractual obligations are unfulfilled.',
    whoNeedsIt: [
      'Procurement authorities and corporate buyers paying mobilisation funds',
      'EPC contractors requiring upfront capital to procure materials',
      'Manufacturers needing liquidity before starting production'
    ],
    whatItUnlocks: 'Enables buyers to confidently disburse upfront payments while providing contractors access to crucial pre-execution liquidity without depleting credit lines.',
    covenantMechanism: 'Structured as an irrevocable guarantee payable on first demand or upon proven default, protecting buyer capital throughout the pre-delivery phase.',
    iconName: 'Coins'
  },
  {
    id: 'performance-bonds',
    clauseNumber: 'Clause III',
    romanNumeral: 'III',
    title: 'Performance Bonds',
    shortDesc: 'Guarantees complete contract execution to agreed terms, compensating project owners upon default.',
    whatItIs: 'An institutional surety bond assuring the project owner (obligee) that the contractor (principal) will perform and complete the contracted work strictly in accordance with specification and schedule.',
    whoNeedsIt: [
      'General contractors bidding on public or private infrastructure tenders',
      'Project owners requiring financial recourse against non-performance',
      'Banks financing infrastructure projects requiring contractor bonding'
    ],
    whatItUnlocks: 'Satisfies mandatory procurement and lender covenants, enabling contractors to qualify for major capital projects without locking up cash as cash collateral.',
    covenantMechanism: 'Provides an enforceable financial indemnity to the project owner for completion costs, re-tendering expenses, and liquidated damages up to the bond penal sum.',
    iconName: 'FileCheck'
  },
  {
    id: 'bid-bonds',
    clauseNumber: 'Clause IV',
    romanNumeral: 'IV',
    title: 'Bid Bonds',
    shortDesc: 'Assures tender issuers that the winning bidder will execute the contract and post required bonds.',
    whatItIs: 'A preliminary surety instrument submitted alongside a tender offer, guaranteeing that if awarded the contract, the bidder will enter into the contract and supply requisite performance security.',
    whoNeedsIt: [
      'Engineering and construction firms submitting tender bids',
      'Government agencies and corporate procurement committees',
      'Trade suppliers bidding on institutional procurement contracts'
    ],
    whatItUnlocks: 'Enables contractors to bid on multiple high-value tenders simultaneously without tying up working capital or bank credit lines.',
    covenantMechanism: 'Compensates the procuring entity for the cost difference of re-awarding to the second-highest bidder if the selected bidder withdraws or fails to execute.',
    iconName: 'Award'
  },
  {
    id: 'marine-all-risk',
    clauseNumber: 'Clause V',
    romanNumeral: 'V',
    title: 'Marine & All Risk Insurance',
    shortDesc: 'Comprehensive transit and cargo indemnity satisfying international trade finance standards.',
    whatItIs: 'Institutional marine cargo and logistics insurance covering raw materials, finished goods, and equipment against physical loss or damage across ocean, air, and overland transit routes.',
    whoNeedsIt: [
      'Commodity trading enterprises and international importers/exporters',
      'Trade finance banks issuing Letters of Credit (LCs)',
      'Logistics operators managing cross-border supply chain movements'
    ],
    whatItUnlocks: 'Satisfies mandatory Letter of Credit (LC) and warehouse financing covenants, transforming inventory in transit into acceptable bank collateral.',
    covenantMechanism: 'Underwritten under Institute Cargo Clauses (A), with Loss-Payee assignment directly to the trade finance lender to eliminate inventory haircuts.',
    iconName: 'Ship'
  }
];

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  clientRegion: string;
  facilitySize: string;
  challenge: string;
  greystoneSolution: string;
  capitalResult: string;
  covenantMechanism: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'maritime-trade-syndicate',
    clientIndustry: 'Global Bulk Cargo Logistics',
    clientRegion: 'London / Singapore',
    facilitySize: '$120,000,000 Trade Credit & Inventory Facility',
    challenge: 'A major maritime logistics operator faced a 35% collateral haircut requirement from syndicated lenders on transit inventory across European ports due to volatile market conditions.',
    greystoneSolution: 'Greystone structured an Institute Cargo Clause (A) policy enhanced with a specialized Warehouse Stockthroughput (STP) Loss-Payee Endorsement naming the administrative agent bank.',
    capitalResult: 'Lenders reduced the collateral haircut from 35% to 5%, releasing $36M in additional liquidity and lowering facility interest margin by 65 basis points.',
    covenantMechanism: 'Direct Bank Loss-Payee clause with 30-day notice of cancellation and automatic claim subrogation.'
  },
  {
    id: 'commercial-real-estate-debt',
    clientIndustry: 'Commercial Real Estate Development',
    clientRegion: 'New York / Chicago',
    facilitySize: '$85,000,000 Construction Debt Refinancing',
    challenge: 'Rising interest rates and lender risk aversion jeopardized debt refinancing covenants for a mixed-use commercial tower portfolio.',
    greystoneSolution: 'Greystone placed an Asset-Backed Residual Value & All-Risk Property Insurance wrapper backed by A+ rated reinsurance syndicates.',
    capitalResult: 'Satisfied senior lender Debt Service Coverage Ratio (DSCR) requirements without requiring equity dilution, enabling successful loan closing.',
    covenantMechanism: 'First Mortgagee Loss Payee endorsement with joint claim adjusting representation.'
  },
  {
    id: 'tech-supply-chain-credit',
    clientIndustry: 'Enterprise Electronics Manufacturing',
    clientRegion: 'Frankfurt / East Asia',
    facilitySize: '$45,000,000 Revolving Working Capital Line',
    challenge: 'Unsecured trade credit extended to international distributors created concentration risk, preventing commercial banks from expanding working capital credit lines.',
    greystoneSolution: 'Implemented a Greystone Credit Protection Insurance program covering key international buyers with direct assignment to the lender.',
    capitalResult: 'Expanded borrowing base eligibility from 60% to 90% of accounts receivable, unlocking $13.5M in immediate growth capital.',
    covenantMechanism: 'Receivables assignment covenant backed by 90% default indemnity payout within 60 days of claim filing.'
  }
];

import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, ShieldCheck, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'Loss-Payee Covenants' | 'Basel III Framework' | 'Syndicate Ratings' | 'Claims & Assignment';
  question: string;
  answer: string;
  regulatoryRef?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Loss-Payee Covenants',
    question: 'How does a Loss-Payee Endorsement legally protect the lending bank?',
    answer: 'A Loss-Payee Endorsement creates an irrevocable legal assignment under which the insurance syndicate agrees to pay all covered policy proceeds directly to the designated lending institution. The borrower cannot divert, cancel, or modify the policy proceeds without explicit written consent from the lender.',
    regulatoryRef: 'UCC Article 9 / English Law Assignment Protocols'
  },
  {
    id: 'faq-2',
    category: 'Basel III Framework',
    question: 'Why do commercial banks accept Greystone policy instruments to reduce risk-weighted assets?',
    answer: 'Under the Credit Risk Mitigation (CRM) rules of the Basel III framework, banks can substitute the probability of default (PD) and loss given default (LGD) of a commercial borrower with the credit standing of an A-rated underwriting syndicate. This significantly reduces the bank’s regulatory capital reserve requirements for the loan.',
    regulatoryRef: 'Basel III Framework (CRE22 Credit Risk Mitigation)'
  },
  {
    id: 'faq-3',
    category: 'Syndicate Ratings',
    question: 'What underwriting ratings back Greystone financial instruments?',
    answer: 'Greystone instruments are backed by rated Lloyd’s syndicates, Tier-1 international insurance companies, and specialized credit reinsurers possessing AM Best ratings of "A (Excellent)" or higher and Standard & Poor’s ratings of "A+" or higher.',
    regulatoryRef: 'AM Best / S&P Financial Strength Ratings'
  },
  {
    id: 'faq-4',
    category: 'Claims & Assignment',
    question: 'What is the standard claim payout window upon a counterparty default?',
    answer: 'Once formal proof of default or non-payment is submitted by the designated Loss-Payee (the lender), policy claims are processed under strict contractual SLAs—typically within 30 to 60 days following the expiration of the waiting period.',
    regulatoryRef: 'Standard International Credit Insurance SLA'
  },
  {
    id: 'faq-5',
    category: 'Loss-Payee Covenants',
    question: 'Can an Advance Payment Guarantee be issued as an on-demand instrument?',
    answer: 'Yes. Greystone structures both conditional performance bonds and irrevocable first-demand advance payment guarantees tailored to buyer procurement covenants and bank financing requirements.',
    regulatoryRef: 'URDG 758 / ICC Guarantee Rules'
  },
  {
    id: 'faq-6',
    category: 'Claims & Assignment',
    question: 'Does the borrower need to provide physical collateral alongside the policy?',
    answer: 'No. The purpose of a Greystone instrument is to act as primary or supplementary bankable collateral. The underlying trade contract, asset exposure, or accounts receivable—when combined with our policy—satisfies the lender’s collateral requirement.',
    regulatoryRef: 'Greystone Risk Transfer Model'
  }
];

export const RiskKnowledgeBase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({ 'faq-1': true });

  const categories = ['All', 'Loss-Payee Covenants', 'Basel III Framework', 'Syndicate Ratings', 'Claims & Assignment'];

  const filteredItems = FAQ_DATA.filter((item) => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      
      {/* Search & Category Header */}
      <div className="space-y-4 text-center">
        
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="w-5 h-5 text-[var(--bronze)] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search covenants, Basel III, Loss-Payee mechanics, ratings..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-[var(--rule-light)] rounded-lg text-sm text-[var(--charcoal)] focus:border-[var(--bronze)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--bronze)]/20"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-[var(--text-muted-light)] hover:text-[var(--charcoal)]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
                activeCategory === cat
                  ? 'bg-[var(--ink)] border-[var(--bronze-light)] text-[var(--bronze-light)] font-semibold shadow-sm'
                  : 'bg-white border-[var(--rule-light)] text-[var(--text-muted-light)] hover:border-[var(--bronze)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="bg-white border border-[var(--rule-light)] rounded-md shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[var(--paper-warm)]/50 transition-colors"
                >
                  <div className="space-y-1">
                    <span className="mono-label text-[10px] text-[var(--bronze)] font-bold block">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-semibold text-[var(--charcoal)]">
                      {item.question}
                    </h4>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[var(--paper-warm)] flex items-center justify-center text-[var(--bronze)] shrink-0 border border-[var(--rule-light)]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-[var(--rule-light)] bg-[var(--paper)] space-y-3 animate-fadeIn">
                    <p className="body-sm text-xs sm:text-sm text-[var(--charcoal)] leading-relaxed">
                      {item.answer}
                    </p>
                    
                    {item.regulatoryRef && (
                      <div className="inline-flex items-center gap-1.5 mono-label text-[10px] text-[var(--bronze)] bg-[var(--paper-warm)] px-2.5 py-1 rounded border border-[var(--rule-light)] font-semibold">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Framework: {item.regulatoryRef}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center bg-white border border-[var(--rule-light)] rounded-md space-y-2">
            <HelpCircle className="w-8 h-8 text-[var(--bronze)] mx-auto" />
            <h4 className="font-serif text-base font-semibold">No matching queries found</h4>
            <p className="body-sm text-xs text-[var(--text-muted-light)]">
              Try searching with different keywords like &quot;Loss-Payee&quot;, &quot;LTV&quot;, or &quot;Basel III&quot;.
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

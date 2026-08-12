const fs = require('fs');
// Fix unused imports and type issues
const fixes = [
  {
    file: 'src/App.tsx',
    from: `const PAGE_META: Record<TabId, { title: string; description: string }> = {`,
    to: `// Page metadata for SEO (can be wired to document.title)
  // const PAGE_META: Record<TabId, { title: string; description: string }> = {`
  },
];
// We'll do the fixes inline via multiple replace operations
let content;

// Fix App.tsx - remove unused PAGE_META
content = fs.readFileSync('src/App.tsx', 'utf8');
// Remove the entire PAGE_META block
content = content.replace(
  /const PAGE_META[\s\S]+?^  \};/m,
  ''
);
fs.writeFileSync('src/App.tsx', content);
console.log('Fixed App.tsx');

// Fix CollateralCalculator imports
content = fs.readFileSync('src/components/CollateralCalculator.tsx', 'utf8');
content = content.replace(
  "import { Calculator, ArrowRight, ShieldCheck, DollarSign, TrendingUp, Percent, CheckCircle2, Lock } from 'lucide-react';",
  "import { Calculator, ArrowRight, ShieldCheck, Coins, Lock } from 'lucide-react';"
);
fs.writeFileSync('src/components/CollateralCalculator.tsx', content);
console.log('Fixed CollateralCalculator.tsx');

// Fix FinancingTriangleDiagram imports
content = fs.readFileSync('src/components/FinancingTriangleDiagram.tsx', 'utf8');
content = content.replace(
  "import { ArrowRight, Shield, Building2, DollarSign, ChevronRight } from 'lucide-react';",
  ""
);
fs.writeFileSync('src/components/FinancingTriangleDiagram.tsx', content);
console.log('Fixed FinancingTriangleDiagram.tsx');

// Fix Footer imports
content = fs.readFileSync('src/components/Footer.tsx', 'utf8');
content = content.replace(
  "import { Shield, Building2, MapPin, Mail, Phone, Lock, ExternalLink, Scale } from 'lucide-react';",
  "import { Shield, Building2, MapPin, Lock, Scale } from 'lucide-react';"
);
fs.writeFileSync('src/components/Footer.tsx', content);
console.log('Fixed Footer.tsx');

// Fix Header imports
content = fs.readFileSync('src/components/Header.tsx', 'utf8');
content = content.replace(
  "import { Shield, Menu, X, ArrowRight, FileCheck, Phone } from 'lucide-react';",
  "import { Menu, X, ArrowRight, FileCheck } from 'lucide-react';"
);
fs.writeFileSync('src/components/Header.tsx', content);
console.log('Fixed Header.tsx');

// Fix HeadlineSwitcher imports
content = fs.readFileSync('src/components/HeadlineSwitcher.tsx', 'utf8');
content = content.replace(
  "import { ArrowRight, ShieldCheck, FileCheck, Layers, ChevronRight, Lock } from 'lucide-react';",
  "import { ArrowRight, ShieldCheck, FileCheck, Layers, ChevronRight } from 'lucide-react';"
);
fs.writeFileSync('src/components/HeadlineSwitcher.tsx', content);
console.log('Fixed HeadlineSwitcher.tsx');

// Fix caseStudies.ts - rename covenantMechanics to covenantMechanism
content = fs.readFileSync('src/data/caseStudies.ts', 'utf8');
content = content.replace(/covenantMechanics:/g, 'covenantMechanism:');
fs.writeFileSync('src/data/caseStudies.ts', content);
console.log('Fixed caseStudies.ts');

// Fix ClaimsPage imports
content = fs.readFileSync('src/pages/ClaimsPage.tsx', 'utf8');
content = content.replace(
  "import { Shield, Phone, Mail, Clock, AlertTriangle, CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';",
  "import { Shield, Phone, Mail, Clock, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';"
);
// Fix unused idx in map
content = content.replace(
  '.map((step, idx) => (',
  '.map((step) => ('
);
// Fix unused param
content = content.replace(
  'export const ClaimsPage: React.FC<ClaimsPageProps> = ({ onOpenUnderwritingModal }) => {',
  'export const ClaimsPage: React.FC<ClaimsPageProps> = ({ onOpenUnderwritingModal: _onOpenUnderwritingModal }) => {'
);
fs.writeFileSync('src/pages/ClaimsPage.tsx', content);
console.log('Fixed ClaimsPage.tsx');

// Fix HomePage - covenantMechanics -> covenantMechanism
content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');
content = content.replace(/\.covenantMechanics/g, '.covenantMechanism');
fs.writeFileSync('src/pages/HomePage.tsx', content);
console.log('Fixed HomePage.tsx');

// Fix InsightsPage imports (type import)
content = fs.readFileSync('src/pages/InsightsPage.tsx', 'utf8');
content = content.replace(
  "import { ARTICLES, Article } from '../data/articles';",
  "import { ARTICLES } from '../data/articles';\nimport type { Article } from '../data/articles';"
);
content = content.replace(
  "import { BookOpen, X, Clock, User, ArrowRight, ChevronRight } from 'lucide-react';",
  "import { BookOpen, X, Clock, User, ChevronRight } from 'lucide-react';"
);
fs.writeFileSync('src/pages/InsightsPage.tsx', content);
console.log('Fixed InsightsPage.tsx');

// Fix ServicesPage imports (type import)
content = fs.readFileSync('src/pages/ServicesPage.tsx', 'utf8');
content = content.replace(
  "import { PRODUCT_LINES, ProductLine } from '../data/products';",
  "import { PRODUCT_LINES } from '../data/products';\nimport type { ProductLine } from '../data/products';"
);
fs.writeFileSync('src/pages/ServicesPage.tsx', content);
console.log('Fixed ServicesPage.tsx');

console.log('\nAll fixes applied!');

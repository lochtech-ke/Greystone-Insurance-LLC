const fs = require('fs');
const files = [
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/HeadlineSwitcher.tsx',
  'src/components/CollateralCalculator.tsx',
  'src/components/UnderwritingModal.tsx',
  'src/components/FinancingTriangleDiagram.tsx',
];
files.forEach(f => {
  const c = fs.readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  fs.writeFileSync(f, c);
  console.log('Fixed:', f);
});

const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const colorReplacements = {
  // Backgrounds
  'bg-\\[#0B0D11\\]': 'bg-[var(--bg-dark-950)]',
  'bg-\\[#11141A\\]': 'bg-[var(--bg-dark-900)]',
  'bg-\\[#181C24\\]': 'bg-[var(--bg-dark-850)]',
  'bg-\\[#202632\\]': 'bg-[var(--bg-dark-800)]',
  'bg-\\[#2B3344\\]': 'bg-[var(--bg-dark-700)]',
  'bg-\\[#1D170A\\]': 'bg-[var(--bronze-900)]',
  
  // Borders
  'border-\\[#D4AF37\\]': 'border-[var(--bronze-500)]',
  'border-white/10': 'border-[var(--bg-dark-700)]',
  'border-white/5': 'border-[var(--bg-dark-800)]',
  'border-white/8': 'border-[var(--bg-dark-800)]',
  
  // Text
  'text-\\[#D4AF37\\]': 'text-[var(--bronze-500)]',
  
  // Custom
  'glass-panel border': 'glass-panel border-gradient-bronze border', // adding gradient border
};

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    for (const [key, value] of Object.entries(colorReplacements)) {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, value);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});

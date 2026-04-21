const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      content = content.replace(/text-white/g, 'text-[var(--text-primary)]');
      content = content.replace(/text-gray-200/g, 'text-[var(--text-primary)]');
      content = content.replace(/text-gray-300/g, 'text-[var(--text-secondary)]');
      content = content.replace(/text-gray-400/g, 'text-[var(--text-secondary)]');
      content = content.replace(/text-gray-500/g, 'text-[var(--text-muted)]');
      content = content.replace(/bg-dark-bg/g, 'bg-[var(--bg-base)]');
      content = content.replace(/bg-dark-card/g, 'bg-[var(--bg-card)]');
      content = content.replace(/border-dark-border/g, 'border-[var(--border-subtle)]');

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done migrating colors.');

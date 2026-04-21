const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/\!border-gray-200 dark:\!border-gray-200 dark:border-dark-border/g, '!border-gray-200 dark:!border-dark-border');
  content = content.replace(/bg-white\/50 dark:bg-white dark:bg-dark-card\/50/g, 'bg-white/50 dark:bg-dark-card/50');
  content = content.replace(/text-gray-400 dark:text-gray-500 dark:text-gray-400/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/border-gray-200 dark:border-gray-200 dark:border-dark-border\/50/g, 'border-gray-200 dark:border-dark-border/50');
  content = content.replace(/bg-gray-50 dark:bg-gray-50 dark:bg-dark-bg/g, 'bg-gray-50 dark:bg-dark-bg');
  
  fs.writeFileSync(file, content);
});

console.log('Cleaned');

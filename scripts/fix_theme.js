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
  
  // Specific modifiers (must run first)
  content = content.replace(/\bg-dark-bg\b/g, 'bg-gray-50 dark:bg-dark-bg');
  content = content.replace(/\bg-dark-card\/50\b/g, 'bg-white/50 dark:bg-dark-card/50');
  content = content.replace(/\bg-dark-card\/30\b/g, 'bg-white/30 dark:bg-dark-card/30');
  content = content.replace(/\bg-dark-card\b/g, 'bg-white dark:bg-dark-card');
  content = content.replace(/\!border-dark-border\b/g, '!border-gray-200 dark:!border-dark-border');
  content = content.replace(/\border-dark-border\/50\b/g, 'border-gray-200 dark:border-dark-border/50');
  content = content.replace(/\border-dark-border\b/g, 'border-gray-200 dark:border-dark-border');
  
  // Text colors
  content = content.replace(/\!text-white\b/g, '!text-gray-900 dark:!text-white');
  content = content.replace(/(?<!\!)text-white\b/g, 'text-gray-900 dark:text-white');
  content = content.replace(/\btext-gray-200\b/g, 'text-gray-700 dark:text-gray-200');
  content = content.replace(/\btext-gray-300\b/g, 'text-gray-600 dark:text-gray-300');
  content = content.replace(/\btext-gray-400\b/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/\btext-gray-500\b/g, 'text-gray-400 dark:text-gray-500');

  fs.writeFileSync(file, content);
});

console.log('Done transforming files.');

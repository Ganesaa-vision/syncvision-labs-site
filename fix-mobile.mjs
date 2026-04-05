import fs from 'fs';
import path from 'path';

const viewsDir = path.join(process.cwd(), 'views');
const files = fs.readdirSync(viewsDir).filter(f => f.endsWith('.tsx')).map(f => path.join(viewsDir, f));

const padMap = {
  10: 6,
  12: 6,
  14: 6,
  16: 8,
  20: 10,
  24: 12,
  28: 12,
  32: 16,
  40: 20,
  48: 24,
  56: 28,
  64: 32,
  72: 32,
  80: 40,
  96: 48
};

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  content = content.replace(/className=(?:\{`|["'])(.*?)(?:`\}|["'])/g, (match, classString) => {
    let classes = classString.split(/\s+/);
    let newClasses = [];
    
    // Determine if this is a decorative absolute element
    const isDecorative = classes.some(c => c === 'absolute' || c === 'fixed' || c.startsWith('blur-') || c.startsWith('opacity-') || c.includes('pointer-events-none') || c === 'h-full' && classes.includes('w-full') && classes.includes('fixed'));
    const isTableWrapper = classes.includes('overflow-x-auto');

    for (let cls of classes) {
      if (!cls) continue;

      // 1. Check paddings
      const paddingMatch = cls.match(/^(p|px|py|pt|pb|pl|pr)-([0-9]+)$/);
      if (paddingMatch) {
        const type = paddingMatch[1];
        const val = parseInt(paddingMatch[2]);
        
        if (padMap[val]) {
          const hasResponsive = classes.some(c => c.startsWith(`md:${type}-`) || c.startsWith(`lg:${type}-`) || c.startsWith(`sm:${type}-`));
          if (!hasResponsive) {
            newClasses.push(`${type}-${padMap[val]} md:${cls}`);
            continue;
          }
        }
      }

      // 2. Check fixed widths that are large (skip if decorative or table)
      const widthMatch = cls.match(/^w-\[([0-9]+)px\]$/);
      if (widthMatch && !isDecorative && !isTableWrapper) {
        const val = parseInt(widthMatch[1]);
        if (val > 300) {
           const hasResponsiveW = classes.some(c => c.startsWith(`md:w-`) || c.startsWith(`lg:w-`) || c.startsWith(`sm:w-`));
           if (!hasResponsiveW && !classes.includes('max-w-full') && !classes.includes('w-full')) {
             newClasses.push(`w-full md:${cls}`);
             continue;
           }
        }
      }

      const stdWidthMatch = cls.match(/^w-(64|72|80|96)$/);
      if (stdWidthMatch && !isDecorative && !isTableWrapper) {
          const hasResponsiveW = classes.some(c => c.startsWith(`md:w-`) || c.startsWith(`lg:w-`) || c.startsWith(`sm:w-`));
          if (!hasResponsiveW && !classes.includes('w-full')) {
             newClasses.push(`w-full md:${cls}`);
             continue;
          }
      }

      // Check fixed minimum widths
      const minWidthMatch = cls.match(/^min-w-\[([0-9]+)px\]$/);
      if (minWidthMatch && !isDecorative && !isTableWrapper) {
        const val = parseInt(minWidthMatch[1]);
        if (val >= 500) {
           const hasResponsiveW = classes.some(c => c.startsWith(`md:min-w-`) || c.startsWith(`lg:min-w-`) || c.startsWith(`sm:min-w-`));
           if (!hasResponsiveW) {
             newClasses.push(`min-w-0 md:${cls}`);
             continue;
           }
        }
      }

      newClasses.push(cls);
    }

    // 3. Check flex containers that should probably stack on mobile
    if (newClasses.includes('flex')) {
      const hasDir = newClasses.some(c => c.includes('flex-col') || c.includes('flex-row') || c.includes('flex-wrap'));
      const hasLargeGap = newClasses.some(c => c.match(/^gap-(6|8|10|12|16|20|24|32)$/));
      const isInline = newClasses.includes('inline-flex');
      const isIconContainer = newClasses.includes('h-10') || newClasses.includes('h-12') || newClasses.includes('w-10') || newClasses.includes('w-12') || newClasses.includes('rounded-full'); 
      const isNavbarElement = newClasses.includes('nav') || classes.some(c => c.includes('menu'));
      const isRowEnforcer = classes.some(c => c.includes('items-center') && c.includes('justify-between') && !c.includes('w-full')); // often tiny header rows
      
      // Specifically target layout blocks: large gap, not inline, not an icon button
      if (!hasDir && hasLargeGap && !isInline && !isIconContainer) {
         const flexIndex = newClasses.indexOf('flex');
         if (flexIndex !== -1) {
            newClasses.splice(flexIndex, 1, 'flex flex-col md:flex-row');
         }
      }
    }

    // Make sure 'md:' overrides don't conflict, actually Tailwind handles it by cascade, so string order doesn't matter much but we output fine.
    
    const modifiedClassString = newClasses.join(' ');
    if (classString !== modifiedClassString) {
      return match.replace(classString, modifiedClassString);
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

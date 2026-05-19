const fs = require('fs');
const path = require('path');

const directories = ['pages', 'components'];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.vue')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Brighten colors
            content = content.replace(/text-gray-600/g, 'text-gray-400');
            content = content.replace(/text-gray-500/g, 'text-gray-300');
            content = content.replace(/text-gray-400/g, 'text-gray-300'); // double up but text-gray-300 is fine

            // Increase text sizes
            content = content.replace(/text-\[9px\]/g, 'text-[11px]');
            content = content.replace(/text-\[10px\]/g, 'text-[12px]');
            content = content.replace(/text-\[11px\]/g, 'text-[13px]');
            content = content.replace(/text-\[12px\]/g, 'text-[14px]');
            content = content.replace(/text-\[13px\]/g, 'text-[15px]');

            fs.writeFileSync(fullPath, content, 'utf8');
        }
    }
}

for (const dir of directories) {
    if (fs.existsSync(dir)) {
        processDirectory(dir);
    }
}

console.log('Typography update complete.');

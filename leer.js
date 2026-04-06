const fs = require('fs');

const contenido = fs.readFileSync('proyecto-AI.md', 'utf8');
console.log('--- Mi proyecto ---');
console.log(contenido);

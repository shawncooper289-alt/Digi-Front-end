import { access } from 'node:fs/promises';

await access('public/index.html');
console.log('Static public output is ready for Vercel.');

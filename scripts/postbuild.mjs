// Écrit dist/_headers pour Netlify : en-têtes de sécurité, cache des polices,
// et fermeture aux robots tant que INDEXATION n'est pas à "true".
import { writeFileSync } from 'node:fs';

const indexation = process.env.INDEXATION === 'true';
const regles = [
  '/*',
  '  X-Content-Type-Options: nosniff',
  '  Referrer-Policy: strict-origin-when-cross-origin',
  '  X-Frame-Options: SAMEORIGIN',
  '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
  ...(indexation ? [] : ['  X-Robots-Tag: noindex, nofollow']),
  '',
  '/_astro/*',
  '  Cache-Control: public, max-age=31536000, immutable',
  '',
];
writeFileSync('dist/_headers', regles.join('\n'));
console.log(`_headers écrit (indexation ${indexation ? 'ouverte' : 'fermée'})`);

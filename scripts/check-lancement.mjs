// Liste tout ce qui reste à compléter ou à valider avant d'ouvrir le site à Google.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const fichiers = [];
const parcourir = (dossier) => {
  for (const nom of readdirSync(dossier)) {
    const chemin = join(dossier, nom);
    if (statSync(chemin).isDirectory()) parcourir(chemin);
    else if (/\.(astro|ts|md|mjs)$/.test(nom)) fichiers.push(chemin);
  }
};
parcourir('src');

let reste = 0;
for (const f of fichiers) {
  readFileSync(f, 'utf8').split('\n').forEach((ligne, i) => {
    const marque = ligne.includes('A_COMPLETER') || ligne.includes('[à compléter]');
    const technique = /export const A_COMPLETER|import |includes\(A_COMPLETER\)|replace\(A_COMPLETER/.test(ligne);
    if (marque && !technique && !f.endsWith('check-lancement.mjs')) {
      console.log(`${f}:${i + 1}  ${ligne.trim()}`);
      reste++;
    }
  });
}
console.log(reste ? `\n${reste} élément(s) à compléter avant le lancement.` : '\nAucun élément à compléter.');
console.log(process.env.SITE_URL ? `Adresse du site : ${process.env.SITE_URL}` : 'SITE_URL non défini : adresse de test utilisée.');
console.log('Pense aussi à : validation AXA (marque et mentions), nom identique à la fiche Google, puis INDEXATION=true dans Netlify.');

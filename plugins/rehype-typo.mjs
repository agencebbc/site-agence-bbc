// Applique la typographie française aux textes des articles Markdown.
const FINE = ' ';
const INSEC = ' ';
const MOIS = 'janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre';
export function typo(s) {
  return s
    .replace(/(\d) (?=\d{3}\b)/g, `$1${FINE}`)
    .replace(/(\d) (?=\d{3}\b)/g, `$1${FINE}`)
    .replace(/(\d) (€|%|h\b|min\b|ans\b|PASS\b)/g, `$1${INSEC}$2`)
    .replace(new RegExp(`(\\d) (${MOIS})`, 'g'), `$1${INSEC}$2`)
    .replace(/ ([;:!?»])/g, `${FINE}$1`)
    .replace(/« /g, `«${FINE}`)
    .replace(/n° /g, `n°${INSEC}`);
}
export default function rehypeTypo() {
  const visiter = (noeud) => {
    if (noeud.type === 'text') noeud.value = typo(noeud.value);
    if (noeud.tagName === 'code' || noeud.tagName === 'pre') return;
    (noeud.children || []).forEach(visiter);
  };
  return (arbre) => visiter(arbre);
}

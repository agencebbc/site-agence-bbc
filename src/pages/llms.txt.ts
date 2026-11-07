import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { AGENCE, CATEGORIES } from '../data/agence';

// Résumé lisible par les assistants IA (convention llms.txt).
export const GET: APIRoute = async ({ site }) => {
  const a = AGENCE;
  const articles = await getCollection('conseils', ({ data }) => !data.brouillon);
  const lignes = [
    `# ${a.nom}`,
    '',
    `> ${a.description}`,
    '',
    `Adresse : ${a.adresse.rue}, ${a.adresse.codePostal} ${a.adresse.ville} (${a.adresse.departement}). Téléphone : ${a.telephone}. Horaires : ${a.horaires.texte}.`,
    `Agents généraux : Cédric Couralet et Sébastien Baurain. ORIAS n° ${a.reglementaire.orias.join(' et ')}.`,
    '',
    '## Pages principales',
    `- [L'agence et l'équipe](${new URL('/agence/', site)}) : présentation, statut, coordonnées`,
    `- [Contact et rendez-vous](${new URL('/contact/', site)})`,
    `- [Tous les conseils](${new URL('/conseils/', site)})`,
    '',
    '## Conseils',
    ...articles.map(
      (art) => `- [${art.data.titre}](${new URL(`/conseils/${art.id}/`, site)}) (${CATEGORIES[art.data.categorie].titre}) : ${art.data.description}`,
    ),
  ];
  return new Response(lignes.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

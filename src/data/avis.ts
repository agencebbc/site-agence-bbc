// Avis Google de l'agence.
// Règle : on publie une sélection d'avis 4 et 5 étoiles, en le disant clairement (art. L111-7-2 du Code de la
// consommation : information loyale sur la façon dont les avis sont publiés), avec un lien vers tous les avis.
// Texte recopié tel quel depuis la fiche Google, prénom + initiale du nom uniquement.

export const NOTE_GOOGLE = {
  note: 4.5,
  nombre: 101,
  releveLe: '2026-11-07', // date du relevé : à mettre à jour en même temps que la note
};

export type Avis = { auteur: string; note: 4 | 5; date: string; texte: string };

export const AVIS: Avis[] = [
  // { auteur: 'Prénom N.', note: 5, date: '2026-10', texte: '…' },
];

export const AVIS_AFFICHES = AVIS.filter((a) => a.note >= 4);

// Données de l'agence : source unique utilisée par toutes les pages et par les données structurées.
// Toute valeur contenant A_COMPLETER est signalée par `npm run check:lancement`.

import { typo } from './typo';

export const A_COMPLETER = '[à compléter]';

export const INDEXATION = process.env.INDEXATION === 'true';

export const AGENCE = {
  nom: 'Agence BBC — Assurance & Banque',
  nomCourt: 'Agence BBC',
  // Nom affiché aujourd'hui sur la fiche Google Business Profile : à harmoniser avec le nom du site.
  nomFicheGoogle: 'AXA Assurance et Banque Baurain Couralet',
  signature: 'Prévoir, protéger, transmettre',
  description:
    "Agence d'assurance et de banque à Narbonne : assurances des particuliers, des professionnels et des entreprises, épargne, retraite et prévoyance. Agents généraux AXA et activité de courtage.",
  adresse: {
    rue: '7 boulevard Marcel Sembat',
    codePostal: '11100',
    ville: 'Narbonne',
    departement: 'Aude',
    region: 'Occitanie',
    pays: 'FR',
  },
  geo: { latitude: 43.18761, longitude: 3.00485 },
  telephone: '04\u00a068\u00a041\u00a003\u00a012',
  telephoneIntl: '+33468410312',
  email: A_COMPLETER,
  horaires: {
    texte: typo('Du lundi au vendredi, de 9 h à 12 h 30 et de 14 h à 18 h'),
    jours: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    plages: [
      { ouvre: '09:00', ferme: '12:30' },
      { ouvre: '14:00', ferme: '18:00' },
    ],
  },
  google: {
    placeId: 'ChIJ4a8IjW6ssRIRId41ycwSTo8',
    fiche: 'https://www.google.com/maps/place/?q=place_id:ChIJ4a8IjW6ssRIRId41ycwSTo8',
    avis: 'https://search.google.com/local/reviews?placeid=ChIJ4a8IjW6ssRIRId41ycwSTo8',
    itineraire:
      'https://www.google.com/maps/dir/?api=1&destination=7+boulevard+Marcel+Sembat+11100+Narbonne&destination_place_id=ChIJ4a8IjW6ssRIRId41ycwSTo8',
  },
  effectif: 9,
  zone: ['Narbonne', 'Grand Narbonne', 'Aude', 'Occitanie'],
  reglementaire: {
    statut: "Agents généraux d'assurance, mandataires exclusifs d'AXA France, et intermédiaires en assurance exerçant une activité de courtage",
    orias: ['21 006 184', '24 003 571'],
    structure: "SPEC Baurain & Couralet (société en participation d'exercice conjoint)",
    siren: A_COMPLETER,
    iobsp: A_COMPLETER,
    mediateur: {
      nom: "La Médiation de l'Assurance",
      adresse: 'TSA 50110, 75441 Paris Cedex 09',
      site: 'https://www.mediation-assurance.org',
    },
    acpr: {
      nom: 'Autorité de contrôle prudentiel et de résolution (ACPR)',
      adresse: '4 place de Budapest, CS 92459, 75436 Paris Cedex 09',
    },
  },
  hebergeur: {
    nom: 'Netlify, Inc.',
    adresse: `101 2nd Street, Suite 575, San Francisco, CA 94105, États-Unis ${A_COMPLETER}`,
    site: 'https://www.netlify.com',
  },
  directeurPublication: 'Cédric Couralet',
};

export type Auteur = {
  id: string;
  nom: string;
  fonction: string;
  bio: string;
};

export const AUTEURS: Record<string, Auteur> = {
  'cedric-couralet': {
    id: 'cedric-couralet',
    nom: 'Cédric Couralet',
    fonction: "Agent général d'assurances",
    bio: "Co-agent général de l'agence à Narbonne, il accompagne particuliers, indépendants et chefs d'entreprise sur leurs assurances, leur prévoyance, leur épargne et leur retraite.",
  },
  'sebastien-baurain': {
    id: 'sebastien-baurain',
    nom: 'Sébastien Baurain',
    fonction: "Agent général d'assurances",
    bio: "Co-agent général de l'agence à Narbonne.",
  },
};

export const CATEGORIES = {
  particuliers: {
    titre: 'Particuliers',
    accroche: 'Auto, habitation, santé, assurance emprunteur',
    photo: 'cles',
  },
  professionnels: {
    titre: 'Professionnels et indépendants',
    accroche: 'Artisans, commerçants, professions libérales : protection, prévoyance, retraite',
    photo: 'atelier',
  },
  'epargne-retraite': {
    titre: 'Patrimoine, épargne et retraite',
    accroche: 'Assurance vie, PER, transmission',
    photo: 'couple',
  },
  entreprises: {
    titre: 'Entreprises',
    accroche: 'Flotte, dommages, responsabilité civile, santé et prévoyance collectives',
    photo: 'chantier',
  },
} as const;

export type Categorie = keyof typeof CATEGORIES;

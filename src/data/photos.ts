// Photos libres de droits (licence Unsplash : usage commercial gratuit, sans obligation de crédit).
// Servies par le CDN d'Unsplash, redimensionnées et converties (WebP/AVIF) à la volée.
// Les auteurs sont crédités sur la page /credits/.

export type Photo = { id: string; alt: string; auteur: string; page: string; position?: string };

export const PHOTOS = {
  vignesAude: {
    id: 'photo-1543418219-44e30b057fea',
    alt: 'Rangs de vigne sous le soleil rasant, près de Carcassonne',
    auteur: 'Boudewijn Boer',
    page: 'https://unsplash.com/photos/qT515JdZNy8',
  },
  fontfroide: {
    id: 'photo-1671576631765-2eab4a95b0bb',
    alt: "L'abbaye de Fontfroide, près de Narbonne",
    auteur: 'Frank Kirgis',
    page: 'https://unsplash.com/photos/_sZexaOKoW4',
  },
  littoral: {
    id: 'photo-1602025606903-a018e0bc0534',
    alt: 'Vagues sur la côte rocheuse près de Narbonne',
    auteur: 'Jonas Allert',
    page: 'https://unsplash.com/photos/xo34pAi776s',
  },
  vignoble: {
    id: 'photo-1642964040529-608b0c1cf8b2',
    alt: "Vignoble d'Occitanie en automne, entre deux massifs",
    auteur: 'Morgane Le Breton',
    page: 'https://unsplash.com/photos/ukpPeOxFChU',
  },
  chai: {
    id: 'photo-1694781558887-d84d9ba7603f',
    alt: 'Barriques alignées dans un chai',
    auteur: 'Jametlene Reskp',
    page: 'https://unsplash.com/photos/nCqucqW7DAo',
  },
  rendezVous: {
    id: 'photo-1758518730384-be3d205838e8',
    alt: 'Poignée de main à la fin d’un rendez-vous de conseil',
    auteur: 'Vitaly Gariev',
    page: 'https://unsplash.com/photos/jEpZNyFSQwQ',
  },
  chantier: {
    id: 'photo-1512207736890-6ffed8a84e8d',
    alt: 'Ouvriers du bâtiment sur un chantier, vus du dessus',
    auteur: 'Ricardo Gomez Angel',
    page: 'https://unsplash.com/photos/7bzbyafVTYg',
  },
  maisonChantier: {
    id: 'photo-1693639767415-27ff64ce4da2',
    alt: 'Maison neuve en construction, charpente et tuiles posées, échafaudages autour',
    auteur: 'Troy Mortier',
    page: 'https://unsplash.com/photos/rxfWPJUUClo',
  },
  couple: {
    id: 'photo-1673266966985-cad612eb13db',
    alt: 'Un couple marche main dans la main au bord de la mer',
    auteur: 'Jessica Hearn',
    page: 'https://unsplash.com/photos/ZA2VOQ0ISG8',
  },
  carnet: {
    id: 'photo-1765867967050-30db3e7a3be8',
    alt: 'Prise de notes sur un carnet, au bureau',
    auteur: 'Jakub Żerdzicki',
    page: 'https://unsplash.com/photos/1rm4_SojyNM',
  },
  atelier: {
    id: 'photo-1779031242515-205111711b23',
    alt: 'Artisan menuisier au travail dans son atelier',
    auteur: 'Minh Đức',
    page: 'https://unsplash.com/photos/lQIUbkn6jj4',
  },
  cles: {
    id: 'photo-1741156386380-0236c72eb6f9',
    alt: 'Remise des clés devant la porte d’une maison',
    auteur: 'Jakub Żerdzicki',
    page: 'https://unsplash.com/photos/bqUZEAeWuok',
  },
  mas: {
    id: 'photo-1631724953362-965648cc302c',
    alt: 'Maison en pierre au milieu des arbres, campagne méditerranéenne',
    auteur: 'Chloe Frost-Smith',
    page: 'https://unsplash.com/photos/GuaIqHs8dng',
  },
  camion: {
    id: 'photo-1783428673235-77dafc15eb59',
    alt: 'Camion de transport stationné sous un ciel bleu',
    auteur: 'snap wander',
    page: 'https://unsplash.com/photos/5M_RGvhvQ_g',
  },
  commerce: {
    id: 'photo-1511018556340-d16986a1c194',
    alt: 'Intérieur d’une boulangerie-pâtisserie',
    auteur: 'Nick Karvounis',
    page: 'https://unsplash.com/photos/jN_M0McVNeI',
  },
  collection: {
    id: 'photo-1681246357720-62517d7fc34e',
    alt: 'Voiture de collection sur une route de campagne',
    auteur: 'Tom Kitto',
    page: 'https://unsplash.com/photos/9fqoXSscgcE',
  },
  van: {
    id: 'photo-1760612393693-8303856dfbed',
    alt: 'Van aménagé garé face à la mer au coucher du soleil',
    auteur: 'Hasse Lossius',
    page: 'https://unsplash.com/photos/PvQ4RPTuXOQ',
  },
  moto: {
    id: 'photo-1716741011671-db4d7c6a8293',
    alt: 'Motard sur une route de montagne',
    auteur: 'Aritra Roy',
    page: 'https://unsplash.com/photos/GM5cHEq9rOk',
  },
  voilier: {
    id: 'photo-1641790536702-8a472fa78eec',
    alt: 'Voilier près d’une côte rocheuse',
    auteur: 'Mike Swigunski',
    page: 'https://unsplash.com/photos/XClsGH4JuhA',
  },
  trottinette: {
    id: 'photo-1778182295955-9fbc87a7053a',
    alt: 'Deux personnes en trottinette électrique par une journée ensoleillée',
    auteur: 'Margo Evardson',
    page: 'https://unsplash.com/photos/moi1opcj5HM',
  },
} satisfies Record<string, Photo>;

export type CleePhoto = keyof typeof PHOTOS;

export const urlPhoto = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;

// Données structurées schema.org : ce que Google et les moteurs IA lisent pour identifier l'agence.
import { AGENCE, AUTEURS, A_COMPLETER } from './agence';

const propre = (v: string) => (v.includes(A_COMPLETER) ? undefined : v);

export const idAgence = (site: URL) => new URL('/#agence', site).href;
export const idAuteur = (site: URL, id: string) => new URL(`/agence/#${id}`, site).href;

export function schemaAgence(site: URL) {
  const a = AGENCE;
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': idAgence(site),
    name: a.nom,
    alternateName: [a.nomCourt, a.nomFicheGoogle],
    slogan: a.signature,
    description: a.description,
    url: new URL('/', site).href,
    telephone: a.telephoneIntl,
    email: propre(a.email),
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.adresse.rue,
      postalCode: a.adresse.codePostal,
      addressLocality: a.adresse.ville,
      addressRegion: a.adresse.region,
      addressCountry: a.adresse.pays,
    },
    geo: { '@type': 'GeoCoordinates', latitude: a.geo.latitude, longitude: a.geo.longitude },
    hasMap: a.google.fiche,
    sameAs: [a.google.fiche],
    openingHoursSpecification: a.horaires.plages.map((p) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: a.horaires.jours,
      opens: p.ouvre,
      closes: p.ferme,
    })),
    areaServed: a.zone.map((nom) => ({ '@type': 'AdministrativeArea', name: nom })),
    numberOfEmployees: { '@type': 'QuantitativeValue', value: a.effectif },
    employee: Object.values(AUTEURS).map((p) => ({ '@id': idAuteur(site, p.id) })),
  };
}

export function schemaPersonne(site: URL, id: string) {
  const p = AUTEURS[id];
  return {
    '@type': 'Person',
    '@id': idAuteur(site, id),
    name: p.nom,
    jobTitle: p.fonction,
    description: p.bio,
    url: idAuteur(site, id),
    worksFor: { '@id': idAgence(site) },
  };
}

export function schemaFilAriane(site: URL, etapes: { nom: string; chemin: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: etapes.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.nom,
      item: new URL(e.chemin, site).href,
    })),
  };
}

# Site de l'Agence BBC — Assurance & Banque (Narbonne)

Site vitrine et rubrique Conseils de l'agence d'assurance de Sébastien Baurain, Chloé Bouyssou et Cédric Couralet,
agents généraux AXA, 7 boulevard Marcel Sembat, 11100 Narbonne.
Objectif : être trouvé et cité par Google et les moteurs de réponse IA sur les questions d'assurance,
d'épargne et de retraite des habitants, indépendants et entreprises du Narbonnais, puis convertir en rendez-vous.

## Technique

- Astro (site statique), hébergé sur Netlify, code sur GitHub. Chaque fusion sur `main` publie le site.
- `npm run build` : construit le site dans `dist/`. `npm run check:lancement` : liste ce qui reste à compléter.
- Données de l'agence (adresse, horaires, ORIAS, auteurs) : **uniquement** dans `src/data/agence.ts`.
- Indexation : fermée tant que la variable Netlify `INDEXATION` ne vaut pas `true` (noindex + robots.txt).
- Adresse définitive : variable Netlify `SITE_URL`.

## Publier un article

Un article = un fichier `src/content/conseils/<adresse-de-la-page>.md`. Le schéma (`src/content.config.ts`) impose :
`titre` (≤ 110 car.), `description` (80–165 car.), `categorie` (particuliers, professionnels, epargne-retraite, entreprises),
`auteur` (cedric-couralet, sebastien-baurain, chloe-bouyssou), `publie`, `misAJour` (si mise à jour), `essentiel` (3 à 6 points), `faq`, `sources`.

Procédure hebdomadaire :
1. Prendre le prochain sujet du calendrier éditorial.
2. Vérifier par recherche web, le jour même, **chaque** chiffre ou règle (plafonds, taux, lois). Noter les sources officielles.
3. Rédiger sur une branche `article/<adresse>` ; `npm run build` doit passer.
4. Ouvrir une pull request « Article : <titre> » et attendre la validation de Cédric. Ne jamais fusionner sans son accord.

## Charte éditoriale

- **Répondre d'abord.** Le bloc `essentiel` donne la réponse complète en quelques phrases autonomes, chiffrées et datées :
  c'est ce que reprennent Google et les IA.
- Un titre par question réelle de client. Intertitres `##` formulés comme les questions qu'on pose à l'agence.
- Vouvoiement, phrases courtes, chaque terme technique expliqué à sa première apparition.
- Exemples chiffrés réalistes ; préciser les hypothèses (« si sa tranche marginale d'imposition est de 30 % »).
- Un angle local quand il est réel (Narbonne, Aude, viticulture, risque inondation, commerce et tourisme du littoral).
- Au moins deux liens internes, dont un vers `/contact/?sujet=<categorie>`.
- 1 200 à 2 200 mots. Pas de remplissage.
- Typographie française : la mise en forme des espaces insécables est automatique.

## Interdits (conformité DDA et image de l'agence)

- Pas de promesse : « meilleur », « garanti », « gratuit », « sans risque », rendement futur.
- Pas de tarif, de nom de produit AXA ou de comparatif nominatif sans validation écrite de Cédric.
- Aucune donnée de client, même anonymisée de façon reconnaissable.
- Pas de chiffre sans source vérifiée le jour de la rédaction.
- L'article informe ; il ne conseille pas une personne. Le conseil se fait en rendez-vous.

## Mises à jour

- Janvier : mettre à jour tous les articles qui citent le PASS ou une loi de finances (`misAJour`).
- Dès qu'une règle change, corriger l'article concerné plutôt que d'en écrire un nouveau : l'adresse de la page ne change jamais.

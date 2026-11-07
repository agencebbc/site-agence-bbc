import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un article = un fichier Markdown dans src/content/conseils/.
// Le nom du fichier devient l'adresse : tns-per-prevoyance-madelin.md → /conseils/tns-per-prevoyance-madelin/
const conseils = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
  schema: z.object({
    titre: z.string().max(110),
    description: z.string().min(80).max(165),
    categorie: z.enum(['particuliers', 'professionnels', 'epargne-retraite', 'entreprises']),
    auteur: z.enum(['cedric-couralet', 'sebastien-baurain', 'chloe-bouyssou']),
    publie: z.coerce.date(),
    misAJour: z.coerce.date().optional(),
    // Réponse directe en 3 à 6 points : c'est ce que reprennent en priorité Google et les moteurs IA.
    essentiel: z.array(z.string()).min(3).max(6),
    faq: z.array(z.object({ q: z.string(), r: z.string() })).default([]),
    sources: z.array(z.object({ titre: z.string(), url: z.string().url().optional() })).default([]),
    // Clé d'une photo de src/data/photos.ts ; à défaut, la photo de la catégorie.
    photo: z.string().optional(),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { conseils };

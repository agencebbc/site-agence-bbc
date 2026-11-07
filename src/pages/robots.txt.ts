import type { APIRoute } from 'astro';
import { INDEXATION } from '../data/agence';

// Tant que le site n'est pas lancé, tout est fermé aux robots.
// Une fois lancé, les moteurs de recherche ET les moteurs IA sont explicitement autorisés.
export const GET: APIRoute = ({ site }) => {
  const plan = new URL('/sitemap-index.xml', site).href;
  const corps = INDEXATION
    ? [
        'User-agent: *',
        'Allow: /',
        '',
        '# Moteurs de réponse IA autorisés : nous voulons être cités.',
        ...['Googlebot', 'Google-Extended', 'Bingbot', 'OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Applebot-Extended']
          .flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
        `Sitemap: ${plan}`,
      ].join('\n')
    : ['User-agent: *', 'Disallow: /'].join('\n');
  return new Response(corps + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

import type { APIRoute } from "astro";
export const GET: APIRoute = () => {
  const body = `
User-agent: *
Allow: /
Disallow: /private/
Disallow: /api/
Sitemap: https://mustaeen.dev/sitemap-index.xml
`.trim();
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
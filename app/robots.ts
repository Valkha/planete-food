import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // On cache l'administration aux moteurs de recherche
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}/sitemap.xml`,
  };
}
// lib/seo.ts
import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION } from './constants';

export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: {
      default: `${SITE_NAME} | ${SITE_DESCRIPTION}`,
      template: `%s | ${SITE_NAME}`,
      ...((overrides.title as object) || {}),
    },
    description: overrides.description || SITE_DESCRIPTION,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://chronos.luxury'),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      ...overrides.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      ...overrides.twitter,
    },
    ...overrides,
  };
}
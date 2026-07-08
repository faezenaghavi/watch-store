// components/providers/AppProviders.tsx
'use client';

import { MotionProvider } from './MotionProvider';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <MotionProvider>{children}</MotionProvider>;
}
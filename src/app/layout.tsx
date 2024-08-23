import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';
// Simply place this at the top of your application's entry point to have the components working out of the box.
import '@coinbase/onchainkit/styles.css';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'Memecoin Launchpad',
  description: 'Bulding Onchain on Base',
  openGraph: {
    title: 'MemeCoin Launchpad',
    description: 'Building Onchain on Base',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}

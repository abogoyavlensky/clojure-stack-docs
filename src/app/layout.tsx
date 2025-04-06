import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clojure Stack Templates',
  description: 'Documentation for Clojure Stack Templates',
  openGraph: {
    title: 'Clojure Stack Templates',
    description: 'Documentation for Clojure Stack Templates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clojure Stack Templates',
    description: 'Documentation for Clojure Stack Templates',
  },
  keywords: ['clojure', 'templates', 'stack', 'lite', 'clojure-stack-lite', 'htmx', 'sqlite', 'documentation'],
  authors: [{ name: 'Clojure Stack Templates' }],
  robots: 'index, follow',
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

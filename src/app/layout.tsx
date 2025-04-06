import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import ogimage from '@/public/og-image.png';

export const metadata: Metadata = {
  title: 'Clojure Stack Templates',
  description: 'Documentation for Clojure Stack Templates',
  openGraph: {
    title: 'Clojure Stack Templates',
    description: 'Documentation for Clojure Stack Templates',
    type: 'website',
    images: [
      {
        url: ogimage.src,
        width: 1200,
        height: 630,
        alt: 'Your documentation title',
      },
    ],
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
        
        {/* Umami analytics script - disabled on localhost */}
        <Script
          id="umami-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname !== 'localhost' && 
                  window.location.hostname !== '127.0.0.1') {
                const script = document.createElement('script');
                script.defer = true;
                script.src = 'https://umami.bogoyavlensky.com/script.js';
                script.setAttribute('data-website-id', '56e708a4-8c77-4aa6-9110-f71212c66ab0');
                document.body.appendChild(script);
              }
            `
          }}
        />
      </body>
    </html>
  );
}

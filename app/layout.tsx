import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Client 7 | Marketing Solutions',
  description: 'Professional marketing solutions for your business growth. Expert strategies, creative campaigns, and measurable results.',
  keywords: 'marketing, digital marketing, brand strategy, lead generation, marketing agency',
  openGraph: {
    title: 'Test Client 7 | Marketing Solutions',
    description: 'Professional marketing solutions for your business growth',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
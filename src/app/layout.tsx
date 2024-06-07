import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import { Providers } from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InmoBO',
  description: 'InmoBO is the best option for buy or renting a property',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light' suppressHydrationWarning>
      <body className={`bg-blue-100 dark:bg-sky-950 ${inter.className}`}>
        <Providers>
          <div className='relative min-h-screen'>
            <div className='pb-[320px]'>
              <header>
                <Navbar />
              </header>
              <main className='px-6'>{children}</main>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

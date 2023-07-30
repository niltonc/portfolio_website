import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nilton Cesar Oliveira',
  description: 'Front-End Developer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            src="https://kit.fontawesome.com/e674bba739.js"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body className={inter.className}>{children}</body>
      </>
    </html>
  );
}

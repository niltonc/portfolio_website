'use client';

import Image from 'next/image';
import '../styles/styles.scss';
import Navbar from '@/components/navbar';
import Body from '@/app/pages/body';
import Introduction from '@/app/pages/introduction';
import LastWork from '@/app/pages/last-work';
import Testemonial from '@/app/pages/testimonial';
import Footer from '@/app/pages/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Body />
      <Introduction />
      <LastWork />
      <Testemonial />
      <Footer />
    </main>
  );
}

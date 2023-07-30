'use client';

import Image from 'next/image';
import '../styles/styles.scss';
import Navbar from '@/components/navbar';
import Body from '@/components/body';
import Introduction from '@/components/introduction';
import LastWork from '@/components/last-work';
import Testemonial from '@/components/testimonial';
import Footer from '@/components/footer';

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

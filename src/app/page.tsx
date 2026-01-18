'use client';

import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import CallToAction from '@/components/landing/CallToAction';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
    </main>
  );
}

'use client';

import dynamic from 'next/dynamic';
import CasesSection from '@/components/CasesSection';
import CtaSection from '@/components/CtaSection';
import FeatureSection from '@/components/FeaturesSection';
import InnovationSection from '@/components/InnovationSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeatureSection />
      <CasesSection />
      <InnovationSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
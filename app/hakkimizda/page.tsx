import { StaticPageClient } from '@/components/StaticPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: "Hesapolog'un misyonu, vizyonu ve değerleri hakkında daha fazla bilgi edinin.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function HakkimizdaPage() {
  return <StaticPageClient type="about" />;
}
import { StaticPageClient } from '@/components/StaticPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: "Hesapolog'u kullanırken gizliliğinizin nasıl korunduğunu öğrenin.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function GizlilikPolitikasiPage() {
  return <StaticPageClient type="privacy" />;
}
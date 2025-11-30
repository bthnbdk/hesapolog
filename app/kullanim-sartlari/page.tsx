import { StaticPageClient } from '@/components/StaticPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kullanım Şartları',
  description: "Hesapolog platformunu kullanmadan önce hizmet şartlarımızı okuyun.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function KullanimSartlariPage() {
  return <StaticPageClient type="terms" />;
}
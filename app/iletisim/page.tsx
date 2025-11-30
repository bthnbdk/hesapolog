import { StaticPageClient } from '@/components/StaticPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: "Öneri, geri bildirim veya hata bildirimi için bizimle iletişime geçin.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function IletisimPage() {
  return <StaticPageClient type="contact" />;
}
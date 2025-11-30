import { SitemapPage as SitemapPageComponent } from '@/pages/SitemapPage';
import { getAllTools } from '@/data/tools';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Site Haritası',
  description: "Hesapolog'daki tüm hesaplama araçlarına ve sayfalara tek bir yerden ulaşın.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function SitemapPage() {
  const tools = getAllTools();
  return <SitemapPageComponent tools={tools} />;
}
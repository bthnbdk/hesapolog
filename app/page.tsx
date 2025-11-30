import { HomeClient } from '@/components/HomeClient';
import { getAllTools } from '@/data/tools';

export default function HomePage() {
  const tools = getAllTools();
  return <HomeClient tools={tools} />;
}
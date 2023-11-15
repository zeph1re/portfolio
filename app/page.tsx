import { Hero, Footer, About, Work } from '@/components';
import Header from '@/components/CustomHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}

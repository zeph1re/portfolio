import { Hero, Footer, About } from '@/components';
import Header from '@/components/CustomHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hidden">
      
      <Hero />
      <About />
      <Footer />
    </main>
  );
}

import { Hero, Footer, About, Work, Connect } from '@/components';

export default function Dashboard() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  );
}

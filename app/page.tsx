import { Hero, Footer, About, Work, Connect } from '@/components';
import Header from '@/components/CustomHeader';
import Introduction from '@/components/Introduction';

export default function Dashboard() {
  return (
    <main className="overflow-hidden">
      <Header />
      {/* <Hero /> */}
      <About />
      <Work />
      <Footer />
    </main>
  );
}

import { Hero, Footer, About, Work, Connect } from '@/components';
import Header from '@/components/CustomHeader';
import Introduction from '@/components/Introduction';

export default function Dashboard() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className=" mx-auto py-8  bg-sherpa-blue"></div>

      {/* <Hero /> */}
      <About />
      <Work />
      <Footer />
    </main>
  );
}

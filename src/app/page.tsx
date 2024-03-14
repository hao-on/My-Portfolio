import About from '@/components/About';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Works from '@/components/Works';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <Cta />
    </main>
  );
}

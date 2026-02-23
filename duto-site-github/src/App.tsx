import { useState, useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { About } from './sections/About';
import { LeadCapture } from './sections/LeadCapture';
import { Testimonials } from './sections/Testimonials';
import { Stats } from './sections/Stats';
import { Footer } from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Testimonials />
        <LeadCapture />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

import SiteHeader from '@/components/SiteHeader';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Services from '@/components/Services';
import ServiceArea from '@/components/ServiceArea';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import SiteFooter from '@/components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <ServiceArea />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;

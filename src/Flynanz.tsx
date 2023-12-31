import { Download } from './components/Download/Download';
import { Features } from './components/Features/Features';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Navbar } from './components/Navbar/Navbar';
import { Reviews } from './components/Reviews/Reviews';

export const Flynanz = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Reviews />
      <Download />
      <Footer />
    </>
  );
};

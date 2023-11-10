import { Features } from './components/Features/Features';
import { Hero } from './components/Hero/Hero';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { Navbar } from './components/Navbar/Navbar';

export const Flynanz = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
    </>
  );
};

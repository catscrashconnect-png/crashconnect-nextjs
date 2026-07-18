import FrameCanvas from '@/components/FrameCanvas';
import Preloader from '@/components/Preloader';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Problem from '@/components/Problem';
import Technology from '@/components/Technology';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import Vehicles from '@/components/Vehicles';
import Compare from '@/components/Compare';
import Testimonials from '@/components/Testimonials';
import Roadmap from '@/components/Roadmap';
import Hiring from '@/components/Hiring';
import Collab from '@/components/Collab';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Preloader />
      <FrameCanvas />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Technology />
        <Features />
        <Dashboard />
        <Vehicles />
        <Compare />
        <Testimonials />
        <Roadmap />
        <Hiring />
        <Collab />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

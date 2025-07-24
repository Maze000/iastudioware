import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SplitSection from '@/components/SplitSection';
import ServicesGrid from '@/components/ServicesGrid';
import PricingPlans from '@/components/PricingPlans';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FloatingTechIcons from '@/components/FloatingTechIcons';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SplitSection />
      <ServicesGrid />
      <PricingPlans />
      <Portfolio />
      <ContactForm />
      <Benefits />
      <Testimonials />
      <FloatingTechIcons />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;

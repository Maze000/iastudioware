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
import CosmicClicker from '@/components/CosmicClicker';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/FloatingChatbot';

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
      <div className="py-16 bg-gradient-to-br from-slate-950 via-gray-950 to-violet-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <span className="text-4xl">🎮</span>
              <span className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-transparent">
                Take a Break!
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Relax with our mini game while exploring our services
            </p>
          </div>
          <CosmicClicker />
        </div>
      </div>
      <FinalCTA />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;

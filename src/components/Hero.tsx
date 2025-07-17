import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-automation.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-dark overflow-hidden mt-[30px] md:mt-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-accent">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Digitize and{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                automate
              </span>{' '}
              your business
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Smart websites + modular automation = scalable growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
              <Link to="/demo">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium group">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
             
              <a href="#projects" className="group">
  <Button 
    size="lg" 
    variant="outline" 
    className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium group"
  >
    <Play className="mr-2 h-5 w-5" />
    View Examples
  </Button>
</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">100+</div>
                <div className="text-sm text-white/60">Businesses Automated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">16+</div>
                <div className="text-sm text-white/60">Automation Modules</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/60">Smart Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Digital automation and AI systems" 
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/50 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
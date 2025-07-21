import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark-accent">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/10"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Take your business to the{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              next level
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join 100+ businesses that have already transformed their operations with smart automation. 
            Your digital transformation starts today.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Custom solutions</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>30-day guarantee</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="#contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-medium px-8 py-4 text-lg group"
              >
                Request Your Demo Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
             </a>
            
            <a
              href="https://t.me/aistudioware"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-white font-medium px-8 py-4 text-lg"
              >
                Telegram
              </Button>
            </a>
          </div>

          {/* Urgency/Social Proof */}
          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
            <p className="text-white/70 text-sm mb-2">
              <strong className="text-white">Limited Time:</strong> Book your consultation this month and receive a 
              complimentary business automation audit (valued at $500)
            </p>
            <p className="text-white/60 text-xs">
              Join 15+ businesses that scheduled their consultation this week
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-secondary rounded-full animate-ping delay-500"></div>
    </section>
  );
};

export default FinalCTA;
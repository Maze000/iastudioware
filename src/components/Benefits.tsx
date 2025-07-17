import { Shield, Zap, Link2, Smartphone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, secure data handling, and compliance with international privacy standards.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with CDN delivery, smart caching, and efficient automation workflows.'
    },
    {
      icon: Link2,
      title: 'Seamless Integrations', 
      description: 'Connect with 500+ platforms including CRM, email, social media, and business tools you already use.'
    },
    {
      icon: Smartphone,
      title: '100% Responsive',
      description: 'Perfect experience across all devices with mobile-first design and progressive web app capabilities.'
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            Built for{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              modern businesses
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every solution we build prioritizes security, performance, and scalability 
            to ensure your business can grow without limitations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Smart Monitoring</div>
          </div>
          
          <div className="bg-card rounded-xl p-6 border text-center">
            <div className="text-3xl font-bold text-primary mb-2">30-Day</div>
            <div className="text-sm text-muted-foreground">Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
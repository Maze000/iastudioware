import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Rocket, Headphones } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      icon: Star,
      title: 'Basic Plan',
      subtitle: 'Digital Presence',
      description: 'Perfect for getting started with a professional online presence',
      price: '$100 - $150 NZD',
      popular: false,
      features: [
        'Professional landing page',
        'Integrated form (email or Sheets)',
        'Responsive design',
        'Basic support',
        'SSL certificate included',
        'Mobile optimization'
      ]
    },
    {
      icon: Zap,
      title: 'Intermediate Plan',
      subtitle: 'Website + Automation',
      description: 'Scale your business with smart automations and integrations',
      price: '$160 - $200 NZD',
      popular: true,
      features: [
        'Full website (5–10 pages)',
        'CRM-integrated forms',
        'Basic automations (emails, alerts)',
        'Social media integrations',
        'Analytics dashboard',
        'Priority support',
        'Custom contact forms',
        'Email marketing setup'
      ]
    },
    {
      icon: Rocket,
      title: 'Advanced Plan',
      subtitle: 'eCommerce + Apps + AI',
      description: 'Complete digital transformation with AI-powered solutions',
      price: '$210 - $300 NZD',
      popular: false,
      features: [
        'Full online store with cart & checkout',
        'Web + mobile PWA',
        'AI bots for sales/support',
        'Advanced automations (Make, n8n)',
        'Analytics dashboards',
        'Custom integrations',
        'Multi-language support',
        'Advanced security features'
      ]
    },
    {
      icon: Headphones,
      title: 'Monthly Plan',
      subtitle: 'Marketing & Support Retainer',
      description: 'Ongoing optimization and marketing support',
      price: '$320 - $450 NZD',
      popular: false,
      features: [
        'Paid ads (Meta, Google, TikTok)',
        'Email automation campaigns',
        'Continuous support and optimization',
        'Monthly performance reports',
        'A/B testing and optimization',
        'Dedicated account manager',
        'Priority feature requests',
        'Regular strategy consultations'
      ]
    }
  ];

  return (
    <section id="plans" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-blue-500 to-orange-500 bg-clip-text text-transparent mb-6">
            Plans for every stage of growth
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Start small and scale up. Every plan includes our commitment to quality, 
            responsive design, and seamless integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 flex flex-col ${
                plan.popular ? 'border-primary shadow-elegant scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white text-sm font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex w-16 h-16 rounded-xl items-center justify-center mb-4 ${
                  plan.popular ? 'bg-gradient-primary' : 'bg-muted'
                }`}>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-white' : 'text-foreground'
                  }`} />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  {plan.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className={`text-2xl font-bold ${
                  plan.popular ? 'text-primary' : 'text-foreground'
                }`}>
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full mt-auto ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary-hover text-primary-foreground' 
                    : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                } font-medium`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 p-6 bg-card rounded-xl border">
          <p className="text-muted-foreground mb-4">
            All plans include free consultation, responsive design, and 30 days of support after launch.
          </p>
          <p className="text-sm text-muted-foreground">
            Custom enterprise solutions available. Contact us for detailed pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
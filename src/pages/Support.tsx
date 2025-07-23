import { ArrowLeft, Mail, MessageCircle, Clock, Phone, HelpCircle, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Support = () => {
  const supportOptions = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send Email',
      href: 'mailto:hello@aiwarestudio.com',
      available: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      action: 'Start Chat',
      href: '#contact',
      available: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: Phone,
      title: 'Schedule a Call',
      description: 'Book a consultation call with our experts',
      action: 'Book Call',
      href: '#contact',
      available: 'By appointment'
    }
  ];

  const faqItems = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typical project timelines range from 1-4 weeks depending on complexity. Basic websites take 1-2 weeks, while advanced e-commerce or custom applications may take 3-4 weeks.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer maintenance packages and ongoing support. Our Monthly Plan includes continuous optimization, updates, and marketing support.'
    },
    {
      question: 'Can you integrate with my existing tools?',
      answer: 'Absolutely. We specialize in integrations with CRMs, payment processors, marketing tools, and custom APIs. We work with popular platforms like Shopify, WordPress, and many others.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'We provide a revision period for each project. Additional changes can be handled through our support packages or as separate mini-projects.'
    },
    {
      question: 'Do you work with businesses outside your local area?',
      answer: 'Yes, we work with clients globally. All communication and project management is handled remotely through modern collaboration tools.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, PayPal, and major credit cards. Payment terms are typically 50% upfront and 50% upon completion for larger projects.'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      href: '#'
    },
    {
      icon: Zap,
      title: 'Quick Start Guide',
      description: 'Get up and running quickly',
      href: '#'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Frequently asked questions',
      href: '#faq'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">AI WareStudio</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-cyan-400 mb-6">
            How can we help you?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get the support you need to succeed with AI WareStudio. Our team is here to help with 
            technical questions, project guidance, and ongoing support.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-12">
            Get Support
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border shadow-card-hover text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {option.description}
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {option.available}
                </div>
                <Button asChild className="w-full">
                  <a href={option.href}>
                    {option.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center text-cyan-400 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-12">
            Helpful Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {resources.map((resource, index) => (
              <a 
                key={index} 
                href={resource.href}
                className="bg-card rounded-xl p-6 border shadow-card-hover hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Still need help?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is always ready to provide personalized assistance 
            for your specific needs.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/#contact">
              Contact Our Team
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} AI WareStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Support;

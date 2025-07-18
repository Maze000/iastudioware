import { 
  FileText, MessageCircle, Mail, Users, CreditCard, Bell, 
  Database, Calendar, Share2, FolderOpen, CheckSquare, Target,
  Brain, FileSignature, ScanLine, Headphones
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: FileText,
      title: 'Smart Forms',
      description: 'Intelligent forms that adapt and integrate with your workflow'
    },
    {
      icon: MessageCircle,
      title: 'Chatbots',
      description: 'AI-powered customer service and lead generation bots (WhatsApp & Telegram)'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email campaigns with smart segmentation'
    },
    {
      icon: Users,
      title: 'CRM Sync',
      description: 'Seamless customer relationship management integration'
    },
    {
      icon: CreditCard,
      title: 'Automated Billing',
      description: 'Recurring payments and invoice automation'
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Instant notifications for important business events'
    },
    {
      icon: Database,
      title: 'Databases & Sheets',
      description: 'Smart data management and Google Sheets integration'
    },
    {
      icon: Calendar,
      title: 'Calendar & Booking',
      description: 'Automated scheduling and appointment management'
    },
    {
      icon: Share2,
      title: 'Social Media Automation',
      description: 'Automated posting and social media management'
    },
    {
      icon: FolderOpen,
      title: 'File Management',
      description: 'Organized document storage and automated workflows'
    },
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Project tracking and team collaboration tools'
    },
    {
      icon: Target,
      title: 'Ads & Retargeting',
      description: 'Synchronized advertising campaigns and lead tracking'
    },
    {
      icon: Brain,
      title: 'AI & ChatGPT',
      description: 'Custom AI assistants and intelligent automation'
    },
    {
      icon: FileSignature,
      title: 'E-signatures & Docs',
      description: 'Digital document signing and contract management'
    },
    {
      icon: ScanLine,
      title: 'OCR & Image Processing',
      description: 'Automated text extraction and image analysis'
    },
    {
      icon: Headphones,
      title: 'Automated Support',
      description: '24/7 customer support with smart ticket routing'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Modular automations{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              tailored to you
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the modules you need or combine them into a powerful integrated system. 
            Every automation is designed to work independently or as part of your complete digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 border hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              
              {/* Hover Effect Border */}
              <div className="w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300 mt-4"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom module? We build tailored solutions for unique business needs.
          </p>
          <button className="text-primary hover:text-primary-hover font-medium hover:underline transition-colors">
            Discuss Custom Solutions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
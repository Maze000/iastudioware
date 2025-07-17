import { Check, Zap, Link, Users, BarChart3 } from 'lucide-react';

const SplitSection = () => {
  const integrations = [
    { icon: Link, text: 'Connect with existing CRM systems' },
    { icon: Zap, text: 'Automate workflows in minutes' },
    { icon: Users, text: 'Sync with team collaboration tools' },
    { icon: BarChart3, text: 'Real-time analytics and reporting' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              We integrate with the{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                tools you already use
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              No need to change your workflow. Our modular automation system seamlessly connects 
              with your existing platforms, creating a unified digital ecosystem that grows with your business.
            </p>

            <div className="space-y-4 mb-8">
              {integrations.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Setup in under 24 hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Zero downtime migration</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-card-hover p-6 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Integration Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Workflow Visualization */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">CRM Sync</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border"></div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">Auto Email</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-border"></div>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">Analytics</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Connection Lines */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/10 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
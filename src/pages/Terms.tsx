import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-2xl p-8 border shadow-card-hover space-y-8">
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using AI WareStudio's website and services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use 
                  this service.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. Description of Services</h2>
                <p className="text-muted-foreground mb-4">
                  AI WareStudio provides digital transformation and automation services including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Website development and design</li>
                  <li>Business process automation</li>
                  <li>Custom web applications and PWAs</li>
                  <li>E-commerce solutions</li>
                  <li>AI-powered chatbots and integrations</li>
                  <li>Digital marketing and analytics setup</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Service Availability</h2>
                <p className="text-muted-foreground">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. 
                  Services may be temporarily unavailable due to maintenance, updates, or circumstances beyond our control. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  For our paid services:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Payment is required before project commencement unless otherwise agreed</li>
                  <li>All prices are quoted in USD unless specified otherwise</li>
                  <li>Additional work beyond the agreed scope may incur extra charges</li>
                  <li>Refunds are handled on a case-by-case basis</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  Regarding intellectual property rights:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>You retain ownership of your business content, data, and materials</li>
                  <li>Upon full payment, you receive ownership of custom-developed solutions</li>
                  <li>We retain rights to our proprietary tools, frameworks, and methodologies</li>
                  <li>Third-party components remain subject to their respective licenses</li>
                  <li>We may use project outcomes as portfolio examples with your consent</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, AI WareStudio shall not be liable for any indirect, incidental, 
                  special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
                  goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. Warranty Disclaimer</h2>
                <p className="text-muted-foreground">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express 
                  or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure. 
                  While we strive for excellence, we cannot guarantee specific business outcomes.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Privacy and Data Protection</h2>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our collection and use of personal information is governed by our 
                  Privacy Policy, which is incorporated into these terms by reference. We implement appropriate security 
                  measures to protect your data, but cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground">
                  Either party may terminate the service relationship at any time with reasonable notice. Upon termination, 
                  you will receive any work completed to date, and payment obligations for completed work remain in effect. 
                  We reserve the right to terminate services immediately for breach of these terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising 
                  from these terms or our services shall be resolved through good faith negotiation first, and if necessary, 
                  through appropriate legal channels.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                  on our website. Your continued use of our services after any changes constitutes acceptance of the new terms. 
                  We encourage you to review these terms periodically.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-foreground font-medium">AI WareStudio</p>
                  <p className="text-muted-foreground">Email: hello@aiwarestudio.com</p>
                  <p className="text-muted-foreground">Website: www.aiwarestudio.com</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} AI WareStudio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;

import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-2xl p-8 border shadow-card-hover space-y-8">
              
              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  At AI WareStudio, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fill out our contact forms or request a consultation</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Upload files (such as logos) through our website forms</li>
                  <li>Communicate with us via email or other channels</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The types of information we may collect include your business name, email address, 
                  project descriptions, uploaded files, and color preferences for your projects.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process and respond to your inquiries and requests</li>
                  <li>Send you technical notices, updates, and marketing communications</li>
                  <li>Create custom automation solutions based on your requirements</li>
                  <li>Analyze usage patterns to improve our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>With service providers who assist us in operating our website and conducting business</li>
                  <li>When required by law or to protect our rights and safety</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                  the internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                  privacy policy, unless a longer retention period is required or permitted by law. Project files and 
                  communications are typically retained for the duration of our business relationship and for a reasonable 
                  period thereafter.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">7. Cookies and Tracking</h2>
                <p className="text-muted-foreground">
                  Our website may use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and understand where our visitors are coming from. You can control cookie 
                  settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">8. Third-Party Services</h2>
                <p className="text-muted-foreground">
                  We use third-party services such as Make.com for form processing and automation. These services have 
                  their own privacy policies, and we encourage you to review them. We are not responsible for the privacy 
                  practices of these third-party services.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                  new privacy policy on this page and updating the "Last updated" date. Your continued use of our services 
                  after any changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="font-heading font-semibold text-2xl text-foreground mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
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

export default PrivacyPolicy;

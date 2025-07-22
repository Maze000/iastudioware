import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, MapPin, Phone, Mail, Clock, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    description: '',
    logo: null as File | null,
    color1: '#3b82f6',
    color2: '#ffffff',
    color3: '#ffffff',
    color4: '#ffffff',
    color5: '#ffffff'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, logo: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const data = new FormData();
    data.append('businessName', formData.businessName);
    data.append('email', formData.email);
    data.append('description', formData.description);
    data.append('color1', formData.color1);
    data.append('color2', formData.color2);
    data.append('color3', formData.color3);
    data.append('color4', formData.color4);
    data.append('color5', formData.color5);

    if (formData.logo) {
      data.append('logo', formData.logo);
    }

    try {
      const response = await fetch('https://hook.us2.make.com/g9abaj19u2x5uyslhrcmsxzui1taojbf', {
        method: 'POST',
        body: data
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
          className: "bg-orange-500 bg-opacity-100 text-white"
        });
        setFormData({
          businessName: '',
          email: '',
          description: '',
          logo: null,
          color1: '#3b82f6',
          color2: '#ffffff',
          color3: '#ffffff',
          color4: '#ffffff',
          color5: '#ffffff'
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                digitize your business?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your project and we'll create a custom automation solution for you.
            </p>
            <p className="text-xl text-cyan-400 font-semibold mt-4">
              Fill in the key details and we'll send you your automated smart website app within 24 hours. Free 3-day demo. 
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border shadow-card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div>
                  <Label htmlFor="businessName" className="text-foreground font-medium">
                    Business name
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    type="text"
                    required
                    className="mt-2"
                    placeholder="Enter your business name"
                    value={formData.businessName}
                    onChange={handleInputChange}
                  />
                </div>
  
                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
  
                {/* Description */}
                <div>
                  <Label htmlFor="description" className="text-foreground font-medium">
                    Description of the product or service
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    className="mt-2 min-h-[120px]"
                    placeholder="Describe your product or service..."
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
  
                {/* Logo Upload */}
                <div>
                  <Label htmlFor="logo" className="text-foreground font-medium">
                    Logo upload
                  </Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, SVG up to 5MB</p>
                    <input
                      type="file"
                      id="logo"
                      name="logo"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="logo"
                      className={`inline-block mt-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                        formData.logo 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-primary text-primary-foreground hover:bg-primary/90'
                      }`}
                    >
                      {formData.logo ? 'File Selected ✓' : 'Choose File'}
                    </label>
                  </div>
                </div>
  
                {/* Color Pickers */}
                <div>
                  <Label className="text-foreground font-medium mb-4 block">
                    5 color pickers (choose up to 5 colors)
                  </Label>
                  <div className="grid grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <div key={index} className="text-center">
                        <label htmlFor={`color${index}`} className="block text-xs text-muted-foreground mb-2">
                          Color {index}
                        </label>
                        <input
                          type="color"
                          id={`color${index}`}
                          name={`color${index}`}
                          className="w-full h-12 border border-border rounded-lg cursor-pointer bg-background"
                          value={formData[`color${index}` as keyof typeof formData] as string}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>
  
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium group"
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      Request Consultation
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
  
                <div className="flex flex-col justify-center" style={{ minHeight: '120px' }}>
                  <div className="mt-12 text-sm text-muted-foreground text-center border border-border rounded-xl p-4">
                    Our team will review your request and get in touch within 24 hours. Let us help you kickstart your digital transformation!
                  </div>
                </div>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Why Choose AI WareStudio?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Custom solutions tailored to your specific business needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Seamless integration with your existing tools and workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Ongoing support and optimization to ensure continued success</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Transparent pricing with no hidden fees or surprises</span>
                  </li>
                </ul>
              </div>
  
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="font-heading font-semibold text-xl mb-4">
                  Free Initial Consultation
                </h3>
                <p className="mb-6 text-white/90">
                  Get a detailed analysis of your business processes and a custom automation roadmap 
                  – completely free, no strings attached.
                </p>
                <div className="text-sm text-white/80">
                  ✓ 1-hour strategy session<br/>
                  ✓ Custom automation plan<br/>
                  ✓ ROI projections<br/>
                  ✓ Implementation timeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Plans', href: '#plans' },
    { label: 'Projects', href: '#projects' },

    { label: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Support', href: '#support' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-dark-accent text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-heading font-bold text-xl">AI WareStudio</span>
            </div>
            
            <p className="text-white/70 mb-6 max-w-md">
              We digitize and automate businesses through smart web solutions. 
              Modular automations that scale with your growth.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Stay Updated</h3>
              <FooterSubscribeForm />
              <p className="text-xs text-white/50">
                Get automation tips and industry insights delivered to your inbox.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal & Support</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <p className="text-white/70 text-sm">
                <strong>Email:</strong> hello@aistudioware.com
              </p>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © 2025 AI Studio. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Componente de suscripción para el footer
const FooterSubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage('Please enter a valid email.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('https://hook.us2.make.com/ar77g4bbi2sowu18iimo616v5jd2ty2l', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setMessage('You are subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Subscription failed. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={status === 'loading'}
        required
      />
      <Button
        type="submit"
        className="bg-primary hover:bg-primary-hover text-primary-foreground"
        disabled={status === 'loading'}
      >
        <Mail className="w-4 h-4 mr-2" />
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </Button>
      {message && (
        <div className={`text-xs mt-2 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message}</div>
      )}
    </form>
  );
};

export default Footer;
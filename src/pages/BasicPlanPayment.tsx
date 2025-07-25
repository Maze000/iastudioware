import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BasicPlanPayment = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const plansSection = document.getElementById('plans');
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="text-white hover:text-blue-400 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Button>

          <div className="text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white via-blue-500 to-orange-500 bg-clip-text text-transparent mb-4">
              Basic Plan - Checkout
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete your purchase to kickstart your professional digital presence
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Plan Details */}
          <div className="bg-transparent rounded-2xl p-6 border border-border space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Basic Plan</h2>
                <p className="text-muted-foreground text-sm">Digital Presence</p>
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-white">$149 NZD</div>
              <p className="text-muted-foreground text-sm">
                Perfect to get started with a sleek, professional online presence
              </p>
            </div>

            <div>
              <h3 className="text-base font-semibold text-white mb-2">Includes:</h3>
              <ul className="space-y-2">
                {[
                  'Professional landing page',
                  'Integrated form (email or Sheets)',
                  'Responsive design',
                  'Basic support',
                  'SSL certificate included',
                  'Mobile optimization'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-transparent rounded-2xl p-6 border border-border space-y-4">
            <h2 className="text-xl font-bold text-white">Payment Method</h2>

            <div className="bg-muted/20 rounded-xl p-4">
              <h3 className="text-base font-semibold text-white mb-2">Secure Payment via PayPal</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Make your payment securely through PayPal. Accepts credit cards, debit, and more.
              </p>

              <div className="flex justify-center">
                <style dangerouslySetInnerHTML={{
                  __html: `
                    .pp-LHVZ4LXPYE4B8 {
                      text-align: center;
                      border: 1px solid #000;
                      border-radius: 1.5rem;
                      min-width: 11.625rem;
                      padding: 0 2rem;
                      height: 2.625rem;
                      font-weight: bold;
                      background-color: #ffffff;
                      color: #000000;
                      font-family: "Helvetica Neue", Arial, sans-serif;
                      font-size: 1rem;
                      line-height: 1.25rem;
                      cursor: pointer;
                    }
                  `
                }} />

                <form
                  action="https://www.paypal.com/ncp/payment/LHVZ4LXPYE4B8"
                  method="post"
                  target="_blank"
                  style={{
                    display: 'inline-grid',
                    justifyItems: 'center',
                    alignContent: 'start',
                    gap: '0.5rem'
                  }}
                >
                  <input className="pp-LHVZ4LXPYE4B8" type="submit" value="Buy Now" />
                  <img
                    src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg"
                    alt="cards"
                  />
                  <section style={{ fontSize: '0.75rem', color: 'white' }}>
                    Powered by{' '}
                    <img
                      src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                      alt="paypal"
                      style={{
                        height: '0.875rem',
                        verticalAlign: 'middle'
                      }}
                    />
                  </section>
                </form>
              </div>
            </div>

            <div className="text-xs text-muted-foreground text-center">
              <p className="mb-1">🔒 100% secure and encrypted payment</p>
              <p>
                By proceeding, you agree to our{' '}
                <a href="/terms" className="text-blue-400 hover:underline">Terms of Service</a>{' '}
                and{' '}
                <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Support */}
<div className="max-w-4xl mx-auto mt-10 text-center">
  <div className="bg-orange-500/20 rounded-2xl p-5 border border-orange-500">
    <h3 className="text-base font-semibold text-white mb-2">
      Need help?
    </h3>
    <p className="text-muted-foreground text-sm mb-3">
      Our team is here to guide you through every step.
    </p>
    <Button
      variant="outline"
      onClick={() => navigate('/support')}
      className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
    >
      Contact Support
    </Button>
  </div>
</div>
      </div>
    </div>
  );
};

export default BasicPlanPayment;


import { useState } from 'react';

const DemoPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    smartServiceType: '',
    businessDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hook.us2.make.com/ej25iahiofdbetkqkwcg5llgw5eq91vi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your request. Please check your connection and try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background py-16">
      <div className="bg-card rounded-2xl shadow-lg p-8 w-full max-w-lg border">
        <h1 className="text-3xl font-bold mb-6 text-center text-foreground">Request a Demo</h1>
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-medium">
            Thank you! We have received your demo request.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-1">
                Business Name
              </label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.businessName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="smartServiceType" className="block text-sm font-medium text-foreground mb-1">
                Type of Smart Service
              </label>
              <input
                id="smartServiceType"
                name="smartServiceType"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                value={formData.smartServiceType}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="businessDescription" className="block text-sm font-medium text-foreground mb-1">
                Business Description
              </label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                required
                className="w-full px-4 py-2 border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                value={formData.businessDescription}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Submit Demo Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoPage;

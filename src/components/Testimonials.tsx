import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Emily Smith',
      company: 'TechStart Solutions',
      role: 'CEO',
      image: '/maria-gonzalez.jpg',
      quote: 'AI WareStudio transformed our sales process completely. Our lead conversion increased by 340% in just 3 months.',
      rating: 5
    },
    {
      name: 'John Davies',
      company: 'Urban Retail Group',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      quote: 'The automation modules saved us 20 hours per week. Now we focus on growing the business instead of repetitive tasks.',
      rating: 5
    },
    {
      name: 'Jennifer Wilson',
      company: 'Creative Agency Plus',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
      quote: 'Professional, efficient, and incredibly smart solutions. Our clients are impressed with our new automated workflows.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
            What our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from businesses that chose to digitize with AI Warestudio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by 100+ businesses around the world.</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Mock Company Logos */}
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium" style={{ color: 'rgb(66, 92, 190)' }}>
               TechStart Solutions
             </div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium" style={{ color: 'rgb(66, 92, 190)' }}>
               Urban Retail Group
             </div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium" style={{ color: 'rgb(66, 92, 190)' }}>
               Creative Agency Plus
             </div>
            <div className="bg-muted rounded-lg px-6 py-3 text-sm font-medium" style={{ color: 'rgb(66, 92, 190)' }}>
               Digital Marketing Pro
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
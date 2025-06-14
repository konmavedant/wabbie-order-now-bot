
import { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner, Raj's Kitchen",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Wabbie ne mera business badal diya! Pehle Swiggy/Zomato pe 25% commission deta tha, ab 100% profit mera hai. WhatsApp pe directly customers se baat kar sakta hun.",
      metrics: {
        increase: "150%",
        period: "3 months"
      }
    },
    {
      name: "Priya Sharma",
      role: "Owner, Healthy Bites Cafe",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c3bd?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Setup bahut easy tha! 5 minute me mera restaurant live ho gaya WhatsApp pe. Customers ko bhi bohot convenient lagta hai - no app download, direct WhatsApp pe order.",
      metrics: {
        increase: "200%",
        period: "2 months"
      }
    },
    {
      name: "Mohammed Ali",
      role: "Owner, Biryani Express",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Best decision ever! Zero commission means I can offer better prices to customers. WhatsApp ordering is so natural - customers love the personal touch.",
      metrics: {
        increase: "180%",
        period: "4 months"
      }
    },
    {
      name: "Sneha Patel",
      role: "Owner, South Indian Delights",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Wabbie ka support team bahut helpful hai. Menu update karna, orders manage karna - sab kuch itna simple hai. Highly recommend to all restaurant owners!",
      metrics: {
        increase: "120%",
        period: "2 months"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            What Our <span className="text-primary">Restaurant Partners</span> Say
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Real stories from real restaurant owners who transformed their business with Wabbie
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Testimonial */}
              <div className="p-8 lg:p-12">
                <Quote className="text-primary w-12 h-12 mb-6 opacity-20" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg text-secondary/80 leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-secondary">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-secondary/60 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-primary text-sm">
                      📍 {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Metrics */}
              <div className="bg-gradient-to-br from-primary to-primary-dark p-8 lg:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Business Growth</h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      +{testimonials[currentIndex].metrics.increase}
                    </div>
                    <div className="text-primary-foreground/80">
                      Revenue Increase
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">
                      {testimonials[currentIndex].metrics.period}
                    </div>
                    <div className="text-primary-foreground/80">
                      Time Period
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">0%</div>
                    <div className="text-primary-foreground/80">Commission</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6 text-secondary" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-6 h-6 text-secondary" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center animate-fade-in-up">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-secondary/70">Customer Satisfaction</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-secondary/70">Happy Restaurants</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">₹2Cr+</div>
            <div className="text-secondary/70">Commission Saved</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-secondary/70">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹299",
      period: "/month",
      description: "Perfect for small restaurants getting started",
      features: [
        "WhatsApp Business Setup",
        "Basic Menu Creation",
        "Up to 50 orders/month",
        "Payment Integration",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false,
      setupFee: "₹999"
    },
    {
      name: "Growth",
      price: "₹799",
      period: "/month",
      description: "Ideal for established restaurants looking to scale",
      features: [
        "Everything in Starter",
        "Advanced Menu Management",
        "Unlimited Orders",
        "Customer Database",
        "Advanced Analytics",
        "WhatsApp Automation",
        "Priority Support",
        "Custom Branding"
      ],
      popular: true,
      setupFee: "₹1,499"
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions for restaurant chains",
      features: [
        "Everything in Growth",
        "Multi-location Support",
        "API Integration",
        "Custom Features",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Staff Training",
        "White-label Solution"
      ],
      popular: false,
      setupFee: "Custom"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto mb-8">
            No hidden fees, no commission cuts. Choose the plan that fits your restaurant's needs.
          </p>
          
          {/* Savings Banner */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-4 max-w-2xl mx-auto">
            <p className="font-semibold">
              💰 Save ₹50,000+ annually compared to traditional food delivery platforms!
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                  <p className="text-secondary/60 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end justify-center">
                    <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                    <span className="text-secondary/60 ml-1">{plan.period}</span>
                  </div>
                  {plan.setupFee && (
                    <p className="text-sm text-secondary/60 mt-2">
                      Setup fee: {plan.setupFee}
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-secondary/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary-dark text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-secondary'
                  } transition-all duration-300`}
                >
                  {plan.name === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h3 className="text-2xl font-bold text-center text-secondary mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-secondary mb-2">
                How does this compare to Swiggy/Zomato commission?
              </h4>
              <p className="text-secondary/70">
                Traditional platforms charge 15-30% commission per order. With Wabbie, you pay a fixed monthly fee and keep 100% of your earnings. A restaurant doing ₹50,000/month saves ₹7,500-15,000 monthly!
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-secondary mb-2">
                Do I need technical knowledge to set up?
              </h4>
              <p className="text-secondary/70">
                Not at all! Our team handles the complete setup for you. We'll create your WhatsApp Business account, set up your menu, and train your staff. You'll be taking orders within 24 hours.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-secondary mb-2">
                Can I cancel anytime?
              </h4>
              <p className="text-secondary/70">
                Yes, absolutely! There are no long-term contracts. You can cancel your subscription anytime with 30 days notice. We believe in earning your business every month.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Restaurant Business?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of restaurants already using Wabbie. Start your 7-day free trial today!
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

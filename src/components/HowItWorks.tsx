
import { MessageCircle, Menu, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Menu,
      title: 'Create WhatsApp Menu',
      description: 'Setup your digital menu with photos, prices, and descriptions. Easy drag-and-drop interface.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Start Taking Orders',
      description: 'Customers message you directly on WhatsApp. No app downloads needed for them!',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Truck,
      title: 'Deliver & Earn',
      description: 'Accept payments, manage deliveries, and keep 100% of your earnings. Zero commission!',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            तीन आसान steps में अपना WhatsApp restaurant business शुरू करें
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={32} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-secondary/70 mb-6">
            Ready to get started? It takes less than 5 minutes!
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow">
            Start Your Free Setup
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

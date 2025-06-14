
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const GetStartedSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick setup via WhatsApp",
      action: "Chat Now",
      contact: "+91 98765 43210",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Speak with our experts",
      action: "Call Now",
      contact: "+91 98765 43210",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Get detailed information",
      action: "Email Us",
      contact: "hello@wabbie.com",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Launch Your Restaurant Bot <span className="text-primary">Today</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            Get your WhatsApp restaurant up and running in less than 24 hours. Our team will handle everything for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Methods */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Get Started in 3 Easy Steps
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <span className="text-secondary">Contact us via your preferred method</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <span className="text-secondary">We'll set up your WhatsApp Business & menu</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <span className="text-secondary">Start taking orders within 24 hours!</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary">{method.title}</h4>
                      <p className="text-secondary/60 text-sm">{method.description}</p>
                      <p className="text-primary font-medium text-sm">{method.contact}</p>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      {method.action}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - WhatsApp Widget */}
          <div className="animate-slide-in-right">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  Quick Setup on WhatsApp
                </h3>
                <p className="text-secondary/70">
                  Message us now to get started instantly!
                </p>
              </div>

              {/* Mock WhatsApp Chat */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                <div className="space-y-3">
                  <div className="bg-primary text-white p-3 rounded-lg rounded-br-sm max-w-xs ml-auto">
                    <p className="text-sm">Hi! I want to set up my restaurant on Wabbie</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-bl-sm max-w-xs shadow-sm">
                    <p className="text-sm text-secondary">Hello! Great to hear from you 🎉</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg rounded-bl-sm max-w-xs shadow-sm">
                    <p className="text-sm text-secondary">What's your restaurant name and location? We'll get you set up today!</p>
                  </div>
                </div>
              </div>

              {/* Primary CTA */}
              <Button className="w-full bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold rounded-xl mb-4 animate-pulse-glow">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start WhatsApp Setup
              </Button>

              {/* Alternative CTA */}
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white py-3">
                Schedule Demo Call
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-secondary mb-2">
                Trusted by Restaurant Owners Across India
              </h3>
              <p className="text-secondary/70">
                Join the growing community of successful restaurants on Wabbie
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <div className="font-bold text-secondary">15+ Cities</div>
                <div className="text-secondary/60 text-sm">Active Presence</div>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="w-8 h-8 text-primary mb-2" />
                <div className="font-bold text-secondary">24 Hours</div>
                <div className="text-secondary/60 text-sm">Average Setup Time</div>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-primary mb-2" />
                <div className="font-bold text-secondary">24/7</div>
                <div className="text-secondary/60 text-sm">Support Available</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-primary mb-2" />
                <div className="font-bold text-secondary">500+</div>
                <div className="text-secondary/60 text-sm">Happy Restaurants</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;

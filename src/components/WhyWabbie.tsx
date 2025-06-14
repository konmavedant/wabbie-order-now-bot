
import { Shield, MessageSquare, Settings, TrendingUp, Clock, Heart } from 'lucide-react';

const WhyWabbie = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Zero Commission',
      description: 'Keep 100% of your earnings. No hidden fees, no percentage cuts.',
      gradient: 'from-green-400 to-primary'
    },
    {
      icon: MessageSquare,
      title: 'Chat-Based Ordering',
      description: 'Customers order through familiar WhatsApp interface. No app downloads!',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Settings,
      title: 'Easy Menu Setup',
      description: 'Create and update your menu in minutes. Add photos, prices, descriptions.',
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Track orders, revenue, and customer preferences with detailed insights.',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      icon: Clock,
      title: 'Instant Notifications',
      description: 'Get notified immediately when new orders come in. Never miss a customer!',
      gradient: 'from-teal-400 to-teal-600'
    },
    {
      icon: Heart,
      title: 'Customer Relationships',
      description: 'Build direct relationships with customers through personal WhatsApp chats.',
      gradient: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="why-wabbie" className="py-20 bg-gradient-to-br from-accent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Why Choose <span className="text-primary">Wabbie</span>?
          </h2>
          <p className="text-lg text-secondary/70 max-w-3xl mx-auto">
            Traditional food delivery platforms charge high commissions and create barriers between you and your customers. Wabbie eliminates these problems.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Platforms */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Traditional Platforms</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-secondary/70">15-30% commission on every order</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-secondary/70">No direct customer relationship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-secondary/70">Complex onboarding process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-secondary/70">Limited customization options</span>
                </div>
              </div>
            </div>

            {/* Wabbie */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary mb-4">✅ Wabbie</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-secondary/70">0% commission - keep all earnings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-secondary/70">Direct WhatsApp customer communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-secondary/70">5-minute setup process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-secondary/70">Full control over your business</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full">
                {/* Icon with Gradient */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon size={32} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Join thousands of restaurants already using Wabbie</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-primary-foreground/80">Active Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-primary-foreground/80">Orders Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">₹50L+</div>
                <div className="text-primary-foreground/80">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.8★</div>
                <div className="text-primary-foreground/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWabbie;

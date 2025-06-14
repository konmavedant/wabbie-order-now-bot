
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const taglines = [
    'Wabbie Hai, Toh Aasan Hai',
    'WhatsApp Pe Orders Lena',
    'Bina Commission Ke Business'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentTagline = taglines[currentIndex];
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentText.length < currentTagline.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentTagline.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % taglines.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentIndex, taglines]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent via-white to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Typing Animation */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
                <span className="text-primary">{currentText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-lg sm:text-xl text-secondary/70 max-w-2xl">
                WhatsApp पर अपना restaurant setup करें। Orders लें, menu दिखाएं, payments collect करें - बिना किसी commission के!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Setup Your Restaurant
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Explore Nearby
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-secondary/60">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-secondary/60">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0%</div>
                <div className="text-sm text-secondary/60">Commission</div>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Mobile Image */}
              <img 
                src="/lovable-uploads/508d4b71-a410-4781-a51f-cb620d5bdc05.png" 
                alt="WhatsApp Food Ordering with Wabbie"
                className="w-80 h-auto shadow-2xl rounded-3xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full shadow-lg animate-bounce-gentle">
                <span className="text-xs font-bold">NEW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ArrowDown className="text-primary w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

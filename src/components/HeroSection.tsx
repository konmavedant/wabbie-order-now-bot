
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone, Video, MoreVertical } from 'lucide-react';

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

          {/* Right Content - iPhone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* iPhone Frame */}
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                {/* iPhone Screen */}
                <div className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[650px] relative">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                  
                  {/* Status Bar */}
                  <div className="bg-[#075E54] pt-8 pb-2 px-4 flex justify-between items-center text-white text-sm">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 border border-white rounded-sm">
                        <div className="w-3 h-1 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] px-4 pb-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91b?w=40&h=40&fit=crop&crop=face" 
                          alt="Restaurant" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Raj's Kitchen</h3>
                        <p className="text-white/80 text-xs">online</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Video className="text-white w-6 h-6" />
                      <Phone className="text-white w-6 h-6" />
                      <MoreVertical className="text-white w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="bg-[#ECE5DD] h-full p-4 space-y-3 overflow-hidden">
                    {/* Received Message */}
                    <div className="flex">
                      <div className="bg-white rounded-lg rounded-bl-none p-3 max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">नमस्ते! Raj's Kitchen में आपका स्वागत है 🍽️</p>
                        <p className="text-xs text-gray-500 mt-1">12:30</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-white rounded-lg rounded-bl-none p-3 max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">आज का special menu देखिए और order करिए!</p>
                        <p className="text-xs text-gray-500 mt-1">12:30</p>
                      </div>
                    </div>

                    {/* Sent Message */}
                    <div className="flex justify-end">
                      <div className="bg-[#DCF8C6] rounded-lg rounded-br-none p-3 max-w-xs shadow-sm">
                        <p className="text-sm text-gray-800">आज का special क्या है?</p>
                        <p className="text-xs text-gray-500 mt-1 text-right">12:31 ✓✓</p>
                      </div>
                    </div>

                    {/* Menu Response */}
                    <div className="flex">
                      <div className="bg-white rounded-lg rounded-bl-none p-3 max-w-xs shadow-sm">
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-800">आज के Specials:</p>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-800">🍛 Butter Chicken - ₹280</p>
                            <p className="text-sm text-gray-800">🍝 Paneer Pasta - ₹180</p>
                            <p className="text-sm text-gray-800">🥗 Fresh Salad - ₹150</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">12:32</p>
                        </div>
                      </div>
                    </div>

                    {/* Order Button */}
                    <div className="flex">
                      <div className="bg-white rounded-lg rounded-bl-none p-3 max-w-xs shadow-sm">
                        <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium w-full">
                          Order Now 🛒
                        </button>
                        <p className="text-xs text-gray-500 mt-2">12:32</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Input Area */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-2 flex items-center space-x-2">
                    <div className="flex-1 bg-white rounded-full px-4 py-2 flex items-center">
                      <span className="text-sm text-gray-500">Type a message...</span>
                    </div>
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🎤</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-[#25D366] text-white p-2 rounded-full shadow-lg animate-bounce-gentle">
                <span className="text-xs font-bold">LIVE</span>
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

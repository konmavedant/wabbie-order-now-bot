
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
              {/* iPhone Frame Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-xl transform translate-y-4 scale-105"></div>
              
              {/* iPhone Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Side Buttons */}
                <div className="absolute left-[-2px] top-12 w-0.5 h-4 bg-gray-600 rounded-l-full"></div>
                <div className="absolute left-[-2px] top-18 w-0.5 h-8 bg-gray-600 rounded-l-full"></div>
                <div className="absolute left-[-2px] top-28 w-0.5 h-8 bg-gray-600 rounded-l-full"></div>
                <div className="absolute right-[-2px] top-16 w-0.5 h-12 bg-gray-600 rounded-r-full"></div>
                
                {/* iPhone Screen */}
                <div className="bg-black rounded-[2rem] overflow-hidden w-44 h-96 relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30 border border-gray-800"></div>
                  
                  {/* Screen Content */}
                  <div className="bg-white rounded-[2rem] overflow-hidden w-full h-full relative">
                    {/* Status Bar */}
                    <div className="bg-[#075E54] pt-6 pb-1.5 px-3 flex justify-between items-center text-white text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-white rounded-full"></div>
                          <div className="w-0.5 h-0.5 bg-white/50 rounded-full"></div>
                        </div>
                        <div className="w-4 h-2 border border-white rounded-sm relative">
                          <div className="w-3 h-1 bg-white rounded-sm absolute top-0.5 left-0.5"></div>
                          <div className="w-0.5 h-0.5 bg-white rounded-r-sm absolute top-0.5 -right-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Header */}
                    <div className="bg-[#075E54] px-3 pb-2 flex items-center justify-between shadow-md">
                      <div className="flex items-center space-x-2">
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-sm">
                          <img 
                            src="/lovable-uploads/4d333d23-2efc-4a9d-9e4c-ec9922876275.png" 
                            alt="Wabbie" 
                            className="w-full h-full object-contain p-0.5"
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-xs">Wabbie</h3>
                          <p className="text-white/80 text-xs flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                            online
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Video className="text-white w-4 h-4 hover:text-white/80 cursor-pointer" />
                        <Phone className="text-white w-4 h-4 hover:text-white/80 cursor-pointer" />
                        <MoreVertical className="text-white w-4 h-4 hover:text-white/80 cursor-pointer" />
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="bg-[#ECE5DD] flex-1 p-3 space-y-2.5 overflow-y-auto" style={{ height: 'calc(100% - 100px)' }}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
                      }}></div>
                      
                      {/* Welcome Message */}
                      <div className="flex relative z-10">
                        <div className="bg-white rounded-lg rounded-bl-sm p-2 max-w-32 shadow-sm relative">
                          <div className="absolute -left-0.5 bottom-0 w-2 h-2 bg-white transform rotate-45"></div>
                          <p className="text-xs text-gray-800 font-medium">नमस्ते! Wabbie में आपका स्वागत है 🍽️</p>
                          <p className="text-xs text-gray-500 mt-1">12:30</p>
                        </div>
                      </div>
                      
                      {/* Menu Message */}
                      <div className="flex relative z-10">
                        <div className="bg-white rounded-lg rounded-bl-sm p-2 max-w-32 shadow-sm relative">
                          <div className="absolute -left-0.5 bottom-0 w-2 h-2 bg-white transform rotate-45"></div>
                          <p className="text-xs text-gray-800">आज का special menu देखिए और order करिए!</p>
                          <p className="text-xs text-gray-500 mt-1">12:30</p>
                        </div>
                      </div>

                      {/* User Message */}
                      <div className="flex justify-end relative z-10">
                        <div className="bg-[#DCF8C6] rounded-lg rounded-br-sm p-2 max-w-32 shadow-sm relative">
                          <div className="absolute -right-0.5 bottom-0 w-2 h-2 bg-[#DCF8C6] transform rotate-45"></div>
                          <p className="text-xs text-gray-800">आज का special क्या है?</p>
                          <div className="flex items-center justify-end mt-1 space-x-1">
                            <p className="text-xs text-gray-500">12:31</p>
                            <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              <path fillRule="evenodd" d="M16.707 7.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 14.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Menu Response */}
                      <div className="flex relative z-10">
                        <div className="bg-white rounded-lg rounded-bl-sm p-2 max-w-32 shadow-sm relative">
                          <div className="absolute -left-0.5 bottom-0 w-2 h-2 bg-white transform rotate-45"></div>
                          <div className="space-y-1.5">
                            <p className="text-xs font-semibold text-gray-800">आज के Specials:</p>
                            <div className="space-y-1">
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-800">🍛 Butter Chicken</span>
                                <span className="font-semibold text-primary">₹280</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-800">🍝 Paneer Pasta</span>
                                <span className="font-semibold text-primary">₹180</span>
                              </div>
                              <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-800">🥗 Fresh Salad</span>
                                <span className="font-semibold text-primary">₹150</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">12:32</p>
                          </div>
                        </div>
                      </div>

                      {/* Order Button Message */}
                      <div className="flex relative z-10">
                        <div className="bg-white rounded-lg rounded-bl-sm p-2 max-w-32 shadow-sm relative">
                          <div className="absolute -left-0.5 bottom-0 w-2 h-2 bg-white transform rotate-45"></div>
                          <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1.5 rounded-lg text-xs font-medium w-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-1">
                            <span>Order Now</span>
                            <span>🛒</span>
                          </button>
                          <p className="text-xs text-gray-500 mt-2">12:32</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Input Area */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] p-2 flex items-center space-x-1.5">
                      <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center shadow-sm">
                        <span className="text-xs text-gray-500">Type a message...</span>
                      </div>
                      <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-200">
                        <span className="text-white text-sm">🎤</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-2 py-1 rounded-full shadow-lg animate-bounce-gentle">
                <span className="text-xs font-bold">LIVE</span>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.5rem] blur-2xl -z-10"></div>
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

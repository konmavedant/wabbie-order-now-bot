
import { MessageCircle, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Features', href: '#why-wabbie' },
      { name: 'Restaurants', href: '#restaurants' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' }
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Restaurant Setup', href: '/setup' },
      { name: 'API Docs', href: '/docs' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Ahmedabad'
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/b0b59ade-b713-4ff1-a024-6f079b51369b.png" 
                alt="Wabbie Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering local restaurants with WhatsApp-based ordering. Zero commission, maximum profit.
            </p>
            <p className="text-primary font-semibold mb-4">
              Wabbie Hai, Toh Aasan Hai
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">hello@wabbie.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span className="text-white/70">
                  123 Tech Park, <br />
                  Sector 5, HSR Layout, <br />
                  Bangalore - 560102
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cities Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <h3 className="font-bold text-lg mb-4 text-center">Available Cities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {cities.map((city) => (
              <span 
                key={city}
                className="px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-primary transition-colors duration-200 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 Wabbie. All rights reserved. Made with ❤️ in India.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-white/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/70 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

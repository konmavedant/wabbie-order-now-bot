
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Clock, MessageCircle } from 'lucide-react';

const ExploreRestaurants = () => {
  const [selectedLocation, setSelectedLocation] = useState('Mumbai');
  
  const locations = ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad'];
  
  const restaurants = [
    {
      name: "Raj's Kitchen",
      cuisine: "North Indian",
      rating: 4.5,
      deliveryTime: "25-30 min",
      distance: "1.2 km",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      specialties: ["Butter Chicken", "Biryani", "Naan"],
      isOnline: true
    },
    {
      name: "Pasta Paradise",
      cuisine: "Italian",
      rating: 4.3,
      deliveryTime: "20-25 min",
      distance: "0.8 km",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      specialties: ["Carbonara", "Margherita", "Tiramisu"],
      isOnline: true
    },
    {
      name: "Street Food Corner",
      cuisine: "Street Food",
      rating: 4.7,
      deliveryTime: "15-20 min",
      distance: "0.5 km",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      specialties: ["Pav Bhaji", "Dosa", "Chaat"],
      isOnline: false
    },
    {
      name: "Healthy Bites",
      cuisine: "Healthy",
      rating: 4.4,
      deliveryTime: "30-35 min",
      distance: "1.5 km",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      specialties: ["Salads", "Smoothies", "Quinoa Bowl"],
      isOnline: true
    }
  ];

  return (
    <section id="restaurants" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Explore <span className="text-primary">Restaurants</span>
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto mb-8">
            Discover amazing local restaurants in your area. Order directly through WhatsApp!
          </p>
          
          {/* Location Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedLocation === location
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-secondary hover:bg-gray-200'
                }`}
              >
                <MapPin className="inline-block w-4 h-4 mr-2" />
                {location}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {restaurants.map((restaurant, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Restaurant Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    restaurant.isOnline 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-500 text-white'
                  }`}>
                    {restaurant.isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-xs font-medium ml-1">{restaurant.rating}</span>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-secondary/60 text-sm">{restaurant.cuisine}</p>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-secondary/60">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {restaurant.deliveryTime}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {restaurant.distance}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-xs text-secondary/50 mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-lg"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    restaurant.isOnline
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  } transition-all duration-300`}
                  disabled={!restaurant.isOnline}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {restaurant.isOnline ? 'Order on WhatsApp' : 'Currently Closed'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Banner */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-center text-white animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4">More Restaurants Coming Soon!</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            We're onboarding amazing local restaurants every day. Want to see your favorite restaurant here? Ask them to join Wabbie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-primary border-white hover:bg-gray-100">
              Suggest a Restaurant
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              List Your Restaurant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreRestaurants;

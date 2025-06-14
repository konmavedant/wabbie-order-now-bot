
import React from 'react';

const BrandShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-accent to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Wabbie Brand Experience
          </h2>
          <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
            From digital ordering to beautiful packaging - we help you create a complete brand experience for your customers.
          </p>
        </div>
        
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/38f5d479-bae9-4a6e-98a7-0855fe1c55c6.png"
              alt="Wabbie Brand Showcase - Packaging and Branding Materials"
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Overlay text */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Complete Brand Solution</h3>
              <p className="text-lg">From WhatsApp orders to beautiful packaging</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Digital First</h3>
            <p className="text-secondary/70">WhatsApp-based ordering system that your customers love</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Perfect Packaging</h3>
            <p className="text-secondary/70">Beautiful branded packaging that makes every delivery special</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-2">Brand Consistency</h3>
            <p className="text-secondary/70">Consistent branding across all customer touchpoints</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;

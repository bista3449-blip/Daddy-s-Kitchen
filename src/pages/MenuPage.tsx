import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FOOD_ITEMS } from '../constants/data';
import { FoodCard } from '../components/shared/FoodCard';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = ['All', 'Nepali', 'Indian', 'Chinese', 'Fast Food', 'Beverages', 'Desserts'];

export const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = FOOD_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-primary-cream">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-20 bg-primary-dark text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1920" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
          >
            Our Delicious <span className="text-primary-orange">Menu</span>
          </motion.h1>
          <p className="text-accent-gray/60 max-w-2xl mx-auto text-lg leading-relaxed">
            From traditional Nepali thalis to modern fast food favorites, explore a wide range of flavors crafted for your palate.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full font-bold text-sm transition-all",
                  activeCategory === cat 
                    ? "bg-primary-orange text-white shadow-lg shadow-primary-orange/20" 
                    : "bg-white text-primary-dark hover:bg-primary-orange/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-black/5 rounded-full pl-12 pr-6 py-3 focus:outline-none focus:border-primary-orange shadow-sm"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <FoodCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <img 
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=400" 
              alt="Empty" 
              className="w-32 h-32 mx-auto rounded-full grayscale opacity-20 mb-6"
            />
            <h3 className="text-2xl font-bold text-primary-dark">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

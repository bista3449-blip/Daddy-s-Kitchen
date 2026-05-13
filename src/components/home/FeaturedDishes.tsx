import React from 'react';
import { FOOD_ITEMS } from '../../constants/data';
import { FoodCard } from '../shared/FoodCard';
import { motion } from 'motion/react';

export const FeaturedDishes = () => {
  const featured = FOOD_ITEMS.slice(0, 4);

  return (
    <section id="menu" className="py-24 bg-primary-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Popular Picks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6"
          >
            Featured Dishes at Daddy's Kitchen
          </motion.h2>
          <p className="text-gray-600 italic">Handpicked favorites that represent the soul of our kitchen.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FoodCard item={item} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#full-menu"
            className="inline-flex items-center gap-2 text-primary-orange font-bold border-b-2 border-primary-orange pb-1 hover:gap-4 transition-all"
          >
            Explore Full Menu <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

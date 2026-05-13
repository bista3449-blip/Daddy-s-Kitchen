import React from 'react';
import { motion } from 'motion/react';
import { Star, ShoppingCart } from 'lucide-react';
import { FoodItem } from '../../types';

interface FoodCardProps {
  item: FoodItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-primary-dark/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 bg-blur px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-primary-dark">
          <Star size={14} className="text-primary-orange fill-primary-orange" />
          {item.rating}
        </div>
        <div className="absolute top-4 left-4 bg-primary-orange text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
          {item.category}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-heading font-bold text-xl text-primary-dark">{item.name}</h3>
          <span className="font-heading font-bold text-primary-orange">Rs. {item.price}</span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
        <button className="w-full bg-accent-gray hover:bg-primary-orange hover:text-white text-primary-dark font-bold py-3 rounded-2xl transition-all flex items-center justify-center gap-2">
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

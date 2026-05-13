import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Zap, Wallet, Users, ChefHat } from 'lucide-react';

const reasons = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Fresh Ingredients',
    description: 'Sourced daily from local farmers in Butwal for maximum flavor.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Hygienic Kitchen',
    description: 'Strict cleanliness standards that exceed industry regulations.'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Delivery',
    description: 'Get your favorites delivered hot and fresh across Butwal.'
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: 'Affordable Price',
    description: 'Premium dining experience that fits your budget perfectly.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Family Environment',
    description: 'Safe, warm, and spacious seating for your entire family.'
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: 'Experienced Chefs',
    description: 'Crafted by masters with decades of culinary expertise.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-accent-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Why Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
            Everything You Need for a Perfect Meal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-primary-dark/5 hover:border-primary-orange/20 hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-primary-cream rounded-2xl flex items-center justify-center text-primary-orange mb-6 group-hover:bg-primary-orange group-hover:text-white transition-colors">
                {reason.icon}
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary-dark mb-4">{reason.title}</h3>
              <p className="text-gray-500 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

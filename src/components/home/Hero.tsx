import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, UtensilsCrossed } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Nepali Thali Background"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6"
          >
            <UtensilsCrossed className="text-primary-orange" size={24} />
            <span className="text-primary-orange font-bold uppercase tracking-widest text-sm">Welcome to Daddy's Kitchen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Authentic Taste of <br />
            <span className="text-primary-orange">Nepal</span> in Butwal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-accent-gray/80 mb-10 leading-relaxed"
          >
            Experience the finest Nepali, Indian, and multi-cuisine delights prepared with love and fresh ingredients. Fresh • Delicious • Family Friendly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#order"
              className="px-8 py-4 bg-primary-orange text-white rounded-full font-bold text-lg hover:bg-primary-orange/90 transition-all flex items-center gap-2 shadow-lg shadow-primary-orange/20"
            >
              Order Now <ChevronRight size={20} />
            </a>
            <a
              href="#menu"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg transition-all border border-white/20 bg-blur"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center justify-center w-32 h-32 bg-white rounded-full text-primary-dark shadow-2xl animate-pulse"
      >
        <span className="text-3xl font-bold">100%</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">Fresh & Organic</span>
      </motion.div>
    </section>
  );
};

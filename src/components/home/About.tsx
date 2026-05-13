import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
              alt="Restaurant Interior"
              className="w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-orange rounded-[3rem] -z-0 hidden md:block" />
          <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-24 h-24 bg-primary-dark rounded-full -z-0 hidden lg:block" />
          
          <div className="absolute bottom-8 left-8 right-8 bg-white/90 bg-blur p-6 rounded-3xl shadow-lg z-20 hidden sm:block">
            <p className="text-primary-dark font-heading font-bold text-lg mb-1">Authentic Hospitality</p>
            <p className="text-gray-500 text-sm">Every guest is treated like family at Daddy's Kitchen.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
              Brings Families and Friends Together
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Daddy’s Kitchen in Butwal is more than just a restaurant; it's a place where memories are made. We bring families and friends together with delicious food, warm hospitality, and a comfortable dining experience.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We serve fresh Nepali, Indian, Chinese, and fast food prepared with quality ingredients and authentic taste. Our mission is to provide Butwal with a premium yet affordable dining destination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Authentic Nepali Flavors',
              'Quality Local Ingredients',
              'Warm & Friendly Staff',
              'Clean & Hygienic Kitchen',
              'Perfect Family Atmosphere',
              'Experienced Master Chefs',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary-orange shrink-0" size={20} />
                <span className="font-medium text-primary-dark">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="#reservation"
              className="px-8 py-4 bg-primary-dark text-white rounded-full font-bold text-lg hover:bg-accent-black transition-all shadow-xl inline-block"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

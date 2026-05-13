import React from 'react';
import { motion } from 'motion/react';
import { OFFERS } from '../../constants/data';
import { Tag } from 'lucide-react';

export const SpecialOffers = () => {
  return (
    <section id="offers" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Exclusive Deals</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark">
              Special Offers to Brighten Your Day
            </h2>
          </div>
          <a href="#" className="bg-primary-dark text-white px-8 py-3 rounded-full font-bold hover:bg-accent-black transition-all shadow-lg shrink-0">
            See All Offers
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OFFERS.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative rounded-[3rem] overflow-hidden group min-h-[400px] flex items-end p-10"
            >
              <div className="absolute inset-0">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary-orange text-white px-4 py-2 rounded-full font-bold text-sm">
                  <Tag size={16} /> {offer.discount}
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white max-w-md">
                  {offer.title}
                </h3>
                <p className="text-accent-gray/80 max-w-sm">
                  {offer.description}
                </p>
                <button className="bg-white text-primary-dark px-6 py-2 rounded-full font-bold text-sm hover:bg-primary-orange hover:text-white transition-all active:scale-95">
                  Claim Offer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

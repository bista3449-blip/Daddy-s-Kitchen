import React from 'react';
import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../../constants/data';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-primary-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
            Captured Moments & Delicacies
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "relative rounded-3xl overflow-hidden cursor-pointer shadow-lg group",
                index % 3 === 0 ? "md:row-span-2" : ""
              )}
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary-orange/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-primary-dark w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper inside the file since it's used once and I didn't want to add another import if not needed
// but better to use the lib/utils.ts
import { cn } from '../../lib/utils';

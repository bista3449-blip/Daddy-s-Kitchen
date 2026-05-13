import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { REVIEWS } from '../../constants/data';
import { Star, Quote } from 'lucide-react';

export const Reviews = () => {
  return (
    <section className="py-24 bg-primary-dark overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            What Our Happy Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[3rem] relative space-y-6"
            >
              <Quote className="text-primary-orange opacity-20 absolute top-8 right-8" size={64} />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "text-primary-orange fill-primary-orange" : "text-white/20"}
                  />
                ))}
              </div>
              <p className="text-accent-gray/80 text-lg italic leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center font-bold text-white uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white">{review.name}</h4>
                  <p className="text-accent-gray/40 text-xs uppercase tracking-widest">Local Guide</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-dark overflow-hidden bg-accent-gray">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover grayscale" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-primary-dark bg-primary-orange flex items-center justify-center text-white text-xs font-bold">
              +500
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

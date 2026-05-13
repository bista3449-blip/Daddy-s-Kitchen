import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { FeaturedDishes } from '../components/home/FeaturedDishes';
import { About } from '../components/home/About';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { SpecialOffers } from '../components/home/SpecialOffers';
import { Gallery } from '../components/home/Gallery';
import { Reviews } from '../components/home/Reviews';
import { Reservation } from '../components/home/Reservation';
import { Contact } from '../components/home/Contact';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <WhyChooseUs />
        <SpecialOffers />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-primary-dark text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-black transition-all"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <motion.a
          href="https://wa.me/97798XXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-all"
        >
          <MessageCircle size={28} />
        </motion.a>
      </div>

      {/* Sticky Bottom Order Button for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40 pointer-events-none">
        <button className="w-full bg-primary-orange text-white py-4 rounded-2xl font-bold shadow-2xl shadow-primary-orange/40 flex items-center justify-center gap-2 pointer-events-auto active:scale-95 transition-transform">
          Order Online Now!
        </button>
      </div>
    </div>
  );
};

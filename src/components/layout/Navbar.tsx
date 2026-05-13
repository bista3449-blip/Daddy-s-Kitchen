import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', href: '/', isAnchor: false },
  { name: 'About', href: '/#about', isAnchor: true },
  { name: 'Menu', href: '/menu', isAnchor: false },
  { name: 'Gallery', href: '/#gallery', isAnchor: true },
  { name: 'Offers', href: '/#offers', isAnchor: true },
  { name: 'Reservation', href: '/#reservation', isAnchor: true },
  { name: 'Contact', href: '/#contact', isAnchor: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavContent = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        if (item.isAnchor && isHomePage) {
          return (
            <a
              key={item.name}
              href={item.href.replace('/', '')}
              className={cn(
                mobile ? 'font-medium text-lg border-b border-white/10 pb-2' : 'font-medium text-sm transition-colors hover:text-primary-orange',
                mobile ? '' : (isScrolled ? 'text-accent-gray' : (isHomePage ? 'text-white sm:text-primary-dark' : 'text-primary-dark'))
              )}
              onClick={() => mobile && setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          );
        }
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              mobile ? 'font-medium text-lg border-b border-white/10 pb-2' : 'font-medium text-sm transition-colors hover:text-primary-orange',
              mobile ? '' : (isScrolled ? 'text-accent-gray' : (isHomePage ? 'text-white sm:text-primary-dark' : 'text-primary-dark'))
            )}
            onClick={() => mobile && setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled || !isHomePage ? 'bg-primary-dark/95 bg-blur py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center font-heading font-bold text-white text-xl">
            DK
          </div>
          <span className={cn(
            "font-heading font-bold text-2xl tracking-tight hidden sm:block",
            isScrolled || !isHomePage ? "text-white" : "text-white sm:text-primary-dark"
          )}>
            Daddy's Kitchen
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white">
          <NavContent />
        </div>

        <div className="flex items-center gap-4">
          <button className={cn(
            "p-2 rounded-full hover:bg-white/10 transition-colors",
            isScrolled || !isHomePage ? "text-white" : "text-primary-dark"
          )}>
            <Search size={20} />
          </button>
          <button className={cn(
            "p-2 rounded-full hover:bg-white/10 transition-colors relative",
            isScrolled || !isHomePage ? "text-white" : "text-primary-dark"
          )}>
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary-orange text-white text-[10px] flex items-center justify-center rounded-full">3</span>
          </button>
          <button
            className={cn("md:hidden p-2", isScrolled || !isHomePage ? "text-white" : "text-primary-dark")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <Link
            to="/menu"
            className="hidden lg:block bg-primary-orange text-white px-6 py-2 rounded-full font-bold hover:bg-primary-orange/90 transition-transform active:scale-95"
          >
            Order Online
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-primary-dark text-white p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <NavContent mobile />
              <Link
                to="/menu"
                className="bg-primary-orange text-white text-center py-3 rounded-xl font-bold mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Online
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-accent-black text-accent-gray pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center font-heading font-bold text-white text-lg">
              DK
            </div>
            <span className="font-heading font-bold text-2xl tracking-tight text-white">
              Daddy's Kitchen
            </span>
          </div>
          <p className="text-accent-gray/60 leading-relaxed">
            Bringing families and friends together with delicious food, warm hospitality, and a comfortable dining experience in Butwal.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-orange transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-orange transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-orange transition-colors">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-primary-orange transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary-orange transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-primary-orange transition-colors">Our Menu</a></li>
            <li><a href="#gallery" className="hover:text-primary-orange transition-colors">Gallery</a></li>
            <li><a href="#reservation" className="hover:text-primary-orange transition-colors">Reservation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6 uppercase tracking-wider">Opening Hours</h4>
          <ul className="space-y-4 text-accent-gray/60">
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-primary-orange shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Sun - Fri</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={18} className="text-primary-orange shrink-0 mt-1" />
              <div>
                <p className="text-white font-medium">Saturday</p>
                <p>09:00 AM - 11:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-4 text-accent-gray/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-orange shrink-0 mt-1" />
              <p>Butwal, Nepal - Nearby Traffic Chowk</p>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-primary-orange shrink-0 mt-1" />
              <p>+977 71-XXXXXX<br />+977 98XXXXXXXX</p>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-primary-orange shrink-0 mt-1" />
              <p>info@daddyskitchen.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-sm text-accent-gray/40">
        <p>© {new Date().getFullYear()} Daddy’s Kitchen Restaurant. All Rights Reserved.</p>
        <p className="mt-2">Made with ❤️ in Butwal</p>
      </div>
    </footer>
  );
};

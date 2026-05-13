import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquareText } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-accent-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
                Visit Us or Reach Out
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                We're located in the heart of Butwal. Whether you want to dine in, order takeout, or just say hello, we're here for you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <MapPin size={24} />, title: 'Our Location', detail: 'Butwal, Nepal - Near Traffic Chowk, Ward 4' },
                { icon: <Phone size={24} />, title: 'Call Reservation', detail: '+977 71-XXXXXX' },
                { icon: <Mail size={24} />, title: 'Email Address', detail: 'hello@daddyskitchen.com' },
                { icon: <Clock size={24} />, title: 'Open Hours', detail: 'Daily: 10:00 AM - 10:00 PM' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-black/5"
                >
                  <div className="w-12 h-12 bg-primary-cream rounded-2xl flex items-center justify-center text-primary-orange shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-primary-dark">{item.title}</h4>
                    <p className="text-gray-500">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 p-6 bg-primary-orange/10 rounded-3xl items-center">
              <div className="bg-primary-orange p-3 rounded-2xl text-white">
                <MessageSquareText size={24} />
              </div>
              <p className="text-primary-dark font-medium leading-tight">
                Quickest way to order? <br />
                <a href="#" className="font-bold underline">WhatsApp Us directly!</a>
              </p>
            </div>
          </div>

          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl min-h-[500px]">
             {/* Simple Map Placeholder */}
             <div className="absolute inset-0 bg-primary-dark/5 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 bg-primary-orange/20 rounded-full flex items-center justify-center text-primary-orange mb-6 animate-bounce">
                  <MapPin size={48} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary-dark mb-4">Find Us on the Map</h3>
                <p className="text-gray-500 mb-8">We're easily accessible from any part of Butwal city.</p>
                <div className="w-full h-full min-h-[300px] bg-white rounded-2xl shadow-inner border border-black/5 flex items-center justify-center overflow-hidden">
                  {/* Actual map would go here, using an image for visual fidelity */}
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover opacity-50 grayscale"
                    alt="Map view"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-primary-dark text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-black transition-all">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

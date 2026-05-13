import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Send } from 'lucide-react';

export const Reservation = () => {
  return (
    <section id="reservation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-dark rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 lg:p-16 space-y-8">
            <div>
              <span className="text-primary-orange font-bold uppercase tracking-widest text-sm mb-4 block">Book A Table</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Reserve Your Special Moment
              </h2>
              <p className="text-accent-gray/60 leading-relaxed max-w-md">
                Planning a family gathering or a romantic dinner? Secure your table in advance for a hassle-free dining experience.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-orange transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+977"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-orange transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium flex items-center gap-2"><Users size={14} /> Guests</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-orange transition-all appearance-none">
                    <option className="bg-primary-dark">2 Persons</option>
                    <option className="bg-primary-dark">4 Persons</option>
                    <option className="bg-primary-dark">6+ Persons</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium flex items-center gap-2"><Calendar size={14} /> Date</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-orange transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium flex items-center gap-2"><Clock size={14} /> Time</label>
                  <input
                    type="time"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary-orange transition-all"
                  />
                </div>
              </div>

              <button className="w-full bg-primary-orange text-white font-bold py-4 rounded-2xl hover:bg-primary-orange/90 transition-all flex items-center justify-center gap-2 text-lg shadow-lg shadow-primary-orange/20 active:scale-[0.98]">
                Finalize Reservation <Send size={18} />
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 relative min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
              alt="Table Setup"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary-orange/10 mix-blend-overlay" />
            <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-3xl max-w-xs shadow-2xl">
              <p className="text-primary-dark font-heading font-bold text-xl mb-2">Need Help?</p>
              <p className="text-gray-500 text-sm mb-4">Call us directly if you have any special requests for your event.</p>
              <a href="tel:+977" className="text-primary-orange font-bold text-xl">+977 71-XXXXXX</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

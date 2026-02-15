import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '../../constants/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-vicce-charcoal/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-vicce-cream rounded-[40px] shadow-2xl z-[70] overflow-hidden"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-3xl font-serif text-vicce-charcoal mb-2">Book a Service</h2>
                  <p className="text-vicce-charcoal/60">Professional care is just a few clicks away.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-vicce-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-3">Select Service</label>
                  <select className="w-full bg-white border border-vicce-muted rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-vicce-accent/20 appearance-none">
                    {SITE_DATA.services.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-3">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 text-vicce-accent" size={18} />
                      <input type="date" className="w-full bg-white border border-vicce-muted rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-vicce-accent/20" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-3">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-6 top-1/2 -translate-y-1/2 text-vicce-accent" size={18} />
                      <input type="time" className="w-full bg-white border border-vicce-muted rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-vicce-accent/20" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-3">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-vicce-accent" size={18} />
                    <input type="text" placeholder="Street address, City" className="w-full bg-white border border-vicce-muted rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-vicce-accent/20" />
                  </div>
                </div>

                <button className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-2 group">
                  Confirm Booking
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            <div className="bg-vicce-accent/10 p-6 text-center">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-vicce-accent">No upfront payment required</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { SITE_DATA } from '../../constants/siteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      onClose();
      navigate('/success');
      setIsSubmitting(false);
    }, 1500);
  };

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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 w-auto md:w-full md:max-w-lg bg-vicce-cream rounded-[30px] md:rounded-[40px] shadow-2xl z-[70] overflow-hidden flex flex-col"
          >
            {/* Scrollable Container for Mobile */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-vicce-charcoal mb-2">Book a Service</h2>
                  <p className="text-sm md:text-base text-vicce-charcoal/60">Professional care is just a few clicks away.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-vicce-muted rounded-full transition-colors"
                >
                  <X size={20} className="md:w-6 md:h-6" />
                </button>
              </div>

              <form className="space-y-5 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[10px] md:text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-2 md:mb-3">Select Service</label>
                  <select name="service" required className="w-full bg-white border border-vicce-muted rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-vicce-accent/20 appearance-none cursor-pointer">
                    {SITE_DATA.services.items.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] md:text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-2 md:mb-3">Date</label>
                    <div className="relative custom-datepicker">
                      <CalendarIcon className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-vicce-accent z-10 pointer-events-none" size={16} />
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        minDate={new Date()}
                        className="w-full bg-white border border-vicce-muted rounded-xl md:rounded-2xl pl-11 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-vicce-accent/20 cursor-pointer"
                        dateFormat="MMMM d, yyyy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] md:text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-2 md:mb-3">Time</label>
                    <div className="relative custom-datepicker">
                      <Clock className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-vicce-accent z-10 pointer-events-none" size={16} />
                      <DatePicker
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        className="w-full bg-white border border-vicce-muted rounded-xl md:rounded-2xl pl-11 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-vicce-accent/20 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] md:text-sm font-bold tracking-widest uppercase text-vicce-charcoal/40 mb-2 md:mb-3">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-vicce-accent" size={16} />
                    <input name="address" type="text" required placeholder="Street address, City" className="w-full bg-white border border-vicce-muted rounded-xl md:rounded-2xl pl-11 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-vicce-accent/20" />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 md:py-5 text-base md:text-lg flex items-center justify-center gap-2 group disabled:opacity-50 mt-4"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                  {!isSubmitting && <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
            <div className="bg-vicce-accent/10 p-4 md:p-6 text-center shrink-0">
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-vicce-accent">No upfront payment required</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

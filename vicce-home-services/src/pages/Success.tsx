import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-vicce-cream flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#1A1A1A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
      />

      <div className="text-center relative z-10 max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring",
            damping: 12,
            stiffness: 200 
          }}
          className="w-24 h-24 bg-vicce-accent rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-vicce-accent/40"
        >
          <CheckCircle size={48} className="text-white" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-vicce-charcoal mb-6">
            Booking <span className="italic text-vicce-accent">Received!</span>
          </h1>
          <p className="text-lg text-vicce-charcoal/60 mb-12 leading-relaxed">
            Thank you for choosing VICCE. Our team is reviewing your request and will contact you within the next 2 hours to confirm your appointment.
          </p>
          
          <button 
            onClick={() => navigate('/')}
            className="btn-primary px-12 py-4 flex items-center justify-center gap-2 mx-auto group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-vicce-accent/5 rounded-full blur-[120px] -z-10" />
    </div>
  );
};

export default Success;

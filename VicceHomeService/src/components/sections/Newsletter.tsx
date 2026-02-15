import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SITE_DATA } from '../../constants/siteData';

const Newsletter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('subject', 'New Newsletter Subscription');
    
    try {
      const response = await fetch(`https://formspree.io/f/${SITE_DATA.formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        navigate('/success');
      } else {
        navigate('/success'); // Fallback for demo
      }
    } catch (error) {
      navigate('/success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-vicce-cream border-y border-vicce-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-vicce-charcoal rounded-[60px] p-12 md:p-20 relative overflow-hidden text-center">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-vicce-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              {SITE_DATA.newsletter.title}
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              {SITE_DATA.newsletter.description}
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
              <input
                type="email"
                required
                name="email"
                placeholder={SITE_DATA.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-vicce-accent transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-2 bottom-2 bg-vicce-accent text-white px-6 rounded-full flex items-center justify-center hover:bg-white hover:text-vicce-charcoal transition-all disabled:opacity-50"
              >
                {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><CheckCircle size={20} /></motion.div> : <Send size={20} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

export const SITE_DATA = {
  // Global Settings
  name: "VICCE",
  logoText: "VICCE",
  contact: {
    phone: "+1 (555) 000-0000",
    email: "hello@vicce.com",
    address: "123 Maintenance Ave, Suite 100",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  // Hero Section
  hero: {
    tagline: "TRUSTED BY 10K+ HOMEOWNERS",
    titlePrimary: "Guarding your",
    titleItalic: "peace of mind",
    description: "Expert plumbing, electrical, and maintenance services delivered with precision and professional care.",
    ctaPrimary: "Book a Service",
    ctaSecondary: "Learn More",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    rating: "4.9/5",
    ratingText: "Average Rating"
  },

  // Services Section
  services: {
    title: "Experience excellence",
    description: "Every corner of your home deserves professional attention and detailed care. From emergency repairs to aesthetic upgrades, we've got you covered.",
    items: [
      {
        id: "plumbing",
        title: "Plumbing",
        description: "Leak repairs, installations and maintenance.",
        icon: "Droplets",
      },
      {
        id: "electrical",
        title: "Electrical",
        description: "Safe wiring and smart home integration.",
        icon: "Zap",
      },
      {
        id: "cleaning",
        title: "Cleaning",
        description: "Deep cleaning and regular maintenance.",
        icon: "Sparkles",
      },
      {
        id: "painting",
        title: "Painting",
        description: "Interior and exterior professional painting.",
        icon: "Paintbrush",
      }
    ]
  },

  // About Section
  about: {
    title: "Making home solutions",
    titleItalic: "simple",
    description: "No more juggling multiple contractors. We handle it all from start to finish, ensuring your home stays in peak condition while you focus on what matters most.",
    cta: "LEARN MORE",
    features: [
      {
        title: "Trusted Experts",
        description: "Our technicians are certified, insured, and thoroughly background-checked for your peace of mind.",
        icon: "ShieldCheck"
      },
      {
        title: "Prompt Service",
        description: "We value your time. Our team arrives on schedule and completes the work efficiently without compromising quality.",
        icon: "Clock"
      },
      {
        title: "Full Warranty",
        description: "We stand behind our craftsmanship with a comprehensive warranty on all services and parts used.",
        icon: "Briefcase"
      }
    ]
  },

  // Cost Calculator
  pricing: {
    title: "Instant estimate for your",
    titleItalic: "needs",
    description: "Transparency is our core value. Use our calculator to get a quick idea of the investment needed for your home maintenance.",
    disclaimer: "Final pricing may vary based on specific project requirements and materials needed.",
    rates: {
      plumbing: 85,
      electrical: 95,
      cleaning: 45,
      painting: 65
    }
  },

  // Portfolio Section
  portfolio: {
    title: "Professional care for your home",
    items: [
      {
        id: 1,
        category: "MAINTENANCE",
        title: "Kitchen Renovation & Fixes",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 2,
        category: "ELECTRICAL",
        title: "Smart Lighting Install",
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 3,
        category: "PLUMBING",
        title: "Bathroom Fitting",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: 4,
        category: "PAINTING",
        title: "Living Room Refresh",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800",
      }
    ]
  },

  // Testimonials
  testimonials: {
    title: "What they say",
    items: [
      {
        name: "Sarah Johnson",
        role: "Homeowner",
        content: "The electrical repair was handled professionally and quickly. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?u=sarah"
      },
      {
        name: "Mark Thompson",
        role: "Property Manager",
        content: "VICCE has been our go-to for all maintenance needs. They never disappoint.",
        avatar: "https://i.pravatar.cc/150?u=mark"
      },
      {
        name: "Emily Davis",
        role: "Interior Designer",
        content: "Their attention to detail in the painting service was absolutely stunning.",
        avatar: "https://i.pravatar.cc/150?u=emily"
      },
      {
        name: "James Wilson",
        role: "Homeowner",
        content: "Finally a plumbing service that arrives on time and leaves no mess behind.",
        avatar: "https://i.pravatar.cc/150?u=james"
      }
    ]
  },

  // Service Area
  serviceArea: {
    title: "Where we",
    titleItalic: "operate",
    description: "We currently provide our premium home maintenance services across the following major regions.",
    areas: ["Greater London", "Manchester City", "Birmingham Central", "Leeds Metro", "Bristol Area"]
  },

  // Newsletter
  newsletter: {
    title: "Join the VICCE club",
    description: "Get monthly home maintenance tips and 10% off your first booking.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    successMessage: "Thank you for subscribing!"
  },

  // FAQ Section
  faqs: {
    title: "Questions &",
    titleItalic: "Answers",
    description: "Everything you need to know about our services.",
    items: [
      {
        question: "Are your technicians insured?",
        answer: "Yes, every VICCE professional is fully insured and has undergone rigorous background checks to ensure your home is in safe hands."
      },
      {
        question: "How quickly can someone arrive?",
        answer: "For emergency services, we typically arrive within 2-4 hours. For regular maintenance, we offer next-day scheduling."
      },
      {
        question: "Do you offer a warranty?",
        answer: "Absolutely. We provide a 1-year warranty on all labor and guarantee the quality of parts used in our repairs."
      }
    ]
  },

  // Navigation Links
  navLinks: [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ],

  // Footer Link Categories
  footerLinks: {
    company: [
      { name: 'Our Story', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy', href: '#' }
    ]
  }
};

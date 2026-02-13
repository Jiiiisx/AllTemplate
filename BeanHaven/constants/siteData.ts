export const siteData = {
  name: "BeanHaven",
  tagline: "The Art of Artisanal Brewing",
  description: "Savor the finest artisanal coffee in a modern, cozy atmosphere. BeanHaven brings you the world's best beans, roasted to perfection in the heart of the city.",
  
  // WhatsApp Configuration
  contact: {
    whatsappNumber: "6281234567890", // Ganti dengan nomor asli pembeli
    whatsappMessage: "Halo! Saya tertarik untuk memesan "
  },

  forms: {
    bookingAction: "https://formspree.io/f/your-id-here",
    newsletterAction: "https://formspree.io/f/your-id-here",
  },

  navigation: [
    { label: "Our Story", href: "#about" },
    { label: "Menu", href: "/menu" },
    { label: "Location", href: "#maps" },
  ],

  hero: {
    title: "BEAN HAVEN",
    subtitle: "Artisanal brewing meets modern comfort. Experience the finest selection of hand-picked beans in the heart of the city.",
    primaryCTA: "EXPLORE MENU",
    secondaryCTA: "OUR STORY",
    backgroundImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80"
  },

  menu: {
    title: "What are you craving today?",
    categories: ["All", "Coffee", "Non-Coffee", "Pastries"],
    promo: {
      title: "Today's Special",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80",
      pairings: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=200&q=80"
      ]
    },
    items: [
      {
        title: "Iced Coffee Milk",
        desc: "Smooth, bold, and no drama.",
        price: "$4.50",
        category: "Coffee",
        image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
        color: "bg-[#ff8a5c]"
      },
      {
        title: "Caramel Macchiato",
        desc: "Sweet, buttery, and intense.",
        price: "$5.00",
        category: "Coffee",
        image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",
        color: "bg-[#d4a373]"
      },
      {
        title: "Double Espresso",
        desc: "Pure energy in every sip.",
        price: "$3.50",
        category: "Coffee",
        image: "https://images.unsplash.com/photo-1541173109020-9c5d8a48e169?auto=format&fit=crop&w=800&q=80",
        color: "bg-[#4d2c1e]"
      },
      {
        title: "Matcha Latte",
        desc: "Ceremonial grade green tea.",
        price: "$5.50",
        category: "Non-Coffee",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80",
        color: "bg-[#8eb486]"
      },
      {
        title: "Chocolate Lava",
        desc: "Rich dark chocolate indulgence.",
        price: "$6.00",
        category: "Snacks",
        image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=800&q=80",
        color: "bg-[#4d2c1e]"
      }
    ]
  },

  footer: {
    about: "We are dedicated to bringing you the finest coffee beans from around the world, roasted to perfection and served with a passion for the craft. Join us in our journey to elevate your daily coffee ritual.",
    quickLinks: [
      { label: "Product", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "How it works", href: "#" },
      { label: "Template", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contacts", href: "#" },
    ],
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "X", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    resources: [
      { label: "Help center", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Affiliate program", href: "#" },
    ]
  },

  location: {
    address: "123 Coffee Street, Brewing City, 54321",
    phone: "+1 (234) 567-890",
    email: "hello@beanhaven.com",
    hours: "Mon - Sun: 08:00 AM - 10:00 PM",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434570652!2d144.9537353153224!3d-37.81732767975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid"
  },

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Coffee Enthusiast",
      content: "The best atmosphere in the city. Their Iced Coffee Milk is life-changing! I come here every morning for my daily fix.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Michael Chen",
      role: "Digital Nomad",
      content: "Great Wi-Fi and even better espresso. It's my go-to spot for remote work. The staff is always friendly and welcoming.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Davis",
      role: "Local Artist",
      content: "I love the modern aesthetic and the attention to detail in every cup. A truly premium experience that stays affordable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ]
};

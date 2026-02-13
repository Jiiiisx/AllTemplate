export const siteConfig = {
  name: "NusaTravel",
  hero: {
    title: "Extraordinary natural and cultural charm",
    subtitle: "Exploring Indonesia is an unforgettable adventure.",
    // Hero tetap ukuran besar agar tajam, tapi tanpa DPR 2 agar lebih ringan
    backgroundImage: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=1920" 
  }
};

export const destinations = [
  { 
    id: 1, 
    title: "Nusa Penida", 
    location: "Bali", 
    weather: "29°C", 
    image: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 2, 
    title: "Komodo Island", 
    location: "NTT", 
    weather: "31°C", 
    image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 3, 
    title: "Tegalalang", 
    location: "Ubud", 
    weather: "26°C", 
    image: "https://images.pexels.com/photos/1643130/pexels-photo-1643130.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    id: 4, 
    title: "Raja Ampat", 
    location: "Papua", 
    weather: "30°C", 
    image: "https://images.pexels.com/photos/3401292/pexels-photo-3401292.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
];

export const packages = [
  { 
    id: 1, 
    title: "Bali Tour Package", 
    price: "$285", 
    date: "23 AUGUST - 29 AUGUST", 
    rating: 4.9, 
    duration: "7 Days", 
    image: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    id: 2, 
    title: "Java Tour Package", 
    price: "$218", 
    date: "23 AUGUST - 27 AUGUST", 
    rating: 4.9, 
    duration: "5 Days", 
    image: "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    id: 3, 
    title: "Solo Tour Package", 
    price: "$163", 
    date: "23 AUGUST - 25 AUGUST", 
    rating: 4.9, 
    duration: "3 Days", 
    image: "https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
];

export const faqs = [
  {
    question: "How do I book a tour package?",
    answer: "You can book directly through our website by selecting a package and filling out the booking form, or contact our 24/7 support via WhatsApp."
  },
  {
    question: "Is the trip insurance included?",
    answer: "Yes, all our premium packages include comprehensive travel insurance to ensure your peace of mind throughout the journey."
  },
  {
    question: "Can I customize my own itinerary?",
    answer: "Absolutely! Use our Trip Planner feature at the bottom of the page or speak with our travel consultants to create your dream trip."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a full refund for cancellations made at least 7 days before the departure date. For more details, please check our Terms & Conditions."
  }
];

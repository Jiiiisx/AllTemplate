import React from 'react';

const services = [
  {
    title: "Specialty Coffee Brewing",
    description: "We brew every cup with precision, using selected beans and the right technique to bring out rich aroma and balanced flavors you'll love.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Professional Barista Service",
    description: "Handled by skilled baristas who understand coffee inside out — from grinding, extracting, to presenting every cup perfectly.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Premium Coffee Beans",
    description: "Only high-quality beans, freshly roasted and carefully selected, ensuring authentic taste and consistent quality in every sip.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-cream" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold max-w-xl text-secondary leading-tight">
            We Offer a Wide Range Of Unique Services
          </h2>
          <p className="text-secondary/60 max-w-sm md:text-right">
            From carefully sourced beans to expertly crafted cups, we deliver more than coffee — we create experiences worth savoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full group hover:shadow-[0_20px_50px_rgba(255,77,0,0.1)] transition-all duration-500">
              <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
              <p className="text-secondary/60 text-sm mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              
              <div className="relative mt-auto">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                   <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
                {/* Orange Dot from screenshot */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-full border-[6px] border-white shadow-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

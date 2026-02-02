
import React from 'react';

interface ShopProps {
  onAddToCart: () => void;
}

const ProductCard: React.FC<{ 
  title: string; 
  price: string; 
  img: string; 
  offset?: string; 
  onAdd: () => void 
}> = ({ title, price, img, offset = "", onAdd }) => (
  <div className={`group cursor-pointer ${offset}`}>
    <div className="aspect-[4/5] bg-cream mb-8 overflow-hidden rounded-xl relative shadow-sm group-hover:shadow-xl transition-all duration-500">
      <img alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={img} />
      <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-all duration-300"></div>
      <button 
        onClick={(e) => { e.stopPropagation(); onAdd(); }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-espresso text-[10px] tracking-widest font-bold px-8 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase hover:bg-espresso hover:text-white"
      >
        Add to Cart
      </button>
    </div>
    <h3 className="font-display text-xl tracking-wide text-espresso text-center">{title}</h3>
    <p className="text-clay font-bold text-center mt-2">{price}</p>
  </div>
);

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  return (
    <section className="py-48 bg-white" id="shop">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-32">
          <span className="text-clay text-[11px] tracking-[0.5em] font-bold uppercase block mb-6">Curated Selection</span>
          <h2 className="font-display text-5xl font-light tracking-tight">Shop Collections</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProductCard 
            title="Artisanal Whole Beans" 
            price="$24.00" 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDCegTcew92QhqPwYLOtSyjHI_vX5385CWK_s4RtyC-VC5q4JZgzQwWN99QuZw359SwQzrFW_RyucH6qbSYVPQsPqZBaSUtGAzjw9mFaAGQ0qS7I10AN0M751r-Iy1jUAXvHOABLQfHre4DZrJFXDh-__vyD1TnQ_eEnKgVY6P5UNpyuBCyy2POiNHIuiaYbwMOh-_WvfXm6UAwBmTyfFwn7GaiaR77yYw1G-EtbSbaPqYXgzUNcBgO4-wj1HwOvlo6wQyEidxVLzcj" 
            onAdd={onAddToCart}
          />
          <ProductCard 
            title="Cold Brew Concentrate" 
            price="$18.00" 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuC5xU8fHTI7uYK1ToY7VqGYJWTvOg0LePIjnW71C7JHkAgbi-4nlJE0-NSxdL241gEOkyKkAFIkUAvbKWOjU9Zjlr2fSVE9iQGs0SfbVWuKKWROKWFC1ZiJpk1e3v1dPpQp8ZZi_bEugXEt_zKZsLPHjiKM-YeecRGdZtq6CtqJkukiA-UppNJFdVBXihJueBEQfbCDYZiTUHdzpfvw4cGucG8WV_AUShGOsLZOm0Z7TmHDAlWKI-EtHvH4TvQGukCw81yk0tkmnWaH" 
            offset="lg:mt-16"
            onAdd={onAddToCart}
          />
          <ProductCard 
            title="Barista Equipment" 
            price="$45.00" 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBVarGgJ9JLp7TRBz7MQdL7L9s-M1eiA303isNyYYlqacg4eaKQrIiYOSTFYUTneUaVdsDRzKxUzDGraIao1lm61QRfE0o9__guYXPfbm3xKFV53FlNALqjrpzOA9JVql46b68bJXyFoJiV8q3Z0bpNSDENGIDMdzt-MO63yXY77idEcgVw50dFSol4XWtCuCtzJH4ypSiiIlQyLlK9pDB0819YVdDVUVs1NLusA-pgD-KQ_uYcl_KQsO-L_gcv86Zyg5mFtQy7efoK" 
            offset="lg:mt-32"
            onAdd={onAddToCart}
          />
        </div>
        <div className="mt-32 text-center">
          <button className="px-12 py-5 border border-espresso/20 text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-espresso hover:text-white transition-all">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Shop;

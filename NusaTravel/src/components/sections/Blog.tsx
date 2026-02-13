import { motion } from 'framer-motion';
import { OptimizedImage } from '../ui/OptimizedImage';

export const Blog = () => {
  const posts = [
    {
      id: 1,
      date: "Nov 14, 2022",
      title: "2023 Travel Trends – what you need to know",
      desc: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
      image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      date: "Nov 18, 2022",
      title: "Jeep Adventure is a new attraction for tourists visiting Garut",
      desc: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-20 text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-secondary">Our Blog</p>
        <h2 className="text-5xl font-black leading-tight">Our travel memories</h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="mb-8 h-[450px] overflow-hidden rounded-[48px] relative shadow-lg shadow-secondary/5">
              <OptimizedImage 
                src={post.image} 
                alt={post.title} 
                className="h-full w-full transition duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/60">{post.date}</p>
            <h3 className="mb-4 text-3xl font-black leading-tight group-hover:text-accent transition-colors duration-300">{post.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed line-clamp-2">{post.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    date: "Nov 14, 2022",
    title: "2023 Travel Trends – what you need to know",
    desc: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, a...",
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    date: "Nov 18, 2022",
    title: "Jeep Adventure is a new attraction for tourists visiting Garut",
    desc: "Jeep Adventure is one of the tourist attractions that has been popular recently. The sensation...",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const Blog = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">
      <div className="mb-16 text-center">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-slate-400">Our Blog</p>
        <h2 className="text-5xl font-extrabold tracking-tight">Our travel memories</h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="mb-8 h-[400px] overflow-hidden rounded-[40px]">
              <img src={post.image} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" alt={post.title} />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">{post.date}</p>
            <h3 className="mb-4 text-3xl font-bold leading-tight tracking-tight group-hover:text-slate-600 transition">{post.title}</h3>
            <p className="mb-6 text-lg text-slate-500 leading-relaxed line-clamp-2">{post.desc}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="rounded-full bg-black px-12 py-5 text-sm font-bold text-white transition hover:scale-105 active:scale-95 shadow-xl shadow-black/10">
          View more
        </button>
      </div>
    </section>
  );
};

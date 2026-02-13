import { motion } from 'framer-motion';

export const Home = () => {
  // Semua section yang sudah kita buat sebelumnya dipindah ke sini
  return (
    <>
      <div className="p-4 md:p-6 pt-0">
        <div className="relative overflow-hidden rounded-[40px] bg-surface">
          <div id="home">
            {/* Hero diimpor secara dinamis atau lewat App.tsx */}
          </div>
        </div>
      </div>
      {/* Semua section lainnya... */}
    </>
  );
};

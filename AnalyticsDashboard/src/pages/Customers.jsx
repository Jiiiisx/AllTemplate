import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MoreHorizontal, UserPlus } from 'lucide-react';
import { customersData } from '../data/customers';
import StatusBadge from '../components/ui/StatusBadge';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Fitur Pencarian Fungsional
  const filteredCustomers = customersData.filter(customer => 
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-12"
    >
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Customer Management</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium">Manage and monitor your customer base performance.</p>
        </div>
        <button className="bg-accent text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
          <UserPlus size={14} /> Add New Customer
        </button>
      </header>

      {/* FILTERS & SEARCH */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
            <Search size={16} />
          </span>
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none dark:text-white"
          />
        </div>
        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-zinc-100 dark:border-zinc-800 rounded-2xl text-xs font-bold text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all">
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-sm transition-colors duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-800">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">Customer</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">Status</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">Spent</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-zinc-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <AnimatePresence>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((customer) => (
                    <motion.tr 
                      key={customer.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="group hover:bg-zinc-50/50 dark:hover:bg-zinc-800/50 transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <img src={customer.avatar} alt="" className="w-10 h-10 rounded-xl border border-zinc-100 dark:border-zinc-800" />
                          <div>
                            <p className="text-sm font-bold text-zinc-800 dark:text-white group-hover:text-accent transition-colors">{customer.name}</p>
                            <p className="text-[11px] text-zinc-400 font-medium">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <StatusBadge status={customer.status} />
                      </td>
                      <td className="px-8 py-6 text-sm font-bold text-zinc-800 dark:text-white">{customer.spent}</td>
                      <td className="px-8 py-6 text-right">
                        <button className="p-2 text-zinc-400 hover:text-accent transition-colors">
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-8 py-12 text-center text-zinc-400 text-sm italic">
                      No customers found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Customers;
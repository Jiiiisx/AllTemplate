
import React, { useState, useEffect, useRef } from "react";
import { Search, User, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { customersData } from "../../data/customers";
import { siteConfig } from "../../data/config";

const GlobalSearch = ({ isDarkMode }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    
    if (val.length > 1) {
      const filteredCustomers = customersData
        .filter(c => c.name.toLowerCase().includes(val.toLowerCase()))
        .map(c => ({ ...c, type: 'customer', icon: User }));
      
      const filteredPages = siteConfig.navigation
        .filter(p => p.name.toLowerCase().includes(val.toLowerCase()))
        .map(p => ({ ...p, type: 'page', icon: FileText }));

      setResults([...filteredPages, ...filteredCustomers].slice(0, 6));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  };

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery("");
    if (item.type === 'page') {
      navigate(item.path);
    } else {
      navigate('/customers'); // In a real app, go to detail
    }
  };

  return (
    <div className="relative w-full max-w-96 hidden sm:block" ref={searchRef}>
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
        <Search size={16} />
      </span>
      <input 
        type="text" 
        value={query}
        onChange={handleSearch}
        onFocus={() => query.length > 1 && setIsOpen(true)}
        placeholder="Search data, users..." 
        className={`w-full border rounded-2xl py-2.5 pl-12 pr-4 text-xs focus:ring-4 focus:ring-accent/5 focus:border-accent/20 transition-all outline-none ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-white border-zinc-100 text-zinc-800'}`}
      />

      {/* DROPDOWN RESULTS */}
      {isOpen && results.length > 0 && (
        <div className={`absolute top-full mt-3 w-full border rounded-[2rem] shadow-2xl overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-300 ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-100'}`}>
          <div className="p-2">
            {results.map((item, i) => (
              <button
                key={i}
                onClick={() => handleSelect(item)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${isDarkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-50'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isDarkMode ? 'bg-zinc-800 group-hover:bg-accent/20 text-zinc-400 group-hover:text-accent' : 'bg-zinc-100 group-hover:bg-accent/10 text-zinc-400 group-hover:text-accent'}`}>
                    <item.icon size={18} />
                  </div>
                  <div className="text-left">
                    <p className={`text-xs font-bold transition-colors ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{item.name}</p>
                    <p className="text-[10px] text-zinc-400 font-medium capitalize">{item.type}</p>
                  </div>
                </div>
                <ChevronRight size={14} className="text-zinc-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;

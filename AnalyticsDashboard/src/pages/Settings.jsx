import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Github, 
  Mail, 
  Camera,
  Save,
  Globe,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Database,
  Smartphone
} from 'lucide-react';
import { siteConfig } from '../data/config';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    { id: 'Profile', icon: User, label: 'Profile Information' },
    { id: 'Notifications', icon: Bell, label: 'Notification Settings' },
    { id: 'Security', icon: Shield, label: 'Password & Security' },
    { id: 'Integrations', icon: Github, label: 'App Integrations' },
  ];

  return (
    <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-80px)]">
      
      {/* LEFT PANE - FIXED/STICKY */}
      <div className="w-full lg:w-96 p-12 lg:sticky lg:top-0 h-fit shrink-0">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter">Settings</h1>
          <p className="text-zinc-400 text-sm mt-2 font-medium leading-relaxed">
            Manage your developer profile and system preferences.
          </p>
        </header>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab.id 
                ? 'bg-accent text-white shadow-xl shadow-accent/20 scale-[1.02]' 
                : 'text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-600'
              }`}
            >
              <div className="flex items-center gap-4">
                <tab.icon size={18} />
                {tab.label}
              </div>
              {activeTab === tab.id && <ChevronRight size={14} className="text-white/50" />}
            </button>
          ))}
        </nav>

        {/* LOGOUT / DANGER ZONE QUICK LINK */}
        <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] mb-4">Account Status</p>
          <div className="flex items-center gap-3 px-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-bold text-zinc-500">Verified Maintainer</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANE - SCROLLABLE CONTENT */}
      <div className="flex-1 p-12 lg:pt-24 bg-zinc-50/30 dark:bg-zinc-900/10 min-h-screen">
        <div className="max-w-3xl mx-auto pb-32">
          <AnimatePresence mode="wait">
            {activeTab === 'Profile' && (
              <motion.div 
                key="profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <section>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-8 italic font-serif">Public Identity</h3>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 shadow-sm space-y-10">
                    <div className="flex items-center gap-8">
                      <div className="relative group">
                        <img src={siteConfig.avatar} alt="Avatar" className="w-24 h-24 rounded-3xl object-cover border-4 border-zinc-50 dark:border-zinc-800 shadow-sm transition-transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                          <Camera size={24} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-zinc-800 dark:text-white mb-1">Profile Picture</h4>
                        <p className="text-xs text-zinc-400 font-medium mb-4">Min 400x400px. PNG, JPG or SVG.</p>
                        <button className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline">Upload New Image</button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-zinc-50 dark:border-zinc-800">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Display Name</label>
                        <input type="text" defaultValue={siteConfig.adminName} className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Job Role</label>
                        <input type="text" defaultValue={siteConfig.adminRole} className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                      </div>
                      <div className="md:col-span-2 space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Developer Bio</label>
                        <textarea rows="4" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-[2rem] p-8 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-medium resize-none"></textarea>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="flex justify-end">
                  <button className="bg-accent text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 hover:scale-105 transition-all flex items-center gap-2">
                    <Save size={16} /> Save Profile
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'Notifications' && (
              <motion.div 
                key="notifications"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <section>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-8 italic font-serif">System Alerts</h3>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-6 shadow-sm divide-y divide-zinc-50 dark:divide-zinc-800">
                    {[
                      { title: 'Push Notifications', desc: 'Critical alerts on your browser.', icon: Smartphone },
                      { title: 'Weekly Digest', desc: 'Summary of community activity.', icon: Globe },
                      { title: 'PR Conflict Alerts', desc: 'Notify when code needs review.', icon: Github },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-6 group hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all rounded-[1.5rem]">
                        <div className="flex items-center gap-5">
                          <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                            <item.icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-zinc-800 dark:text-white">{item.title}</p>
                            <p className="text-[11px] text-zinc-400 font-medium">{item.desc}</p>
                          </div>
                        </div>
                        <div className="w-10 h-5 bg-accent rounded-full relative cursor-pointer">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'Security' && (
              <motion.div 
                key="security"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                <section>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-8 italic font-serif">Data Protection</h3>
                  <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 shadow-sm space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Current Password</label>
                        <div className="relative group">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300" size={18} />
                          <input type={showPassword ? "text" : "password"} defaultValue="••••••••" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-14 pr-12 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                          <button onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-accent">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">New Password</label>
                        <input type="password" placeholder="Min 8 characters" className="w-full bg-zinc-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-4 focus:ring-accent/5 transition-all dark:text-white font-bold" />
                      </div>
                    </div>
                    
                    <div className="pt-10 border-t border-red-50 dark:border-red-900/20">
                      <h4 className="text-xs font-black text-red-500 uppercase tracking-widest mb-4">Danger Zone</h4>
                      <div className="p-8 rounded-[2rem] bg-red-500/5 border border-red-500/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-[11px] text-red-600/70 font-medium leading-relaxed max-w-sm text-center md:text-left">
                          Deleting your account is permanent. This will erase all your repo history and task boards.
                        </p>
                        <button className="px-8 py-3 bg-red-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 shrink-0">Delete Account</button>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'Integrations' && (
              <motion.div 
                key="integrations"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-8 italic font-serif">Developer Ecosystem</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: 'GitHub', desc: 'Sync repos and PRs.', status: 'Connected', icon: Github },
                    { name: 'Vercel', desc: 'Build status monitor.', status: 'Connect', icon: Database },
                  ].map((app, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-8 shadow-sm group hover:scale-[1.02] transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-white">
                          <app.icon size={24} />
                        </div>
                        <span className={`px-2 py-1 rounded-md text-[8px] font-black uppercase ${app.status === 'Connected' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800'}`}>
                          {app.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-zinc-800 dark:text-white mb-1">{app.name}</h4>
                      <p className="text-[11px] text-zinc-400 font-medium mb-6">{app.desc}</p>
                      <button className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${app.status === 'Connected' ? 'border border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:text-red-500' : 'bg-accent text-white'}`}>
                        {app.status === 'Connected' ? 'Disconnect' : 'Setup App'}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Settings;
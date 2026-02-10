
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bell, 
  Shield, 
  Github, 
  Globe, 
  Mail, 
  Camera,
  Save,
  ChevronRight
} from 'lucide-react';
import { siteConfig } from '../data/config';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Notifications', icon: Bell },
    { name: 'Security', icon: Shield },
    { name: 'Integrations', icon: Github },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-12"
    >
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-zinc-800 dark:text-white tracking-tighter transition-colors">Settings</h1>
        <p className="text-zinc-400 text-sm mt-2 font-medium">Manage your DevHub account, preferences, and community integrations.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* SIDEBAR TABS */}
        <div className="w-full lg:w-64 shrink-0">
          <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.name 
                  ? 'bg-white dark:bg-zinc-900 text-accent shadow-sm border border-zinc-100 dark:border-zinc-800' 
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200'
                }`}
              >
                <tab.icon size={18} />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 max-w-3xl">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-[2.5rem] p-10 shadow-sm transition-colors">
            {activeTab === 'Profile' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-6">Profile Information</h3>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="relative group">
                      <img src={siteConfig.avatar} alt="Avatar" className="w-24 h-24 rounded-[2rem] border-4 border-zinc-50 dark:border-zinc-800 shadow-sm group-hover:opacity-75 transition-all cursor-pointer" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <Camera size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <button className="px-6 py-2.5 bg-accent text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all mb-2">Change Photo</button>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Min 400x400px, PNG or JPG</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Full Name</label>
                      <input type="text" defaultValue={siteConfig.adminName} className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-all dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Role Title</label>
                      <input type="text" defaultValue={siteConfig.adminRole} className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-all dark:text-white" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Email Address</label>
                      <input type="email" defaultValue="maintainer@devhub.com" className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-all dark:text-white" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-2">Bio</label>
                      <textarea rows="4" placeholder="Tell us about yourself..." className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-accent/20 transition-all dark:text-white resize-none"></textarea>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-50 dark:border-zinc-800 flex justify-end">
                  <button className="flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                    <Save size={16} /> Save Changes
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'Notifications' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-6">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Pull Request Updates', desc: 'Get notified when a PR is opened or merged.', icon: Github },
                    { title: 'New Issues', desc: 'Receive alerts when new issues are created.', icon: Globe },
                    { title: 'Community Mentions', desc: 'When someone mentions you in a task.', icon: Mail },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-zinc-50 dark:bg-zinc-800/50 group hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-accent transition-colors">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-zinc-800 dark:text-white">{item.title}</p>
                          <p className="text-[10px] text-zinc-400 font-medium">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-accent rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'Integrations' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-6">Connected Services</h3>
                <div className="p-8 rounded-[2rem] border border-accent/20 bg-accent/5 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center text-zinc-800 dark:text-white shadow-sm">
                      <Github size={32} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-800 dark:text-white">GitHub Enterprise</p>
                      <p className="text-xs text-zinc-400 font-medium">Connected as <span className="text-accent font-bold">@rajidev_maintainer</span></p>
                    </div>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-red-500 hover:underline">Disconnect</button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;

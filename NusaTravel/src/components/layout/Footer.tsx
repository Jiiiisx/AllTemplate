export const Footer = () => {
  return (
    <footer className="bg-black text-white px-12 pt-24 pb-12">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-4 border-b border-white/10 pb-20">
        <div className="md:col-span-1">
          <div className="text-2xl font-bold mb-8">NusaTravel</div>
        </div>
        
        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-sm text-white/50">About</h4>
          <ul className="space-y-4 text-slate-400">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Jobs</li>
            <li>In Press</li>
            <li>Gallery</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-sm text-white/50">Support</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Contact us</li>
            <li>Online Chat</li>
            <li>Whatsapp</li>
            <li>Telegram</li>
            <li>Ticketing</li>
            <li>Call Center</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 font-bold uppercase tracking-widest text-sm text-white/50">FAQ</h4>
          <ul className="space-y-4 text-slate-400">
            <li>Account</li>
            <li>Booking</li>
            <li>Payments</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="mb-6 font-bold text-sm">Newsletter</h4>
          <p className="mb-6 text-slate-400 text-sm leading-relaxed">Don't miss out on the exciting world of travel - subscribe now and embark on a journey of discovery with us.</p>
          <div className="relative flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full rounded-2xl bg-white/10 border border-white/10 py-4 pl-6 pr-24 text-sm focus:outline-none"
            />
            <button className="absolute right-2 rounded-xl bg-white px-6 py-2 text-sm font-bold text-black">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-slate-500">©2024 NusaTravel, All Rights Reserved</p>
        <div className="flex gap-4">
          {['Instagram', 'Facebook', 'Youtube'].map(social => (
            <div key={social} className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition cursor-pointer">
              <span className="text-[10px]">{social[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

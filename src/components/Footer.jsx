import React from 'react';
import { Phone, MessageSquare, Award, HelpCircle, Shield, RefreshCw } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#008ecc] to-[#0275a7] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Abstract background decorative waves */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none -mr-40 -mt-40"></div>
      <div className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full border border-white/10 pointer-events-none -mr-32 -mt-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12">

          {/* Column 1: Brand & Contact info */}
          <div className="text-left">
            <div className="flex items-center gap-2.5 cursor-pointer mb-6 select-none">
              <img
                src="/img/logo.png"
                alt="Goox Store Logo"
                className="h-9 w-auto object-contain brightness-0 invert hover:scale-105 transition-transform"
              />
            </div>

            <p className="text-xs text-white/80 leading-relaxed mb-6 max-w-xs">
              Your neighborhood e-commerce partner, delivering the freshest farm produce, best tech products, and household essentials straight to your door step.
            </p>

            <div className="space-y-4">
              <span className="text-xs font-black tracking-widest text-sky-200 block uppercase">
                Contact Us
              </span>

              {/* Whatsapp */}
              <a href="https://wa.me/12029182132" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group text-xs text-white/90 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-sky-200 font-semibold block">WhatsApp</span>
                  <span className="font-extrabold">+1 202-918-2132</span>
                </div>
              </a>

              {/* Call */}
              <a href="tel:+12029182132" className="flex items-center gap-3 group text-xs text-white/90 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-sky-200 font-semibold block">Call Us</span>
                  <span className="font-extrabold">+252 614 940391</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Most Popular Categories */}
          <div className="text-left lg:pl-10">
            <span className="text-xs font-black tracking-widest text-sky-200 block uppercase mb-6 border-b border-white/10 pb-2">
              Most Popular Categories
            </span>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li><a href="#mobiles" className="hover:text-white hover:underline transition-all">Smartphones</a></li>
              <li><a href="#wearables" className="hover:text-white hover:underline transition-all">Smart Watches</a></li>
              <li><a href="#audio" className="hover:text-white hover:underline transition-all">Audio Accessories</a></li>
              <li><a href="#tasbiha" className="hover:text-white hover:underline transition-all">Tasbiha Counters</a></li>
              <li><a href="#peripherals" className="hover:text-white hover:underline transition-all">Keyboards & Mice</a></li>
              <li><a href="#stands" className="hover:text-white hover:underline transition-all">Ergonomic Laptop Stands</a></li>
              <li><a href="#bags" className="hover:text-white hover:underline transition-all">Laptop Sleeves & Bags</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Services */}
          <div className="text-left lg:pl-10">
            <span className="text-xs font-black tracking-widest text-sky-200 block uppercase mb-6 border-b border-white/10 pb-2">
              Customer Services
            </span>
            <ul className="space-y-2.5 text-xs text-white/80 font-medium">
              <li><a href="#about" className="hover:text-white hover:underline transition-all">About Us</a></li>
              <li><a href="#terms" className="hover:text-white hover:underline transition-all">Terms & Conditions</a></li>
              <li><a href="#faq" className="hover:text-white hover:underline transition-all">FAQ & Help</a></li>
              <li><a href="#privacy" className="hover:text-white hover:underline transition-all">Privacy Policy</a></li>
              <li><a href="#ewaste" className="hover:text-white hover:underline transition-all">E-waste Policy</a></li>
              <li><a href="#returns" className="hover:text-white hover:underline transition-all">Cancellation & Return Policy</a></li>
              <li><a href="#delivery" className="hover:text-white hover:underline transition-all">Shipping & Delivery Info</a></li>
            </ul>
          </div>

          {/* Column 4: Download App & Socials */}
          <div className="text-left">
            <span className="text-xs font-black tracking-widest text-sky-200 block uppercase mb-6 border-b border-white/10 pb-2">
              Download App
            </span>
            <p className="text-xs text-white/80 mb-5 leading-relaxed">
              Shop on the go with the Goox store app. Get real-time updates and exclusive deals.
            </p>

            <div className="space-y-3 mb-8">
              {/* App Store Link */}
              <a href="#appstore" className="flex items-center gap-3 px-4 py-2 bg-slate-900 hover:bg-slate-950 rounded-xl transition-all shadow-md select-none border border-slate-800">
                <Award size={20} className="text-white" />
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 block uppercase tracking-wider">Download on the</span>
                  <span className="text-xs font-extrabold text-white leading-none">App Store</span>
                </div>
              </a>

              {/* Play Store Link */}
              <a href="#playstore" className="flex items-center gap-3 px-4 py-2 bg-slate-900 hover:bg-slate-950 rounded-xl transition-all shadow-md select-none border border-slate-800">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3.223c0-.125.01-.241.031-.351l11.084 11.084-11.084 11.084A1.666 1.666 0 0 1 5 24.69V3.223zm12.197 10.026L6.113 2.165A1.664 1.664 0 0 1 6.84 2c.31 0 .616.086.883.25l12.793 7.848a1.667 1.667 0 0 1 0 2.85l-12.793 7.85c-.267.163-.573.25-.883.25a1.664 1.664 0 0 1-.727-.165l11.084-11.084z" />
                </svg>
                <div className="text-left">
                  <span className="text-[8px] text-slate-400 block uppercase tracking-wider">Get it on</span>
                  <span className="text-xs font-extrabold text-white leading-none">Google Play</span>
                </div>
              </a>
            </div>

            {/* Social media connections */}
            <span className="text-xs font-black tracking-widest text-sky-200 block uppercase mb-4">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#008ecc] flex items-center justify-center transition-all select-none" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#008ecc] flex items-center justify-center transition-all select-none" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#008ecc] flex items-center justify-center transition-all select-none" aria-label="Instagram">
                <svg className="w-4 h-4" stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#youtube" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#008ecc] flex items-center justify-center transition-all select-none" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.003 3.003 0 0 0 .502 6.163C0 8.07 0 12 0 12s0 3.93.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.93 24 12 24 12s0-3.93-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/70 font-semibold select-none">
          <div>
            <span>© 2026 All rights reserved. Reliance Retail Ltd. & Goox store</span>
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#cookies" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { MapPin, Truck, Percent, Menu, Search, Mic, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';

export default function Header({ cartCount = 3, wishlistCount = 2, onCartClick }) {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      {/* 1. Top Utility Ribbon */}
      <div className="w-full bg-[#f8fafc] border-b border-slate-100 py-2 px-4 sm:px-6 md:px-8 text-xs font-medium text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
          <span>Welcome to our Mobile & Accessories Megamart!</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
            <MapPin size={14} className="text-brand-blue" />
            <span>Deliver to <strong className="text-slate-700">420001</strong></span>
          </div>
          <div className="h-3 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
            <Truck size={14} />
            <span>Track your order</span>
          </div>
          <div className="h-3 w-[1px] bg-slate-200"></div>
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-blue transition-colors">
            <Percent size={14} />
            <span>All Offers</span>
          </div>
        </div>
      </div>

      {/* 2. Main Search & User Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 md:gap-8">
        {/* Mobile menu trigger */}
        <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
          <Menu size={24} />
        </button>

        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <img
            src="/img/logo.png"
            alt="Goox Store Logo"
            className="h-10 w-auto object-contain hover:scale-105 transition-transform"
          />
        </div>

        {/* Dynamic Search Bar (Center) */}
        <div className="hidden md:flex flex-1 max-w-2xl relative items-center">
          <div className="absolute left-3.5 text-slate-400">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Search laptop stands, watches, keyboards and more..."
            className="w-full pl-10 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-sky-50 transition-all text-slate-700 placeholder-slate-400"
          />
          <button className="absolute right-3 p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors">
            <Mic size={16} />
          </button>
        </div>

        {/* User Tools (Right) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon for Mobile */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
            <Search size={22} />
          </button>

          {/* Account */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2.5 bg-slate-50 group-hover:bg-sky-50 group-hover:text-brand-blue rounded-xl text-slate-600 transition-all">
              <User size={20} />
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-[10px] text-slate-400 font-medium">Hello, Sign In</span>
              <span className="text-xs font-bold text-slate-700 leading-none group-hover:text-brand-blue transition-colors">My Account</span>
            </div>
          </div>

          {/* Wishlist */}
          <div className="relative p-2.5 bg-slate-50 hover:bg-rose-50 hover:text-rose-500 rounded-xl text-slate-600 transition-all cursor-pointer group">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* Cart */}
          <div 
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-sky-600 text-white rounded-xl shadow-lg shadow-sky-100 hover:shadow-sky-200 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer select-none group"
          >
            <ShoppingCart size={20} className="group-hover:rotate-6 transition-transform" />
            <span className="hidden sm:inline text-xs font-bold">Cart</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 bg-white text-brand-blue rounded-full text-[10px] font-extrabold flex items-center justify-center border border-sky-100 shadow-sm">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 3. Dropdowns & Category Navigation Links */}
      <div className="w-full border-t border-slate-100 py-3 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth">
          {/* Main Category Dropdown Menu Trigger */}
          <div className="flex-shrink-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-sky-600 text-white rounded-xl text-xs font-bold shadow-md shadow-sky-50 transition-all cursor-pointer">
              <span>Categories</span>
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Inline Navigation Menu */}
          <nav className="flex items-center gap-6 sm:gap-8 whitespace-nowrap text-xs font-semibold text-slate-600">
            <a href="#mobiles" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Smartphones</a>
            <a href="#wearables" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Wearables & Watches</a>
            <a href="#audio" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Audio Accessories</a>
            <a href="#tasbiha" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Tasbiha Counters</a>
            <a href="#peripherals" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Keyboards & Mice</a>
            <a href="#stands" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Ergonomic Stands</a>
            <a href="#bags" className="hover:text-brand-blue transition-colors pb-1 border-b-2 border-transparent hover:border-brand-blue">Laptop Bags & Sleeves</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

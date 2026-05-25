import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

export default function NewArrivals({ onAddToCart }) {
  const items = [
    {
      id: "arr-1",
      name: "Sport Smartwatch W1",
      specs: "Fitness & Activity Tracker • Blue Band",
      price: 12,
      originalPrice: 18,
      discount: "33% OFF",
      save: 6,
      rating: 4.5,
      reviews: 210,
      image: "/img/watchs/watch price 12$.jpeg"
    },
    {
      id: "arr-2",
      name: "Active Smartwatch W2",
      specs: "Heart Rate Monitor • Black Sport Band",
      price: 13,
      originalPrice: 20,
      discount: "35% OFF",
      save: 7,
      rating: 4.4,
      reviews: 180,
      image: "/img/watchs/watch price 13$.jpeg"
    },
    {
      id: "arr-3",
      name: "Digital Tasbiha Counter",
      specs: "LED Screen • Soft Finger Strap",
      price: 10,
      originalPrice: 15,
      discount: "33% OFF",
      save: 5,
      rating: 4.7,
      reviews: 94,
      image: "/img/tasbihacounter/digital tasbiha counter price 10$.jpg"
    },
    {
      id: "arr-4",
      name: "Metallic Smartwatch WT",
      specs: "Steel Bezel • Bluetooth Calling HUD",
      price: 15,
      originalPrice: 22,
      discount: "31% OFF",
      save: 7,
      rating: 4.6,
      reviews: 310,
      image: "/img/watchs/Metallic smart watch price 15$.jpg"
    },
    {
      id: "arr-5",
      name: "Casual Laptop Backpack",
      specs: "Water Resistant • 15.6 Inch Compartment",
      price: 20,
      originalPrice: 30,
      discount: "33% OFF",
      save: 10,
      rating: 4.2,
      reviews: 75,
      image: "/img/laptopandcomputers/Casual Shoulder Laptop Backpack price 20$.jpg"
    },
    {
      id: "arr-6",
      name: "Laptop Sleeve Protective Bag",
      specs: "Shockproof Padded • Soft Fleece Lining",
      price: 14,
      originalPrice: 22,
      discount: "36% OFF",
      save: 8,
      rating: 4.5,
      reviews: 430,
      image: "/img/laptopandcomputers/Laptop Sleeve Bag price 14$.jpg"
    },
    {
      id: "arr-7",
      name: "Urban Travel Backpack 1",
      specs: "Anti-Theft Pocket • USB Charging Port",
      price: 13,
      originalPrice: 20,
      discount: "35% OFF",
      save: 7,
      rating: 4.6,
      reviews: 160,
      image: "/img/laptopandcomputers/laptop bag1 price 13$.jpg"
    },
    {
      id: "arr-8",
      name: "Premium Office Backpack 2",
      specs: "Leather Highlights • Expandable Volume",
      price: 8,
      originalPrice: 12,
      discount: "33% OFF",
      save: 4,
      rating: 4.3,
      reviews: 88,
      image: "/img/laptopandcomputers/laptop bag price 8$.jpg"
    },
    {
      id: "arr-9",
      name: "Aluminum Laptop Stand",
      specs: "Ergonomic Adjustable • Heat Dissipation",
      price: 8,
      originalPrice: 12,
      discount: "33% OFF",
      save: 4,
      rating: 4.4,
      reviews: 512,
      image: "/img/laptopandcomputers/laptop stand price 8$.jpg"
    },
    {
      id: "arr-10",
      name: "Folding Desk Laptop Stand",
      specs: "Compact Multi-Angle • Non-Slip Pads",
      price: 16,
      originalPrice: 25,
      discount: "36% OFF",
      save: 9,
      rating: 4.5,
      reviews: 195,
      image: "/img/laptopandcomputers/laptop stand price 16$.jpg"
    },
    {
      id: "arr-11",
      name: "Red Dragon Gaming Mouse",
      specs: "6400 DPI • RGB Backlit Macro Keys",
      price: 1.5,
      originalPrice: 3,
      discount: "50% OFF",
      save: 1.5,
      rating: 4.3,
      reviews: 90,
      image: "/img/laptopandcomputers/mousee price 1.5.jpg"
    },
    {
      id: "arr-12",
      name: "Wired Precision Office Mouse",
      specs: "Optical Tracking • Durable Clicking",
      price: 6,
      originalPrice: 10,
      discount: "40% OFF",
      save: 4,
      rating: 4.1,
      reviews: 310,
      image: "/img/laptopandcomputers/wired mouse price 6$.jpg"
    },
    {
      id: "arr-13",
      name: "Wireless Gaming Mouse",
      specs: "Ultra-Lightweight • Rechargeable Ergonomics",
      price: 2.5,
      originalPrice: 5,
      discount: "50% OFF",
      save: 2.5,
      rating: 4.5,
      reviews: 124,
      image: "/img/laptopandcomputers/mouse price 2.5$.png"
    },
    {
      id: "arr-14",
      name: "Azan Tasbiha Smart Ring",
      specs: "Prayer Time Alarms • Vibrating Count Alert",
      price: 4,
      originalPrice: 6,
      discount: "33% OFF",
      save: 2,
      rating: 4.8,
      reviews: 65,
      image: "/img/tasbihacounter/AzanTasbih price 4$.jpg"
    },
    {
      id: "arr-15",
      name: "Budget Tasbiha Counter",
      specs: "Tally Clicker • Adjustable Strap Ring",
      price: 1,
      originalPrice: 2,
      discount: "50% OFF",
      save: 1,
      rating: 4.2,
      reviews: 198,
      image: "/img/tasbihacounter/tasbihacounter 2 price 1$.jpg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="wearables">
      {/* Title block */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          New Arrivals & <span className="text-brand-blue">Tech Accessories</span>
        </h2>
        <span className="bg-brand-blue/10 text-brand-blue text-xs font-bold px-3 py-1 rounded-full">
          {items.length} items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-sky-100 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
          >
            {/* Heart Wishlist Trigger */}
            <button className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 rounded-full transition-colors z-20 shadow-sm">
              <Heart size={16} />
            </button>

            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-emerald-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full z-20 shadow-md shadow-emerald-100">
              {item.discount}
            </div>

            {/* Product Image Frame */}
            <div className="w-full h-40 flex items-center justify-center bg-gradient-to-b from-slate-50/50 to-transparent rounded-2xl mb-4 relative overflow-hidden group-hover:from-sky-50/20 transition-all duration-300">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-[85%] max-w-[85%] object-contain drop-shadow-md transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 rounded-xl"
              />
            </div>

            {/* Rating and Info */}
            <div className="text-left flex-grow">
              <div className="flex items-center gap-1 mb-1">
                <div className="flex text-amber-400">
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-[10px] font-bold text-slate-500">{item.rating}</span>
                <span className="text-[9px] text-slate-400">({item.reviews})</span>
              </div>

              <h3 className="text-sm font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-brand-blue transition-colors truncate">
                {item.name}
              </h3>
              <p className="text-[10px] text-slate-400 font-semibold mb-3 truncate">
                {item.specs}
              </p>

              {/* Price Matrix */}
              <div className="flex flex-col gap-0.5 border-t border-slate-50 pt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold text-slate-900">
                    ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-xs text-slate-400 line-through font-medium">
                    ${item.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50/55 px-2 py-0.5 rounded-lg w-max mt-1">
                  <span>Save - ${item.save.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            {/* Add to Cart Hover Overlay Trigger */}
            <div className="mt-4 pt-2">
              <button
                onClick={() => onAddToCart(item)}
                className="w-full py-2 bg-slate-50 hover:bg-brand-blue text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-100 hover:border-transparent select-none active:scale-95 cursor-pointer shadow-sm"
              >
                <ShoppingCart size={14} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { ShoppingCart, Star, Heart } from 'lucide-react';

export default function ProductShowcase({ onAddToCart }) {
  const products = [
    {
      id: "phone-1",
      name: "Vivo X60 Pro 5G",
      specs: "12GB | 256GB • Midnight Black",
      rating: 4.7,
      reviews: 840,
      price: 8.5,
      originalPrice: 12,
      discount: "29% OFF",
      save: 3.5,
      badge: "Flagship Phone",
      image: "/img/airphones/x60 price 8.5$.jpg"
    },
    {
      id: "phone-2",
      name: "Apple AirPods Pro 2",
      specs: "MagSafe USB-C • Active Noise Cancelling",
      rating: 4.9,
      reviews: 1820,
      price: 10,
      originalPrice: 15,
      discount: "33% OFF",
      save: 5,
      badge: "Top Seller",
      image: "/img/airphones/Airpods Pro price 10$.jpg"
    },
    {
      id: "phone-3",
      name: "SonicGear Airphone HD",
      specs: "Bluetooth 5.0 • Studio Bass Headset",
      rating: 4.3,
      reviews: 320,
      price: 8,
      originalPrice: 12,
      discount: "33% OFF",
      save: 4,
      badge: "Best Value",
      image: "/img/airphones/SonicGear Airphone price 8$.jpg"
    },
    {
      id: "phone-4",
      name: "Mobile Wireless Earbuds",
      specs: "TWS Earphones • Smart Touch Controls",
      rating: 4.1,
      reviews: 140,
      price: 4.5,
      originalPrice: 7,
      discount: "35% OFF",
      badge: "Budget Pick",
      save: 2.5,
      image: "/img/airphones/mobile-air-phone price 4.5$.jpg"
    },
    {
      id: "phone-5",
      name: "Smartwatch Active 2 Pro",
      specs: "AMOLED Display • Heart Monitor SpO2",
      rating: 4.6,
      reviews: 980,
      price: 20,
      originalPrice: 30,
      discount: "33% OFF",
      badge: "New Release",
      save: 10,
      image: "/img/watchs/smart watch 20$.jpg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="mobiles">
      {/* Title block */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Best Deals on <span className="text-brand-blue">Mobiles & Audio</span>
        </h2>
        <a href="#mobiles-all" className="text-xs font-bold text-brand-blue hover:text-sky-600 transition-colors flex items-center gap-1 select-none">
          View All <span className="text-[10px]">➔</span>
        </a>
      </div>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:border-sky-100 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Heart Wishlist Trigger */}
              <button className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 rounded-full transition-colors z-20 shadow-sm">
                <Heart size={16} />
              </button>

              {/* Discount Badge */}
              <div className="absolute top-4 left-4 bg-sky-500 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-full z-20 shadow-md shadow-sky-100">
                {product.discount}
              </div>

              {/* Product Image Frame */}
              <div className="w-full h-44 flex items-center justify-center bg-gradient-to-b from-slate-50/50 to-transparent rounded-2xl mb-4 relative overflow-hidden group-hover:from-sky-50/20 transition-all duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[85%] max-w-[85%] object-contain drop-shadow-md transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 rounded-xl"
                />
              </div>

              {/* Rating and Info */}
              <div className="text-left flex-grow">
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex text-amber-400">
                    <Star size={12} fill="currentColor" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500">{product.rating}</span>
                  <span className="text-[9px] text-slate-400">({product.reviews})</span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-800 tracking-tight leading-snug group-hover:text-brand-blue transition-colors truncate">
                  {product.name}
                </h3>
                <p className="text-[10px] text-slate-400 font-semibold mb-3 truncate">
                  {product.specs}
                </p>

                {/* Price Matrix */}
                <div className="flex flex-col gap-0.5 border-t border-slate-50 pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-extrabold text-slate-900">
                      ${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                    <span className="text-xs text-slate-400 line-through font-medium">
                      ${product.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50/55 px-2 py-0.5 rounded-lg w-max mt-1">
                    <span>Save - ${product.save.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>

              {/* Add to Cart Hover Overlay Trigger */}
              <div className="mt-4 pt-2">
                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2 bg-slate-50 hover:bg-brand-blue text-slate-700 hover:text-white rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 border border-slate-100 hover:border-transparent select-none active:scale-95 cursor-pointer shadow-sm"
                >
                  <ShoppingCart size={14} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

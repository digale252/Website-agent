import React from 'react';

export default function Categories() {
  const categories = [
    {
      name: "Smartphones",
      image: "/img/airphones/x60 price 8.5$.jpg",
      borderColor: "border-slate-200 group-hover:border-sky-500",
      link: "#mobiles"
    },
    {
      name: "Wearables & Watches",
      image: "/img/watchs/smartwatch price 19$.jpg",
      borderColor: "border-slate-200 group-hover:border-pink-500",
      link: "#wearables"
    },
    {
      name: "Audio Accessories",
      image: "/img/airphones/Airpods Pro price 10$.jpg",
      borderColor: "border-slate-200 group-hover:border-purple-500",
      link: "#audio"
    },
    {
      name: "Tasbiha Counters",
      image: "/img/tasbihacounter/AzanTasbih price 4$.jpg",
      borderColor: "border-slate-200 group-hover:border-teal-600",
      link: "#tasbiha"
    },
    {
      name: "Keyboards & Mice",
      image: "/img/laptopandcomputers/mousee price 1.5.jpg",
      borderColor: "border-slate-200 group-hover:border-amber-500",
      link: "#peripherals"
    },
    {
      name: "Ergonomic Stands",
      image: "/img/laptopandcomputers/laptop stand2.jpg",
      borderColor: "border-slate-200 group-hover:border-teal-500",
      link: "#stands"
    },
    {
      name: "Bags & Sleeves",
      image: "/img/laptopandcomputers/Laptop Sleeve Bag price 14$.jpg",
      borderColor: "border-slate-200 group-hover:border-emerald-500",
      link: "#bags"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="categories">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Shop From <span className="text-brand-blue">Top Categories</span>
        </h2>
        <a href="#categories-all" className="text-xs font-bold text-brand-blue hover:text-sky-600 transition-colors flex items-center gap-1 select-none">
          View All <span className="text-[10px]">➔</span>
        </a>
      </div>

      {/* Row aligned to the start (left) */}
      <div className="flex flex-wrap gap-8 justify-start">
        {categories.map((cat, index) => {
          return (
            <a
              href={cat.link}
              key={index}
              className="flex flex-col items-center cursor-pointer group select-none transition-all"
            >
              {/* Outer Ring Circle */}
              <div className={`w-20 h-20 rounded-full border-2 ${cat.borderColor} p-1 transition-all duration-300 bg-white shadow-sm group-hover:scale-105 group-hover:shadow-md flex items-center justify-center`}>
                {/* Inner Filled Circle containing Product Image */}
                <div className="w-full h-full rounded-full bg-slate-50 overflow-hidden flex items-center justify-center p-1 border border-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 rounded-full"
                  />
                </div>
              </div>
              <span className="text-xs font-bold text-slate-600 mt-3 group-hover:text-brand-blue transition-colors">
                {cat.name}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

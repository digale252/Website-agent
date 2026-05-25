import React from 'react';

export default function DailyEssentials() {
  const essentials = [
    {
      id: "essential-1",
      name: "Airpods Pro 2",
      discount: "UP TO 30% OFF",
      bgColor: "bg-sky-50",
      textColor: "text-sky-700",
      image: "/img/airphones/Airpods Pro price 10$.jpg"
    },
    {
      id: "essential-2",
      name: "SonicGear Airphone",
      discount: "UP TO 40% OFF",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      image: "/img/airphones/SonicGear Airphone price 8$.jpg"
    },
    {
      id: "essential-3",
      name: "Gaming Keyboard",
      discount: "UP TO 25% OFF",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      image: "/img/laptopandcomputers/gaming keyboard price10$.jpg"
    },
    {
      id: "essential-4",
      name: "Slim Leather Laptop Bag",
      discount: "UP TO 50% OFF",
      bgColor: "bg-rose-50",
      textColor: "text-rose-700",
      image: "/img/laptopandcomputers/Slim Leather Laptop Bag price 22$.jpg"
    },
    {
      id: "essential-5",
      name: "Premium Laptop Stand",
      discount: "UP TO 35% OFF",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      image: "/img/laptopandcomputers/laptop stand price 16$.jpg"
    },
    {
      id: "essential-6",
      name: "Wireless Gaming Mouse",
      discount: "UP TO 45% OFF",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      image: "/img/laptopandcomputers/mouse price 2.5$.png"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="essentials">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Daily <span className="text-brand-blue">Tech Essentials</span>
        </h2>
        <a href="#essentials-all" className="text-xs font-bold text-brand-blue hover:text-sky-600 transition-colors flex items-center gap-1 select-none">
          View All <span className="text-[10px]">➔</span>
        </a>
      </div>

      {/* 6 column grid for essentials using your real uploaded images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {essentials.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.bgColor} border border-slate-100 rounded-3xl p-4 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-300 flex flex-col items-center justify-between relative overflow-hidden group cursor-pointer`}
            >
              {/* Image container with your real uploaded image */}
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm border border-white/40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Tag and labels */}
              <div className="mt-4 text-center select-none w-full">
                <span className="text-[10px] text-slate-500 font-bold tracking-tight truncate block px-1">
                  {item.name}
                </span>
                <span className={`text-[10px] font-black tracking-tight ${item.textColor} block mt-1`}>
                  {item.discount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

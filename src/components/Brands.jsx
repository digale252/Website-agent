import React from 'react';
import { Apple } from 'lucide-react';

export default function Brands() {
  const brandsData = [
    {
      id: "brand-1",
      brandName: "Apple Accessories",
      label: "AIRPODS & MORE",
      discount: "UP TO 30% OFF",
      bgColor: "bg-slate-900",
      textColor: "text-white",
      logoColor: "text-white",
      borderColor: "border-slate-800",
      image: "/img/airphones/Airpods Pro price 10$.jpg",
      isApple: true
    },
    {
      id: "brand-2",
      brandName: "SonicGear Audio",
      label: "STUDIO HEADSETS",
      discount: "UP TO 40% OFF",
      bgColor: "bg-emerald-50",
      textColor: "text-slate-800",
      logoColor: "text-emerald-500",
      borderColor: "border-emerald-100",
      image: "/img/airphones/SonicGear Airphone price 8$.jpg"
    },
    {
      id: "brand-3",
      brandName: "Vivo Mobile",
      label: "VIVO FLAGSHIPS",
      discount: "EXCLUSIVE DEALS",
      bgColor: "bg-blue-50/50",
      textColor: "text-slate-800",
      logoColor: "text-blue-500",
      borderColor: "border-blue-100",
      image: "/img/airphones/x60 price 8.5$.jpg"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="brands">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Top <span className="text-brand-blue">Featured Brands</span>
        </h2>
        <a href="#brands-all" className="text-xs font-bold text-brand-blue hover:text-sky-600 transition-colors flex items-center gap-1 select-none">
          View All <span className="text-[10px]">➔</span>
        </a>
      </div>

      {/* Grid containing brand promotional banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {brandsData.map((brand) => {
          return (
            <div
              key={brand.id}
              className={`${brand.bgColor} border ${brand.borderColor} rounded-3xl p-6 flex items-center justify-between shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden group cursor-pointer`}
            >
              {/* Left Column: Brand details */}
              <div className="text-left z-10 flex flex-col justify-between h-full select-none">
                <div>
                  {/* Brand Pill badge */}
                  <span className={`inline-block text-[9px] font-black tracking-widest px-2.5 py-1 rounded-md mb-4 uppercase ${
                    brand.isApple ? 'bg-white/10 text-white' : 'bg-slate-900/5 text-slate-700'
                  }`}>
                    {brand.label}
                  </span>

                  {/* Brand Logo Mark */}
                  <div className="flex items-center gap-2 mb-2">
                    {brand.isApple ? (
                      <Apple size={24} className={brand.logoColor} />
                    ) : (
                      <div className={`w-6 h-6 rounded-lg ${brand.logoColor.includes('emerald') ? 'bg-emerald-500 text-white' : 'bg-brand-blue text-white'} flex items-center justify-center font-black text-[10px]`}>
                        {brand.brandName[0]}
                      </div>
                    )}
                    <span className={`text-base font-black tracking-tight ${brand.textColor}`}>
                      {brand.brandName.split(' ')[0]}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className={`text-lg font-black tracking-tight ${brand.textColor} leading-none`}>
                    {brand.discount}
                  </h4>
                  <span className={`text-[9px] font-semibold tracking-wide ${brand.isApple ? 'text-slate-400' : 'text-slate-500'}`}>
                    Premium Member Offer
                  </span>
                </div>
              </div>

              {/* Right Column: Actual Image */}
              <div className="relative h-28 w-24 flex items-center justify-center z-10 bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.brandName}
                  className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Background abstract layout accents */}
              <div className={`absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-20 ${
                brand.isApple ? 'bg-indigo-500' : 'bg-emerald-400'
              }`}></div>
            </div>
          );
        })}
      </div>

      {/* Pagination sliders underneath brand block */}
      <div className="flex justify-center items-center gap-1.5 mt-6">
        <span className="w-6 h-1.5 rounded-full bg-brand-blue"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      subtitle: "Super Tech Megamart Event",
      title: "EXCLUSIVE DEALS.",
      discount: "GRAND OPENING SALE",
      bgGradient: "",
      image: "/img/cov up.jpg",
      cta: "Shop All Offers",
      isCover: true
    },
    {
      subtitle: "Sleek Aesthetics & Advanced Monitoring",
      title: "NEXT-GEN SMART.",
      discount: "UP TO 40% OFF",
      bgGradient: "from-[#1e1b4b] via-[#312e81] to-[#1e1b4b]",
      image: "/img/watchs/smart watch 20$.jpg",
      cta: "Shop Smartwatches"
    },
    {
      subtitle: "Premium Design & Classic Luxury Renders",
      title: "LUXURY CLASSIQ.",
      discount: "MINIMUM 30% OFF",
      bgGradient: "from-[#064e3b] via-[#065f46] to-[#064e3b]",
      image: "/img/watchs/watch price 15.jpg",
      cta: "Shop Premium"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative group/slider">
      {/* Slide Container */}
      <div className="w-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] rounded-3xl overflow-hidden relative shadow-xl shadow-slate-100 flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 md:px-16 py-8 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-12 pointer-events-none'
              }`}
              style={{ background: slide.isCover ? 'none' : undefined }}
            >
              {/* If full-bleed cover image slide */}
              {slide.isCover && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt="Cover Banner"
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-[10s]"
                  />
                  {/* Dark gradient blur overlay to ensure absolute readability of text */}
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[0.5px] bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent"></div>
                </div>
              )}

              {/* Normal colored background slides */}
              {!slide.isCover && (
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} z-0`}></div>
              )}

              {/* Text Area */}
              <div className="flex-1 text-left text-white max-w-lg z-10 select-none">
                <span className="inline-block text-xs sm:text-sm md:text-base font-semibold text-sky-400 mb-2 sm:mb-3 tracking-wide transform translate-y-0 opacity-100 transition-all duration-700 delay-200">
                  {slide.subtitle}
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 sm:mb-4 text-white leading-none">
                  {slide.title}
                </h2>
                <div className="flex items-baseline gap-2 mb-6 md:mb-8">
                  <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#008ecc] bg-white/10 px-3 py-1 rounded-xl backdrop-blur-sm">
                    {slide.discount}
                  </span>
                </div>
                
                <button className="px-6 py-3 bg-[#008ecc] hover:bg-sky-600 text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-sky-500/20 active:scale-95 transition-all cursor-pointer">
                  {slide.cta}
                </button>
              </div>

              {/* Real Uploaded Smartwatch Product Images (only for non-cover slides) */}
              {!slide.isCover && (
                <div className="flex-grow-0 flex-shrink-0 flex justify-center md:justify-end items-center relative w-full md:w-[45%] h-[180px] sm:h-[260px] md:h-[340px] mt-6 md:mt-0 select-none z-10">
                  {slide.image && (
                    <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 flex items-center justify-center animate-[float_4s_ease-in-out_infinite] rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md p-2 border border-white/20">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}

        {/* Left Slider Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 p-2.5 sm:p-3 bg-white/95 hover:bg-white text-slate-800 hover:text-brand-blue rounded-full shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 z-20"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Slider Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 p-2.5 sm:p-3 bg-white/95 hover:bg-white text-slate-800 hover:text-brand-blue rounded-full shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 z-20"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slider Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? 'w-8 bg-[#008ecc]' : 'bg-white/45 hover:bg-white/70'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Categories from './components/Categories';
import ProductShowcase from './components/ProductShowcase';
import Brands from './components/Brands';
import DailyEssentials from './components/DailyEssentials';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Handler to add product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // Auto-open sliding cart drawer so user sees what entered the cart immediately
    setIsCartOpen(true);

    // Display temporary success toast notification
    setToastMessage(`Added ${product.name} to cart!`);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // Adjust item quantity inside the drawer
  const updateQuantity = (itemId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove item from cart
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Calculate cart metrics
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalSubtotal = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const totalSavings = originalSubtotal - subtotal;

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between selection:bg-brand-blue selection:text-white antialiased">
      {/* Visually Hidden SEO Heading */}
      <h1 className="sr-only">Goox Store Megamart - Best Online Deals on Smartphones, Smartwatches, Electronics & Daily Essentials</h1>
      
      {/* Dynamic Toast HUD popup notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 z-50 animate-bounce max-w-sm border border-slate-800">
          <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center">
            <span className="text-[10px] font-black">✓</span>
          </div>
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Store Header */}
      <Header
        cartCount={cartCount}
        wishlistCount={2}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Page Layout Flow */}
      <main className="flex-grow pb-10">
        <HeroBanner />
        <Categories />
        
        {/* Smartphones & Audio Accessories section */}
        <div id="mobiles">
          <div id="audio">
            <ProductShowcase onAddToCart={handleAddToCart} />
          </div>
        </div>

        {/* Wearables & Watches / Tasbiha Counters section */}
        <div id="wearables">
          <div id="tasbiha">
            <NewArrivals onAddToCart={handleAddToCart} />
          </div>
        </div>

        <Brands />

        {/* Peripherals, Stands, and Bags sections */}
        <div id="peripherals">
          <div id="stands">
            <div id="bags">
              <DailyEssentials />
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Footer Section */}
      <Footer />

      {/* Slide-out Shopping Cart Drawer Overlay Panel */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 overflow-hidden ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Dark blur backdrop */}
        <div
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        />

        <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col justify-between h-full transform transition-transform duration-500 ease-out z-10"
             style={{ transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-brand-blue" size={20} />
              <h2 className="text-base font-black text-slate-800 tracking-tight">Shopping Cart</h2>
              <span className="bg-brand-blue/10 text-brand-blue text-[10px] font-bold px-2 py-0.5 rounded-full">{cartCount} items</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-slate-200 rounded-full text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Body Product list */}
          <div className="flex-grow overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center select-none py-20 text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 text-slate-300">
                  <ShoppingBag size={32} />
                </div>
                <h3 className="text-sm font-bold text-slate-700 mb-1">Your cart is empty</h3>
                <p className="text-[11px] text-slate-400 max-w-[200px]">Add smartphones or tech accessories to get started.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-slate-100 p-4 rounded-2xl bg-white shadow-sm hover:border-sky-50 transition-colors"
                >
                  {/* Left: Product Image */}
                  <div className="w-12 h-16 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-slate-100 p-1">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>

                  {/* Middle: Text detail info */}
                  <div className="flex-1 text-left px-4">
                    <h4 className="text-xs font-bold text-slate-800 truncate max-w-[150px]">{item.name}</h4>
                    <span className="text-[10px] text-slate-400 font-semibold block">{item.specs ? item.specs.split('•')[0] : "Daily Essential"}</span>
                    <span className="text-xs font-black text-slate-900 block mt-1">${item.price.toLocaleString('en-US')}</span>
                  </div>

                  {/* Right: Quantity modifiers */}
                  <div className="flex flex-col items-end gap-2.5">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-slate-400 hover:text-rose-500 p-1 rounded-md transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                    
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 px-2 hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        <Minus size={10} />
                      </button>
                      <span className="text-xs font-bold px-2 text-slate-700 min-w-[20px] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 px-2 hover:bg-slate-200 text-slate-600 transition-colors"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer Checkout summaries */}
          {cartItems.length > 0 && (
            <div className="border-t border-slate-100 p-6 space-y-4 bg-slate-50">
              <div className="space-y-2 text-xs font-semibold text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-slate-900 font-bold">${originalSubtotal.toLocaleString('en-US')}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>Product Savings</span>
                  <span>- ${totalSavings.toLocaleString('en-US')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-emerald-600 font-bold">FREE</span>
                </div>
                <div className="border-t border-slate-200 my-2 pt-2 flex justify-between text-sm font-black text-slate-800">
                  <span>Total Amount</span>
                  <span className="text-brand-blue text-base">${subtotal.toLocaleString('en-US')}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Thank you for shopping with Goox store! This checkout demo is complete.");
                  setCartItems([]);
                  setIsCartOpen(false);
                }}
                className="w-full py-3 bg-brand-blue hover:bg-sky-600 text-white rounded-xl text-xs font-black shadow-lg shadow-sky-500/20 active:scale-95 transition-all text-center select-none cursor-pointer"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

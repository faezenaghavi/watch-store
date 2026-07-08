'use client';

import { useCart } from '@/hooks/useCart';
import PageHero from "@/components/PageHero";
import { formatPrice } from '@/lib/format';
import Link from 'next/link';
import { HiOutlinePlus, HiOutlineMinus, HiOutlineTrash, HiOutlineArrowLeft } from 'react-icons/hi';

export default function CartPage() {
  // اصلاح شد: استفاده صحیح از هوک useCart به جای useStore مستقیم
  const { cart, removeFromCart, updateQuantity, clearCart, total, count } = useCart();

  return (
    <>
      <PageHero title="Shopping Bag" breadcrumbs={[{ label: 'Cart' }]} />

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* حالت خالی بودن سبد خرید */}
          {cart.length === 0 ? (
            <div className="text-center py-20 glass-card rounded-2xl">
              <div className="text-6xl mb-6 opacity-20">🛍️</div>
              <p className="text-xl text-[#D9D9D9]/60 mb-6">Your bag is empty</p>
              <Link href="/products" className="btn-luxury rounded-xl text-white inline-flex items-center gap-2">
                <HiOutlineArrowLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* ستون سمت راست: لیست محصولات */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-[#D9D9D9]/60 tracking-wider">{count} items in bag</span>
                  <button onClick={clearCart} className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                    <HiOutlineTrash className="w-3.5 h-3.5" />
                    Clear All
                  </button>
                </div>
                
                {cart.map((item) => (
                  <div key={item.product.id} className="glass-card rounded-2xl p-6 flex gap-6">
                    {/* تصویر/آیکون محصول */}
                    <div className="w-24 h-28 rounded-xl bg-gradient-to-br from-[#1A2342] to-[#0E1629] flex items-center justify-center flex-shrink-0 border border-white/5">
                       <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    
                    {/* اطلاعات محصول */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs tracking-[0.15em] uppercase text-[#4A7BFF] mb-1">
                        {item.product.brand}
                      </p>
                      <h3 className="text-lg font-semibold truncate" style={{ fontFamily: 'var(--font-space)' }}>
                        {item.product.name}
                      </h3>
                      <p className="text-[#D9D9D9] text-sm mt-1 font-medium">
                        {formatPrice(item.product.price)}
                      </p>
                      
                      {/* دکمه‌های تعداد و حذف */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2 glass-strong rounded-lg px-1 py-1">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)} 
                            className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                          >
                            <HiOutlineMinus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)} 
                            className="p-1.5 hover:text-[#4A7BFF] transition-colors text-[#D9D9D9]"
                          >
                            <HiOutlinePlus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-white">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                          <button 
                            onClick={() => removeFromCart(item.product.id)} 
                            className="text-red-400/70 hover:text-red-400 transition-colors p-1"
                            aria-label="Remove item"
                          >
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ستون سمت چپ: خلاصه سفارش */}
              <div className="lg:col-span-1">
                <div className="glass-card rounded-2xl p-8 sticky top-32">
                  <h2 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-space)' }}>
                    Order Summary
                  </h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>Shipping</span>
                      <span className="text-green-400">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-sm text-[#D9D9D9]/80">
                      <span>Estimated Tax</span>
                      <span>$0</span>
                    </div>
                  </div>

                  <div className="luxury-divider mb-6" />

                  <div className="flex justify-between text-lg font-bold mb-8">
                    <span>Total</span>
                    <span className="text-gradient">{formatPrice(total)}</span>
                  </div>

                  <button className="btn-primary rounded-xl w-full text-center block py-4 text-sm tracking-wider font-semibold">
                    Proceed to Checkout
                  </button>
                  
                  <Link 
                    href="/products" 
                    className="text-center block mt-4 text-sm text-[#D9D9D9]/60 hover:text-[#4A7BFF] transition-colors flex items-center justify-center gap-2"
                  >
                    <HiOutlineArrowLeft className="w-3.5 h-3.5" />
                    Continue Shopping
                  </Link>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>
    </>
  );
}
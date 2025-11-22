import React from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, ShieldCheck, Globe, CreditCard } from 'lucide-react';

const BuyFromChinaClone = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        {/* 🔧 宽度调整: max-w-7xl 让它在电脑上更宽 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
            <span className="text-red-600"><ShoppingCart /></span>
            BuyFromChina<span className="text-red-600">.ca</span>
          </div>
          <button className="text-sm font-medium text-gray-700 border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-50 transition">
            English ▾
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white pb-16 pt-12 lg:pt-20 border-b border-gray-100">
        {/* 🔧 宽度调整 & 居中 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-50 text-red-700 text-sm font-bold px-4 py-1.5 rounded-full mb-8 border border-red-100">
            China's Best, Delivered to Canada.
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            From Taobao to <br className="hidden md:block" /> your doorstep.
          </h1>
          {/* 🔧 字体加深: text-gray-600 -> text-gray-700, max-w-2xl 限制文字宽度防止太长难读 */}
          <p className="text-gray-700 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
            The simplest way for Canadians to shop Taobao and Tmall. We verify listings, convert pricing to CAD, and handle shipping.
          </p>
          
          <div className="flex justify-center">
            <Link href="/quote">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-1">
                Start your quote <ArrowRight size={22}/>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* How it works Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-600 text-lg">Four clear steps from inspiration to delivery.</p>
        </div>

        {/* 🔧 布局调整: grid-cols-1 (手机1列) -> md:grid-cols-2 (平板2列) -> lg:grid-cols-4 (电脑4列) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Send links</h3>
            <p className="text-gray-700 leading-relaxed">Share Taobao URLs or photos. We validate listings and calculate costs.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Confirm quote</h3>
            <p className="text-gray-700 leading-relaxed">Review the full breakdown including shipping, tax, and service fees.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pay securely</h3>
            <div className="flex gap-2 mb-4">
               <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 border border-blue-100">
                 <CreditCard size={12}/> Stripe Protected
               </div>
            </div>
            <p className="text-gray-700 leading-relaxed">Checkout with Stripe in CAD. Bank-grade security included.</p>
          </div>
          
           {/* Step 4 */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Track delivery</h3>
            <p className="text-gray-700 leading-relaxed">We coordinate domestic shipping so your parcel lands at your door.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Why choose us</h2>
          
          {/* 🔧 布局调整: md:grid-cols-2 电脑上变成两列并排 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border border-gray-200 rounded-3xl p-8 lg:p-10 bg-gray-50 hover:bg-white hover:border-red-200 hover:shadow-lg transition-all">
               <ShieldCheck className="text-red-600 mb-6" size={48} />
               {/* 🔧 字体加深: text-gray-900 */}
               <h3 className="font-bold text-2xl text-gray-900 mb-4">Specialized Taobao expertise</h3>
               {/* 🔧 字体加深: text-gray-700 */}
               <p className="text-gray-700 text-lg leading-relaxed">
                 We navigate language barriers, payment hurdles, and seller vetting so you don't have to. We act as your boots on the ground in China.
               </p>
            </div>
            
            <div className="border border-gray-200 rounded-3xl p-8 lg:p-10 bg-gray-50 hover:bg-white hover:border-red-200 hover:shadow-lg transition-all">
               <Globe className="text-red-600 mb-6" size={48} />
               <h3 className="font-bold text-2xl text-gray-900 mb-4">Dedicated Canadian support</h3>
               <p className="text-gray-700 text-lg leading-relaxed">
                 Our team is based in Canada. No time zone lag, no broken English. We are available via email anytime you have questions.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to import your next Taobao find?</h2>
          <p className="mb-10 text-gray-400 text-xl">Get a tailored quote in Canadian dollars today.</p>
          <Link href="/quote">
            <button className="bg-red-600 text-white hover:bg-red-700 font-bold py-4 px-12 rounded-xl shadow-lg text-lg transition-colors">
              Start Request
            </button>
          </Link>
          <div className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500">
            © 2025 BuyFromChina.ca. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyFromChinaClone;

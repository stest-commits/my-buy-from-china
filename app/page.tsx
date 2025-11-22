import React from 'react';
import { ShoppingCart, ArrowRight, ShieldCheck, Globe, CreditCard, Package } from 'lucide-react';

const BuyFromChinaClone = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
            <span className="text-red-600"><ShoppingCart /></span>
            BuyFromChina<span className="text-red-600">.ca</span>
          </div>
          <button className="text-sm font-medium text-gray-600 border px-3 py-1 rounded-full">
            English ▾
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white pb-8 pt-4 px-4">
        <div className="max-w-md mx-auto">
          <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
            China's Best, Delivered to Canada.
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            From Taobao to your doorstep.
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            The simplest way for Canadians to shop Taobao and Tmall. We verify listings, convert pricing to CAD, and handle shipping.
          </p>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all flex justify-center items-center gap-2">
            Start your quote <ArrowRight size={20}/>
          </button>
        </div>
      </header>

      {/* How it works Section (Steps) */}
      <section className="py-10 px-4 max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">How it works</h2>
        <p className="text-gray-500 mb-8">Four clear steps from inspiration to delivery.</p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send us product links</h3>
            <p className="text-gray-600">Share any Taobao URLs or photos. We validate listings and calculate everything in CAD.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Confirm your quote</h3>
            <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400">
              [Quote Interface Image]
            </div>
            <p className="text-gray-600">Review the full breakdown including shipping, tax, and service fee.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pay securely</h3>
            <div className="flex gap-2 mb-3">
               <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                 <CreditCard size={12}/> Stripe Protected
               </div>
            </div>
            <p className="text-gray-600">Checkout with Stripe in Canadian dollars. Bank-grade security.</p>
          </div>
          
           {/* Step 4 */}
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold mb-4">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Track delivery to Canada</h3>
            <p className="text-gray-600">We coordinate domestic shipping so your parcel lands right at your doorstep.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why choose us</h2>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl p-5">
               <ShieldCheck className="text-red-600 mb-3" size={32} />
               <h3 className="font-bold text-lg mb-1">Specialized Taobao expertise</h3>
               <p className="text-gray-600 text-sm">We navigate language barriers and seller vetting so you don't have to.</p>
            </div>
            
            <div className="border border-gray-200 rounded-xl p-5">
               <Globe className="text-red-600 mb-3" size={32} />
               <h3 className="font-bold text-lg mb-1">Dedicated Canadian support</h3>
               <p className="text-gray-600 text-sm">Our team is based in Canada and available via email anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="bg-red-600 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to import your next Taobao find?</h2>
        <p className="mb-8 opacity-90">Get a tailored quote in Canadian dollars.</p>
        <button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg w-full max-w-xs">
          Start Request
        </button>
      </section>
    </div>
  );
};

export default BuyFromChinaClone;

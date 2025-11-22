'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // 👈 新增：引入 Link 组件
import { Plus, Loader2, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  // --- 🔴 记得把这里换回你自己的 Key ---
  const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 

  // 状态管理
  const [urls, setUrls] = useState(['']); 
  const [parcelSize, setParcelSize] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 表单输入状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postalCode: '',
    notes: '',
    priceRange: 'Select a price range'
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  const handleUrlChange = (index: any, value: any) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      access_key: ACCESS_KEY,
      subject: `新询价来自: ${formData.name}`,
      from_name: "BuyFromChina Bot",
      message: `
        姓名: ${formData.name}
        邮箱: ${formData.email}
        邮编: ${formData.postalCode}
        包裹大小: ${parcelSize}
        预估价格: ${formData.priceRange}
        备注: ${formData.notes}
        --- 商品链接 ---
        ${urls.filter(u => u.trim() !== '').join('\n')}
      `,
      ...formData,
      product_urls: urls.join(', '), 
      parcel_size: parcelSize
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (result.success) setIsSuccess(true);
      else alert("提交失败，请重试。");
    } catch (error) {
      console.error("Error:", error);
      alert("发生错误，请检查网络。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center border border-gray-200">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Sent!</h2>
          <p className="text-gray-700 mb-8 text-lg">
            We have received your request. Our team will verify the links and email you a quote within 12 hours.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 w-full text-lg transition-all"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">
        
        <div className="p-8 pb-4 bg-white">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-6 text-red-800 leading-relaxed text-base">
              <strong>Note:</strong> BuyFromChina.ca is a purchasing agent. We do not manufacture or sell products. All sales are final.
            </div>
            <div className="inline-block bg-red-100 text-red-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              China's Best, Delivered to Canada.
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Request a quote</h1>
        </div>

        <hr className="border-gray-200" />

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          
          {/* Product URLs */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">Product URLs</label>
            <div className="space-y-4 mb-4">
              {urls.map((url, index) => (
                <input
                  key={index}
                  required={index === 0}
                  type="url"
                  placeholder="https://item.taobao.com/item.htm?id=..."
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                  className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base transition-colors"
                />
              ))}
            </div>
            <button 
              type="button" 
              onClick={addUrlField}
              className="flex items-center gap-2 text-red-700 font-bold border-2 border-red-100 bg-red-50 px-6 py-3 rounded-xl text-sm hover:bg-red-100 transition-colors"
            >
              <Plus size={18} /> Add another URL
            </button>
          </div>

          {/* User Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">Recipient name</label>
              <input 
                name="name" required value={formData.name} onChange={handleInputChange}
                type="text" placeholder="Your full name" 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">Email</label>
              <input 
                name="email" required value={formData.email} onChange={handleInputChange}
                type="email" placeholder="you@email.com" 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
            <div>
              <label className="block text-base font-bold text-gray-900 mb-3">Canadian postal code</label>
              <input 
                name="postalCode" required value={formData.postalCode} onChange={handleInputChange}
                type="text" placeholder="e.g. M5V 2T6" 
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base" 
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">Notes</label>
            <textarea 
              name="notes" rows={4} value={formData.notes} onChange={handleInputChange}
              placeholder="Please specify size, color, or any special instructions..." 
              className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 placeholder:text-gray-500 text-base resize-none"
            ></textarea>
          </div>
          
           <div>
             <label className="block text-base font-bold text-gray-900 mb-3">Reference price in CAD</label>
             <select 
                name="priceRange" value={formData.priceRange} onChange={handleInputChange}
                className="w-full border-2 border-gray-300 focus:border-red-500 rounded-xl px-5 py-4 focus:outline-none text-gray-900 text-base bg-white"
             >
                <option>Select a price range</option>
                <option>Under $100</option>
                <option>$100 - $250</option>
                <option>$250 - $500</option>
                <option>$500+</option>
             </select>
          </div>

          {/* Parcel Size */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-4">Estimated parcel size</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['small', 'medium', 'large'].map((size) => (
                <div 
                  key={size}
                  onClick={() => setParcelSize(size)}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 cursor-pointer transition-all text-center h-32 ${
                    parcelSize === size 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                   <div className="font-bold text-lg uppercase text-gray-900 mb-1">{size}</div>
                   <div className="text-xs text-gray-600">
                      {size === 'small' && 'Light items'}
                      {size === 'medium' && 'Shoes/Hoodies'}
                      {size === 'large' && 'Jackets/Bulk'}
                   </div>
                   {parcelSize === size && <div className="mt-2 w-2 h-2 bg-blue-600 rounded-full"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button & Legal Link */}
          <div className="pt-6">
             {/* 👇 新增：带有条款链接的免责声明 */}
             <p className="text-sm text-gray-500 mb-4 text-center">
               By submitting this request, you agree to our{' '}
               <Link href="/legal/terms" className="text-red-600 underline hover:text-red-800 font-medium">
                 Terms and Conditions
               </Link>
               . We typically respond within 12 hours.
             </p>
             
             <button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full bg-red-600 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:bg-red-700 transition-transform active:scale-95 flex justify-center items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
             >
               {isSubmitting ? (
                 <> <Loader2 className="animate-spin" /> Sending... </>
               ) : (
                 "Send Request Now"
               )}
             </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default QuoteForm;

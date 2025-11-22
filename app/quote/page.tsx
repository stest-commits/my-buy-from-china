'use client';
import React, { useState } from 'react';
import { Plus, Upload, Info, CheckCircle, Loader2 } from 'lucide-react';

const QuoteForm = () => {
  // --- 🔴 在这里填入你的 Web3Forms Access Key ---
  const ACCESS_KEY = "8db64b5c-5970-44bc-abae-49c044171224"; 

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

  // 处理普通输入框变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 添加链接输入框
  const addUrlField = () => {
    setUrls([...urls, '']);
  };

  // 处理链接输入变化
  const handleUrlChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
  };

  // --- 核心逻辑：提交表单 ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. 准备发送的数据
    // Web3Forms 接受 JSON 格式
    const dataToSend = {
      access_key: ACCESS_KEY,
      subject: `新询价来自: ${formData.name}`, // 邮件标题
      from_name: "BuyFromChina Bot",
      // 把所有数据整理成易读的格式
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
      // 也可以单独发字段，方便后台处理
      ...formData,
      product_urls: urls.join(', '), 
      parcel_size: parcelSize
    };

    try {
      // 2. 发送请求
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      
      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("提交失败，请重试。");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("发生错误，请检查网络。");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 提交成功后的显示界面
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h2>
          <p className="text-gray-600 mb-6">
            We have received your request. Our team will verify the links and email you a quote within 12 hours.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 font-sans">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header Area */}
        <div className="p-6 pb-2">
            <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6 text-sm text-red-800 leading-relaxed">
              <strong>Note:</strong> BuyFromChina.ca is a purchasing agent. We do not manufacture or sell products.
            </div>
            <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
              China's Best, Delivered to Canada.
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Request a quote</h1>
        </div>

        <hr className="border-gray-100" />

        {/* Form Area */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Product URLs */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Product URLs</label>
            <div className="space-y-3 mb-3">
              {urls.map((url, index) => (
                <input
                  key={index}
                  required={index === 0} // 只有第一个必须填
                  type="url"
                  placeholder="https://item.taobao.com/..."
                  value={url}
                  onChange={(e) => handleUrlChange(index, e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                />
              ))}
            </div>
            <button 
              type="button" 
              onClick={addUrlField}
              className="flex items-center gap-1 text-red-600 font-bold border border-red-200 bg-red-50 px-4 py-2 rounded-lg text-sm hover:bg-red-100"
            >
              <Plus size={16} /> Add URL
            </button>
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Recipient name</label>
              <input 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                type="text" 
                placeholder="Full name" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none text-sm" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                type="email" 
                placeholder="you@email.com" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none text-sm" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Canadian postal code</label>
              <input 
                name="postalCode"
                required
                value={formData.postalCode}
                onChange={handleInputChange}
                type="text" 
                placeholder="M5V 2T6" 
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none text-sm" 
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Notes</label>
            <textarea 
              name="notes"
              rows={4} 
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Size, color, etc." 
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none text-sm resize-none"
            ></textarea>
          </div>
          
          {/* Price Range */}
           <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">Reference price in CAD</label>
             <select 
                name="priceRange"
                value={formData.priceRange}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-red-500 focus:outline-none text-sm bg-white"
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
            <label className="block text-sm font-bold text-gray-700 mb-3">Estimated parcel size</label>
            <div className="space-y-3">
              {['small', 'medium', 'large'].map((size) => (
                <div 
                  key={size}
                  onClick={() => setParcelSize(size)}
                  className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${
                    parcelSize === size 
                    ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                    parcelSize === size ? 'border-blue-600' : 'border-gray-300'
                  }`}>
                    {parcelSize === size && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                  </div>
                  <div className="text-sm font-bold uppercase text-gray-900">{size}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
             <p className="text-xs text-gray-500 mb-4 text-center">
               We respond within 12 hours.
             </p>
             <button 
               type="submit" 
               disabled={isSubmitting}
               className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-red-700 transition-colors flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
             >
               {isSubmitting ? (
                 <> <Loader2 className="animate-spin" /> Sending... </>
               ) : (
                 "Send request"
               )}
             </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default QuoteForm;

'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, Loader2, Clock } from 'lucide-react';

const ContactPage = () => {
  // --- 🔴 记得把这里换回你自己的 Web3Forms Access Key ---
  const ACCESS_KEY = "8db64b5c-5970-44bc-abae-49c044171224"; 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 处理输入变化
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 提交表单
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔧 修复点：手动构建数据，删除了 ...formData 以避免重复字段报错
    const dataToSend = {
      access_key: ACCESS_KEY,
      subject: `新联系留言: ${formData.subject}`,
      from_name: "BuyFromChina Contact",
      // 这里把所有信息打包进 message，方便你在邮件里看
      message: `
        姓名: ${formData.name}
        邮箱: ${formData.email}
        主题: ${formData.subject}
        ---------------------------
        留言内容:
        ${formData.message}
      `,
      // 额外单独传这两个字段，方便 Web3Forms 识别回复人
      name: formData.name,
      email: formData.email,
      // 注意：不要再写 ...formData 了
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

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in touch</h1>
          <p className="text-xl text-gray-600">
            Have a question about shipping, pricing, or your order? We are here to help.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and support.</p>
                  <a href="mailto:support@buyfromchina.ca" className="text-red-600 font-bold hover:underline text-lg">
                    support@buyfromchina.ca
                  </a>
                </div>
              </div>

              {/* Support Hours Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Support Hours</h3>
                  <p className="text-gray-600">
                    Mon - Fri: 9:00 AM - 6:00 PM (EST)<br/>
                    Sat - Sun: Email Support Only
                  </p>
                </div>
              </div>

              {/* Quote CTA */}
              <div className="bg-gray-900 text-white p-8 rounded-2xl mt-8">
                <h3 className="font-bold text-xl mb-2">Looking for a price?</h3>
                <p className="text-gray-400 mb-6">The fastest way to get a price is to use our quote request form.</p>
                <a href="/quote">
                   <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                     Request a Quote
                   </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-10">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thanks for reaching out. We will get back to you shortly via email.
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-red-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="text-red-600" /> Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input 
                      name="name" required value={formData.name} onChange={handleInputChange}
                      type="text" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input 
                      name="email" required value={formData.email} onChange={handleInputChange}
                      type="email" className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors" placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <select 
                       name="subject" required value={formData.subject} onChange={handleInputChange}
                       className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors bg-white"
                    >
                       <option value="">Select a topic</option>
                       <option value="Order Status">Order Status</option>
                       <option value="Shipping Question">Shipping Question</option>
                       <option value="Partnership">Partnership / Business</option>
                       <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea 
                      name="message" required rows={5} value={formData.message} onChange={handleInputChange}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-transform active:scale-95 flex justify-center items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? <><Loader2 className="animate-spin"/> Sending...</> : <><Send size={18}/> Send Message</>}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;

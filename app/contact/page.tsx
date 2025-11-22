'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, MessageSquare, Send, CheckCircle, Loader2, Clock } from 'lucide-react';

// 1. 定义翻译字典
const translations = {
  en: {
    title: "Get in touch",
    subtitle: "Have a question about shipping, pricing, or your order? We are here to help.",
    info_title: "Contact Information",
    email_title: "Email Us",
    email_desc: "For general inquiries and support.",
    hours_title: "Support Hours",
    hours_desc_1: "Mon - Fri: 9:00 AM - 6:00 PM (EST)",
    hours_desc_2: "Sat - Sun: Email Support Only",
    cta_title: "Looking for a price?",
    cta_desc: "The fastest way to get a price is to use our quote request form.",
    cta_btn: "Request a Quote",
    form_title: "Send us a message",
    label_name: "Name",
    ph_name: "Your name",
    label_email: "Email",
    ph_email: "you@email.com",
    label_subject: "Subject",
    opt_default: "Select a topic",
    opt_1: "Order Status",
    opt_2: "Shipping Question",
    opt_3: "Partnership / Business",
    opt_4: "Other",
    label_msg: "Message",
    ph_msg: "How can we help you?",
    btn_submit: "Send Message",
    btn_sending: "Sending...",
    success_title: "Message Sent!",
    success_desc: "Thanks for reaching out. We will get back to you shortly via email.",
    btn_again: "Send another message"
  },
  fr: {
    title: "Contactez-nous",
    subtitle: "Une question sur l'expédition, les prix ou votre commande ? Nous sommes là pour vous aider.",
    info_title: "Coordonnées",
    email_title: "Envoyez-nous un email",
    email_desc: "Pour les demandes générales et le support.",
    hours_title: "Heures d'ouverture",
    hours_desc_1: "Lun - Ven : 9h00 - 18h00 (EST)",
    hours_desc_2: "Sam - Dim : Support par email uniquement",
    cta_title: "Vous cherchez un prix ?",
    cta_desc: "Le moyen le plus rapide est d'utiliser notre formulaire de devis.",
    cta_btn: "Demander un devis",
    form_title: "Envoyez-nous un message",
    label_name: "Nom",
    ph_name: "Votre nom",
    label_email: "Email",
    ph_email: "vous@email.com",
    label_subject: "Sujet",
    opt_default: "Sélectionnez un sujet",
    opt_1: "Statut de la commande",
    opt_2: "Question sur l'expédition",
    opt_3: "Partenariat / Affaires",
    opt_4: "Autre",
    label_msg: "Message",
    ph_msg: "Comment pouvons-nous vous aider ?",
    btn_submit: "Envoyer le message",
    btn_sending: "Envoi...",
    success_title: "Message envoyé !",
    success_desc: "Merci de nous avoir contactés. Nous reviendrons vers vous sous peu par email.",
    btn_again: "Envoyer un autre message"
  },
  zh: {
    title: "联系我们",
    subtitle: "关于运费、报价或订单有任何疑问？我们随时为您解答。",
    info_title: "联系方式",
    email_title: "客服邮箱",
    email_desc: "一般咨询与售后支持。",
    hours_title: "客服时间",
    hours_desc_1: "周一至周五: 9:00 AM - 6:00 PM (美东时间)",
    hours_desc_2: "周末: 仅限邮件支持",
    cta_title: "想要查询运费？",
    cta_desc: "获取价格的最快方式是使用我们的在线询价单。",
    cta_btn: "立即询价",
    form_title: "给我们留言",
    label_name: "姓名",
    ph_name: "您的称呼",
    label_email: "邮箱",
    ph_email: "用于接收回复",
    label_subject: "主题",
    opt_default: "选择留言类型",
    opt_1: "订单状态查询",
    opt_2: "物流/运费咨询",
    opt_3: "商务合作",
    opt_4: "其他问题",
    label_msg: "留言内容",
    ph_msg: "请详细描述您的问题...",
    btn_submit: "发送留言",
    btn_sending: "发送中...",
    success_title: "发送成功！",
    success_desc: "感谢您的留言。我们的客服团队会尽快通过邮件回复您。",
    btn_again: "发送新留言"
  }
};

const ContactContent = () => {
  // --- 🔴 记得把这里换回你自己的 Key ---
  const ACCESS_KEY = "8db64b5c-5970-44bc-abae-49c044171224"; 

  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'zh' || lang === 'fr') {
      setCurrentLang(lang);
    } else {
      setCurrentLang('en');
    }
  }, [searchParams]);

  const t = translations[currentLang];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const dataToSend = {
      access_key: ACCESS_KEY,
      subject: `新联系留言: ${formData.subject} (${currentLang})`,
      from_name: "BuyFromChina Contact",
      message: `
        姓名: ${formData.name}
        邮箱: ${formData.email}
        主题: ${formData.subject}
        语言: ${currentLang}
        ---------------------------
        留言内容:
        ${formData.message}
      `,
      name: formData.name,
      email: formData.email,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSend),
      });
      const result = await response.json();
      if (result.success) setIsSuccess(true);
      else alert("Error, please try again.");
    } catch (error) {
      console.error("Error:", error);
      alert("Network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* Header Section */}
      <div className="bg-gray-50 border-b border-gray-100 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t.info_title}</h2>
            
            <div className="space-y-8">
              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{t.email_title}</h3>
                  <p className="text-gray-600 mb-2">{t.email_desc}</p>
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
                  <h3 className="font-bold text-gray-900 text-lg">{t.hours_title}</h3>
                  <p className="text-gray-600">
                    {t.hours_desc_1}<br/>
                    {t.hours_desc_2}
                  </p>
                </div>
              </div>

              {/* Quote CTA */}
              <div className="bg-gray-900 text-white p-8 rounded-2xl mt-8">
                <h3 className="font-bold text-xl mb-2">{t.cta_title}</h3>
                <p className="text-gray-400 mb-6">{t.cta_desc}</p>
                <a href="/quote">
                   <button className="w-full bg-white text-gray-900 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                     {t.cta_btn}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.success_title}</h3>
                <p className="text-gray-600 mb-8">
                  {t.success_desc}
                </p>
                <button 
                  onClick={() => window.location.reload()}
                  className="text-red-600 font-bold hover:underline"
                >
                  {t.btn_again}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <MessageSquare className="text-red-600" /> {t.form_title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.label_name}</label>
                    <input 
                      name="name" required value={formData.name} onChange={handleInputChange}
                      type="text" 
                      // 🔧 修复颜色：bg-white, text-gray-900, placeholder:text-gray-500
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors" 
                      placeholder={t.ph_name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.label_email}</label>
                    <input 
                      name="email" required value={formData.email} onChange={handleInputChange}
                      type="email" 
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors" 
                      placeholder={t.ph_email}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.label_subject}</label>
                    <select 
                       name="subject" required value={formData.subject} onChange={handleInputChange}
                       className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-red-500 transition-colors"
                    >
                       <option value="">{t.opt_default}</option>
                       <option value="Order Status">{t.opt_1}</option>
                       <option value="Shipping Question">{t.opt_2}</option>
                       <option value="Partnership">{t.opt_3}</option>
                       <option value="Other">{t.opt_4}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{t.label_msg}</label>
                    <textarea 
                      name="message" required rows={5} value={formData.message} onChange={handleInputChange}
                      className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none" 
                      placeholder={t.ph_msg}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-transform active:scale-95 flex justify-center items-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? <><Loader2 className="animate-spin"/> {t.btn_sending}</> : <><Send size={18}/> {t.btn_submit}</>}
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

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><Loader2 className="animate-spin text-red-600" /></div>}>
      <ContactContent />
    </Suspense>
  );
}

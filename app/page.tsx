'use client'; // 👈 必须加上这一行，因为我们要用点击事件

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, ShieldCheck, Globe, CreditCard, ChevronDown, Check } from 'lucide-react';

// 1. 定义翻译字典 (Dictionary)
const translations = {
  en: {
    badge: "China's Best, Delivered to Canada.",
    title_line1: "From Taobao to",
    title_line2: "your doorstep.",
    subtitle: "The simplest way for Canadians to shop Taobao and Tmall. We verify listings, convert pricing to CAD, and handle shipping.",
    cta_button: "Start your quote",
    how_works: "How it works",
    how_desc: "Four clear steps from inspiration to delivery.",
    step1_title: "Send links",
    step1_desc: "Share Taobao URLs or photos. We validate listings and calculate costs.",
    step2_title: "Confirm quote",
    step2_desc: "Review the full breakdown including shipping, tax, and service fees.",
    step3_title: "Pay securely",
    step3_desc: "Checkout with Stripe in CAD. Bank-grade security included.",
    step4_title: "Track delivery",
    step4_desc: "We coordinate domestic shipping so your parcel lands at your door.",
    why_title: "Why choose us",
    why1_title: "Specialized Taobao expertise",
    why1_desc: "We navigate language barriers, payment hurdles, and seller vetting so you don't have to.",
    why2_title: "Dedicated Canadian support",
    why2_desc: "Our team is based in Canada. No time zone lag. We are available via email anytime.",
    footer_title: "Ready to import your next Taobao find?",
    footer_sub: "Get a tailored quote in Canadian dollars today.",
    footer_btn: "Start Request"
  },
  fr: {
    badge: "Le meilleur de la Chine, livré au Canada.",
    title_line1: "De Taobao à",
    title_line2: "votre porte.",
    subtitle: "Le moyen le plus simple pour les Canadiens d'acheter sur Taobao et Tmall. Nous vérifions les annonces et gérons l'expédition.",
    cta_button: "Obtenir un devis",
    how_works: "Comment ça marche",
    how_desc: "Quatre étapes simples, de l'inspiration à la livraison.",
    step1_title: "Envoyez les liens",
    step1_desc: "Partagez les URL Taobao. Nous validons et calculons les coûts.",
    step2_title: "Confirmez le devis",
    step2_desc: "Examinez le détail complet incluant l'expédition et les taxes.",
    step3_title: "Paiement sécurisé",
    step3_desc: "Payez avec Stripe en CAD. Sécurité bancaire incluse.",
    step4_title: "Suivi de livraison",
    step4_desc: "Nous coordonnons l'expédition pour que votre colis arrive chez vous.",
    why_title: "Pourquoi nous choisir",
    why1_title: "Expertise Taobao",
    why1_desc: "Nous gérons les barrières linguistiques et les paiements pour vous.",
    why2_title: "Support canadien dédié",
    why2_desc: "Notre équipe est basée au Canada. Pas de décalage horaire.",
    footer_title: "Prêt à importer votre trouvaille ?",
    footer_sub: "Obtenez un devis personnalisé en dollars canadiens.",
    footer_btn: "Commencer"
  },
  zh: {
    badge: "淘宝天猫，直邮加拿大",
    title_line1: "人在加拿大",
    title_line2: "轻松买淘宝",
    subtitle: "加拿大代购首选。我们为您核验商品、处理汇率、合并打包，并提供一站式跨境物流服务。",
    cta_button: "开始询价",
    how_works: "服务流程",
    how_desc: "从下单到收货，只需简单四步。",
    step1_title: "提交链接",
    step1_desc: "发送淘宝/天猫商品链接或图片，我们为您核算加币价格。",
    step2_title: "确认报价",
    step2_desc: "查看包含运费、税费和服务费在内的最终报价。",
    step3_title: "安全支付",
    step3_desc: "支持加币 Stripe 支付 (微信/支付宝/信用卡)，资金安全有保障。",
    step4_title: "坐等收货",
    step4_desc: "我们处理所有跨境物流环节，直接送货上门。",
    why_title: "为什么选择我们",
    why1_title: "专业的代购经验",
    why1_desc: "帮您解决语言障碍、支付限制和卖家沟通问题，就像您在中国的私人买手。",
    why2_title: "本地化客服支持",
    why2_desc: "团队位于加拿大，无时差沟通，随时解决您的任何疑问。",
    footer_title: "准备好开始海淘了吗？",
    footer_sub: "立即获取您的专属加币报价。",
    footer_btn: "立即下单"
  }
};

const BuyFromChinaClone = () => {
  // 2. 状态管理
  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 获取当前语言的文本
  const t = translations[currentLang];

  // 切换语言函数
  const switchLang = (lang: 'en' | 'fr' | 'zh') => {
    setCurrentLang(lang);
    setIsMenuOpen(false);
  };

  // 语言显示名称
  const langNames = {
    en: "English",
    fr: "Français",
    zh: "中文"
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-red-100">

      {/* Hero Section */}
      <header className="bg-white pb-16 pt-12 lg:pt-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-red-50 text-red-700 text-sm font-bold px-4 py-1.5 rounded-full mb-8 border border-red-100">
            {t.badge}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            {t.title_line1} <br className="hidden md:block" /> {t.title_line2}
          </h1>
          <p className="text-gray-700 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
          
          <div className="flex justify-center">
            <Link href="/quote">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-1">
                {t.cta_button} <ArrowRight size={22}/>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* How it works Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.how_works}</h2>
          <p className="text-gray-600 text-lg">{t.how_desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step1_title}</h3>
            <p className="text-gray-700 leading-relaxed">{t.step1_desc}</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step2_title}</h3>
            <p className="text-gray-700 leading-relaxed">{t.step2_desc}</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step3_title}</h3>
            <div className="flex gap-2 mb-4">
               <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold flex items-center gap-1 border border-blue-100">
                 <CreditCard size={12}/> Stripe Protected
               </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{t.step3_desc}</p>
          </div>
          
           {/* Step 4 */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-lg mb-6">4</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.step4_title}</h3>
            <p className="text-gray-700 leading-relaxed">{t.step4_desc}</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">{t.why_title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border border-gray-200 rounded-3xl p-8 lg:p-10 bg-gray-50 hover:bg-white hover:border-red-200 hover:shadow-lg transition-all">
               <ShieldCheck className="text-red-600 mb-6" size={48} />
               <h3 className="font-bold text-2xl text-gray-900 mb-4">{t.why1_title}</h3>
               <p className="text-gray-700 text-lg leading-relaxed">
                 {t.why1_desc}
               </p>
            </div>
            
            <div className="border border-gray-200 rounded-3xl p-8 lg:p-10 bg-gray-50 hover:bg-white hover:border-red-200 hover:shadow-lg transition-all">
               <Globe className="text-red-600 mb-6" size={48} />
               <h3 className="font-bold text-2xl text-gray-900 mb-4">{t.why2_title}</h3>
               <p className="text-gray-700 text-lg leading-relaxed">
                 {t.why2_desc}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.footer_title}</h2>
          <p className="mb-10 text-gray-400 text-xl">{t.footer_sub}</p>
          <Link href="/quote">
            <button className="bg-red-600 text-white hover:bg-red-700 font-bold py-4 px-12 rounded-xl shadow-lg text-lg transition-colors">
              {t.footer_btn}
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

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ShoppingCart, Loader2 } from 'lucide-react';

// 1. 定义翻译字典
const translations = {
  en: {
    badge: "About BuyFromChina.ca",
    title_1: "Your trusted team for",
    title_2: "Taobao/Tmall shopping.",
    desc: "Our mission is to connect Canadian shoppers with China's vast e-commerce market. We bridge the gap in language, payment, and cross-border logistics, making it feel as easy as shopping locally. Professional, transparent, and efficient.",
    founder_title: "Meet the Founder",
    founder_name: "Yolanda Zhang",
    founder_role: "Founder & CEO",
    founder_quote: "\"As a Chinese expat living in Canada, I know the struggle of cross-border shopping. I started this platform to build the simplest, most reliable bridge to bring the best products from home to here.\""
  },
  fr: {
    badge: "À propos de BuyFromChina.ca",
    title_1: "Votre équipe de confiance",
    title_2: "pour Taobao/Tmall.",
    desc: "Notre mission est de connecter les acheteurs canadiens au vaste marché chinois. Nous comblons les lacunes en matière de langue, de paiement et de logistique transfrontalière. Professionnel, transparent et efficace.",
    founder_title: "Rencontrez la fondatrice",
    founder_name: "Yolanda Zhang",
    founder_role: "Fondatrice et PDG",
    founder_quote: "\"En tant qu'expatriée chinoise vivant au Canada, je connais les difficultés des achats transfrontaliers. J'ai créé cette plateforme pour bâtir le pont le plus simple et le plus fiable.\""
  },
  zh: {
    badge: "关于 BuyFromChina.ca",
    title_1: "值得信赖的",
    title_2: "淘宝/天猫代购团队。",
    desc: "我们的使命是连接加拿大买家与中国丰富的电商市场。我们打通语言、支付和跨境物流的障碍，让您仿佛置身国内一样轻松购物。专业、透明、高效，是我们对您的承诺。",
    founder_title: "创始人介绍",
    founder_name: "Yolanda Zhang",
    founder_role: "创始人 & CEO",
    founder_quote: "\"作为一名在加拿大生活多年的华人，我深知跨境购物的痛点。创立这个平台的初衷，就是希望能为大家提供一个最简单、最可靠的桥梁，把家乡的好物带到这里。\""
  }
};

const AboutContent = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  const searchParams = useSearchParams();

  // 自动检测语言
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'zh' || lang === 'fr') {
      setCurrentLang(lang);
    } else {
      setCurrentLang('en');
    }
  }, [searchParams]);

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 顶部 Header 区域 */}
      <div className="py-16 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 text-red-600 font-bold mb-6 tracking-wide uppercase text-sm bg-red-50 px-4 py-1 rounded-full">
            <ShoppingCart size={16} /> {t.badge}
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            {t.title_1}<br className="hidden md:block" /> {t.title_2}
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
            {t.desc}
          </p>
        </div>
      </div>

      {/* 创始人介绍区域 */}
      <div className="pb-24 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-gray-50 rounded-[2rem] p-12 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
             <h2 className="text-2xl font-bold text-gray-900 mb-10">{t.founder_title}</h2>
             
             {/* 头像占位符 */}
             <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden border-8 border-white shadow-md flex items-center justify-center">
                <span className="text-gray-400 font-medium">Photo</span>
             </div>
             
             <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.founder_name}</h3>
             <p className="text-red-600 font-medium bg-red-50 inline-block px-3 py-1 rounded-md text-sm">{t.founder_role}</p>
             
             <p className="text-gray-600 mt-6 leading-relaxed italic">
               {t.founder_quote}
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 导出时加上 Suspense 保护，防止部署报错
export default function AboutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center"><Loader2 className="animate-spin text-gray-300" /></div>}>
      <AboutContent />
    </Suspense>
  );
}

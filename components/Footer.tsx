'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // 👈 新增：读取参数
import { Facebook, Instagram, Twitter } from 'lucide-react';

// 1. 定义页脚翻译
const footerTranslations = {
  en: {
    rights: "All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    support: "Support",
    faq: "FAQ"
  },
  fr: {
    rights: "Tous droits réservés.",
    terms: "Conditions générales",
    privacy: "Politique de confidentialité",
    support: "Support",
    faq: "FAQ"
  },
  zh: {
    rights: "版权所有。",
    terms: "服务条款",
    privacy: "隐私政策",
    support: "客户支持",
    faq: "常见问题"
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  const searchParams = useSearchParams();

  // 2. 监听语言变化
  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'zh' || lang === 'fr') {
      setCurrentLang(lang);
    } else {
      setCurrentLang('en');
    }
  }, [searchParams]);

  const t = footerTranslations[currentLang];

  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* 左侧 */}
          <div className="text-gray-500 text-sm">
            © {currentYear} BuyFromChina.ca. {t.rights}
          </div>

          {/* 中间：使用翻译后的文本 */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/legal/terms" className="hover:text-red-600 transition-colors">
              {t.terms}
            </Link>
            <Link href="/legal/privacy" className="hover:text-red-600 transition-colors">
              {t.privacy}
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition-colors">
              {t.support}
            </Link>
            <Link href="/faq" className="hover:text-red-600 transition-colors">
              {t.faq}
            </Link>
          </div>

          {/* 右侧 */}
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-red-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-red-600 transition-colors"><Twitter size={20} /></a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

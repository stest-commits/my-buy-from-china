'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ShoppingCart, Globe, ChevronDown, Menu, X, Check } from 'lucide-react';

// 1. 定义导航栏的翻译字典
const navTranslations = {
  en: {
    home: 'Home',
    quote: 'Request a Quote',
    about: 'About Us',
    faq: 'FAQ',
    contact: 'Contact Us'
  },
  fr: {
    home: 'Accueil',
    quote: 'Demander un devis',
    about: 'À propos',
    faq: 'FAQ',
    contact: 'Contactez-nous'
  },
  zh: {
    home: '首页',
    quote: '提交报价',
    about: '关于我们',
    faq: '常见问题',
    contact: '联系我们'
  }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<'en' | 'fr' | 'zh'>('en');
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const lang = searchParams.get('lang');
    if (lang === 'zh' || lang === 'fr') {
      setCurrentLang(lang);
    } else {
      setCurrentLang('en');
    }
  }, [searchParams]);

  const switchLang = (lang: string) => {
    setCurrentLang(lang as any);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false);
    window.location.href = `${pathname}?lang=${lang}`;
  };

  // 2. 获取当前语言的文本
  const t = navTranslations[currentLang];

  // 3. 动态生成链接列表
  const navLinks = [
    { name: t.home, href: '/' },
    { name: t.quote, href: '/quote' },
    { name: t.about, href: '/about' },
    { name: t.faq, href: '/faq' },
    { name: t.contact, href: '/contact' }
  ];

  const langNames: Record<string, string> = {
    en: "English",
    fr: "Français",
    zh: "中文"
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
               <span className="text-red-600"><ShoppingCart /></span>
               BuyFromChina<span className="text-red-600">.ca</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-red-600 ${
                  pathname === link.href ? 'text-red-600 font-bold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="relative border-l border-gray-200 pl-6 ml-6">
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-red-600 font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition-all"
                >
                    <Globe size={16}/> 
                    {langNames[currentLang]} 
                    <ChevronDown size={14} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`}/>
                </button>

                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {['en', 'fr', 'zh'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => switchLang(lang)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${currentLang === lang ? 'text-red-600 font-bold' : 'text-gray-700'}`}
                      >
                        {langNames[lang]}
                        {currentLang === lang && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                )}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <span className="text-sm font-bold text-gray-500 uppercase">{currentLang}</span>
             <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg h-screen">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-4 rounded-lg text-lg font-medium ${
                   pathname === link.href ? 'bg-red-50 text-red-600' : 'text-gray-700 border-b border-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-6 border-t border-gray-100 mt-6">
              <p className="text-gray-400 text-sm mb-3 px-3">Switch Language</p>
              <div className="grid grid-cols-3 gap-2 px-2">
                 {['en', 'fr', 'zh'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => switchLang(lang)}
                      className={`py-2 rounded-lg text-sm font-bold border ${
                        currentLang === lang ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-600 border-gray-200'
                      }`}
                    >
                      {langNames[lang]}
                    </button>
                 ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

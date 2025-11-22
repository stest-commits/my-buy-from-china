'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 用于高亮当前页面
import { ShoppingCart, Globe, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 获取当前路径，比如 "/quote"

  // 导航链接配置
  const navLinks = [
    { name: '首页', href: '/' },
    { name: '提交报价请求', href: '/quote' },
    { name: '关于我们', href: '/about' }, // 我们稍后会创建这个页面
    { name: '常见问题', href: '/faq' },   // 稍后创建
    { name: '联系我们', href: '/contact' } // 稍后创建
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
               <span className="text-red-600"><ShoppingCart /></span>
               BuyFromChina<span className="text-red-600">.ca</span>
            </Link>
          </div>

          {/* 2. Desktop Menu (电脑端菜单) */}
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

            {/* 语言选择器 (简化版) */}
            <div className="border-l border-gray-200 pl-6 ml-6">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900">
                    <Globe size={14}/> 语言 <ChevronDown size={14}/>
                </button>
            </div>
          </div>

          {/* 3. Mobile Menu Button (手机端汉堡按钮) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (手机端下拉菜单) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                   pathname === link.href ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

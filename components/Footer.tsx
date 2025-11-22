'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* 左侧：版权信息 */}
          <div className="text-gray-500 text-sm">
            © {currentYear} BuyFromChina.ca. All rights reserved.
          </div>

          {/* 中间：页面链接 */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/legal/terms" className="hover:text-red-600 transition-colors">
              Terms (服务条款)
            </Link>
            <Link href="/legal/privacy" className="hover:text-red-600 transition-colors">
              Privacy (隐私政策)
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition-colors">
              Support (支持)
            </Link>
            <Link href="/faq" className="hover:text-red-600 transition-colors">
              FAQ (常见问题)
            </Link>
          </div>

          {/* 右侧：社交图标 */}
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

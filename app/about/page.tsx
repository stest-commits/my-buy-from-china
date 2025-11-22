import React from 'react';
import { ShoppingCart } from 'lucide-react';

const AboutPage = () => {
  return (
    // 🔧 关键修改 1: min-h-screen bg-white 强制白色背景，确保明亮简约
    <div className="min-h-screen bg-white font-sans">
      
      {/* 顶部 Header 区域 */}
      <div className="py-16 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2text-red-600 font-bold mb-6 tracking-wide uppercase text-sm bg-red-50 px-4 py-1 rounded-full text-red-700">
            <ShoppingCart size={16} /> 关于 BuyFromChina.ca
          </div>

          {/* 🔧 关键修改 2: text-gray-900 确保标题是深黑色，清晰醒目 */}
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            值得信赖的<br className="md:hidden" />淘宝/天猫代购团队。
          </h1>

          {/* 🔧 关键修改 3: text-gray-700 确保正文是深灰色，易读 */}
          <p className="text-xl text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
            我们的使命是连接加拿大买家与中国丰富的电商市场。我们打通语言、支付和跨境物流的障碍，让您仿佛置身国内一样轻松购物。专业、透明、高效，是我们对您的承诺。
          </p>
        </div>
      </div>

      {/* 创始人介绍区域 */}
      <div className="pb-24 px-4">
        <div className="max-w-lg mx-auto">
          {/* 🔧 关键修改 4: 卡片使用浅灰色背景 bg-gray-50，与白色大背景形成干净的层次感 */}
          <div className="bg-gray-50 rounded-[2rem] p-12 border border-gray-100 shadow-sm text-center">
             <h2 className="text-2xl font-bold text-gray-900 mb-10">创始人介绍</h2>
             
             {/* 头像占位符 (增加了白色边框和阴影，更有质感) */}
             <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden border-8 border-white shadow-md flex items-center justify-center">
                <span className="text-gray-400 font-medium">Photo</span>
                {/* 如果有照片，把上面这行删掉，取消下面这行的注释，并把照片放在 public 文件夹里 */}
                {/* <img src="/yolanda-photo.jpg" alt="Yolanda Zhang" className="w-full h-full object-cover" /> */}
             </div>
             
             {/* 🔧 关键修改 5: 更新名字为 Yolanda Zhang */}
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Yolanda Zhang</h3>
             <p className="text-red-600 font-medium bg-red-50 inline-block px-3 py-1 rounded-md text-sm">Founder & CEO</p>
             
             <p className="text-gray-600 mt-6 leading-relaxed">
               "作为一名在加拿大生活多年的华人，我深知跨境购物的痛点。创立这个平台的初衷，就是希望能为大家提供一个最简单、最可靠的桥梁，把家乡的好物带到这里。"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

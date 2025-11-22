import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <div className="text-red-600 font-bold mb-4">关于 BUYFROMCHINA.CA</div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">值得信赖的淘宝/天猫代购团队。</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        我们打通语言、支付、物流的障碍，帮助加拿大买家无压力地获取中国好物。
      </p>
      
      {/* 模拟截图里的创始人介绍部分 */}
      <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
         <h2 className="text-2xl font-bold mb-8">创始人介绍</h2>
         <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
            {/* 这里可以放你的照片 */}
            <img src="/placeholder-avatar.png" alt="Founder" className="w-full h-full object-cover opacity-50" /> 
         </div>
         <p className="text-gray-500">Yolanda Zhang</p>
      </div>
    </div>
  );
};

export default AboutPage;

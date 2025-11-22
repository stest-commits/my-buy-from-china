'use client';

import React from 'react';
import Script from 'next/script';

const Chatbot = () => {
  return (
    <Script
      id="tidio-chat"
      strategy="lazyOnload" // 懒加载，不会拖慢网站打开速度
      src="//code.tidio.co/mksa7dyxhjjiwggxz80cpvphhpb62ova.js" // 👈 🔴 替换成你自己的链接
    />
  );
};

export default Chatbot;


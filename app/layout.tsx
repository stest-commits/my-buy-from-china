import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot"; // 👈 新增：引入聊天组件

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuyFromChina.ca - From Taobao to your doorstep",
  description: "The simplest way for Canadians to shop Taobao and Tmall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        <Suspense fallback={<div className="h-16 bg-white border-b border-gray-100" />}>
          <Navbar />
        </Suspense>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Suspense fallback={<div className="h-20 bg-white border-t border-gray-100" />}>
          <Footer />
        </Suspense>

        {/* 👇 聊天机器人在最底部加载 */}
        <Chatbot />

      </body>
    </html>
  );
}

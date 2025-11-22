import React, { Suspense } from "react"; // 👈 引入 Suspense
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        {/* 👇 关键修复：用 Suspense 包裹 Navbar */}
        <Suspense fallback={<div className="h-16 bg-white border-b border-gray-100" />}>
          <Navbar />
        </Suspense>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

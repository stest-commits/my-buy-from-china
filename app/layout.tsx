import React, { Suspense } from "react";
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
        
        {/* Navbar 包裹 */}
        <Suspense fallback={<div className="h-16 bg-white border-b border-gray-100" />}>
          <Navbar />
        </Suspense>
        
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 👇 关键修复：Footer 也需要包裹 Suspense */}
        <Suspense fallback={<div className="h-20 bg-white border-t border-gray-100" />}>
          <Footer />
        </Suspense>

      </body>
    </html>
  );
}

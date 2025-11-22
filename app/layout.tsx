import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // 顶部导航
import Footer from "../components/Footer"; // 👈 新增：引入底部页脚

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
        {/* 1. Navbar 在最上面
           2. children 是中间的内容
           3. Footer 在最下面
           min-h-screen + flex-col 确保页脚永远沉在底部，即使内容很少
        */}
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

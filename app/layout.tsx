import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 这一行会加载 Google 的 Inter 字体
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
      {/* 这一行把字体应用到整个网站 */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}

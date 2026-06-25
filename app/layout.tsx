import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { prisma } from '@/lib/db'
import Menu from '@/components/Menu'
import MobileMenu from "@/components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yen-Chen, Feng's Portfolio",
  description: "Yen-Chen, Feng's 的數位名片",
  icons: {
    icon: "https://lusxdwrmykhitndhsbwp.supabase.co/storage/v1/object/public/my-portfolio/favicon.png",
  },
  openGraph: {
    title: "馮妍禎 (Feng Yen-Chen) 的作品集",
    description: "這是我的個人作品集，歡迎查看我的作品！ This is my personal portfolio. Feel free to take a look at my work!",
    images: [
      {
        url: "https://lusxdwrmykhitndhsbwp.supabase.co/storage/v1/object/public/my-portfolio/og.png",
        width: 1200,
        height: 630,
        alt: "馮妍禎的作品集",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const infoData = await prisma.info.findFirst()
  
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
    >
      <body className="h-full w-full bg-background text-primary overflow-x-hidden lg:overflow-hidden">
        <div className="h-full w-full lg:h-[calc(100vh-4rem)] lg:w-[calc(100vw-4rem)] flex flex-col lg:flex-row items-stretch m-0 lg:m-8 p-4 lg:p-0 gap-4 lg:gap-8 bg-background">
          
          {/* 選單 */}
          <div className="w-auto h-auto lg:w-80 lg:h-full shrink-0 border-0 lg:border border-primary rounded bg-transparent lg:bg-sub-background p-0 lg:p-4 overflow-visible lg:overflow-x-hidden lg:overflow-y-auto">
            <MobileMenu />
            <Menu info={infoData} />
          </div>

          {/* 內容 */}
          <div className="flex-1 w-full lg:w-0 border border-primary rounded bg-sub-background h-full p-4 overflow-x-hidden overflow-y-auto">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
}

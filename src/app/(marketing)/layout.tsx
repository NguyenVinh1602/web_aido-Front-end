import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteConfig from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
};

const isClient = typeof window !== "undefined";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <section className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden scroll-p-20 scroll-smooth`}>
        <div className="min-h-screen flex flex-col justify-between">
          <Header/>
          <div>
            {children}
          </div>
          <Footer/>
        </div>
      </section>
  );
}

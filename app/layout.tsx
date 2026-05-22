import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babiology",
  description: "让家的故事，从这里开始。",
  icons: {
    icon: "/assets/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-palette="rose" data-typeface="serif-display">
      <head>
        <link rel="stylesheet" href="/tokens.css" />
        <link rel="stylesheet" href="/site.css" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Script src="/tweaks.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

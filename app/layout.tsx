import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { basePath, withBasePath } from "@/lib/paths";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babiology",
  description: "让家的故事，从这里开始。",
  icons: {
    icon: `${basePath}/assets/logo.png`
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
        <link rel="stylesheet" href={withBasePath("/tokens.css")} />
        <link rel="stylesheet" href={withBasePath("/site.css")} />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Script src={withBasePath("/tweaks.js")} strategy="afterInteractive" />
      </body>
    </html>
  );
}

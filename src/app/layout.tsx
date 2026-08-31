import type { Metadata, Viewport } from "next";
import { basePath, withBasePath } from "@/lib/paths";
import { Footer } from "@/src/sections/Footer";
import { NavBar } from "@/src/sections/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Babiology",
  description: "让家的故事，从这里开始。",
  // 图标统一收在 public/assets/logo/ 下
  icons: {
    icon: `${basePath}/assets/logo/bb-favicon.png`,
    apple: `${basePath}/assets/logo/apple-touch-icon.png`
  },
  manifest: `${basePath}/site.webmanifest`
};

// 浏览器地址栏 / 任务切换器的底色，与 manifest 的 theme_color 保持一致
export const viewport: Viewport = {
  themeColor: "#673AB7"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="stylesheet" href={withBasePath("/tokens.css")} />
        <link rel="stylesheet" href={withBasePath("/site.css")} />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

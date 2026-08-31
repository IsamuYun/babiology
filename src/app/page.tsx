import type { Metadata } from "next";
import { HomePage } from "@/src/sections/homepage/HomePage";
import "./home.css";

export const metadata: Metadata = {
  title: "Babiology — 让爱延续，让家完整",
  description:
    "Babiology 代孕与卵子捐赠服务：中英双语顾问、医疗团队与法律顾问全程同行。"
};

export default function Home() {
  return <HomePage locale="zh" />;
}

import type { Metadata } from "next";
import { ContactPage } from "@/src/sections/contact/ContactPage";
import "../home.css";

export const metadata: Metadata = {
  title: "预约咨询 — Babiology",
  description:
    "填写表单，24 小时内由双语顾问回复。完全保密，首次咨询免费，零承诺。"
};

export default function Contact() {
  return <ContactPage locale="zh" />;
}

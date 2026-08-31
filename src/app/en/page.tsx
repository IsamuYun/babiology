import type { Metadata } from "next";
import { HomePage } from "@/src/sections/homepage/HomePage";
import "../home.css";

export const metadata: Metadata = {
  title: "Babiology — Carry the love forward",
  description:
    "Babiology surrogacy and egg donation: a bilingual coordinator, medical team, and legal counsel beside you at every step."
};

export default function EnglishHomePage() {
  return <HomePage locale="en" />;
}

import type { Metadata } from "next";
import { ContactPage } from "@/src/sections/contact/ContactPage";
import "../../home.css";

export const metadata: Metadata = {
  title: "Contact — Babiology",
  description:
    "Send an enquiry and a bilingual coordinator replies within 24 hours. Confidential, free, and with no commitment."
};

export default function EnglishContact() {
  return <ContactPage locale="en" />;
}

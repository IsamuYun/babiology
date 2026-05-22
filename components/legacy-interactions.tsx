"use client";

import { useEffect } from "react";

export function LegacyInteractions() {
  useEffect(() => {
    const checkboxHandler = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      target.classList.toggle("is-on");
    };

    const submitHandler = (event: Event) => {
      event.preventDefault();
      const form = event.currentTarget as HTMLFormElement;
      const button = form.querySelector<HTMLButtonElement>("button[type='submit'], .btn");
      if (!button) return;

      if (form.classList.contains("news-form")) {
        button.textContent = "已订阅 ✓";
        return;
      }

      button.textContent = "已发送 ✓";
      button.style.background = "var(--sage)";
      button.style.borderColor = "var(--sage)";
    };

    const checkboxes = Array.from(document.querySelectorAll<HTMLElement>(".checkbox"));
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("form"));

    checkboxes.forEach((checkbox) => checkbox.addEventListener("click", checkboxHandler));
    forms.forEach((form) => form.addEventListener("submit", submitHandler));

    return () => {
      checkboxes.forEach((checkbox) => checkbox.removeEventListener("click", checkboxHandler));
      forms.forEach((form) => form.removeEventListener("submit", submitHandler));
    };
  }, []);

  return null;
}

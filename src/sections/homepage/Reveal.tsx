"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * 滚动进场：每个区块只触发一次。
 * prefers-reduced-motion 下由 home.css 直接显示，这里也跳过 observer。
 */
export function Reveal({
  as: Tag = "div",
  className = "",
  fade = false,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  /** 自身已用 transform 定位的元素传 true，只淡入不位移 */
  fade?: boolean;
  children: ReactNode;
} & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }

    // 首屏内的区块直接显形，不等 observer：
    // 联系页第一屏就是 Reveal，若 observer 迟迟不回调（后台标签页会挂起
    // IntersectionObserver），用户会看到一片空白。
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight && box.bottom > 0) {
      el.classList.add("is-in");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = fade ? "bb-reveal-fade" : "bb-reveal";

  return (
    <Tag className={`${base} ${className}`.trim()} ref={ref} {...rest}>
      {children}
    </Tag>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isRedesignedRoute } from "@/lib/routes";

type FooterItem = [href: string, label: string];

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: FooterItem[];
}) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      <ul>
        {items.map(([href, label]) => (
          <li key={`${title}-${label}`}>
            {href ? <Link href={href}>{label}</Link> : label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  // 采用新版设计的页面自带 footer（src/sections/homepage/SiteFooter），此处不渲染以免重复
  const pathname = usePathname();
  if (isRedesignedRoute(pathname)) return null;

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <p className="lead">
              Babiology
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--fg-on-dark-muted)",
                margin: 0
              }}
            >
              <span style={{ color: "var(--rose)" }}>●</span> &nbsp; Now
              consulting · 2026 cohort
            </p>
          </div>

          <FooterColumn
            title="服务"
            items={[
              ["/surrogacy", "代孕项目"],
              ["/egg-donation", "卵子捐赠"],
              ["/how-it-works", "服务流程"],
              ["/donors", "捐赠者库"]
            ]}
          />
          <FooterColumn
            title="机构"
            items={[
              ["/about", "关于我们"],
              ["/stories", "客户故事"],
              ["/blog", "资源中心"],
              ["/faq", "常见问题"]
            ]}
          />
          <FooterColumn
            title="联系"
            items={[
              ["/contact", "预约咨询"],
              ["", "info@babiologyfamily.com"],
              ["", "+1 (917) 912-8976"],
              ["", "Mon-Sun · 09:00-19:00 PST"]
            ]}
          />
          <FooterColumn
            title="地址"
            items={[
              ["", "#212-214 930 Roosevelt"],
              ["", "Irvine, 92620"],
              ["", "California, USA"]
            ]}
          />
        </div>

        <div className="footer-bottom">
          <span>Copyright © 2025 Babiology® - All Rights Reserved.</span>
          <span>隐私 · 条款 · 医疗合规声明</span>
        </div>
      </div>
    </footer>
  );
}

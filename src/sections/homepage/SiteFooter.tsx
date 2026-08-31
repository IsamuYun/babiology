import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import type { HomeContent } from "./content";

export function SiteFooter({
  content,
  anchorBase = ""
}: {
  content: HomeContent;
  /** 非首页时给站内锚点加前缀，如 "/" 或 "/en" */
  anchorBase?: string;
}) {
  const home = content.locale === "en" ? "/en" : "/";
  const footer = content.footer;

  return (
    <footer className="bb-footer">
      <div className="bb-wrap">
        <div className="bb-foot-grid">
          {/* 品牌卡片：主题色底 + 白色标志 + 品牌名 + 地址 + CTA
              版式参照 docs/design/usberkeley-foot.jpg */}
          <div className="bb-brand-card">
            <Link href={home}>
              <Image
                alt="BABIOLOGY FAMILY"
                height={512}
                src={withBasePath("/assets/logo/bb-logo-white.png")}
                width={512}
              />
            </Link>

            <p className="bb-brand-card-name">{footer.brandCard.name}</p>
            <p className="bb-brand-card-sub">{footer.brandCard.sub}</p>

            <p className="bb-brand-card-tag">
              {footer.tagline[0]}
              <br />
              {footer.tagline[1]}
            </p>

            <address className="bb-brand-card-address">
              {footer.brandCard.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <Link
              className="bb-btn bb-btn-light"
              href={footer.brandCard.cta.href}
            >
              {footer.brandCard.cta.label}
            </Link>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.items.map(([href, label]) => (
                  <li key={`${column.title}-${label}`}>
                    {href.startsWith("#") ? (
                      <a href={`${anchorBase}${href}`}>{label}</a>
                    ) : (
                      <Link href={href}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bb-foot-note">
          <span>{footer.copyright}</span>
          <span>{footer.legal}</span>
          <span>{footer.draftNote}</span>
        </div>
      </div>
    </footer>
  );
}

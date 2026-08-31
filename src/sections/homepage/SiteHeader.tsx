import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import type { HomeContent } from "./content";

export function SiteHeader({
  content,
  anchorBase = "",
  altLocaleHref
}: {
  content: HomeContent;
  /** 非首页时给站内锚点加前缀，如 "/" 或 "/en" */
  anchorBase?: string;
  /** 覆盖语言切换目标（默认切到另一语言的首页） */
  altLocaleHref?: string;
}) {
  const home = content.locale === "en" ? "/en" : "/";

  return (
    <>
      <div className="bb-notice">
        {content.notice.text}
        <a href={`${anchorBase}#quiz`}>{content.notice.link}</a>
      </div>

      <header className="bb-nav">
        <div className="bb-wrap bb-nav-in">
          <Link className="bb-brand" href={home}>
            <Image
              alt="Babiology"
              height={38}
              src={withBasePath("/assets/logo/bb-logo.png")}
              width={38}
            />
            <span>
              <b>BABIOLOGY</b>
              <span>FAMILY</span>
            </span>
          </Link>

          <nav aria-label={content.locale === "en" ? "Main" : "主导航"}>
            <ul className="bb-nav-links">
              {content.nav.links.map((item) => (
                <li key={item.href}>
                  <a href={`${anchorBase}${item.href}`}>{item.label}</a>
                </li>
              ))}
              <li>
                <Link href={altLocaleHref ?? content.altLocale.href}>
                  {content.altLocale.label}
                </Link>
              </li>
            </ul>
          </nav>

          <a className="bb-btn bb-btn-1" href={`${anchorBase}#quiz`}>
            {content.nav.cta}
          </a>
        </div>
      </header>
    </>
  );
}

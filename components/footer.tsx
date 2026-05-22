import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <p className="lead">
              让<span className="ital">家</span>的故事，<br />
              从这里开始。
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
              ["", "care@babiology.com"],
              ["", "+1 (415) 555-0188"],
              ["", "Mon-Fri · 09-19"]
            ]}
          />
          <FooterColumn
            title="办公室"
            items={[
              ["", "Los Angeles"],
              ["", "Tbilisi"],
              ["", "Bangkok"],
              ["", "Shanghai · 远程"]
            ]}
          />
        </div>
        <div className="footer-bottom">
          <span>© 2026 Babiology Inc. &nbsp;·&nbsp; All rights reserved</span>
          <span>隐私 · 条款 · 医疗合规声明</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items
}: {
  title: string;
  items: Array<[string, string]>;
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

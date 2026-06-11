import Link from "next/link";

export function CTASection() {
  return (
    <section className="cta-strip">
      <div className="container">
        <p
          className="eyebrow is-plain"
          style={{ justifyContent: "center" }}
        >
          — 下一步 ·  NEXT —
        </p>
        <h2 style={{ marginTop: 32 }}>
          预约一次<span className="ital">私密的</span>
          <br />
          90 分钟启程咨询。
        </h2>
        <p
          className="body muted"
          style={{
            margin: "0 auto 40px",
            textAlign: "center",
            maxWidth: "52ch"
          }}
        >
          每月只开放 12
          位准父母名额。我们会在 24 小时内回复，并匹配最合适的双语顾问。
        </p>
        <div className="row" style={{ justifyContent: "center", gap: 12 }}>
          <Link className="btn is-solid" href="/contact">
            预约咨询 <span className="arrow">→</span>
          </Link>
          <Link className="btn" href="/faq">
            常见问题
          </Link>
        </div>
      </div>
    </section>
  );
}

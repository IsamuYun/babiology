import Link from "next/link";

const heroStats = [
  { label: "FOUNDED", value: "2012" },
  { label: "FAMILIES SERVED", value: "1,240+" },
  { label: "LIVE BIRTHS · 2026", value: "186" }
];

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container-wide">
        <p className="eyebrow">
          <span className="num">01</span>&nbsp; SURROGACY · EGG DONATION · 2012—
        </p>

        <div className="hero-grid" style={{ marginTop: 36 }}>
          <h1 className="display h-xl">
            让<span className="ital">家</span>的故事，<br />
            从这里温柔地<br />
            开始<span className="ital">。</span>
          </h1>

          <div className="meta">
            <p className="quote">
              &quot;我们陪伴每一个家庭——从第一次咨询、医疗匹配、跨境法律，到孩子安全回家的那一天。&quot;
            </p>
            <p
              className="muted"
              style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}
            >
              Babiology 是一家高端定制的代孕与卵子捐赠机构。十六年来，我们以医学严谨与人文关怀，协助来自三十二个国家的家庭迎接新生。
            </p>
          </div>
        </div>

        <div className="hero-foot">
          {heroStats.map((stat) => (
            <div className="pair" key={stat.label}>
              <span className="k">{stat.label}</span>
              <span className="v">{stat.value}</span>
            </div>
          ))}

          <div className="pair ctas" style={{ gridColumn: 4 }}>
            <span />
            <div className="row" style={{ gap: 10 }}>
              <Link className="btn is-solid" href="/contact">
                预约咨询 <span className="arrow">→</span>
              </Link>
              <Link className="btn" href="/how-it-works">
                了解流程
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

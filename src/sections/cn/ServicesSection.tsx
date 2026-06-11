import type { ReactNode } from "react";
import Link from "next/link";

type ServiceFeature = {
  index: string;
  title: string;
};

type ServiceCard = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  features: ServiceFeature[];
  href: string;
  linkLabel: string;
  variant?: "alt";
};

const services: ServiceCard[] = [
  {
    eyebrow: "01 · 代孕 SURROGACY",
    title: (
      <>
        为渴望孩子的家庭，
        <br />
        <span className="ital">寻一位温柔的</span>守护者。
      </>
    ),
    description:
      "从筛选、医学评估、法律保障到孕期陪护，我们的代孕项目以「无忧路径」为准则，覆盖美国、格鲁吉亚、墨西哥三大目的地。",
    features: [
      { index: "a.", title: "代母严选 · 多轮医学心理评估" },
      { index: "b.", title: "透明合约 · 跨境法律护航" },
      { index: "c.", title: "孕期专员 · 24h 中文支持" }
    ],
    href: "/surrogacy",
    linkLabel: "了解代孕项目"
  },
  {
    eyebrow: "02 · 卵子捐赠 EGG DONATION",
    title: (
      <>
        每一颗<span className="ital">微小的</span>
        <br />
        礼物，都被审慎以待。
      </>
    ),
    description:
      "800+ 位通过严格筛选的捐赠者，覆盖亚裔、混血、欧美与拉美。基因、心理与教育多维度评估，让选择更可靠、更安心。",
    features: [
      { index: "a.", title: "800+ 全球捐赠者数据库" },
      { index: "b.", title: "PGT-A 基因筛查 · ASRM 标准" },
      { index: "c.", title: "新鲜或冷冻方案灵活组合" }
    ],
    href: "/egg-donation",
    linkLabel: "了解卵子捐赠",
    variant: "alt"
  }
];

function ServiceFeatureRow({ feature }: { feature: ServiceFeature }) {
  return (
    <div className="feat-row">
      <span className="idx">{feature.index}</span>
      <span className="ttl">{feature.title}</span>
      <span className="arr">→</span>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceCard }) {
  return (
    <div className={`svc-card${service.variant ? ` ${service.variant}` : ""}`}>
      <div className="num">{service.eyebrow}</div>
      <h3>{service.title}</h3>
      <p className="sub">{service.description}</p>

      <div className="feat">
        {service.features.map((feature) => (
          <ServiceFeatureRow feature={feature} key={feature.index} />
        ))}
      </div>

      <Link className="link-u more" href={service.href}>
        {service.linkLabel} <span className="arrow">→</span>
      </Link>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div
          className="row row-between"
          style={{ marginBottom: 56, alignItems: "flex-end" }}
        >
          <div>
            <p className="eyebrow">
              <span className="num">02</span>&nbsp; 服务 · SERVICES
            </p>
            <h2
              className="display h-md"
              style={{ marginTop: 18, maxWidth: "18ch" }}
            >
              两条<span className="ital">路径</span>，<br />
              同一份温柔的承诺。
            </h2>
          </div>

          <Link className="link-u" href="/surrogacy">
            查看全部服务 <span className="arrow">→</span>
          </Link>
        </div>

        <div className="service-duo">
          {services.map((service) => (
            <ServiceCard key={service.eyebrow} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

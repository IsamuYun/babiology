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
    eyebrow: "01 · SURROGACY",
    title: (
      <>
        For families longing for a child,
        <br />
        <span className="ital">we find a gentle</span> guardian.
      </>
    ),
    description:
      "From screening and medical evaluation to legal protection and pregnancy support, our surrogacy program is designed as a worry-free path across the United States, Georgia, and Mexico.",
    features: [
      { index: "a.", title: "Carefully selected surrogates · Medical and psychological screening" },
      { index: "b.", title: "Transparent contracts · Cross-border legal guidance" },
      { index: "c.", title: "Pregnancy specialists · 24h Chinese-language support" }
    ],
    href: "/surrogacy",
    linkLabel: "Learn about surrogacy"
  },
  {
    eyebrow: "02 · EGG DONATION",
    title: (
      <>
        Every <span className="ital">small</span>
        <br />
        gift is handled with care.
      </>
    ),
    description:
      "800+ rigorously screened donors across Asian, mixed-heritage, European, and Latin backgrounds. Genetic, psychological, and educational reviews make every choice more reliable and reassuring.",
    features: [
      { index: "a.", title: "800+ global donor database" },
      { index: "b.", title: "PGT-A genetic screening · ASRM standards" },
      { index: "c.", title: "Flexible fresh or frozen cycle options" }
    ],
    href: "/egg-donation",
    linkLabel: "Learn about egg donation",
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
              <span className="num">02</span>&nbsp; SERVICES
            </p>
            <h2
              className="display h-md"
              style={{ marginTop: 18, maxWidth: "18ch" }}
            >
              Two <span className="ital">paths</span>,<br />
              one gentle promise.
            </h2>
          </div>

          <Link className="link-u" href="/surrogacy">
            View all services <span className="arrow">→</span>
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

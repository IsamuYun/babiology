import Link from "next/link";

type ProcessStep = {
  index: string;
  title: string;
  description: string;
  duration: string;
};

const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "启程咨询",
    description: "90 分钟一对一，与持照顾问梳理需求、预算与时间线。",
    duration: "2 WEEKS"
  },
  {
    index: "02",
    title: "医学评估",
    description: "合作生殖中心完成激素、影像与遗传咨询；制定个性化方案。",
    duration: "3–6 WEEKS"
  },
  {
    index: "03",
    title: "匹配 & 法律",
    description: "精准匹配代母 / 捐赠者；本地律师起草并解读跨境合约。",
    duration: "4–8 WEEKS"
  },
  {
    index: "04",
    title: "取卵 & 移植",
    description: "IVF 实验室同步操作；胚胎培养、PGT-A 筛查后择期移植。",
    duration: "2–3 MONTHS"
  },
  {
    index: "05",
    title: "孕期陪护",
    description: "月度产检、心理支持、48 周专属客户经理实时同步进度。",
    duration: "40 WEEKS"
  },
  {
    index: "06",
    title: "新生归家",
    description: "出生证明、护照与签证协助；新生儿陪同护士、月嫂与翻译。",
    duration: "4–6 WEEKS"
  }
];

function ProcessStepRow({
  step,
  isLast
}: {
  step: ProcessStep;
  isLast: boolean;
}) {
  return (
    <div
      className="card-line"
      style={isLast ? { borderBottom: "1px solid var(--rule)" } : undefined}
    >
      <span className="index">{step.index}</span>
      <h3>{step.title}</h3>
      <p
        className="muted"
        style={{ margin: 0, fontSize: 15, lineHeight: 1.65 }}
      >
        {step.description}
      </p>
      <span
        className="muted"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.08em"
        }}
      >
        {step.duration}
      </span>
    </div>
  );
}

export function OverviewSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="how-overview">
          <div>
            <p className="eyebrow">
              <span className="num">03</span>&nbsp; 流程 · HOW IT WORKS
            </p>
            <h2 className="display h-md" style={{ marginTop: 18 }}>
              六个阶段，
              <br />
              一份<span className="ital">从容</span>的
              <br />
              路线图。
            </h2>
            <p className="body muted" style={{ marginTop: 28 }}>
              我们将复杂的医疗、法律与跨境流程，整合为六个清晰的阶段。每一个阶段都配有专属的项目经理与中文支持。
            </p>
            <Link className="btn" href="/how-it-works" style={{ marginTop: 36 }}>
              查看完整流程 <span className="arrow">→</span>
            </Link>
          </div>

          <div className="how-list">
            {processSteps.map((step, index) => (
              <ProcessStepRow
                isLast={index === processSteps.length - 1}
                key={step.index}
                step={step}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    title: "Initial consultation",
    description: "A 90-minute one-on-one session with a licensed advisor to map your needs, budget, and timeline.",
    duration: "2 WEEKS"
  },
  {
    index: "02",
    title: "Medical evaluation",
    description: "Partner fertility centers complete hormone, imaging, and genetic consultations before building a personalized plan.",
    duration: "3–6 WEEKS"
  },
  {
    index: "03",
    title: "Matching & legal",
    description: "We match surrogates or donors with precision while local attorneys draft and explain cross-border contracts.",
    duration: "4–8 WEEKS"
  },
  {
    index: "04",
    title: "Retrieval & transfer",
    description: "IVF lab work is coordinated in sequence; embryos are cultured, screened with PGT-A, and transferred at the right time.",
    duration: "2–3 MONTHS"
  },
  {
    index: "05",
    title: "Pregnancy support",
    description: "Monthly prenatal updates, psychological support, and a dedicated case manager keep you informed in real time.",
    duration: "40 WEEKS"
  },
  {
    index: "06",
    title: "Newborn homecoming",
    description: "Birth certificate, passport, and visa support, plus newborn nurses, postpartum care, and interpretation.",
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
              <span className="num">03</span>&nbsp; HOW IT WORKS
            </p>
            <h2 className="display h-md" style={{ marginTop: 18 }}>
              Six stages,
              <br />
              one <span className="ital">calm</span>
              <br />
              roadmap.
            </h2>
            <p className="body muted" style={{ marginTop: 28 }}>
              We turn complex medical, legal, and cross-border work into six clear stages. Every stage includes a dedicated project manager and Chinese-language support.
            </p>
            <Link className="btn" href="/how-it-works" style={{ marginTop: 36 }}>
              View the full process <span className="arrow">→</span>
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

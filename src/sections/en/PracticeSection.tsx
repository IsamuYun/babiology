type PracticeValue = {
  index: string;
  title: string;
  description: string;
};

const practiceValues: PracticeValue[] = [
  {
    index: "01",
    title: "Clinical priority",
    description: "We work only with ASRM / SART-certified fertility centers, with live birth rates audited every quarter."
  },
  {
    index: "02",
    title: "Transparent contracts",
    description:
      "Unified pricing, staged payments, and clear termination terms are explained during the first week of consultation."
  },
  {
    index: "03",
    title: "Bilingual support",
    description: "Every family is paired with a bilingual project manager who responds across four time zones."
  },
  {
    index: "04",
    title: "Psychological care",
    description: "Intended parents and surrogates each receive at least eight sessions of professional psychological support."
  }
];

function PracticeValueRow({ value }: { value: PracticeValue }) {
  return (
    <div className="value-row">
      <span className="num">{value.index}</span>
      <div>
        <h4>{value.title}</h4>
        <p>{value.description}</p>
      </div>
    </div>
  );
}

export function PracticeSection() {
  return (
    <section className="section is-dark">
      <div className="container-wide">
        <div className="practice">
          <div>
            <p className="eyebrow" style={{ color: "var(--rose)" }}>
              <span className="num" style={{ color: "var(--rose)" }}>
                07
              </span>
              &nbsp; OUR PRACTICE
            </p>
            <h2 className="display h-md" style={{ marginTop: 28 }}>
              A promise
              <br />
              centered on <span className="ital">people</span>.
            </h2>
            <p
              className="body"
              style={{ color: "var(--fg-on-dark-muted)", marginTop: 28 }}
            >
              We believe technology is only the entry point. What truly reaches families is the judgment we have refined for sixteen years across medicine, ethics, psychology, and law.
            </p>
          </div>

          <div>
            {practiceValues.map((value) => (
              <PracticeValueRow key={value.index} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

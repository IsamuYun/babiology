import Link from "next/link";

type Donor = {
  placeholderClassName: string;
  placeholderCode: string;
  placeholderLabel: string;
  placeholderSize: string;
  name: string;
  code: string;
  ethnicity: string;
  age: string;
  biometrics: string;
};

const donors: Donor[] = [
  {
    placeholderClassName: "ph",
    placeholderCode: "D-218",
    placeholderLabel: "Asian · 26",
    placeholderSize: "3:4",
    name: "Aria L.",
    code: "D—218",
    ethnicity: "Asian",
    age: "26",
    biometrics: "O+ · 165cm"
  },
  {
    placeholderClassName: "ph blush",
    placeholderCode: "D-403",
    placeholderLabel: "European · 24",
    placeholderSize: "3:4",
    name: "Elena V.",
    code: "D—403",
    ethnicity: "European",
    age: "24",
    biometrics: "A+ · 170cm"
  },
  {
    placeholderClassName: "ph sage",
    placeholderCode: "D-091",
    placeholderLabel: "Mixed heritage · 28",
    placeholderSize: "3:4",
    name: "Mira H.",
    code: "D—091",
    ethnicity: "Mixed heritage",
    age: "28",
    biometrics: "B+ · 168cm"
  },
  {
    placeholderClassName: "ph",
    placeholderCode: "D-512",
    placeholderLabel: "Latin · 25",
    placeholderSize: "3:4",
    name: "Sofía R.",
    code: "D—512",
    ethnicity: "Latin",
    age: "25",
    biometrics: "O+ · 162cm"
  }
];

function DonorCard({ donor }: { donor: Donor }) {
  return (
    <div className="donor-card">
      <div className={donor.placeholderClassName}>
        <div className="ph-corner">{donor.placeholderCode}</div>
        <div className="ph-caption">
          <span>{donor.placeholderLabel}</span>
          <span>{donor.placeholderSize}</span>
        </div>
      </div>
      <div className="info">
        <span className="name">{donor.name}</span>
        <span className="code">{donor.code}</span>
      </div>
      <div className="meta-row">
        <span>
          <span className="dot">●</span> {donor.ethnicity}
        </span>
        <span>{donor.age}</span>
        <span>{donor.biometrics}</span>
      </div>
    </div>
  );
}

export function DonorSection() {
  return (
    <section className="section is-sunk">
      <div className="container-wide">
        <div
          className="row row-between"
          style={{ marginBottom: 48, alignItems: "flex-end" }}
        >
          <div>
            <p className="eyebrow">
              <span className="num">06</span>&nbsp; DONOR DATABASE
            </p>
            <h2 className="display h-md" style={{ marginTop: 18 }}>
              Every choice
              <br />
              <span className="ital">deserves</span> respect.
            </h2>
          </div>

          <Link className="btn" href="/donors">
            Browse all donors <span className="arrow">→</span>
          </Link>
        </div>

        <div className="donors-strip">
          {donors.map((donor) => (
            <DonorCard donor={donor} key={donor.code} />
          ))}
        </div>
      </div>
    </section>
  );
}

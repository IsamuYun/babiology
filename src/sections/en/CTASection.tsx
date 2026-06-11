import Link from "next/link";

export function CTASection() {
  return (
    <section className="cta-strip">
      <div className="container">
        <p
          className="eyebrow is-plain"
          style={{ justifyContent: "center" }}
        >
          — NEXT STEP —
        </p>
        <h2 style={{ marginTop: 32 }}>
          Book a <span className="ital">private</span>
          <br />
          90-minute consultation.
        </h2>
        <p
          className="body muted"
          style={{
            margin: "0 auto 40px",
            textAlign: "center",
            maxWidth: "52ch"
          }}
        >
          We open only 12 intended-parent consultation spots each month. We reply within 24 hours and match you with the right bilingual advisor.
        </p>
        <div className="row" style={{ justifyContent: "center", gap: 12 }}>
          <Link className="btn is-solid" href="/contact">
            Book a consultation <span className="arrow">→</span>
          </Link>
          <Link className="btn" href="/faq">
            FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}

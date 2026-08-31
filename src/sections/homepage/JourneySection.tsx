import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

export function JourneySection({
  content
}: {
  content: HomeContent["journey"];
}) {
  return (
    <section id="journey">
      <Reveal className="bb-wrap">
        <div className="bb-split bb-tight" style={{ alignItems: "end" }}>
          <div>
            <p className="bb-eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <p className="bb-lede" style={{ margin: 0 }}>
            {content.lede}
          </p>
        </div>

        <div className="bb-steps">
          {content.steps.map((step) => (
            <div className="bb-step" key={step.n}>
              <span className="bb-step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <div className="bb-btns" style={{ marginTop: 48 }}>
          <a className="bb-btn bb-btn-2" href="#journey">
            {content.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

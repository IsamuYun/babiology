import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

export function SupportSection({
  content
}: {
  content: HomeContent["support"];
}) {
  return (
    <section className="bb-sunk" id="support">
      <Reveal className="bb-wrap">
        <p className="bb-eyebrow">{content.eyebrow}</p>
        <h2>
          {content.title[0]}
          <br />
          {content.title[1]}
        </h2>

        <div className="bb-trio">
          {content.pillars.map((pillar) => (
            <div key={pillar.title}>
              <div className="bb-trio-bar" />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="bb-btns" style={{ marginTop: 56 }}>
          <a className="bb-btn bb-btn-1" href="#quiz">
            {content.primary}
          </a>
          <a className="bb-btn bb-btn-2" href="#journey">
            {content.secondary}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

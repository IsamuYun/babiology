import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

export function StatSection({ content }: { content: HomeContent["stat"] }) {
  return (
    <section className="bb-ink">
      <Reveal className="bb-wrap bb-stat">
        <div className="bb-stat-fig">
          {content.figure}
          <sup>{content.unit}</sup>
        </div>
        <div>
          <h3 style={{ marginBottom: 16 }}>{content.title}</h3>
          <p style={{ maxWidth: "52ch" }}>{content.body}</p>
        </div>
      </Reveal>
    </section>
  );
}

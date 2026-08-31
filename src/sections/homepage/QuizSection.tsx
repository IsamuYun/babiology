import Link from "next/link";
import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

export function QuizSection({ content }: { content: HomeContent["quiz"] }) {
  return (
    <section className="bb-sunk" id="quiz">
      <Reveal className="bb-wrap bb-quiz">
        <p className="bb-eyebrow" style={{ marginBottom: 8 }}>
          {content.eyebrow}
        </p>
        <h2>{content.title}</h2>
        <p className="bb-quiz-time">{content.time}</p>
        <p>{content.body}</p>
        <Link
          className="bb-btn bb-btn-1"
          href="/contact"
          style={{ marginTop: 8 }}
        >
          {content.cta}
        </Link>
      </Reveal>
    </section>
  );
}

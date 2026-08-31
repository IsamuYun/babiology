import Link from "next/link";
import type { HomeContent } from "./content";

export function GatesSection({ content }: { content: HomeContent["gates"] }) {
  return (
    <section className="bb-gates" id="gates">
      {content.map((gate) => (
        <Link className="bb-gate" href={gate.href} key={gate.href}>
          <h3>{gate.title}</h3>
          <p>{gate.body}</p>
          <span className="bb-gate-go">{gate.go}</span>
        </Link>
      ))}
    </section>
  );
}

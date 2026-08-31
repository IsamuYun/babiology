import Link from "next/link";
import type { HomeContent } from "./content";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

export function ArticlesSection({
  content
}: {
  content: HomeContent["articles"];
}) {
  return (
    <section className="bb-sunk" id="articles">
      <Reveal className="bb-wrap">
        <div className="bb-split bb-tight" style={{ alignItems: "end" }}>
          <div>
            <p className="bb-eyebrow">{content.eyebrow}</p>
            <h2>
              {content.title[0]}
              <br />
              {content.title[1]}
            </h2>
          </div>
          <p className="bb-lede" style={{ margin: 0 }}>
            {content.lede}
          </p>
        </div>

        <div className="bb-cards">
          {content.items.map((article) => (
            <Link className="bb-card" href="/blog" key={article.title}>
              <Placeholder label={content.photoLabel} ratio="3:2" />
              <p className="bb-card-kicker">{article.kicker}</p>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
              <span className="bb-card-more">{content.more}</span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

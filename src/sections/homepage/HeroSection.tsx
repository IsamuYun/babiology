import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import type { HomeContent } from "./content";

export function HeroSection({ content }: { content: HomeContent["hero"] }) {
  return (
    <section className="bb-hero">
      <Image
        alt={content.alt}
        className="bb-hero-img"
        height={813}
        priority
        src={withBasePath("/assets/hero-banner.jpg")}
        width={1935}
      />

      <div className="bb-hero-card">
        <h1>
          {content.title[0]}
          <br />
          {content.title[1]}
        </h1>
        <p>{content.body}</p>
        <div className="bb-btns">
          <a className="bb-btn bb-btn-light" href="#quiz">
            {content.primary}
          </a>
          <a className="bb-btn bb-btn-ghost-light" href="#approach">
            {content.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

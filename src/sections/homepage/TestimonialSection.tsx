import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

/**
 * 证言 —— 两张等宽配图并排，引述卡片压在两图接缝上居中。
 * 内容宽度走 .bb-wrap，与 ApproachSection 的托架左右边界对齐。
 * 悬停图片会上浮并盖过引述卡片，露出被遮住的那半张照片。
 */
export function TestimonialSection({
  content
}: {
  content: HomeContent["testimonial"];
}) {
  return (
    <section className="bb-quote-section">
      <div className="bb-wrap">
        <div className="bb-quote-band">
          {content.photos.map((photo) => (
            <Image
              alt={photo.alt}
              height={photo.height}
              key={photo.src}
              src={withBasePath(photo.src)}
              width={photo.width}
            />
          ))}

          <Reveal className="bb-quote-card" fade>
            <h2>
              {content.quote[0]}
              <br />
              {content.quote[1]}
            </h2>
            <p>{content.body}</p>
            <p className="bb-quote-by">{content.by}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

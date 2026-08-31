import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import type { HomeContent } from "./content";
import { Reveal } from "./Reveal";

/**
 * Our Approach —— 版式参照 familymakers.com/for-surrogates 的同名区块：
 * 左上角一枚小图标接一条横线，横线在右端折下形成一个包住内容的直角托架；
 * 图标与标签骑在顶边线上，线在它们背后断开；
 * 托架内左栏是小字正文、右栏是大号衬线引述与按钮，下方并排两张配图。
 * 这里用一个元素实现托架：top / right 为品牌紫，bottom / left 透明。
 */
export function ApproachSection({
  content
}: {
  content: HomeContent["approach"];
}) {
  return (
    <section id="approach">
      <Reveal className="bb-wrap">
        <div className="bb-approach-frame">
          <div className="bb-approach-head">
            <Image
              alt=""
              height={48}
              src={withBasePath("/assets/logo/bb-logo.png")}
              width={48}
            />
            <span>{content.label}</span>
          </div>

          <div className="bb-approach-cols">
            <div className="bb-approach-copy">
              <p className="bb-lede">{content.lede}</p>
              <p>{content.body}</p>
            </div>

            <div className="bb-approach-lead">
              <h2>
                {content.title[0]}
                <br />
                {content.title[1]}
              </h2>
              <div className="bb-btns">
                <a className="bb-btn bb-btn-2" href="#support">
                  {content.primary}
                </a>
                <a className="bb-btn bb-btn-3" href="#quiz">
                  {content.secondary}
                </a>
              </div>
            </div>
          </div>

          <div className="bb-approach-figures">
            {content.photos.map((photo) => (
              <Image
                alt={photo.alt}
                height={photo.height}
                key={photo.src}
                src={withBasePath(photo.src)}
                width={photo.width}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

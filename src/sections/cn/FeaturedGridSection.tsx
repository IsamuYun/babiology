import Link from "next/link";

type FeaturedImage = {
  className: string;
  corner: string;
  caption: string;
  size: string;
};

const featuredHero: FeaturedImage = {
  className: "ph is-wide",
  corner: "EDITORIAL · 01",
  caption: "请置入：Babiology 团队与代母会面的纪实摄影",
  size: "1920 × 1200"
};

const featuredSideImages: FeaturedImage[] = [
  {
    className: "ph blush",
    corner: "EDITORIAL · 02",
    caption: "洛杉矶办公室细节",
    size: "1:1"
  },
  {
    className: "ph sage",
    corner: "EDITORIAL · 03",
    caption: "实验室器具静物",
    size: "1:1"
  }
];

function FeaturedPlaceholder({ image }: { image: FeaturedImage }) {
  return (
    <div className={image.className}>
      <div className="ph-corner">{image.corner}</div>
      <div className="ph-caption">
        <span>{image.caption}</span>
        <span>{image.size}</span>
      </div>
    </div>
  );
}

export function FeaturedGridSection() {
  return (
    <section className="section">
      <div className="container-wide">
        <div
          className="row row-between"
          style={{ marginBottom: 40, alignItems: "flex-end" }}
        >
          <div>
            <p className="eyebrow">
              <span className="num">05</span>&nbsp; 一些被记录的瞬间
            </p>
            <h2 className="display h-sm" style={{ marginTop: 18 }}>
              看见，是<span className="ital">理解</span>的开始。
            </h2>
          </div>

          <Link className="link-u" href="/stories">
            完整画册 <span className="arrow">→</span>
          </Link>
        </div>

        <div className="featured-grid">
          <div className="big">
            <FeaturedPlaceholder image={featuredHero} />
          </div>
          <div className="side">
            {featuredSideImages.map((image) => (
              <FeaturedPlaceholder image={image} key={image.corner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

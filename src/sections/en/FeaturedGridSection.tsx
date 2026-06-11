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
  caption: "Place photo: Documentary image of the Babiology team meeting a surrogate",
  size: "1920 × 1200"
};

const featuredSideImages: FeaturedImage[] = [
  {
    className: "ph blush",
    corner: "EDITORIAL · 02",
    caption: "Los Angeles office details",
    size: "1:1"
  },
  {
    className: "ph sage",
    corner: "EDITORIAL · 03",
    caption: "Laboratory still life",
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
              <span className="num">05</span>&nbsp; RECORDED MOMENTS
            </p>
            <h2 className="display h-sm" style={{ marginTop: 18 }}>
              Seeing is where <span className="ital">understanding</span> begins.
            </h2>
          </div>

          <Link className="link-u" href="/stories">
            Full gallery <span className="arrow">→</span>
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

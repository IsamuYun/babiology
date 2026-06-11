import Link from "next/link";

type StoryImage = {
  className: string;
  corner: string;
  caption: string;
  size: string;
};

const storyImages: StoryImage[] = [
  {
    className: "ph is-tall blush",
    corner: "FAMILY · 01",
    caption: "Place photo: The Tan family holding their newborn at a Los Angeles hospital",
    size: "1200 × 1600"
  },
  {
    className: "ph small",
    corner: "DETAIL",
    caption: "Close-up of the baby's hand",
    size: "4:5"
  }
];

function StoryImagePlaceholder({ image }: { image: StoryImage }) {
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

function StoryAttribution() {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--rose)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-display)",
          fontSize: 20,
          color: "#fff"
        }}
      >
        T
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
          The Tan family
        </div>
        <div
          className="muted"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}
        >
          Shanghai → Los Angeles · 2024
        </div>
      </div>
    </div>
  );
}

export function StorySection() {
  return (
    <section className="section is-sunk">
      <div className="container-wide">
        <p className="eyebrow">
          <span className="num">04</span>&nbsp; CLIENT STORIES
        </p>
        <div className="story" style={{ marginTop: 48 }}>
          <div className="img-stack">
            {storyImages.map((image) => (
              <StoryImagePlaceholder image={image} key={image.corner} />
            ))}
          </div>

          <div>
            <p className="pull">
              Babiology turned an unfamiliar journey
              <br />
              into a memory we return to again and again.
            </p>
            <div className="stack-4" style={{ marginTop: 40 }}>
              <StoryAttribution />
              <p className="body muted" style={{ marginTop: 8 }}>
                From our first hesitation to the moment we held our daughter Amy 14 months later, the Babiology team felt like an extension of our family, taking care of every medical, legal, and daily-life detail.
              </p>
              <Link className="link-u" href="/stories">
                Read more family stories <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    caption: "请置入：Tan 一家在洛杉矶医院抱起新生儿的照片",
    size: "1200 × 1600"
  },
  {
    className: "ph small",
    corner: "DETAIL",
    caption: "婴儿手部特写",
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
          Tan 一家
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
          <span className="num">04</span>&nbsp; 客户故事 · STORIES
        </p>
        <div className="story" style={{ marginTop: 48 }}>
          <div className="img-stack">
            {storyImages.map((image) => (
              <StoryImagePlaceholder image={image} key={image.corner} />
            ))}
          </div>

          <div>
            <p className="pull">
              Babiology 让原本陌生的旅程，
              <br />
              变成一段我们想反复回忆的时光。
            </p>
            <div className="stack-4" style={{ marginTop: 40 }}>
              <StoryAttribution />
              <p className="body muted" style={{ marginTop: 8 }}>
                从最初的犹豫，到 14
                个月后接到女儿艾米的那一刻，Babiology
                的团队几乎是我们的延伸——医疗、法律、生活，所有细节都被妥帖照看。
              </p>
              <Link className="link-u" href="/stories">
                阅读更多家庭故事 <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

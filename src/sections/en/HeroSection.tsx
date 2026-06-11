"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import heroImage1 from "@/src/assets/home/hero/hero-1.png";
import heroImage2 from "@/src/assets/home/hero/hero-2.png";
import heroImage3 from "@/src/assets/home/hero/hero-3.png";
import heroImage4 from "@/src/assets/home/hero/hero-4.png";

const heroStats = [
  { label: "FOUNDED", value: "2012" },
  { label: "FAMILIES SERVED", value: "1,240+" },
  { label: "LIVE BIRTHS · 2026", value: "186" }
];

const heroTitleImages: Array<{
  src: StaticImageData;
  label: string;
}> = [
  { src: heroImage1, label: "Hero image 1" },
  { src: heroImage2, label: "Hero image 2" },
  { src: heroImage3, label: "Hero image 3" },
  { src: heroImage4, label: "Hero image 4" }
];

const heroCarouselCss = `
  .hero-zoom-title {
    font-size: 0;
    line-height: 0;
    max-width: 940px;
  }

  .hero-carousel-stack {
    max-width: 940px;
    position: relative;
  }

  .hero-image-carousel {
    display: block;
    position: relative;
    inline-size: min(100%, 940px);
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border: 1px solid var(--rule);
    border-radius: 8px;
    background: var(--bg-sunk);
    box-shadow: 0 28px 70px color-mix(in srgb, var(--fg) 14%, transparent);
    isolation: isolate;
  }

  .hero-carousel-slide {
    position: absolute;
    inset: 0;
    transform-origin: center;
    opacity: 0;
  }

  .hero-carousel-slide.is-active {
    z-index: 2;
    animation: hero-carousel-zoom-in 720ms var(--ease) both;
  }

  .hero-carousel-slide.is-outgoing {
    z-index: 1;
    animation: hero-carousel-zoom-out 720ms var(--ease) both;
  }

  .hero-carousel-slide img {
    object-fit: cover;
  }

  .hero-carousel-controls {
    position: absolute;
    left: 50%;
    bottom: 18px;
    z-index: 4;
    display: flex;
    align-items: center;
    transform: translateX(-50%);
    padding: 8px;
    border: 1px solid color-mix(in srgb, var(--bg) 72%, transparent);
    border-radius: 8px;
    background: color-mix(in srgb, var(--bg) 78%, transparent);
    backdrop-filter: blur(14px);
    box-shadow: 0 14px 36px color-mix(in srgb, var(--fg) 16%, transparent);
  }

  .hero-carousel-thumbs {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }

  .hero-carousel-thumb {
    width: 64px;
    height: 48px;
    border: 1px solid var(--rule);
    border-radius: 4px;
    background: var(--bg-sunk);
    padding: 0;
    overflow: hidden;
    position: relative;
    opacity: 0.62;
    transition:
      opacity 0.25s var(--ease),
      border-color 0.25s var(--ease),
      box-shadow 0.25s var(--ease),
      transform 0.25s var(--ease);
  }

  .hero-carousel-thumb:hover {
    opacity: 1;
    border-color: var(--fg);
    transform: translateY(-1px);
  }

  .hero-carousel-thumb img {
    object-fit: cover;
  }

  .hero-carousel-thumb.is-active {
    opacity: 1;
    border-color: var(--accent);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 28%, transparent);
  }

  @keyframes hero-carousel-zoom-in {
    0% {
      filter: blur(1.2rem);
      opacity: 0;
      transform: scale(0.86);
    }

    100% {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes hero-carousel-zoom-out {
    0% {
      filter: blur(0);
      opacity: 1;
      transform: scale(1);
    }

    100% {
      filter: blur(1rem);
      opacity: 0;
      transform: scale(1.16);
    }
  }

  @media (max-width: 720px) {
    .hero-carousel-stack,
    .hero-zoom-title,
    .hero-image-carousel {
      max-width: none;
    }

    .hero-carousel-controls {
      bottom: 12px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-carousel-slide.is-active,
    .hero-carousel-slide.is-outgoing {
      animation: none !important;
      filter: none !important;
      transform: none !important;
    }

    .hero-carousel-slide.is-active {
      opacity: 1 !important;
    }

    .hero-carousel-slide.is-outgoing {
      opacity: 0 !important;
    }
  }
`;

function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const showImage = useCallback(
    (index: number) => {
      const nextIndex =
        (index + heroTitleImages.length) % heroTitleImages.length;

      if (nextIndex === activeIndex) return;

      setOutgoingIndex(activeIndex);
      setActiveIndex(nextIndex);
      setAnimationKey((key) => key + 1);
    },
    [activeIndex]
  );

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setOutgoingIndex(null), 720);

    return () => window.clearTimeout(timeoutId);
  }, [animationKey]);

  return (
    <div className="hero-carousel-stack">
      <h1
        aria-label="Your family's story begins here, gently."
        className="display h-xl hero-zoom-title"
      >
        <span className="hero-image-carousel" aria-hidden="true">
          {outgoingIndex !== null ? (
            <span
              className="hero-carousel-slide is-outgoing"
              key={`outgoing-${animationKey}`}
            >
              <Image
                alt=""
                fill
                sizes="(max-width: 960px) 100vw, 62vw"
                src={heroTitleImages[outgoingIndex].src}
              />
            </span>
          ) : null}

          <span
            className="hero-carousel-slide is-active"
            key={`active-${activeIndex}-${animationKey}`}
          >
            <Image
              alt=""
              fill
              priority={activeIndex === 0}
              sizes="(max-width: 960px) 100vw, 62vw"
              src={heroTitleImages[activeIndex].src}
            />
          </span>
        </span>
      </h1>

      <div className="hero-carousel-controls" aria-label="Home image carousel">
        <div className="hero-carousel-thumbs">
          {heroTitleImages.map((image, index) => (
            <button
              aria-label={`Show ${image.label}`}
              className={`hero-carousel-thumb${
                index === activeIndex ? " is-active" : ""
              }`}
              key={image.label}
              onClick={() => showImage(index)}
              title={image.label}
              type="button"
            >
              <Image
                alt=""
                fill
                sizes="64px"
                src={image.src}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <>
      <style>{heroCarouselCss}</style>
      <section className="hero">
        <div className="container-wide">
          <p className="eyebrow">
            <span className="num">01</span>&nbsp; BABIOLOGY · SURROGACY · SINCE · 2012—
          </p>

          <div className="hero-grid" style={{ marginTop: 36 }}>
            <HeroImageCarousel />

            <div className="meta">
              <p className="quote">
                &quot;We walk with every family, from the first consultation and medical matching to cross-border legal coordination and the day your child comes safely home.&quot;
              </p>
              <p
                className="muted"
                style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}
              >
                Babiology is a high-touch surrogacy and egg donation agency. For sixteen years, we have helped families from 32 countries welcome new life with clinical rigor and deeply human care.
              </p>
            </div>
          </div>

          <div className="hero-foot">
            {heroStats.map((stat) => (
              <div className="pair" key={stat.label}>
                <span className="k">{stat.label}</span>
                <span className="v">{stat.value}</span>
              </div>
            ))}

            <div className="pair ctas" style={{ gridColumn: 4 }}>
              <span />
              <div className="row" style={{ gap: 10 }}>
                <Link className="btn is-solid" href="/contact">
                  Book a consultation <span className="arrow">→</span>
                </Link>
                <Link className="btn" href="/how-it-works">
                  Explore the process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

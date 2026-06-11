const marqueeItems = [
  "Surrogacy",
  "Egg Donation",
  "Embryology",
  "Legal Counsel",
  "Psychological Care",
  "Newborn Concierge"
];

const repeatedMarqueeItems = [...marqueeItems, ...marqueeItems];

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {repeatedMarqueeItems.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

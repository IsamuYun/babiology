type PressMention = {
  outlet: string;
  year: string;
};

const pressMentions: PressMention[] = [
  { outlet: "Vogue", year: "'24" },
  { outlet: "Bloomberg", year: "'23" },
  { outlet: "南方周末", year: "'24" },
  { outlet: "Forbes", year: "'25" },
  { outlet: "The Cut", year: "'24" }
];

export function PressSection() {
  return (
    <section>
      <div className="container-wide">
        <div className="press">
          <span className="lbl">As mentioned in</span>
          <div className="press-list">
            {pressMentions.map((mention) => (
              <span key={mention.outlet}>
                {mention.outlet}
                <em>{mention.year}</em>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

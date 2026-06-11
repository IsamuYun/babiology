type StatItem = {
  value: string;
  suffix?: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: "98",
    suffix: "%",
    label: "Live birth success rate · Audited 2023-2025 cycle data"
  },
  {
    value: "1,240",
    suffix: "+",
    label: "Families guided to arrival across 32 countries and regions"
  },
  {
    value: "16",
    label: "Years of clinical, legal, and human-centered experience since 2008"
  },
  {
    value: "800",
    suffix: "+",
    label: "Verified donors in our database · Asian, mixed, European, and Latin backgrounds"
  }
];

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="stat">
      <div className="num">
        {stat.value}
        {stat.suffix ? <span className="sup">{stat.suffix}</span> : null}
      </div>
      <div className="lbl">{stat.label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section style={{ padding: 0 }}>
      <div className="container-wide">
        <div className="stats-row">
          {stats.map((stat) => (
            <StatCard key={`${stat.value}-${stat.label}`} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

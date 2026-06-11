type StatItem = {
  value: string;
  suffix?: string;
  label: string;
};

const stats: StatItem[] = [
  {
    value: "98",
    suffix: "%",
    label: "活产成功率 · 经审计（2023–2025 周期数据）"
  },
  {
    value: "1,240",
    suffix: "+",
    label: "已陪伴抵达的家庭，分布于 32 个国家与地区"
  },
  {
    value: "16",
    label: "年的临床、法律与人文积累，自 2008 起"
  },
  {
    value: "800",
    suffix: "+",
    label: "在库认证捐赠者 · 亚裔、混血、欧裔、拉美"
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

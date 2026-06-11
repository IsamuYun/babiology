type PracticeValue = {
  index: string;
  title: string;
  description: string;
};

const practiceValues: PracticeValue[] = [
  {
    index: "01",
    title: "临床优先",
    description: "仅与通过 ASRM / SART 认证的生殖中心合作；活产率每季度公开审计。"
  },
  {
    index: "02",
    title: "透明合约",
    description:
      "统一定价、阶段化付款、可终止条款——所有费用结构在第一周咨询中即被清晰说明。"
  },
  {
    index: "03",
    title: "双语陪伴",
    description: "每个家庭配备中、英双语项目经理，跨四个时区提供 24 小时响应。"
  },
  {
    index: "04",
    title: "心理同行",
    description: "从准父母到代母，每一位都获得不少于 8 次专业心理咨询陪护。"
  }
];

function PracticeValueRow({ value }: { value: PracticeValue }) {
  return (
    <div className="value-row">
      <span className="num">{value.index}</span>
      <div>
        <h4>{value.title}</h4>
        <p>{value.description}</p>
      </div>
    </div>
  );
}

export function PracticeSection() {
  return (
    <section className="section is-dark">
      <div className="container-wide">
        <div className="practice">
          <div>
            <p className="eyebrow" style={{ color: "var(--rose)" }}>
              <span className="num" style={{ color: "var(--rose)" }}>
                07
              </span>
              &nbsp; 我们的执业 · OUR PRACTICE
            </p>
            <h2 className="display h-md" style={{ marginTop: 28 }}>
              一份关于<span className="ital">人</span>的
              <br />
              承诺。
            </h2>
            <p
              className="body"
              style={{ color: "var(--fg-on-dark-muted)", marginTop: 28 }}
            >
              我们相信，技术只是入口。真正抵达家庭的，是十六年来在医学、伦理、心理与法律之间反复打磨的判断力。
            </p>
          </div>

          <div>
            {practiceValues.map((value) => (
              <PracticeValueRow key={value.index} value={value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

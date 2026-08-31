/**
 * 首页文案 —— 中英双语。
 * 两种语言共用 src/sections/homepage 下的同一套组件，只有文案不同。
 * 英文站暂无独立子页面，内链沿用与中文站相同的路由（与 src/sections/en 一致）。
 */

export type Locale = "zh" | "en";

export type HomeContent = {
  locale: Locale;
  /** 语言切换的目标路径与文案 */
  altLocale: { href: string; label: string };
  notice: { text: string; link: string };
  nav: { links: Array<{ href: string; label: string }>; cta: string };
  hero: {
    alt: string;
    title: string[];
    body: string;
    primary: string;
    secondary: string;
  };
  approach: {
    /** 48×48 logo 旁边的标签 */
    label: string;
    title: string[];
    lede: string;
    body: string;
    primary: string;
    secondary: string;
    photos: Array<{ src: string; alt: string; width: number; height: number }>;
  };
  testimonial: {
    quote: string[];
    body: string;
    by: string;
    photos: Array<{ src: string; alt: string; width: number; height: number }>;
  };
  support: {
    eyebrow: string;
    title: string[];
    pillars: Array<{ title: string; body: string }>;
    primary: string;
    secondary: string;
  };
  stat: { figure: string; unit: string; title: string; body: string };
  journey: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: Array<{ n: string; title: string; body: string }>;
    cta: string;
  };
  articles: {
    eyebrow: string;
    title: string[];
    lede: string;
    photoLabel: string;
    more: string;
    items: Array<{ kicker: string; title: string; body: string }>;
  };
  calendar: {
    eyebrow: string;
    title: string;
    body: string;
    privacy: string;
    familyName: { label: string; placeholder: string };
    givenName: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    submit: string;
  };
  quiz: {
    eyebrow: string;
    title: string;
    time: string;
    body: string;
    cta: string;
  };
  gates: Array<{ href: string; title: string; body: string; go: string }>;
  footer: {
    /** 页脚品牌卡片：主题色底 + 白色标志 + 品牌名 + 地址 + CTA */
    brandCard: {
      /** 品牌名首行 */
      name: string;
      /** 分隔线下方的第二行 */
      sub: string;
      address: string[];
      cta: { label: string; href: string };
    };
    tagline: string[];
    columns: Array<{ title: string; items: Array<[href: string, label: string]> }>;
    copyright: string;
    legal: string;
    draftNote: string;
  };
};

const zh: HomeContent = {
  locale: "zh",
  altLocale: { href: "/en", label: "English" },
  notice: {
    text: "首次咨询免费 · 匹配成功前不收取任何服务费 · ",
    link: "先做 3 分钟评估 →"
  },
  nav: {
    links: [
      { href: "#approach", label: "我们的方式" },
      { href: "#support", label: "保障与支持" },
      { href: "#journey", label: "服务流程" },
      { href: "#articles", label: "科普与资讯" }
    ],
    cta: "开启旅程"
  },
  hero: {
    alt: "日落麦田中，准父母与代孕妈妈并肩而立",
    title: ["让爱延续，", "让家完整"],
    body: "代孕与卵子捐赠的每一步，都有中英双语顾问、医疗团队与法律顾问同行。你不需要独自面对任何一个决定。",
    primary: "开启旅程",
    secondary: "了解我们的方式"
  },
  approach: {
    label: "Our Approach",
    title: ["你不会在别处", "得到这样的照护"],
    lede: "因为我们团队里的每一个人，都亲历过一段求子之路。我们知道等待一通电话是什么感觉，也知道一句解释不清的医学名词能让人失眠多久。",
    body: "从第一次咨询到宝宝回家，你会有一位固定的专属顾问——不是客服轮班，而是同一个人，记得你的病史、你的顾虑、你上周提过的那个问题。医疗、法律、心理、跨境行程，由我们串联，你只需要做决定。",
    primary: "我们的方式",
    secondary: "先做评估 →",
    photos: [
      {
        src: "/assets/our-approach-2.jpg",
        alt: "准父母与代孕妈妈坐在一起，面前的茶几上放着待签的文件",
        width: 600,
        height: 400
      },
      {
        src: "/assets/our-approach-1.jpg",
        alt: "医生指着屏幕上的超声影像，向孕妇讲解胎儿情况",
        width: 736,
        height: 460
      }
    ]
  },
  testimonial: {
    quote: ["「我始终被告知、被尊重、", "也被好好照顾。」"],
    body: "作为一名护士，我原以为没有什么能比接生更打动我。直到我成为那个让别人第一次抱起孩子的人——那是我人生中最深刻的时刻之一。",
    by: "— 代孕妈妈 Sarah",
    photos: [
      {
        src: "/assets/testimonial-1.jpg",
        alt: "海边礁石旁的孕妇，透过一双手比出的心形望向远方",
        width: 700,
        height: 560
      },
      {
        src: "/assets/testimonial-2.jpg",
        alt: "两位女性并肩而立，手里举着一串超声照片，笑着看向镜头",
        width: 700,
        height: 560
      }
    ]
  },
  support: {
    eyebrow: "Compensation & Support",
    title: ["给出生命的礼物，", "也让自己的人生更完整"],
    pillars: [
      {
        title: "透明的补偿",
        body: "基础补偿与各项津贴在签约前全部书面列明，没有中途追加，没有含糊条款。每一笔支出你都看得见。"
      },
      {
        title: "全面的保障",
        body: "月度津贴、误工补偿、育儿支持、健康管理、心理咨询与月度互助小组，覆盖整个周期与产后恢复期。"
      },
      {
        title: "可调整的方案",
        body: "没有两段旅程是相同的。补偿结构可以按你的实际情况调整——你始终拥有选择权。"
      }
    ],
    primary: "查看补偿与保障",
    secondary: "了解服务流程"
  },
  stat: {
    figure: "97",
    unit: "%",
    title: "真诚的关系，才走得长久",
    body: "97% 的代孕妈妈在旅程结束后，仍与准父母保持着积极而长久的联系。我们从不撮合“交易”，我们促成的是两个家庭之间真实的信任。"
  },
  journey: {
    eyebrow: "Your Journey with Babiology",
    title: "踏出第一步",
    lede: "关于安全、安心、有意义地开始这段旅程，你需要知道的每一件事。整个周期通常为 12–18 个月。",
    steps: [
      {
        n: "01",
        title: "免费咨询",
        body: "30 分钟一对一沟通，了解你的情况与期待，说明流程、时间与费用结构。不收费，也不承诺任何你还没准备好的事。"
      },
      {
        n: "02",
        title: "医学与心理评估",
        body: "由合作生殖中心完成体检、传染病筛查与心理评估；准父母同步完成促排或胚胎评估。"
      },
      {
        n: "03",
        title: "双向匹配",
        body: "依据价值观、沟通方式与期待进行匹配，双方视频见面后共同决定。匹配成功前不产生任何服务费。"
      },
      {
        n: "04",
        title: "法律与移植周期",
        body: "双方各自聘请独立律师签署协议，随后进入用药与胚胎移植周期，全程有顾问陪同就诊。"
      },
      {
        n: "05",
        title: "孕期与迎接新生",
        body: "产检陪同、跨境行程与保险安排、出生证明与法律手续，直到宝宝平安回家。"
      }
    ],
    cta: "完整流程说明"
  },
  articles: {
    eyebrow: "Resources",
    title: ["把复杂的事，", "讲成人话"],
    lede: "医学名词、法律条款、跨境流程——我们把它们拆开，一篇一篇讲清楚。",
    photoLabel: "文章封面",
    more: "阅读全文 →",
    items: [
      {
        kicker: "科普",
        title: "试管婴儿周期日历：移植前后到底会发生什么",
        body: "从降调、用药到移植与验孕，逐周拆解一个完整的用药移植周期，附常见副作用与应对方式。"
      },
      {
        kicker: "流程",
        title: "如何成为一名代孕妈妈？基本条件与筛查全解",
        body: "年龄、生育史、体检指标、心理评估——把申请门槛与筛查环节一次讲明白。"
      },
      {
        kicker: "故事",
        title: "那些在这段旅程里，被重新认识的自己",
        body: "三位代孕妈妈讲述这段经历如何改变了她们对身体、家庭与自我价值的理解。"
      }
    ]
  },
  calendar: {
    eyebrow: "Free Download",
    title: "试管周期日历",
    body: "下载一份完整的示例周期日历，看清每一个节点：什么时候用药、什么时候复查、什么时候移植、什么时候验孕。中英双语对照。",
    privacy: "留下邮箱即可获取，我们不会将你的信息用于任何其他用途。",
    familyName: { label: "姓", placeholder: "王" },
    givenName: { label: "名", placeholder: "小雨" },
    email: { label: "邮箱", placeholder: "you@example.com" },
    submit: "立即获取"
  },
  quiz: {
    eyebrow: "Eligibility",
    title: "先看看你是否符合条件",
    time: "预计用时 3 分钟",
    body: "快速、审慎、合乎伦理。这份评估是正式筛查的第一步，它保护的是这段关系里的每一个人。",
    cta: "开始评估"
  },
  gates: [
    {
      href: "/surrogacy",
      title: "我想成为准父母",
      body: "了解代孕与卵子捐赠方案、周期与费用结构，以及跨境流程如何安排。",
      go: "准父母入口 →"
    },
    {
      href: "/donors",
      title: "我想成为代孕妈妈",
      body: "了解申请条件、筛查流程、补偿与保障，以及整个周期里你会得到的支持。",
      go: "爱心妈妈入口 →"
    }
  ],
  footer: {
    brandCard: {
      name: "BABIOLOGY",
      sub: "FAMILY",
      address: ["#212-214 930 Roosevelt", "Irvine, CA 92620"],
      cta: { label: "预约咨询", href: "/contact" }
    },
    tagline: ["每一个细节都重要，", "因为你很重要。"],
    columns: [
      {
        title: "关于",
        items: [
          ["#approach", "我们的方式"],
          ["#support", "保障与支持"],
          ["#journey", "服务流程"],
          ["#articles", "科普与资讯"]
        ]
      },
      {
        title: "服务",
        items: [
          ["/surrogacy", "代孕计划"],
          ["/egg-donation", "卵子捐赠"],
          ["/stories", "真实案例"],
          ["/faq", "常见问题"]
        ]
      },
      {
        title: "联系",
        items: [
          ["/contact", "预约咨询"],
          ["/contact", "info@babiologyfamily.com"],
          ["/contact", "微信咨询"],
          ["/en", "English site"]
        ]
      }
    ],
    copyright: "© 2026 Babiology",
    legal: "服务条款 · 隐私政策",
    draftNote: "图片为占位符，文案待确认"
  }
};

const en: HomeContent = {
  locale: "en",
  altLocale: { href: "/", label: "中文" },
  notice: {
    text: "Free first consultation · No agency fees until you're matched · ",
    link: "Take the 3-minute quiz →"
  },
  nav: {
    links: [
      { href: "#approach", label: "Our Approach" },
      { href: "#support", label: "Compensation" },
      { href: "#journey", label: "How It Works" },
      { href: "#articles", label: "Resources" }
    ],
    cta: "Start your journey"
  },
  hero: {
    alt: "Intended parents and their surrogate standing together in a field at sunset",
    title: ["Carry the love", "forward"],
    body: "Every step of surrogacy and egg donation, walked with a bilingual coordinator, a medical team, and legal counsel beside you. No decision is one you face alone.",
    primary: "Start your journey",
    secondary: "Our approach"
  },
  approach: {
    label: "Our Approach",
    title: ["You won't find this", "level of care elsewhere"],
    lede: "Because every person on our team has lived through a fertility journey of their own. We know what waiting for a phone call feels like — and how long one unexplained medical term can keep you awake.",
    body: "From your first consultation to the day your baby comes home, you have one dedicated coordinator. Not a rotating support queue — the same person, who remembers your history, your worries, the question you asked last week. Medical, legal, emotional, cross-border logistics: we connect them. You only have to decide.",
    primary: "Our approach",
    secondary: "Take the quiz →",
    photos: [
      {
        src: "/assets/our-approach-2.jpg",
        alt: "Intended parents and their surrogate seated together, paperwork on the table between them",
        width: 600,
        height: 400
      },
      {
        src: "/assets/our-approach-1.jpg",
        alt: "A doctor pointing to an ultrasound on screen, explaining it to the expectant mother",
        width: 736,
        height: 460
      }
    ]
  },
  testimonial: {
    quote: ["“I always felt informed,", "respected, and supported.”"],
    body: "As an L&D nurse, I didn't think anything could move me more than delivering a baby. Then I became the person who let someone hold their child for the first time — one of the most profound moments of my life.",
    by: "— Surrogate Sarah",
    photos: [
      {
        src: "/assets/testimonial-1.jpg",
        alt: "An expectant mother on a rocky shoreline, framed by two hands forming a heart",
        width: 700,
        height: 560
      },
      {
        src: "/assets/testimonial-2.jpg",
        alt: "Two women side by side, holding up a strip of ultrasound photos and smiling at the camera",
        width: 700,
        height: 560
      }
    ]
  },
  support: {
    eyebrow: "Compensation & Support",
    title: ["Give the gift of life,", "and find new meaning in yours"],
    pillars: [
      {
        title: "Transparent compensation",
        body: "Base compensation and every allowance is written out before you sign. No mid-journey additions, no vague clauses. You can see where every dollar goes."
      },
      {
        title: "Holistic benefits",
        body: "Monthly allowance, lost wages, childcare, a wellness package, mental health support and monthly support groups — through the whole cycle and postpartum recovery."
      },
      {
        title: "Fully customizable",
        body: "No two journeys are the same. Your compensation package can be shaped around your actual circumstances — you always have a choice."
      }
    ],
    primary: "Compensation & benefits",
    secondary: "How it works"
  },
  stat: {
    figure: "97",
    unit: "%",
    title: "Real connections make real relationships",
    body: "97% of our surrogates still report a positive, lasting relationship with their intended parents after the journey ends. We don't broker transactions — we build trust between two families."
  },
  journey: {
    eyebrow: "Your Journey with Babiology",
    title: "Step into surrogacy",
    lede: "Everything you need to know about beginning this journey safely, confidently, and meaningfully. A full cycle typically runs 12–18 months.",
    steps: [
      {
        n: "01",
        title: "Free consultation",
        body: "A 30-minute one-on-one conversation about your situation and hopes, with a clear walkthrough of the process, timeline, and costs. No fee, and no promises about anything you're not ready for."
      },
      {
        n: "02",
        title: "Medical & psychological screening",
        body: "Physical exam, infectious disease screening, and psychological evaluation at a partner fertility clinic. Intended parents complete stimulation or embryo review in parallel."
      },
      {
        n: "03",
        title: "Two-way matching",
        body: "Matched on values, communication style, and expectations — then both sides meet by video and decide together. No agency fee until a match is confirmed."
      },
      {
        n: "04",
        title: "Legal & transfer cycle",
        body: "Each party retains independent counsel and signs the agreement, then the medication and embryo transfer cycle begins, with a coordinator at every appointment."
      },
      {
        n: "05",
        title: "Pregnancy & welcoming the baby",
        body: "Prenatal visits, cross-border travel and insurance, birth certificates and legal filings — through to the day your baby is safely home."
      }
    ],
    cta: "What to expect"
  },
  articles: {
    eyebrow: "Resources",
    title: ["Complicated things,", "explained plainly"],
    lede: "Medical terminology, legal clauses, cross-border logistics — we take them apart one article at a time.",
    photoLabel: "Article cover",
    more: "Read more →",
    items: [
      {
        kicker: "Explainer",
        title: "The IVF calendar: what actually happens before and after transfer",
        body: "Week by week through a full medicated transfer cycle — suppression, medications, transfer, and the beta — with common side effects and how to handle them."
      },
      {
        kicker: "Process",
        title: "How do I become a surrogate? Requirements and screening, explained",
        body: "Age, birth history, health markers, psychological evaluation — the eligibility bar and the screening steps, laid out in full."
      },
      {
        kicker: "Stories",
        title: "The women who met themselves again on this journey",
        body: "Three surrogates on how the experience changed what they understood about their bodies, their families, and their own worth."
      }
    ]
  },
  calendar: {
    eyebrow: "Free Download",
    title: "IVF calendar",
    body: "Download a complete sample cycle calendar and see every milestone: when medications start, when monitoring happens, when transfer takes place, when you test. Bilingual, side by side.",
    privacy: "Leave your email and it's yours. We won't use your information for anything else.",
    familyName: { label: "Last name", placeholder: "Chen" },
    givenName: { label: "First name", placeholder: "Alex" },
    email: { label: "Email", placeholder: "you@example.com" },
    submit: "Access now"
  },
  quiz: {
    eyebrow: "Eligibility",
    title: "Find out if you qualify",
    time: "Estimated time: 3 minutes",
    body: "Quick, careful, and ethical. This quiz starts the screening process — it protects everyone in the relationship.",
    cta: "Take the quiz"
  },
  gates: [
    {
      href: "/surrogacy",
      title: "I want to become a parent",
      body: "Surrogacy and egg donation programs, timelines and cost structure, and how cross-border journeys are arranged.",
      go: "For parents →"
    },
    {
      href: "/donors",
      title: "I want to become a surrogate",
      body: "Requirements, screening, compensation and benefits, and the support you'll have through the whole cycle.",
      go: "For surrogates →"
    }
  ],
  footer: {
    brandCard: {
      name: "BABIOLOGY",
      sub: "FAMILY",
      address: ["#212-214 930 Roosevelt", "Irvine, CA 92620"],
      cta: { label: "Contact us", href: "/en/contact" }
    },
    tagline: ["Every detail matters.", "Because you do."],
    columns: [
      {
        title: "About",
        items: [
          ["#approach", "Our approach"],
          ["#support", "Compensation"],
          ["#journey", "How it works"],
          ["#articles", "Resources"]
        ]
      },
      {
        title: "Services",
        items: [
          ["/surrogacy", "Surrogacy"],
          ["/egg-donation", "Egg donation"],
          ["/stories", "Stories"],
          ["/faq", "FAQ"]
        ]
      },
      {
        title: "Contact",
        items: [
          ["/en/contact", "Book a consultation"],
          ["/en/contact", "info@babiologyfamily.com"],
          ["/en/contact", "WeChat"],
          ["/", "中文网站"]
        ]
      }
    ],
    copyright: "© 2026 Babiology",
    legal: "Terms & Conditions · Privacy Policy",
    draftNote: "Placeholder imagery, copy pending approval"
  }
};

export const homeContent: Record<Locale, HomeContent> = { zh, en };

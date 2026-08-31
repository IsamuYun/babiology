/**
 * 联系页文案 —— 中英双语，共用 src/sections/contact 下的同一套组件。
 * 联系方式沿用旧版 content/legacy-pages/contact.html 里已有的真实信息。
 * 微信二维码只在中文版出现（英文版 wechatQr 为 null）。
 */

import type { Locale } from "@/src/sections/homepage/content";

export type ContactField = {
  id: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  /** 占满两列 */
  full?: boolean;
  options?: string[];
  autoComplete?: string;
};

export type ContactContent = {
  locale: Locale;
  /** 语言切换目标（指向另一语言的联系页） */
  altLocaleHref: string;
  /** 站内锚点前缀，指回对应语言的首页 */
  anchorBase: string;
  eyebrow: string;
  title: string[];
  lede: string;
  form: {
    label: string;
    fields: ContactField[];
    submit: string;
    note: string;
  };
  channels: {
    label: string;
    items: Array<{
      kicker: string;
      value: string;
      href?: string;
      note: string;
    }>;
  };
  wechatQr: { label: string; caption: string; alt: string } | null;
  promise: { label: string; items: string[] };
};

const zh: ContactContent = {
  locale: "zh",
  altLocaleHref: "/en/contact",
  anchorBase: "/",
  eyebrow: "Start the Conversation",
  title: ["从一次私密的", "90 分钟咨询开始"],
  lede: "填写下面的表单，我们会在 24 小时内回复，并为你匹配最合适的双语顾问。整个对话完全保密、零承诺。",
  form: {
    label: "咨询表单",
    fields: [
      {
        id: "salutation",
        label: "称呼",
        type: "select",
        options: ["女士", "先生", "不透露"]
      },
      {
        id: "name",
        label: "姓名",
        type: "text",
        placeholder: "王小雨",
        required: true,
        autoComplete: "name"
      },
      {
        id: "email",
        label: "邮箱",
        type: "email",
        placeholder: "you@example.com",
        required: true,
        autoComplete: "email"
      },
      {
        id: "phone",
        label: "手机（含国家码）",
        type: "tel",
        placeholder: "+86 138 0000 0000",
        required: true,
        autoComplete: "tel"
      },
      {
        id: "city",
        label: "所在城市",
        type: "text",
        placeholder: "上海",
        autoComplete: "address-level2"
      },
      {
        id: "household",
        label: "家庭情况",
        type: "select",
        options: ["异性夫妇", "同性夫妇", "单身父亲", "单身母亲", "暂不便透露"]
      },
      {
        id: "service",
        label: "意向服务",
        type: "select",
        options: ["代孕", "卵子捐赠", "胚胎冷冻", "暂时不确定"]
      },
      {
        id: "budget",
        label: "预算区间",
        type: "select",
        options: [
          "USD 60–100k",
          "USD 100–150k",
          "USD 150–200k",
          "USD 200k+",
          "暂未规划"
        ]
      },
      {
        id: "timing",
        label: "期望开始",
        type: "select",
        options: ["3 个月内", "3–6 个月", "6–12 个月", "仅了解"]
      },
      {
        id: "channel",
        label: "沟通偏好",
        type: "select",
        options: ["中文 · 邮件 + 微信", "中文 · 仅邮件", "中文 · 电话", "English · Email"]
      },
      {
        id: "notes",
        label: "想让我们知道的事",
        type: "textarea",
        placeholder: "任何背景、顾虑或已经做过的检查——写多写少都可以。",
        full: true
      }
    ],
    submit: "提交咨询请求",
    note: "完全保密 · 不会进入任何邮件名单 · 24 小时内人工回复"
  },
  channels: {
    label: "直接联系",
    items: [
      {
        kicker: "电话 · Direct",
        value: "+1 (917) 912-8976",
        href: "tel:+19179128976",
        note: "周一至周五 09:00–19:00（美西时间）"
      },
      {
        kicker: "邮件 · Email",
        value: "info@babiologyfamily.com",
        href: "mailto:info@babiologyfamily.com",
        note: "通常 4 小时内回复"
      },
      {
        kicker: "微信 · WeChat",
        value: "Babiology Connie",
        note: "中文顾问 · 大中华区"
      },
      {
        kicker: "办公室 · Offices",
        value: "#212-214 930 Roosevelt, Irvine, CA 92620",
        note: "跨时区排班，总有人在线"
      }
    ]
  },
  wechatQr: {
    label: "扫码加微信",
    caption: "微信扫一扫，直接和中文顾问对话。",
    alt: "Babiology 中文顾问的微信二维码"
  },
  promise: {
    label: "我们的承诺",
    items: [
      "完全保密，不进入任何邮件名单",
      "24 小时内由真人回复",
      "首次咨询免费，零承诺",
      "支持中、英、俄、西四种语言"
    ]
  }
};

const en: ContactContent = {
  locale: "en",
  altLocaleHref: "/contact",
  anchorBase: "/en",
  eyebrow: "Start the Conversation",
  title: ["It begins with one", "private 90-minute call"],
  lede: "Fill in the form below and we'll reply within 24 hours, matched with the coordinator best suited to you. The whole conversation is confidential, with no commitment.",
  form: {
    label: "Enquiry form",
    fields: [
      {
        id: "salutation",
        label: "Salutation",
        type: "select",
        options: ["Ms.", "Mr.", "Prefer not to say"]
      },
      {
        id: "name",
        label: "Full name",
        type: "text",
        placeholder: "Alex Chen",
        required: true,
        autoComplete: "name"
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
        required: true,
        autoComplete: "email"
      },
      {
        id: "phone",
        label: "Phone (with country code)",
        type: "tel",
        placeholder: "+1 555 000 0000",
        required: true,
        autoComplete: "tel"
      },
      {
        id: "city",
        label: "City",
        type: "text",
        placeholder: "Irvine",
        autoComplete: "address-level2"
      },
      {
        id: "household",
        label: "Household",
        type: "select",
        options: [
          "Different-sex couple",
          "Same-sex couple",
          "Single father",
          "Single mother",
          "Prefer not to say"
        ]
      },
      {
        id: "service",
        label: "Service of interest",
        type: "select",
        options: [
          "Surrogacy",
          "Egg donation",
          "Fertility preservation",
          "Not sure yet"
        ]
      },
      {
        id: "budget",
        label: "Budget range",
        type: "select",
        options: [
          "USD 60–100k",
          "USD 100–150k",
          "USD 150–200k",
          "USD 200k+",
          "Not planned yet"
        ]
      },
      {
        id: "timing",
        label: "Start window",
        type: "select",
        options: [
          "Within 3 months",
          "3–6 months",
          "6–12 months",
          "Just exploring"
        ]
      },
      {
        id: "channel",
        label: "Preferred contact",
        type: "select",
        options: ["Email", "Email + phone", "Phone only", "中文 · 微信"]
      },
      {
        id: "notes",
        label: "Anything we should know",
        type: "textarea",
        placeholder:
          "Any background, concerns, or testing you've already done — as much or as little as you like.",
        full: true
      }
    ],
    submit: "Send enquiry",
    note: "Confidential · Never added to a mailing list · A human replies within 24 hours"
  },
  channels: {
    label: "Reach us directly",
    items: [
      {
        kicker: "Direct",
        value: "+1 (917) 912-8976",
        href: "tel:+19179128976",
        note: "Mon–Fri, 09:00–19:00 PT"
      },
      {
        kicker: "Email",
        value: "info@babiologyfamily.com",
        href: "mailto:info@babiologyfamily.com",
        note: "Usually answered within 4 hours"
      },
      {
        kicker: "WeChat",
        value: "Babiology Connie",
        note: "Mandarin coordinator · Greater China"
      },
      {
        kicker: "Offices",
        value: "#212-214 930 Roosevelt, Irvine, CA 92620",
        note: "Staffed across time zones"
      }
    ]
  },
  wechatQr: null,
  promise: {
    label: "Our promise",
    items: [
      "Confidential — never added to a mailing list",
      "A real person replies within 24 hours",
      "First consultation is free, with no commitment",
      "Support in English, Mandarin, Russian and Spanish"
    ]
  }
};

export const contactContent: Record<Locale, ContactContent> = { zh, en };

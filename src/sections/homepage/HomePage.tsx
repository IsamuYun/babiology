import { ApproachSection } from "./ApproachSection";
import { ArticlesSection } from "./ArticlesSection";
import { CalendarSection } from "./CalendarSection";
import { GatesSection } from "./GatesSection";
import { HeroSection } from "./HeroSection";
import { JourneySection } from "./JourneySection";
import { QuizSection } from "./QuizSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StatSection } from "./StatSection";
import { SupportSection } from "./SupportSection";
import { TestimonialSection } from "./TestimonialSection";
import { homeContent, type Locale } from "./content";

/**
 * 首页 —— 依据 docs/design/band-design.html 品牌规范 v1.1 重制。
 * 信息架构参照 familymakers.com/for-surrogates。
 * 中英文共用这套组件，只切换 src/sections/homepage/content.ts 里的文案。
 * 页面自带 header / footer，全局 NavBar / Footer 在首页路由上不渲染。
 */
export function HomePage({ locale }: { locale: Locale }) {
  const content = homeContent[locale];

  return (
    // 根 layout 的 <html lang> 固定为 zh-CN，这里为英文内容标注语言
    <div className="bb-home" lang={locale === "en" ? "en" : "zh-CN"}>
      <SiteHeader content={content} />

      <main>
        <HeroSection content={content.hero} />
        <ApproachSection content={content.approach} />
        <TestimonialSection content={content.testimonial} />
        <SupportSection content={content.support} />
        <StatSection content={content.stat} />
        <JourneySection content={content.journey} />
        <ArticlesSection content={content.articles} />
        <CalendarSection content={content.calendar} />
        <QuizSection content={content.quiz} />
        <GatesSection content={content.gates} />
      </main>

      <SiteFooter content={content} />
    </div>
  );
}

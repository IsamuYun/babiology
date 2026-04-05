import { ShieldCheck, Stethoscope, HeartHandshake } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6 pt-12">
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop" 
                alt="Medical professional"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100">
              <h4 className="font-bold text-secondary text-lg mb-2">顶级医疗资源</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">合作全球领先的生殖医学中心，确保高成功率。</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-stone-50 rounded-[2rem] border border-stone-100">
              <h4 className="font-bold text-tertiary text-lg mb-2">透明化财务</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">全流程资金信托账户监管，无任何隐形费用支出。</p>
            </div>
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop" 
                alt="Legal office"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">超越期待的全面支持</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-primary border border-stone-100">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">法律合规保障</h4>
                <p className="text-on-surface-variant leading-relaxed">我们聘请资深法律专家团队，为每一份合约和身份文件提供双重审核，确保旅程全程合法合规。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-primary border border-stone-100">
                <Stethoscope size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">24/7 医疗协调</h4>
                <p className="text-on-surface-variant leading-relaxed">无论是例行检查还是紧急情况，我们的协调员24小时在线，同步医疗进度并提供多语言沟通翻译。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center text-primary border border-stone-100">
                <HeartHandshake size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3">全方位情感关怀</h4>
                <p className="text-on-surface-variant leading-relaxed">我们深知准父母的焦虑。专业的心理咨询师为您提供情感疏导，让您以最佳状态迎接新生命的到来。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

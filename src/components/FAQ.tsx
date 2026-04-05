import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: '代孕在法律上是如何保障准父母权益的？',
    answer: '我们通过与目的地国顶尖律所合作，在程序开始前签署严谨的法律合同，并在孩子出生后通过合法的司法判决（Parental Order）或身份公证，确立准父母唯一的法律父母地位。'
  },
  {
    question: '如何确保代孕妈妈的健康和心理状态？',
    answer: '所有代孕妈妈需经过严格的三重筛查：全面的体检确保身体机能极佳、深度的心理评估确保心态成熟，以及详细的背景背调。整个孕期由我们的专业团队全程监护。'
  },
  {
    question: '整个过程大概需要多少费用？',
    answer: '费用取决于所选的医疗方案和目的地国。我们提供透明的阶段性支付计划，涵盖了医疗、代孕补偿、法律、保险及服务费。具体的详细报价单将在初次免费咨询后为您提供。'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">常见问题解答</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-stone-50 rounded-3xl overflow-hidden border border-stone-100/50">
              <button 
                className="w-full flex justify-between items-center p-6 md:p-8 text-left font-bold text-xl hover:bg-stone-100/50 transition-colors"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="pr-4">{faq.question}</span>
                <span className="text-primary flex-shrink-0">
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 text-on-surface-variant leading-relaxed text-lg animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

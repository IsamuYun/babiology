import { MessageSquare, Handshake, Gavel, Baby } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    id: '01',
    title: '初期咨询',
    desc: '深入了解您的家庭需求，提供个性化的初步方案与法律合规性解答。',
    icon: MessageSquare,
    rounded: 'rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl'
  },
  {
    id: '02',
    title: '匹配筛选',
    desc: '严苛筛选代孕妈妈，通过背景调查与医疗评估，确保双方的高度匹配与信任。',
    icon: Handshake,
    rounded: ''
  },
  {
    id: '03',
    title: '医疗与法律',
    desc: '专业的医疗团队执行IVF，同时由顶尖法律团队起草严密的法律协议，保障权益。',
    icon: Gavel,
    rounded: ''
  },
  {
    id: '04',
    title: '迎接新生命',
    desc: '全程陪产协调，协助办理身份证明及回国手续，直至您全家平安团聚。',
    icon: Baby,
    rounded: 'rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl'
  }
];

export default function ProcessGrid() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">为您定制的圆梦之路</h2>
          <p className="text-on-surface-variant text-lg">清晰透明的流程，让您每一步都走得踏实、安心</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 rounded-3xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-10 bg-surface-container-lowest transition-all hover:bg-primary hover:text-on-primary cursor-default`}
            >
              <span className="text-5xl font-black opacity-10 group-hover:opacity-20 mb-8 block transition-opacity">
                {step.id}
              </span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-base leading-relaxed opacity-70 group-hover:opacity-90">
                {step.desc}
              </p>
              <div className="mt-10 text-primary group-hover:text-on-primary transition-colors">
                <step.icon size={32} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

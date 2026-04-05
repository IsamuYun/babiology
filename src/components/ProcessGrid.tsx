import { ClipboardList, Users, ShieldCheck, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: '初步咨询',
    description: '深入了解您的需求、家庭背景及医学史，为您量身定制初步方案。',
    color: 'primary'
  },
  {
    icon: <Users size={32} />,
    title: '精准配对',
    description: '在广泛的候选库中，基于价值观与医学指标，为您寻找最契合的爱心妈妈。',
    color: 'secondary'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: '法律与医疗',
    description: '签署严密的法律协议，并在顶尖生殖医学中心开启胚胎移植与孕期监护。',
    color: 'tertiary'
  },
  {
    icon: <PartyPopper size={32} />,
    title: '圆满诞生',
    description: '全程陪同分娩与法律文件交接，见证奇迹时刻，协助您顺利带宝宝回家。',
    color: 'primary'
  }
];

export default function ProcessGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter text-on-surface">透明专业的服务流程</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            我们将复杂的旅程拆解为四个清晰的阶段，确保每一个步骤都在您的掌控与我们的专业守护之中。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100 rounded-3xl overflow-hidden border border-stone-100">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group p-10 bg-white transition-all hover:bg-stone-50 cursor-default`}
            >
              <div className={`mb-8 text-primary transition-transform group-hover:scale-110 duration-500`}>
                {step.icon}
              </div>
              <div className="text-stone-300 font-black text-4xl mb-6 opacity-50 group-hover:text-primary transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

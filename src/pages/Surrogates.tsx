import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

interface SurrogatesProps {
  setCurrentPage: (page: string) => void;
}

const Surrogates: React.FC<SurrogatesProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-white text-on-surface selection:bg-primary/20">
      <Navbar setCurrentPage={setCurrentPage} currentPage="surrogates" />

      <main>
        {/* Hero Section */}
        <Hero 
          tag="代孕妈妈招募计划"
          title={<>赋予他人<span className="text-primary">生命之礼</span> — 开启您的爱心旅程</>}
          description="成为代孕妈妈不仅是一份经济上的回报，更是一次通过爱与关怀改变另一个家庭命运的高尚行为。"
          buttons={[
            { label: '立即申请', variant: 'primary' },
            { label: '查看资格', variant: 'outline' }
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuBnmQzsHDSxwz--_SkgF4U5_aru2XSMGcGHlyaG8uy80crxx-7YgDWryGbbxBtNH-696vWJYM44KBxkowLncd459Z1CWM3cflzp8zPgmMVG_lhXhO1UJtIdHsEEguKXqajdyPBVdks5FJm3WYd9vYjf-hRSMtp3Z1SWqAEBr6ITbfkxoOHlAn5AcVJeUJ_NfkAgmyoc8hmNLmc0Lp8QXeb86Admkpu7_YLFVuEzHuO6BYuAsUG4JTc1UoEDgK8iLQma3nd_QbesGa-N"
          testimonial={{
            text: "从最初的咨询到最终的健康分娩，Babiology 全程陪伴在您身边。",
            author: "全程专业守护",
            icon: <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
          }}
        />

        {/* Requirements Bento Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">申请基本要求</h2>
              <p className="text-on-surface-variant">我们珍视每一位候选人的健康与安全，以下是我们的基本准则</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Requirement 1 */}
              <div className="bg-white border border-stone-100 p-8 rounded-3xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary-fixed rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">calendar_today</span>
                </div>
                <h3 className="text-xl font-bold mb-3">年龄要求</h3>
                <p className="text-on-surface-variant">年龄在 21 至 38 岁之间，身心健康，正处于生育的黄金年龄。</p>
              </div>
              {/* Requirement 2 */}
              <div className="bg-white border border-stone-100 p-8 rounded-3xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-secondary-fixed rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary text-2xl">child_care</span>
                </div>
                <h3 className="text-xl font-bold mb-3">生育史</h3>
                <p className="text-on-surface-variant">至少有过一次足月产且无并发症的健康生育经历，目前正在抚育自己的孩子。</p>
              </div>
              {/* Requirement 3 */}
              <div className="bg-white border border-stone-100 p-8 rounded-3xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-tertiary-fixed rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-tertiary text-2xl">health_metrics</span>
                </div>
                <h3 className="text-xl font-bold mb-3">身体健康状况</h3>
                <p className="text-on-surface-variant">身体质量指数 (BMI) 在 18.5 至 32 之间。不吸烟、不酗酒、不使用违禁药物。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Support */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-stone-50">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVuVKT05dFuJ7WUc6Ri3ivdgPK62fM0MZIJ_Jl7tKPL7yMNwophR0hom9792I71BPS2d84efCCFl6srnjqJgZNA1Jmgv58GVkD9HNXzagd0RGrbyburLXQhnDrxUXWtu-du6y9dkZK4NLVKt2u3x44LYkPwpUmndYPG2yhJlIvHxrLRzFG2mXK8rkkVVxWnOeDGBduyYIIT_5m_cQFfVSfNGnTtPax4BK5ZK00erh4NiuP62pQjS4NffvKkB3l6n0z4pYsjsW76u1A" alt="Hands holding each other" />
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-fixed rounded-full -z-10 opacity-50 blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">全方位的保障与支持</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">优厚且透明的报酬</h4>
                    <p className="text-on-surface-variant">除了基本代孕补偿金，我们还涵盖所有医疗开支、误工费、服装补贴及保险，确保您在经济上无后顾之忧。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">顶级医疗团队</h4>
                    <p className="text-on-surface-variant">我们与国内领先的三甲医院及私立产科中心合作，为您提供最高标准的产前检查与分娩服务。</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">全天候情感咨询</h4>
                    <p className="text-on-surface-variant">专业的心理咨询师团队全程陪同，协助您处理各种情绪变化，确保您在心理上也得到悉心呵护。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-4">开启旅程的四个步骤</h2>
              <p className="text-on-surface-variant max-w-2xl">我们将流程化繁为简，让每一个环节都清晰、专业且受尊重。</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="relative z-10 bg-white border border-stone-50 p-8 rounded-3xl shadow-sm">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-6">01</div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">description</span>
                  <h3 className="text-xl font-bold mb-3">申请与审核</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">提交在线申请，我们的协调员将在24小时内联系您进行初步沟通与背景了解。</p>
                </div>
                <div className="relative z-10 bg-white border border-stone-50 p-8 rounded-3xl mt-8 lg:mt-12 shadow-sm">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-6">02</div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
                  <h3 className="text-xl font-bold mb-3">匹配准父母</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">基于价值观与期望值进行双向选择，确保您与准父母之间建立起信任与尊重的纽带。</p>
                </div>
                <div className="relative z-10 bg-white border border-stone-50 p-8 rounded-3xl lg:mt-0 shadow-sm">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-6">03</div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">pill</span>
                  <h3 className="text-xl font-bold mb-3">医疗程序</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">在专业医生的指导下进行体外受受精（IVF）胚胎移植，开启神圣的孕育过程。</p>
                </div>
                <div className="relative z-10 bg-white border border-stone-50 p-8 rounded-3xl mt-8 lg:mt-12 shadow-sm">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-6">04</div>
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">cake</span>
                  <h3 className="text-xl font-bold mb-3">宝宝降生</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">分娩后，看着准父母紧抱孩子的一刻，完成这份厚重的生命馈赠，开启您的新生活。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surrogate Stories */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">听听她们的心声</h2>
            <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA-uQ667S0V_SMigL260VePq66UUQADBn8GK-FpBY9fljstq739WZarkExwIIErKid-YVr46OkUOt28sNKmCql4lWiV4Nko1a5iya1nmbHajA6P1FD6ABKBcPNlTjcnJs5L8KK72U4qXKTxsAb2_L8tF-Qr6OkzYT6CqDKC4JJSl4kk-wUouqBj7jpkPIoSfHgF5bl2o4eHNGZgvHDqjx73Rhw-q07BLQw3ZvO2TuxUQDsvhto6vXmB288dmWYsh8NuG0oH6m3xEol" alt="Surrogate story" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 md:max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem]">
                <p className="text-white text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
                  "当我把那个健康的宝宝交到这对夫妻手中的时候，他们眼里的泪水让我明白，我所做的一切努力都是值得的。这不只是一次合作，这是我人生中最有意义的一章。"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-container"></div>
                  <div>
                    <p className="text-white font-bold">王女士</p>
                    <p className="text-white/70 text-sm">来自上海的爱心代孕妈妈 (2022)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary-container rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary mb-8 leading-tight">
                准备好开启这段<br />非凡的生命旅程了吗？
              </h2>
              <p className="text-on-primary/80 text-xl mb-12 max-w-2xl mx-auto">
                我们的顾问团队随时准备解答您的任何疑问。这是一个匿名且免费的咨询过程。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-stone-50 transition-all">立即申请</button>
                <button className="border-2 border-on-primary text-on-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">在线咨询</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Surrogates;

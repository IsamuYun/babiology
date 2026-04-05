import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary/20">
      <Navbar setCurrentPage={setCurrentPage} currentPage="about" />

      <main className="pt-24">
        {/* Hero Section: Editorial Intro */}
        <section className="px-8 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 block">我们的使命</span>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-8">
                用专业与温情，<br />守护每一个<span className="text-primary">家庭梦想</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                在 Serene Guardian，我们不仅仅提供代孕咨询服务。我们提供的是一个充满信任、法律保障和医学支持的避风港，致力于为每一个渴望成为父母的家庭铺平道路。
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-surface-container-low shadow-2xl">
                <img alt="Warm embrace" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhzT4nivMkfK8Dqx6pkL4XalLxgYHJKMFNVaUANBneUzH11OhLuX_x_acHfIOdHa-KgStKYED5vgs6mL7X7LF10GyXnLQ5q2Mh46rqqoF71Dc6HImkWpeyLfnOS82WP4f6ng1e3zN_Mp2GuLeWptmxiO45eAv8JSLw2OHqQjWxuxHhF-P3utauP-zBdryDMCirOvEgfDIUGPoa5AwkZ5E0WzoP7FUGJvJD6M8GRdh9zSQcttSymz56hZnuQO0Qsrr8UgzM9OjU80fn" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="italic text-primary font-medium">“在这里，每一个生命都被赋予了最神圣的尊严与期待。”</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision: Bento Layout */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-[2rem] flex flex-col justify-between shadow-sm">
                <div>
                  <h2 className="text-3xl font-bold mb-6">我们的愿景</h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
                    成为全球领先的代孕咨询机构，通过透明化流程和全方位的医疗、法律保障，消除跨国代孕中的信息不对称与法律风险，建立行业信任标杆。
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="h-1 bg-primary w-24"></div>
                  <div className="h-1 bg-primary/20 w-full"></div>
                </div>
              </div>
              <div className="bg-primary p-12 rounded-[2rem] text-on-primary shadow-xl">
                <span className="material-symbols-outlined text-4xl mb-6">verified_user</span>
                <h3 className="text-2xl font-bold mb-4">核心价值观</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                    <span>透明合规：法律底线是我们的生命线</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                    <span>医学优先：顶级医疗资源全流程监控</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-sm mt-1">check_circle</span>
                    <span>同理心：深刻理解父母的焦虑与期望</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story: Asymmetric Editorial */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img alt="Office" className="rounded-[2.5rem] shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb5He4np8ML2OPyiOR8dejRgYBccbssEEdlVR16Y6bSs-n_fzR9FteJDElDJkDdgSNS064qZWt5GEHLOnmDB6DMwnT0qx6T32Lsi8-m_MHToxKb0wVGr8kh5r4EkzB4yw_lVtWJjC2uT-NXpUH22j4gYJOlio7aMsg2x4V-o6wWcQDQ_m5mzUr1tls5ii4RsLArQH6CCKhgTvF7QiSBH2ci0q4mEND6Fy6U7R8CjXlR5oHTU5jJxY9ByeF2xlfyA05LyfsjhS4sXLt" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container rounded-full flex items-center justify-center text-center p-4 shadow-lg">
                  <span className="font-bold text-on-secondary-container">成立于 2012 年</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-8">我们的故事</h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>Serene Guardian 始于一个简单的初衷：让渴望家庭的人不再因为生理局限而心碎。创始团队由资深生殖医学专家和法律顾问组成，在见证了无数家庭的艰辛历程后，决定在上海成立这一家专业的咨询机构。</p>
                <p>十余年来，我们已协助 500+ 家庭成功迎接新生命，足迹遍布美国、格鲁吉亚等合法代孕目的地。我们的成长史，就是一部与客户共同经历的“筑梦史”。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">专家团队</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">我们的团队由拥有二十年以上经验的医生、律师和专业个案顾问组成，为您保驾护航。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="h-80 bg-stone-200 overflow-hidden">
                  <img alt="Team Leader" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKgSJw4DCyjUEF9XGY6KNCiCtI1hEkzOjdAbCFQEthFzsV1aX4NSMi4ElIULlIKa_WzUhEZ3iwv-G52S2GHpPk3bq4_zhWKow0LZK8e46OkcSzMtns04uraNPhesGcE9CyJnJaZLRwfT2KvaXmAtWrt4LMvqVUHGGQtDGxDamhn4CVcHzzWH7At4VsccYDBL4GdXOcOnzeRHfO3YtvoTMRGYT3EFzQIrbtBbM6Y6AYKvHebGAzA2Lnx5t_SXfMjl5eX9G2gSASKNu" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Dr. Li Wei</h3>
                  <p className="text-primary text-sm font-semibold mb-3">首席医学顾问 / 胚胎学博士</p>
                  <p className="text-sm text-stone-500">在生殖内分泌领域拥有 25 年经验，曾任三甲医院生殖中心副主任。</p>
                </div>
              </div>
              {/* Team Member 2 */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="h-80 bg-stone-200 overflow-hidden">
                  <img alt="Lawyer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtaxegrOQKWYonM81kZn6ztxbW2vpSffBqW4iFgnbrJLcdavpgxkMAprETteDp9ygxs_j75n6EsHIF3Zs71a_Wn3xT0WkDMi9j-EvXsBHPz8QWAYNGVq1Z2iL8tnEx_WJNTagzmP1fMAXFY4v9qfI3z3xARY_pB3stJhs4vvLlUydx3yc-UtpWjQda8kl1GZdUD4j7vqwy1-KRsQHKEJ1acgmm6WNjZxA8SUIg0unMGjPht7EV-Bvn7hG5jYwU4gyc9AzqWoeIVTQ_" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Zhang Ming</h3>
                  <p className="text-primary text-sm font-semibold mb-3">法律合规总监</p>
                  <p className="text-sm text-stone-500">专注跨国生殖法律事务，已处理超过 400 宗复杂的亲子确认案件。</p>
                </div>
              </div>
              {/* Team Member 3 */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="h-80 bg-stone-200 overflow-hidden">
                  <img alt="Case Manager" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYCX7ePzw3Z9VTwy2HrsseUGvwksIXX-qT1gTvab-hvAiD2w2H3PuaPCkpepowixlpvde2ZRgUgyUb9k-uTkyFsKWBCvplh6S44tlRvVAuc5jWGi9APFwl1ZJ7YqtfNoB_WpXHCHq7zXIJkcoY-reb8MuuAu8Sb_MDjA6In-wRx20e7gLU5fxb109kG2PKtMe_4jfk-cesg74QSAM1UjipT7L_bUm8ZuJL1EyBYKAQHyl1lyfHXs-Jqtsds-2vGN8UUdATCHAPA_ao" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Elena Wang</h3>
                  <p className="text-primary text-sm font-semibold mb-3">高级个案经理</p>
                  <p className="text-sm text-stone-500">负责协调国际代孕机构与国内家庭，精通三语，提供无缝沟通体验。</p>
                </div>
              </div>
              {/* Team Member 4 */}
              <div className="bg-surface-container-lowest rounded-3xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="h-80 bg-stone-200 overflow-hidden">
                  <img alt="Coordinator" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURNo_yksR_h5OOzclfFq_NfDOdUnT65E7qazsZ2uXPJ1anApOlZ4qoqtjcxBjhSFZwxfyrcBzOSiO39qNFbj0pm5kAa5m1tl2y7QXoft9uYySaXrgXST0k7T-8L2GlGtFZhDyryX_VPq1yKRKYID_HVHMUCu5JB9BEqMYWrvG3NrpRaWLr1Q_yhwOlF5Rt7kkNA-gxpixdjWvZLDuBZzfK97bldwXjmSRz8w_a9Q15ZcUldhVwe1Cq_MRddeFTPNyFuwTOPn7HZnH" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
                  <p className="text-primary text-sm font-semibold mb-3">心理辅导主管</p>
                  <p className="text-sm text-stone-500">关注准父母与代孕妈妈的心理健康，提供全周期的情感支持。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditations & Partnerships */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">信任背书与全球伙伴</h2>
            <div className="h-1 bg-primary/10 w-24 mx-auto rounded-full"></div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl">gavel</span>
              <span className="font-bold text-stone-400">国际生殖法律协会</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl">medical_services</span>
              <span className="font-bold text-stone-400">ASRM 成员单位</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl">verified</span>
              <span className="font-bold text-stone-400">SART 数据认证</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-5xl">public</span>
              <span className="font-bold text-stone-400">全球合规合作商</span>
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface-container-lowest rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-xl">
              <div className="p-16">
                <h2 className="text-4xl font-bold mb-8">联系我们</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-2xl">location_on</span>
                    <div>
                      <h4 className="font-bold mb-1">总部地址</h4>
                      <p className="text-stone-500">上海市静安区南京西路 1266 号恒隆广场一期</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-2xl">call</span>
                    <div>
                      <h4 className="font-bold mb-1">咨询热线</h4>
                      <p className="text-stone-500">400-123-4567 / (021) 5678-8888</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary p-3 bg-primary/10 rounded-2xl">mail</span>
                    <div>
                      <h4 className="font-bold mb-1">电子邮箱</h4>
                      <p className="text-stone-500">contact@sereneguardian.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 p-8 bg-surface-container-low rounded-3xl">
                  <p className="font-medium text-on-surface mb-4">期待为您提供专业建议：</p>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-transform shadow-lg shadow-primary/20">
                    联系我们的团队
                  </button>
                </div>
              </div>
              <div className="h-[600px] bg-surface-container-highest relative">
                <img alt="Map area" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACUUttKnKyHPrimzpvGGalidOUsYecg1HH1WJbv9p4e220F2SkNQOVtac7slqYOO9d-Gd4NBJSxZdgtNA4V0FBsBnsvYIaWgEZ6Qr7gZ13RF3vUQyTZ48ggnO1Tg56irRrky8q-Q7ARX-o2iQV2r17KGMpfLf4Miediqa1jeWKfkw6i_l_uJ8niFELUQ-ARDU6A5iw6n_1uD3yVceb_OSUZmHSzRgavNrVum4ODxjAbujKkZG3uomUZ4o5DfTJNHRVY44QYR7_rmof" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="bg-white text-on-surface selection:bg-primary/20">
      <Navbar setCurrentPage={setCurrentPage} currentPage="home" />

      <main>
        {/* Hero Section */}
        <Hero 
          tag="专业 · 诚信 · 温暖"
          title={<>让爱延伸，<br /><span className="text-primary">圆您家庭梦想</span></>}
          description="我们致力于为您提供全球顶尖的辅助生育咨询服务，在充满尊重的环境中，陪伴您走过通往为人父母的每一步。"
          buttons={[
            { label: '开始咨询', variant: 'primary' },
            { label: '了解更多', variant: 'outline', onClick: () => setCurrentPage('parents') }
          ]}
          imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAdWcyXkgjPR4hbLJFgTMn4_eV8sw91wzNvMImSHRAOrr3X69AeYzWP7JmpUHVl5jGs49omsRt3xHSehioGgfeM7H6VFnE7ecm_tIfvM2QJv0afu4lpAd4VlSgfwp5AWFQkZdO0axhh40NpuczA59wVPeEHygGMoOC8qT6ZdcLIsoUdQSdHf5k-jIwNYjmkd8O6ZZnIt28Wfv2FqXmtyosmWybyBsJCffP1duvFcsHJQ7B8tJcUoHQ-CX7eOjgKTMLOAJGrp0DoiJKN"
          testimonial={{
            text: "过去十年间，我们已成功帮助一千多个家庭迎来了他们梦寐以求的新生命。",
            author: "1,200+",
            icon: <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          }}
        />

        {/* Trust Section */}
        <section className="bg-white py-16 border-y border-stone-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-bold text-stone-400 uppercase tracking-[0.2em] mb-4">合作伙伴与认证机构</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black italic tracking-tighter">MEDICARE</span>
              <span className="text-2xl font-black italic tracking-tighter">GLOBAL IVF</span>
              <span className="text-2xl font-black italic tracking-tighter">FERTILITY+</span>
              <span className="text-2xl font-black italic tracking-tighter">LIFECARE</span>
              <span className="text-2xl font-black italic tracking-tighter">GENESIS</span>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div className="group bg-white p-12 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 border border-stone-100 hover:border-primary/10">
                <div className="w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <span className="material-symbols-outlined text-3xl">family_restroom</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">准父母计划</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  我们深知寻子之路的艰辛。Babiology 提供全方位的法律支持、医疗筛选 and 心理辅导，为您寻找最合适的代孕伙伴。
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>定制化代孕方案</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>法律风险全程管控</span>
                  </li>
                </ul>
                <button 
                  className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
                  onClick={() => setCurrentPage('parents')}
                >
                  了解详情 <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              {/* Service Card 2 */}
              <div className="group bg-white p-12 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 border border-stone-100 hover:border-tertiary/10">
                <div className="w-16 h-16 bg-tertiary text-on-tertiary rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                  <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">代孕妈妈关怀</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                  作为代孕妈妈，您是在创造奇迹。我们为您提供顶级的医疗保障、优厚的酬劳方案以及尊严与温暖并存的服务体验。
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>全面的身心健康保障</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span>透明且优渥的薪酬体系</span>
                  </li>
                </ul>
                <button className="text-tertiary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  立即申请 <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-24 bg-white border-y border-stone-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-on-surface">我们的服务流程</h2>
              <p className="text-on-surface-variant text-lg">四个简单步骤，让梦想照进现实。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-3xl border border-stone-50 shadow-sm">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-black text-primary">01</span>
                </div>
                <h4 className="text-xl font-bold mb-4">初步咨询</h4>
                <p className="text-on-surface-variant">深入了解您的需求与期待，制定初步计划。</p>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl border border-stone-50 shadow-sm">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-black text-primary">02</span>
                </div>
                <h4 className="text-xl font-bold mb-4">精准配对</h4>
                <p className="text-on-surface-variant">基于价值观与期望，为您寻找完美的合作伙伴。</p>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl border border-stone-50 shadow-sm">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-black text-primary">03</span>
                </div>
                <h4 className="text-xl font-bold mb-4">科学怀孕</h4>
                <p className="text-on-surface-variant">顶尖生育诊所全程监控，确保孕期健康安全。</p>
              </div>
              <div className="text-center p-8 bg-white rounded-3xl border border-stone-50 shadow-sm">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-black text-primary">04</span>
                </div>
                <h4 className="text-xl font-bold mb-4">喜悦诞生</h4>
                <p className="text-on-surface-variant">迎接新生命的到来，完成法律文件的交接。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="relative bg-on-surface rounded-[3rem] min-h-[600px] flex items-center overflow-hidden">
              <img className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJp9huadnqHhaSirGSZqXctlH-QhMg4mUOpLJ-paPrl_qXNqFEzn1PT-3TLq5oIvWYqM3HfGdeWISOmA0nFxozcO6RTKVWhP4sbNa-_LTjZ8a9uOsthx4RNnzva8w4Ux2hUIQA3K_UWzGZcoEhO2EoQ0iRJt5LzqxsuxkfZj_dB3L7b6Cs_rVe-v8d9nQpN9q7qcvkCMIe0Zhe4tYwgzfuwwZQ71ojEyQeLTLinmVWbwiJMdRksE02QTX7KsgH-3dlY-D5ZnMtNmaQ" alt="Mother holding baby's hand" />
              <div className="relative z-10 px-12 md:px-24 py-20 max-w-3xl">
                <span className="material-symbols-outlined text-primary text-6xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-12 italic">
                  "在Babiology的帮助下，我们不仅迎来了可爱的女儿，更感受到了前所未有的尊重与支持。这不仅是一项服务，更是一段关于爱的旅程。"
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBME5O6IpAMlSI7XX9XYo1CVvtdgRLDu1lwzdkERoiYJRWURIAqD_ASFq4omcSlqWmz0XcHdZ2JwEsRm16LUswV6di9xXLAY0-ZirXv0sSdIBtX15jFba1MJzo-WsIiLhDRLqS2Ov6diRSh_mYy3XuAT3HN6AJjXqTIhiqcZC9A4lYkYfC976gSDCAqn-DIdg3oa82YQSKkcvKqQFTyP96V-iZvfVrdHnym8Nhtu6xhBoMVcyjRJIPJaNrYrhpQqArw3bjiXrxirOUB" alt="Portrait of Li Wei & Zhang Fan" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg">Li Wei & Zhang Fan</p>
                    <p className="text-stone-400">来自上海的快乐父母</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog/Resources */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-4">育儿与代孕百科</h2>
                <p className="text-on-surface-variant">探索专业的医疗知识与感人的真实故事。</p>
              </div>
              <button className="hidden md:block px-6 py-3 border border-outline-variant rounded-full font-bold hover:bg-stone-50 transition-colors">查看全部文章</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="group">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJLlnHsOIWKS078PLeO5Cijn9WCijV5di24Oc4y-rMIJCHHWL2dImuKbpl2Hs7VKM8Qx1ZfCy8ARf5CXhfm680f6fhwcAndyEIVpnqlQ49tLDO5HkbD4RVzN6SD4OIfRt5d4LhRbC6Grf0deHW92j5ayDntCCHCVJnKveN8UN9WoKYGkt_e0G_2-fCD8TvsU15ah4Znyhwmj5swRym6DMmCNZS54LV0aODpmmSM3a6BgwSfVH3i-gZdUKAnULpDjiUIDdHwNhmHGOY" alt="Baby clothes" />
                </div>
                <p className="text-primary text-sm font-bold mb-3">法律法规</p>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">2024年全球代孕法律动态概览</h4>
                <p className="text-on-surface-variant line-clamp-2">了解不同国家和地区最新的辅助生育法律调整，为您的计划提供安全保障。</p>
              </article>
              <article className="group">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvMpq5zd1ODTwJDFYmPwN79eDEvgY9AsSugOptIqATyOTv_NHa91hOtxaZDfBfzIEbp1qUMTfXKKB0d3QK9kl4LfDjaYc9rh1qHdlY5aXIVS7480kCaGyzhCvkCp3Pgt2J8cmEoX1kZofFzgBFNSjJVxoKNBW6DFLE5QUPRy18SCf7CM_JyAZFGGed8fV0tm5wDNF8VjPewTQAlNv0RSISOHImPyyxJohIZzTiAnOhx3paZuAfR0J_KUL1EvpNK0b4gEWv7KAIIaIo" alt="Medical laboratory" />
                </div>
                <p className="text-primary text-sm font-bold mb-3">医学前沿</p>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">IVF技术的新突破：提高胚胎植入成功率</h4>
                <p className="text-on-surface-variant line-clamp-2">专家解读最新的实验室技术如何帮助准父母更早实现家庭梦想。</p>
              </article>
              <article className="group">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnX0ssQnM8IM-WEYuCYZ6d23BKCOmaNgMNRgyZ7XeDNXX-0m94xgPAIq8_g_T_tSJYm2SHP0NfDd4eH7NbI3X960GHCqgXAAQ9HOd1no7e9sknAB324VEuGGl2bDYhWY8qL9znjn2PFjftXdHgBOEziu1zRGz45JUQvViL6Qa_-OEyo1_g55caXFCKPDkpZ7Vty2pxKpH0XLmSUbc9LXdaqEPOxvbB6e1RsZsEATwVCI3fKjb2RBPdP-pMJ3NSPLTjivqWjOGkkMaA" alt="Children playing" />
                </div>
                <p className="text-primary text-sm font-bold mb-3">心理健康</p>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">如何开启与代孕妈妈的心理建设之旅</h4>
                <p className="text-on-surface-variant line-clamp-2">建立信任与沟通是代孕成功的基石，分享实用的沟通技巧。</p>
              </article>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] pointer-events-none"></div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10 leading-tight">准备好开启您的<br />家庭新篇章了吗？</h2>
              <p className="text-primary-fixed/80 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                我们的专家顾问随时待命，为您提供 100% 隐私保护的免费初步咨询。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <button className="px-10 py-5 bg-white text-primary rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">立即私密咨询</button>
                <button className="px-10 py-5 bg-primary-container text-white rounded-full font-black text-xl border border-white/20 hover:bg-white hover:text-primary transition-all">拨打服务热线</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-stone-100 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto w-full">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-primary mb-6">Babiology</div>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-stone-500 leading-relaxed">
              提供全球领先的辅助生育与代孕咨询服务。我们以专业和爱，守护每一个家庭的梦想。
            </p>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">快速链接</h4>
            <ul className="space-y-4 font-['Plus_Jakarta_Sans'] text-sm">
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">准父母指南</a></li>
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">代孕妈妈申请</a></li>
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">成功案例</a></li>
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">常见问题</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">法律合规</h4>
            <ul className="space-y-4 font-['Plus_Jakarta_Sans'] text-sm">
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">隐私政策</a></li>
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">服务条款</a></li>
              <li><a className="text-stone-500 hover:text-primary transition-transform duration-300 hover:translate-y-[-2px] inline-block" href="#">加入我们</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-6">联系我们</h4>
            <p className="font-['Plus_Jakarta_Sans'] text-sm text-stone-500 mb-4">
              上海市浦东新区陆家嘴环路1000号<br />
              contact@sereneguardian.com<br />
              400-123-4567
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">share</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['Plus_Jakarta_Sans'] text-sm text-stone-500">
            © 2024 Babiology. All rights reserved. 沪ICP备12345678号
          </p>
          <div className="flex gap-6 font-['Plus_Jakarta_Sans'] text-sm text-stone-500">
            <span>沪公网安备 31010000000001号</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

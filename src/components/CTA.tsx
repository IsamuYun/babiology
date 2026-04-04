export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center text-on-primary relative overflow-hidden ambient-shadow">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">开启您的奇迹之旅</h2>
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            每一个伟大的家庭都始于一个勇敢的决定。让我们为您提供专业的支持与温柔的陪伴。
          </p>
          <button className="bg-white text-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-surface-container-lowest transition-all transform hover:scale-105 active:scale-95">
            预约私人咨询
          </button>
          <p className="mt-10 text-sm opacity-70 tracking-wide uppercase font-bold">
            100% 隐私保护 • 无任何隐含费用
          </p>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary-container/40 blur-[120px] rounded-full"></div>
      </div>
    </section>
  );
}

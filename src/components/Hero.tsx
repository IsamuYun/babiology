import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container/10 text-primary font-bold text-xs tracking-widest uppercase">
            Parenthood Reimagined
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6 text-on-surface">
            开启您的家庭旅程 <span className="text-primary">—</span> 准父母指南
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10">
            在 Serene Guardian，我们不仅提供代孕服务，更致力于通过专业、透明且充满人文关怀的支持，陪伴您完成从渴望到圆满的每一步。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-container transition-all ambient-shadow">
              立即开启您的旅程
            </button>
            <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full text-lg font-bold hover:bg-surface-container-highest transition-all">
              了解我们的流程
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 scale-105">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop" 
              alt="Happy family with newborn"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white/40 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl max-w-[280px] md:max-w-xs">
            <p className="text-primary font-bold italic text-base md:text-lg leading-snug">
              “在这里，我们找到了不仅是专业的服务，更是如同家人般的守护。”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold">
                L
              </div>
              <span className="font-bold text-sm text-on-surface">— 李先生 & 王女士</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
    </section>
  );
}

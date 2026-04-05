import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">感人的真实故事</h2>
        
        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105" 
            src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=1600&auto=format&fit=crop" 
            alt="Family laughing"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute bottom-8 left-6 right-6 md:bottom-16 md:left-16 md:right-1/4 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/20 ambient-shadow"
            >
              <h3 className="text-2xl md:text-4xl font-bold text-on-surface mb-8 leading-tight">
                “等待了八年，Serene Guardian 帮我们将梦想变成了现实。当第一次抱起宝宝时，所有的等待都值得了。”
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-primary overflow-hidden">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop" 
                    alt="Portrait"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg text-on-surface">王女士 & 张先生</p>
                  <p className="text-sm text-on-surface-variant opacity-80">来自上海的幸福家庭</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

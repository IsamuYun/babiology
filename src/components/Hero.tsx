import { motion } from 'motion/react';
import React from 'react';

interface HeroButton {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface HeroProps {
  tag?: string;
  title: React.ReactNode;
  description: string;
  buttons?: HeroButton[];
  imageSrc: string;
  imageAlt?: string;
  testimonial?: {
    text: string;
    author: string;
    authorSub?: string;
    icon?: React.ReactNode;
  };
  reverse?: boolean;
}

export default function Hero({
  tag,
  title,
  description,
  buttons = [],
  imageSrc,
  imageAlt = "Hero image",
  testimonial,
  reverse = false
}: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      <div className={`max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={`z-10 ${reverse ? 'md:order-2' : ''}`}
        >
          {tag && (
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase">
              {tag}
            </span>
          )}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter mb-6 text-on-surface">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-lg mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {buttons.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className={`px-8 py-4 rounded-full text-lg font-bold transition-all transition-all duration-300 ${
                  button.variant === 'outline'
                    ? 'bg-white border border-outline-variant text-on-surface hover:bg-stone-50'
                    : button.variant === 'secondary'
                    ? 'bg-secondary text-white hover:opacity-90 shadow-xl shadow-secondary/20'
                    : 'bg-primary text-on-primary hover:bg-primary-container shadow-xl shadow-primary/20'
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`relative ${reverse ? 'md:order-1' : ''}`}
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 scale-105">
            <img 
              className="w-full h-full object-cover" 
              src={imageSrc} 
              alt={imageAlt}
              referrerPolicy="no-referrer"
            />
          </div>
          {testimonial && (
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white/70 backdrop-blur-2xl p-6 md:p-8 rounded-3xl border border-white/20 shadow-xl max-w-[280px] md:max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                {testimonial.icon && (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {testimonial.icon}
                  </div>
                )}
                <div className="font-bold text-lg text-on-surface">{testimonial.author}</div>
              </div>
              <p className={`${testimonial.icon ? 'text-sm' : 'text-primary font-bold italic text-base md:text-lg'} text-on-surface-variant leading-relaxed`}>
                {testimonial.text}
              </p>
              {testimonial.authorSub && (
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <span className="font-bold text-sm text-on-surface">— {testimonial.authorSub}</span>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
    </section>
  );
}

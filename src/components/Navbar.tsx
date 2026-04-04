import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-primary tracking-tighter">
          Serene Guardian
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">首页</a>
          <a href="#" className="text-primary font-bold border-b-2 border-primary pb-1">准父母</a>
          <a href="#" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">代孕妈妈</a>
          <a href="#" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">关于我们</a>
          <a href="#" className="text-on-surface-variant hover:text-primary font-semibold transition-colors">博客</a>
          <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold hover:bg-primary-container transition-all scale-95 hover:scale-100 active:scale-95">
            立即咨询
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-surface" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#" className="text-lg font-bold text-primary">首页</a>
          <a href="#" className="text-lg font-semibold text-on-surface-variant">准父母</a>
          <a href="#" className="text-lg font-semibold text-on-surface-variant">代孕妈妈</a>
          <a href="#" className="text-lg font-semibold text-on-surface-variant">关于我们</a>
          <a href="#" className="text-lg font-semibold text-on-surface-variant">博客</a>
          <button className="bg-primary text-on-primary px-6 py-4 rounded-full font-bold text-center">
            立即咨询
          </button>
        </div>
      )}
    </nav>
  );
}

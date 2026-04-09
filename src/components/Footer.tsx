import { Globe, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="text-2xl font-extrabold text-primary tracking-tighter">Babiology</div>
            <p className="text-on-surface-variant leading-relaxed">
              全球领先的专业代孕咨询机构，以科学、法律、仁爱为基石，守护每一个家庭的圆梦旅程。
            </p>
            <div className="flex gap-5">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">服务项目</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">准父母支持</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">代孕妈妈招募</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">卵子捐赠项目</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">法律与合规咨询</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">关于我们</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">公司简介</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">加入我们</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">博客动态</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">法律条款</h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">服务条款</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">医疗免责声明</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant opacity-70">
          <p>© 2026 Babiology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

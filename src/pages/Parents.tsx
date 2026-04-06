import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProcessGrid from '../components/ProcessGrid';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

interface ParentsProps {
  setCurrentPage: (page: string) => void;
}

export default function Parents({ setCurrentPage }: ParentsProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar setCurrentPage={setCurrentPage} currentPage="parents" />
      
      <main className="grid grid-cols-1 w-full">
        {/* Hero Section */}
        <Hero 
          tag="Parenthood Reimagined"
          title={<>开启您的家庭旅程 <span className="text-primary">—</span> 准父母指南</>}
          description="在 Serene Guardian，我们不仅提供代孕服务，更致力于通过专业、透明且充满人文关怀的支持，陪伴您完成从渴望到圆满的每一步。"
          buttons={[
            { label: '立即开启您的旅程', variant: 'primary' },
            { label: '了解我们的流程', variant: 'outline' }
          ]}
          imageSrc="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop"
          testimonial={{
            text: "“在这里，我们找到了不仅是专业的服务，更是如同家人般的守护。”",
            author: "李先生 & 王女士",
            authorSub: "已成功圆梦的准父母"
          }}
        />
        
        {/* Process Section */}
        <ProcessGrid />
        
        {/* Services Section */}
        <Services />
        
        {/* Testimonial Section */}
        <Testimonial />
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* CTA Section */}
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

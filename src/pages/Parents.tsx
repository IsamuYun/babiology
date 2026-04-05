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
    <div className="min-h-screen bg-background">
      <Navbar setCurrentPage={setCurrentPage} currentPage="parents" />
      
      <main className="grid grid-cols-1 w-full">
        {/* Hero Section */}
        <Hero />
        
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

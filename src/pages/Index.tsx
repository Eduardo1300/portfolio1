import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import StackSection from '@/components/sections/StackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import { ToastTest } from '@/components/ToastTest';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StackSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ToastTest />
    </div>
  );
};

export default Index;

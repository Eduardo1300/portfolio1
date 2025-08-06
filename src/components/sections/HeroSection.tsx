import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const stackSection = document.getElementById('stack');
    if (stackSection) {
      stackSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Here you would link to your actual CV file
    console.log('Downloading CV...');
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Hola, soy
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 portfolio-hero-gradient animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Christopher Eduardo Valdivia Baca
            </h1>
            <h2 className="text-2xl md:text-4xl text-foreground/90 mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Desarrollador Full Stack Junior
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Soy un Desarrollador Full Stack Junior con experiencia construyendo soluciones web modernas y escalables. 
            Manejo tecnologías de frontend como React, TypeScript y Tailwind CSS, así como backend con NestJS y PostgreSQL. 
            Me apasiona construir software limpio, funcional y orientado al usuario final.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button
              onClick={handleDownloadCV}
              size="lg"
              className="bg-primary hover:bg-primary-glow portfolio-transition portfolio-glow text-primary-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar CV
            </Button>
            <Button
              onClick={handleContactClick}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contactar
            </Button>
          </div>

          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button
              onClick={scrollToNextSection}
              variant="ghost"
              size="lg"
              className="text-muted-foreground hover:text-primary portfolio-transition"
            >
              <ArrowDown className="h-6 w-6 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
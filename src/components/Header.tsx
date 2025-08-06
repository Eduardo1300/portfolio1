import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'stack', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'stack', label: 'Stack' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 portfolio-card border-b border-border/50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="portfolio-hero-gradient text-2xl font-bold">
            Alex Rodríguez
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => scrollToSection(item.id)}
                className={`
                  portfolio-transition
                  ${activeSection === item.id 
                    ? 'bg-primary text-primary-foreground portfolio-glow' 
                    : 'hover:bg-secondary text-foreground'
                  }
                `}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground"
            >
              ☰
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
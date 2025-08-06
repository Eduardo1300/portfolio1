import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderé lo antes posible. Gracias por contactarme.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:alex.rodriguez@email.com",
      color: "text-red-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexrodriguez",
      color: "text-blue-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/alexrodriguez",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-hero-gradient">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="portfolio-card p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tu mensaje"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow portfolio-transition portfolio-glow"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="portfolio-card p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Conectemos
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                Ya sea que tengas una pregunta técnica, una propuesta de proyecto 
                o simplemente quieras charlar sobre desarrollo, no dudes en contactarme.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 portfolio-transition group"
                  >
                    <div className={`${link.color} mr-4 group-hover:scale-110 portfolio-transition`}>
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">
                        {link.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.href.replace(/^(mailto:|https:\/\/)/, '')}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  🚀 Disponible para nuevos proyectos
                </h4>
                <p className="text-sm text-muted-foreground">
                  Actualmente acepto proyectos freelance y oportunidades laborales remotas o en Madrid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
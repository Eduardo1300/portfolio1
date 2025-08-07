import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendEmail, type EmailTemplateParams } from '@/lib/emailjs';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Get current date and time in Lima, Peru timezone
      const now = new Date();
      const peruTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Lima"}));
      
      const fechaCompleta = peruTime.toLocaleDateString('es-PE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      // Prepare template parameters - using exact names from your template
      const templateParams: EmailTemplateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message,
        to_name: 'Christopher Eduardo Valdivia Baca',
        from_email: formData.email,
        reply_to: formData.email,
        date: fechaCompleta,
        time: '', // Empty since we're combining date and time
      };

      console.log('📧 ENVIANDO DATOS A EMAILJS:', templateParams);

      // Send email using EmailJS
      const result = await sendEmail(templateParams);

      console.log('✅ Email sent successfully:', result);
      
      // Clear form first
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Use alert as a safe alternative to toast
      alert('¡Mensaje enviado exitosamente! Te responderé lo antes posible.');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('❌ Error sending email:', error);
      setSubmitStatus('error');
      
      // Use alert as a safe alternative to toast
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      // Reset submitting state after a delay
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const socialLinks = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      href: "mailto:eduardovaldivia130@outlook.es",
      color: "text-red-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/christopher-valdivia",
      color: "text-blue-400"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/Eduardo1300",
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
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Tu dirección de email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition disabled:opacity-50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary portfolio-transition resize-none disabled:opacity-50"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-glow portfolio-transition portfolio-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
                
                {/* Status message */}
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-sm text-center p-2 bg-green-50 rounded">
                    ✅ ¡Mensaje enviado exitosamente!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded">
                    ❌ Error al enviar. Inténtalo de nuevo.
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, recibiré tu mensaje directamente en mi email. 
                  Me comprometo a responder en un plazo máximo de 24-48 horas.
                </p>
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
                📍 Ubicado en Lima, Perú | 📞 +51 953 587 619
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
                  Actualmente acepto proyectos freelance y oportunidades laborales remotas o en Lima, Perú.
                  Busco aportar valor en proyectos reales y crecer profesionalmente en entornos dinámicos.
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
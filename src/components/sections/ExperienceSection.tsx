import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Practicante en Desarrollo Web",
      company: "DevDatep Consulting",
      period: "Junio 2025 – Actualidad",
      location: "Lima, Perú",
      description: [
        "Automatización de procesos con plataformas low-code (Scriptcase)",
        "Diseño de interfaces, conexión a bases de datos, reportes",
        "Trabajo colaborativo bajo metodología Scrum"
      ],
      isActive: true
    },
    {
      id: 2,
      title: "Practicante en Diseño Web",
      company: "LicitApp",
      period: "Junio 2025 – Actualidad",
      location: "Lima, Perú",
      description: [
        "Personalización de sitios WordPress con HTML y CSS",
        "Mejoras UX/UI y diseño responsivo",
        "Coordinación con el equipo de diseño"
      ],
      isActive: true
    }
  ];

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-hero-gradient">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software y tecnología
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative pl-8 pb-12 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border"></div>
              
              {/* Timeline dot */}
              <div className={`absolute left-0 top-6 w-6 h-6 rounded-full border-2 ${
                experience.isActive 
                  ? 'bg-primary border-primary' 
                  : 'bg-background border-border'
              }`}></div>

              {/* Content */}
              <div className="portfolio-card p-6 rounded-lg ml-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg text-primary font-medium">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-muted-foreground text-sm mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-16 text-center">
          <div className="portfolio-card p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Habilidades Blandas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Trabajo en equipo",
                "Comunicación efectiva", 
                "Responsabilidad y liderazgo",
                "Empatía y pensamiento crítico"
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-secondary/30 rounded-lg text-sm text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

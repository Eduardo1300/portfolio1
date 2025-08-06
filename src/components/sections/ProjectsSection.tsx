import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "TaskFlow Pro",
      description: "Aplicación de gestión de proyectos y tareas con colaboración en tiempo real. Incluye sistema de notificaciones, asignación de roles y dashboard analítico.",
      image: "/src/assets/taskflow-project.jpg",
      technologies: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.io"],
      demoUrl: "https://taskflow-demo.com",
      codeUrl: "https://github.com/alexrodriguez/taskflow"
    },
    {
      id: 2,
      title: "ECommerce Dashboard",
      description: "Panel de administración completo para comercio electrónico con análisis de ventas, gestión de inventario y procesamiento de pagos integrado.",
      image: "/src/assets/ecommerce-project.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB", "Chart.js"],
      demoUrl: "https://ecommerce-admin-demo.com",
      codeUrl: "https://github.com/alexrodriguez/ecommerce-dashboard"
    }
  ];

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-hero-gradient">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Algunos de mis trabajos más recientes que demuestran mis habilidades técnicas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card rounded-lg overflow-hidden group portfolio-transition hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover portfolio-transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 portfolio-transition"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary-glow portfolio-transition portfolio-glow"
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
                  >
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="portfolio-card p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              ¿Quieres ver más proyectos?
            </h3>
            <p className="text-muted-foreground mb-6">
              Estos son solo algunos ejemplos. Tengo más proyectos en mi repositorio de GitHub 
              que demuestran diferentes aspectos de mis habilidades técnicas.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground portfolio-transition"
            >
              <a href="https://github.com/Eduardo1300" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Ver GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
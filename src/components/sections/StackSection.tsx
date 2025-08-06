import { Code2, Database, GitBranch, Palette, Server, Smartphone } from 'lucide-react';

const StackSection = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code2 className="h-8 w-8" />,
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8" />,
      items: ["NestJS", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Base de Datos",
      icon: <Database className="h-8 w-8" />,
      items: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM"]
    },
    {
      category: "Herramientas",
      icon: <GitBranch className="h-8 w-8" />,
      items: ["Git", "Docker", "AWS", "Vercel"]
    },
    {
      category: "Diseño",
      icon: <Palette className="h-8 w-8" />,
      items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX"]
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8" />,
      items: ["React Native", "Flutter", "Progressive Web Apps"]
    }
  ];

  return (
    <section id="stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 portfolio-hero-gradient">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.category}
              className="portfolio-card p-6 rounded-lg portfolio-transition hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {tech.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-border/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="portfolio-card p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Siempre Aprendiendo
            </h3>
            <p className="text-muted-foreground">
              Me mantengo actualizado con las últimas tendencias y tecnologías del desarrollo web. 
              Actualmente explorando IA, Web3 y mejores prácticas de arquitectura de software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
import { Code, Globe, Smartphone, Database, Cloud, Cog } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular.',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with RESTful APIs and microservices architecture.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud deployment and infrastructure setup on AWS, Azure, and Google Cloud.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development from concept to deployment.',
      technologies: ['MERN', 'MEAN', 'Django', 'Laravel']
    },
    {
      icon: Cog,
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, automated testing, and deployment automation.',
      technologies: ['GitHub Actions', 'Jenkins', 'Terraform', 'Ansible']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Software Development{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software development solutions tailored to your business needs. 
            From web applications to mobile apps and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your next project?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glow-button px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
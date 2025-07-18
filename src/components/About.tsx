import { Code, Server, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
    },
    {
      icon: Server,
      title: 'Backend Development', 
      description: 'Building robust APIs and server-side applications with Node.js, Express, and database management.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing intuitive user experiences with attention to accessibility and modern design principles.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full stack developer with 4+ years of experience building 
            modern web applications. I love turning complex problems into simple, 
            beautiful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started my journey in web development with a Computer Science degree and 
              a passion for creating digital experiences. Over the years, I've worked 
              with startups and established companies, building everything from simple 
              landing pages to complex enterprise applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date 
              with the latest technologies. When I'm not coding, you'll find me 
              contributing to open source projects or learning new frameworks.
            </p>
            
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Core Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">4+</div>
                <div className="text-lg text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-hover border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Database, 
  Wrench, 
  Palette,
  GitBranch,
  Globe,
  Terminal,
  Layers
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 95, icon: Code },
        { name: 'TypeScript', level: 90, icon: Terminal },
        { name: 'JavaScript', level: 95, icon: Terminal },
        { name: 'HTML/CSS', level: 90, icon: Globe },
        { name: 'Tailwind CSS', level: 85, icon: Palette },
        { name: 'Next.js', level: 80, icon: Layers },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 90, icon: GitBranch },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Webpack', level: 80 },
        { name: 'Jest', level: 85 },
        { name: 'CI/CD', level: 75 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Design Systems', level: 85 },
        { name: 'Accessibility', level: 80 },
        { name: 'Animation', level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across different areas of development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="card-hover"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon && <skill.icon className="h-4 w-4 text-muted-foreground" />}
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 6 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'Redis', 'Socket.io', 'Prisma', 'Supabase', 'Vercel', 
              'Cloudflare', 'Stripe', 'Auth0', 'Framer Motion', 'Three.js', 'D3.js'
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
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
import { apiClient } from '@/lib/api';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await apiClient.getSkills();
        setSkills(data);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend': return Code;
      case 'Backend': return Database;
      case 'Tools & DevOps': return Wrench;
      case 'Design': return Palette;
      default: return Code;
    }
  };

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

        {loading ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-lg"></div>
                    <div className="h-6 w-24 bg-muted rounded"></div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...Array(6)].map((_, j) => (
                    <div key={j} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="h-4 w-20 bg-muted rounded"></div>
                        <div className="h-4 w-8 bg-muted rounded"></div>
                      </div>
                      <div className="h-2 bg-muted rounded-full"></div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <Card 
                  key={category} 
                  className="card-hover"
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skill._id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
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
              );
            })}
          </div>
        )}

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
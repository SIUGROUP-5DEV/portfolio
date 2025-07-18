import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full Stack',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration, and advanced filtering.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      category: 'Frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 3,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with rate limiting, authentication, and request routing capabilities.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Express', 'Redis', 'Docker'],
      category: 'Backend',
      github: 'https://github.com',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization and automated reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with dark mode, animations, and contact form integration.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      category: 'Frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Real-time Chat API',
      description: 'WebSocket-based chat API with user authentication, room management, and message history.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop',
      tags: ['Node.js', 'Socket.io', 'JWT', 'PostgreSQL'],
      category: 'Backend',
      github: 'https://github.com',
    },
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            frontend interfaces, and backend services.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setFilter(category)}
                className="min-w-[80px]"
              >
                <Filter className="w-4 h-4 mr-1" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-lg">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-2 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
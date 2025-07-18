import { Code, Globe, Smartphone, Database, Cloud, Cog, ArrowLeft, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Angular.',
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript'],
      features: [
        'Responsive Design',
        'SEO Optimization', 
        'Performance Optimization',
        'Cross-browser Compatibility'
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile apps for iOS and Android using React Native and Flutter.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      features: [
        'Cross-platform Development',
        'Native Performance',
        'App Store Deployment',
        'Push Notifications'
      ]
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Scalable server-side solutions with RESTful APIs and microservices architecture.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication & Security',
        'Microservices Architecture'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud deployment and infrastructure setup on AWS, Azure, and Google Cloud.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Monitoring & Logging'
      ]
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'End-to-end application development from concept to deployment.',
      technologies: ['MERN', 'MEAN', 'Django', 'Laravel'],
      features: [
        'Complete Solution',
        'Project Management',
        'Code Review',
        'Documentation'
      ]
    },
    {
      icon: Cog,
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, automated testing, and deployment automation.',
      technologies: ['GitHub Actions', 'Jenkins', 'Terraform', 'Ansible'],
      features: [
        'CI/CD Pipelines',
        'Automated Testing',
        'Infrastructure Automation',
        'Deployment Strategies'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold gradient-text">Services</h1>
            <div className="flex items-center space-x-4">
              <a href="mailto:ali@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Software Development{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive software development solutions tailored to your business needs. 
            From web applications to mobile apps and cloud infrastructure.
          </p>
          <Button size="lg" className="glow-button">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Technologies:</h4>
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
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-button">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="lg">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
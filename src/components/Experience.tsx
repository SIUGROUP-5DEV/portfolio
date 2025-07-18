import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Built real-time analytics dashboard used by 50+ clients',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Led team of 4 developers on major product launch'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      website: 'https://techcorp.com'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Built the entire web platform from scratch for a fintech startup. Collaborated closely with design and product teams.',
      achievements: [
        'Developed MVP that secured $2M seed funding',
        'Created responsive web app with 99.9% uptime',
        'Integrated payment processing handling $1M+ transactions',
        'Established development workflows and best practices'
      ],
      technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Stripe'],
      website: 'https://startupxyz.com'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Developed custom websites and web applications for various clients across different industries.',
      achievements: [
        'Delivered 15+ client projects on time and budget',
        'Improved client satisfaction scores by 25%',
        'Created reusable component library used across projects',
        'Mentored 2 junior developers'
      ],
      technologies: ['React', 'Vue.js', 'Sass', 'WordPress', 'Figma'],
      website: 'https://digitalagencypro.com'
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebDev Solutions',
      location: 'Boston, MA',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Started my professional journey building websites and learning full-stack development fundamentals.',
      achievements: [
        'Completed 20+ small to medium-sized projects',
        'Learned modern JavaScript frameworks and tools',
        'Contributed to open-source projects',
        'Built first full-stack application'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      website: 'https://webdevsolutions.com'
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground">
            My journey through various roles and companies, building expertise in full-stack development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">{exp.title}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                            {exp.website && (
                              <a 
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80"
                              >
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                            <Badge variant="secondary" className="w-fit">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
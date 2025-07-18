import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I create modern, scalable web applications with cutting-edge technologies. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="glow-button min-w-[200px]"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce"
          >
            <ArrowDown className="h-8 w-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
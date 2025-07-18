import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Alex Johnson</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating modern, scalable web applications 
              that make a difference.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:alex@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <a 
                href="mailto:alex@example.com"
                className="block hover:text-primary transition-colors"
              >
                alex@example.com
              </a>
              <a 
                href="tel:+15551234567"
                className="block hover:text-primary transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Johnson. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
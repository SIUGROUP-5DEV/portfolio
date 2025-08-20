const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: '../.env' });

// Import models
const User = require('./models/User');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Profile = require('./models/Profile');

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Profile.deleteMany({});

    // Create admin user
    const adminUser = new User({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Admin user created');

    // Create sample projects
    const projects = [
      {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        category: 'Full Stack',
        github: 'https://github.com',
        demo: 'https://demo.com',
        featured: true
      },
      {
        title: 'Task Management App',
        description: 'A collaborative project management tool with real-time updates, team collaboration, and advanced filtering.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
        category: 'Frontend',
        github: 'https://github.com',
        demo: 'https://demo.com',
        featured: false
      },
      {
        title: 'API Gateway Service',
        description: 'A microservices API gateway with rate limiting, authentication, and request routing capabilities.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        tags: ['Node.js', 'Express', 'Redis', 'Docker'],
        category: 'Backend',
        github: 'https://github.com',
        featured: false
      }
    ];

    await Project.insertMany(projects);
    console.log('Sample projects created');

    // Create sample skills
    const skills = [
      { name: 'React', level: 95, category: 'Frontend', order: 1 },
      { name: 'TypeScript', level: 90, category: 'Frontend', order: 2 },
      { name: 'JavaScript', level: 95, category: 'Frontend', order: 3 },
      { name: 'Node.js', level: 90, category: 'Backend', order: 1 },
      { name: 'Python', level: 85, category: 'Backend', order: 2 },
      { name: 'MongoDB', level: 80, category: 'Backend', order: 3 },
      { name: 'Git', level: 90, category: 'Tools & DevOps', order: 1 },
      { name: 'Docker', level: 75, category: 'Tools & DevOps', order: 2 },
      { name: 'AWS', level: 70, category: 'Tools & DevOps', order: 3 }
    ];

    await Skill.insertMany(skills);
    console.log('Sample skills created');

    // Create sample experiences
    const experiences = [
      {
        title: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        location: 'San Francisco, CA',
        period: '2022 - Present',
        type: 'Full-time',
        description: 'Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
        achievements: [
          'Reduced application load time by 40% through optimization',
          'Built real-time analytics dashboard used by 50+ clients',
          'Implemented CI/CD pipeline reducing deployment time by 60%'
        ],
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
        website: 'https://techcorp.com',
        current: true,
        order: 1
      },
      {
        title: 'Full Stack Developer',
        company: 'StartupXYZ',
        location: 'Remote',
        period: '2021 - 2022',
        type: 'Full-time',
        description: 'Built the entire web platform from scratch for a fintech startup. Collaborated closely with design and product teams.',
        achievements: [
          'Developed MVP that secured $2M seed funding',
          'Created responsive web app with 99.9% uptime',
          'Integrated payment processing handling $1M+ transactions'
        ],
        technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Stripe'],
        website: 'https://startupxyz.com',
        current: false,
        order: 2
      }
    ];

    await Experience.insertMany(experiences);
    console.log('Sample experiences created');

    // Create profile
    const profile = new Profile({
      name: 'Eng. Ali',
      title: 'Software Development Agent',
      bio: 'I provide comprehensive software development services, from web applications to mobile solutions. Delivering quality code and innovative solutions for your business needs.',
      email: 'ali@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      profileImage: '/src/assets/profile-ali.jpg',
      heroImage: '/src/assets/hero-bg.jpg',
      socialLinks: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'ali@example.com'
      },
      stats: {
        businessPartners: 200,
        satisfiedCustomers: 30000,
        yearsExperience: 10
      }
    });

    await profile.save();
    console.log('Profile created');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
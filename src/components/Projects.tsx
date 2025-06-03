'use client';

import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const Projects: React.FC = () => {
  // Sample projects data - you can move this to a separate data file
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Node.js, and PostgreSQL. Features include user authentication, payment processing, order management, and admin dashboard.',
      image: '/projects/ecommerce.jpg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript'],
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.',
      image: '/projects/taskmanager.jpg',
      technologies: ['React', 'Socket.io', 'Express.js', 'MongoDB', 'Material-UI'],
      githubUrl: 'https://github.com/yourusername/taskmanager',
      liveUrl: 'https://taskmanager-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps. Features location-based services and data visualization.',
      image: '/projects/weather.jpg',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Leaflet'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, comment system, and SEO optimization. Built with Next.js and headless CMS integration.',
      image: '/projects/blog.jpg',
      technologies: ['Next.js', 'Contentful', 'Vercel', 'MDX'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://blog-platform-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for business intelligence with interactive charts, real-time data processing, and export capabilities.',
      image: '/projects/analytics.jpg',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: 'https://github.com/yourusername/analytics-dashboard',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A social media application with post sharing, real-time messaging, and media upload functionality. Built with React Native for mobile platforms.',
      image: '/projects/social.jpg',
      technologies: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/social-media-app',
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Featured Projects</h2>
          <p className="lead text-muted">
            A showcase of my recent work and side projects
          </p>
        </motion.div>

        {/* Featured Projects */}
        <Row className="mb-5">
          {featuredProjects.map((project, index) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 project-card shadow-sm">
                  <div className="position-relative overflow-hidden">
                    <Card.Img 
                      variant="top" 
                      src={project.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                        target.parentElement!.style.height = '200px';
                      }}
                    />
                    <Badge 
                      bg="primary" 
                      className="position-absolute top-0 end-0 m-2"
                    >
                      Featured
                    </Badge>
                  </div>
                  
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {project.description}
                    </Card.Text>
                    
                    <div className="mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          bg="secondary" 
                          className="me-1 mb-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="d-flex gap-2">
                      {project.githubUrl && (
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-1"
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button 
                          variant="primary" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center gap-1"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h3 className="fw-bold mb-3">Other Notable Projects</h3>
        </motion.div>

        <Row>
          {otherProjects.map((project, index) => (
            <Col lg={4} md={6} key={project.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 project-card">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{project.title}</Card.Title>
                    <Card.Text className="text-muted flex-grow-1">
                      {project.description}
                    </Card.Text>
                    
                    <div className="mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          bg="light" 
                          text="dark"
                          className="me-1 mb-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge bg="light" text="muted" className="me-1 mb-1">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="d-flex gap-2">
                      {project.githubUrl && (
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button 
                          variant="outline-primary" 
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <Button 
            variant="outline-primary" 
            size="lg"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-2 mx-auto"
          >
            <Github size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

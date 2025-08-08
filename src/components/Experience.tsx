'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Lead a team of 5 developers in building scalable web applications',
        'Architected and implemented microservices using Node.js and Docker',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'New York, NY',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with UX/UI designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Implemented CI/CD pipelines using GitHub Actions'
      ],
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Azure', 'Jest', 'Cypress']
    },
    {
      id: 3,
      title: 'Software Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: 'Jun 2018 - Feb 2020',
      description: [
        'Built MVP for a social media platform from scratch',
        'Developed real-time chat functionality using Socket.io',
        'Optimized database queries resulting in 60% faster load times',
        'Participated in agile development and sprint planning'
      ],
      technologies: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Redis', 'Git']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'Web Agency Pro',
      location: 'Chicago, IL',
      period: 'Aug 2017 - May 2018',
      description: [
        'Developed responsive websites for small to medium businesses',
        'Maintained and updated existing client websites',
        'Collaborated with design team to implement pixel-perfect layouts',
        'Learned modern web development best practices'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'WordPress', 'Bootstrap']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Work Experience</h2>
          <p className="lead text-muted">
            My professional journey as a software engineer
          </p>
        </motion.div>

        <div className="timeline position-relative">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="timeline-item mb-5">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-content"
              >
                <Card className="shadow-sm card-hover">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h4 className="fw-bold text-primary mb-1">
                          {experience.title}
                        </h4>
                        <h5 className="fw-semibold mb-2 d-flex align-items-center gap-2">
                          <Building size={18} />
                          {experience.company}
                        </h5>
                      </div>
                      <div className="text-end">
                        <div className="d-flex align-items-center gap-1 text-muted mb-1">
                          <Calendar size={16} />
                          <small>{experience.period}</small>
                        </div>
                        <div className="d-flex align-items-center gap-1 text-muted">
                          <MapPin size={16} />
                          <small>{experience.location}</small>
                        </div>
                      </div>
                    </div>

                    <ul className="list-unstyled mb-3">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="mb-2">
                          <span className="text-primary me-2">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="d-flex flex-wrap gap-1">
                      {experience.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="badge bg-light text-dark border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

'use client';

import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vue.js', 'HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'C#']
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Firebase', 'Supabase']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Figma', 'Jira', 'Slack', 'VS Code', 'Linux']
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Skills & Technologies</h2>
          <p className="lead text-muted">
            A comprehensive toolkit built over 8+ years of professional experience
          </p>
        </motion.div>

        <Row>
          {skillCategories.map((category, categoryIndex) => (
            <Col lg={6} key={categoryIndex} className="mb-5">
              <motion.div
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="fw-bold mb-3 text-primary">{category.title}</h4>
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge 
                        bg="light" 
                        text="dark"
                        className="skill-badge px-3 py-2 fs-6"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

'use client';

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Code, Users, Award, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '8+' },
    { icon: Users, label: 'Projects Completed', value: '50+' },
    { icon: Award, label: 'Technologies', value: '20+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '∞' }
  ];

  return (
    <section id="about" className="section-padding bg-light">
      <Container>
        <Row>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="display-5 fw-bold mb-4">About Me</h2>
              <p className="lead mb-4">
                I&apos;m a passionate senior software engineer with over 8 years of experience 
                in building robust, scalable web applications. My journey started with a 
                curiosity about how things work, which led me to fall in love with coding.
              </p>
              <p className="mb-4">
                Throughout my career, I&apos;ve had the privilege of working with amazing teams 
                and leading projects from conception to deployment. I specialize in full-stack 
                development with a focus on React, Node.js, and cloud technologies.
              </p>
              <p className="mb-4">
                When I&apos;m not coding, you can find me contributing to open-source projects, 
                mentoring junior developers, or exploring the latest technologies. I believe 
                in continuous learning and sharing knowledge with the community.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <Row>
              {stats.map((stat, index) => (
                <Col md={6} key={index} className="mb-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center h-100 card-hover border-0 shadow-sm">
                      <Card.Body>
                        <div className="text-primary mb-3">
                          <stat.icon size={40} />
                        </div>
                        <h3 className="display-6 fw-bold text-primary mb-2">
                          {stat.value}
                        </h3>
                        <p className="text-muted mb-0">{stat.label}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

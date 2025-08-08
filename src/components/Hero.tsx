'use client';

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-4 fw-bold mb-3">
                Hi, I&apos;m{' '}
                <span className="text-primary">Your Name</span>
              </h1>
              <h2 className="display-6 text-secondary mb-4">
                Senior Software Engineer
              </h2>
              <p className="lead mb-4">
                PA assionate full-stack developer with 8+ years of experience 
                building scalable web applications and leading development teams. 
                I specialize in React, Node.js, and cloud technologies.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="#contact"
                  className="d-flex align-items-center gap-2"
                >
                  <Mail size={20} />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="#projects"
                  className="d-flex align-items-center gap-2"
                >
                  View Projects
                  <ArrowDown size={20} />
                </Button>
              </div>
              
              <div className="d-flex gap-3">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="position-relative">
                <div 
                  className="rounded-circle bg-primary mx-auto"
                  style={{ 
                    width: '300px', 
                    height: '300px',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--info-color))'
                  }}
                >
                  {/* Placeholder for profile image */}
                  <div className="d-flex align-items-center justify-content-center h-100 text-white fs-1 fw-bold">
                    YN
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="position-absolute top-0 start-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-warning rounded p-2 shadow">
                    <span className="fw-bold">React</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="position-absolute top-50 end-0"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <div className="bg-success rounded p-2 shadow">
                    <span className="fw-bold">Node.js</span>
                  </div>
                </motion.div>
                
                <motion.div
                  className="position-absolute bottom-0 start-50"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="bg-info rounded p-2 shadow">
                    <span className="fw-bold">TypeScript</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

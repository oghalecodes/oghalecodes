'use client';

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  
  useEffect(() => {
    // Update year on client side after hydration
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={6} className="mb-4">
            <h5 className="fw-bold mb-3">Your Name</h5>
            <p className="text-muted mb-3">
              Senior Software Engineer passionate about building exceptional 
              digital experiences and mentoring the next generation of developers.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </Col>
          
          <Col lg={3} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-muted text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-muted text-decoration-none">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#experience" className="text-muted text-decoration-none">
                  Experience
                </a>
              </li>
              <li className="mb-2">
                <a href="#blog" className="text-muted text-decoration-none">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          
          <Col lg={3} className="mb-4">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="text-muted text-decoration-none"
                >
                  Resume
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="/blog" 
                  className="text-muted text-decoration-none"
                >
                  All Blog Posts
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted text-decoration-none"
                >
                  Open Source
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="#contact" 
                  className="text-muted text-decoration-none"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted mb-0">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="text-muted mb-0 d-flex align-items-center justify-content-md-end">
              Made with <Heart size={16} className="text-danger mx-1" /> using Next.js
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

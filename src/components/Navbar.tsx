'use client';

import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <BootstrapNavbar 
      expand="lg" 
      fixed="top" 
      className="navbar-custom"
      variant={theme}
    >
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold">
          YourName.dev
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <Menu size={24} />
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
          <Nav>
            <button 
              className="btn btn-outline-secondary me-2"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {mounted ? (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />) : <Moon size={20} />}
            </button>
            <Nav.Link 
              href="/resume.pdf" 
              target="_blank"
              className="btn btn-outline-primary"
            >
              Resume
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

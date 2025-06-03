'use client';

import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAlertType('success');
      setShowAlert(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setAlertType('danger');
      setShowAlert(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <Row>
          <Col lg={4} className="mb-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="fw-bold mb-4">Let&apos;s Connect</h4>
              <p className="text-muted mb-4">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and development.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="d-flex align-items-center mb-3"
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{info.title}</h6>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted text-decoration-none"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted mb-0">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-sm">
                <Card.Body className="p-4">
                  {showAlert && (
                    <Alert 
                      variant={alertType}
                      dismissible
                      onClose={() => setShowAlert(false)}
                    >
                      {alertType === 'success' 
                        ? 'Thank you for your message! I&apos;ll get back to you soon.' 
                        : 'Something went wrong. Please try again later.'
                      }
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject *</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                      className="d-flex align-items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

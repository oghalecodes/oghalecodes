'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

export const Blog: React.FC = () => {
  // Sample blog posts - you can move this to a separate data file or fetch from CMS
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications using TypeScript, including component patterns, state management, and performance optimization techniques.',
      date: '2024-05-15',
      readTime: '8 min read',
      slug: 'building-scalable-react-applications-typescript',
      tags: ['React', 'TypeScript', 'Architecture']
    },
    {
      id: 2,
      title: 'Microservices Architecture: Lessons Learned',
      excerpt: 'A deep dive into microservices architecture, including when to use it, common pitfalls to avoid, and how to handle distributed system challenges.',
      date: '2024-04-28',
      readTime: '12 min read',
      slug: 'microservices-architecture-lessons-learned',
      tags: ['Architecture', 'Microservices', 'Backend']
    },
    {
      id: 3,
      title: 'Optimizing Web Performance: A Complete Guide',
      excerpt: 'Comprehensive guide to web performance optimization, covering everything from bundle size reduction to image optimization and caching strategies.',
      date: '2024-04-10',
      readTime: '10 min read',
      slug: 'optimizing-web-performance-complete-guide',
      tags: ['Performance', 'Web Development', 'Optimization']
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding bg-light">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Latest Blog Posts</h2>
          <p className="lead text-muted">
            Sharing knowledge and insights from my development journey
          </p>
        </motion.div>

        <Row>
          {blogPosts.map((post, index) => (
            <Col lg={4} md={6} key={post.id} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 card-hover shadow-sm">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <div className="d-flex align-items-center gap-3 text-muted mb-2">
                        <small className="d-flex align-items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </small>
                        <small className="d-flex align-items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </small>
                      </div>
                      
                      <h4 className="fw-bold mb-3">
                        <a 
                          href={`/blog/${post.slug}`}
                          className="text-decoration-none text-dark"
                        >
                          {post.title}
                        </a>
                      </h4>
                    </div>

                    <p className="text-muted flex-grow-1 mb-3">
                      {post.excerpt}
                    </p>

                    <div className="mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="badge bg-primary me-1 mb-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Button 
                        variant="outline-primary"
                        href={`/blog/${post.slug}`}
                        className="d-flex align-items-center gap-2"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Button>
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
            variant="primary" 
            size="lg"
            href="/blog"
            className="d-flex align-items-center gap-2 mx-auto"
          >
            View All Posts
            <ArrowRight size={20} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

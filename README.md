# Professional Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Bootstrap. Features dark/light theme toggle, animations, and optimized for GitHub Pages deployment.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first responsive design that works on all devices
- **Dark/Light Theme**: Toggle between themes with user preference persistence
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Blog Support**: Markdown-based blog with syntax highlighting
- **Contact Form**: Working contact form with validation
- **GitHub Pages Ready**: Optimized for static deployment

## 🛠️ Built With

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Bootstrap 5 + Custom SCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: Markdown with Gray Matter
- **Deployment**: GitHub Pages

## 📋 Sections

- **Hero**: Eye-catching introduction with animated elements
- **About**: Personal story and key statistics
- **Skills**: Categorized technical skills with hover effects
- **Projects**: Featured and additional projects with live demos
- **Experience**: Professional timeline with detailed descriptions
- **Blog**: Latest blog posts with excerpts
- **Contact**: Contact form and information
- **Footer**: Social links and additional navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Personal Information

Update the following files with your information:

1. **Components**: Update personal details in:
   - `src/components/Hero.tsx`
   - `src/components/About.tsx`
   - `src/components/Contact.tsx`
   - `src/components/Footer.tsx`
   - `src/components/Navbar.tsx`

2. **Metadata**: Update SEO information in:
   - `src/app/layout.tsx`

3. **Projects**: Add your projects in:
   - `src/components/Projects.tsx`
   - `content/projects/` (for detailed project pages)

4. **Experience**: Update work history in:
   - `src/components/Experience.tsx`

5. **Skills**: Customize your skills in:
   - `src/components/Skills.tsx`

6. **Blog Posts**: Add blog posts in:
   - `content/blog/` (Markdown files)

### Images

Add your images to the `public/` directory:
- Profile photo: `public/profile.jpg`
- Project images: `public/projects/`
- Resume: `public/resume.pdf`

### Social Links

Update social media links in:
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/Navbar.tsx`

## 📱 Customization

### Theme Colors

Customize colors in `src/styles/globals.scss`:

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  // Add your custom colors
}
```

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google';
// Replace with your preferred font
```

### Animations

Customize animations in components using Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 🚀 Deployment

This portfolio is configured for GitHub Pages deployment.

### Automatic Deployment

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io`

### Manual Deployment

```bash
npm run build
npm run export
# Deploy the 'out' folder to your hosting service
```

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the repository settings in GitHub

## 📝 Adding Content

### Blog Posts

Create new blog posts in `content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
readTime: "5 min read"
---

# Your Content Here
```

### Projects

Add detailed project pages in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
technologies: ["tech1", "tech2"]
githubUrl: "https://github.com/..."
liveUrl: "https://..."
featured: true
---

# Detailed project content
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help customizing the portfolio:

- Create an issue in the repository
- Check existing issues for solutions
- Reach out via the contact form

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Bootstrap](https://getbootstrap.com/) for the responsive design system
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Happy coding!** 🚀

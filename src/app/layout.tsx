import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name - Senior Software Engineer',
  description: 'Portfolio of a Senior Software Engineer with 8+ years of experience',
  keywords: 'software engineer, developer, portfolio, full stack, react, next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

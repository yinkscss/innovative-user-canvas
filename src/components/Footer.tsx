import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-portfolio-dark border-t border-portfolio-accent/10 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-white inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-portfolio-light">Olayinka</span>
            </a>
            <p className="text-portfolio-light/70">
              Creating beautiful, functional websites and applications with passion and precision.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-portfolio-light/60 hover:text-portfolio-accent transition-colors duration-300" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="text-portfolio-light/70">Kaduna, Nigeria</li>
              <li>
                <a href="mailto:contact@example.com" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">olayinkashittu2003@gmail.com</a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-portfolio-light/70 hover:text-portfolio-accent transition-colors duration-300">+2349121212672

              </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-portfolio-accent/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-light/60 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>;
};
export default Footer;
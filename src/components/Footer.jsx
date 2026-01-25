import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ricardo Chávez. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
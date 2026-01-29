import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Efecto de fondo "Tech" (Círculos difuminados) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Badge estilo código */}
        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
          &lt;Desarrollador Junior /&gt;
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Ricardo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Chávez</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
          Estudiante de Ingeniería en Sistemas. 
        </p>
        <p className="mt-2 text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          Apasionado por la tecnología, el análisis y la resolución de problemas. Buscando oportunidades para crecer como profesional en TI.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#proyectos" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
            Ver Proyectos
          </a>
          <a href="#contacto" className="px-8 py-3 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
            Contacto
          </a>
        </div>

        {/* Íconos sociales */}
        <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ricardo-ch%C3%A1vez-1159083a5/" target="_blank" className="text-gray-400 hover:text-white hover:scale-110 transition-transform">
                <Linkedin size={24} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Github, FolderGit, ExternalLink } from 'lucide-react';

const Projects = () => {
  // --- ÁREA DE EDICIÓN: SUSTITUYE ESTOS DATOS CON TUS PROYECTOS REALES ---
  const projects = [
    {
      title: "Simulado de Préstamos",
      description: "Simulador financiero desarrollado en **Java Swing** que permite calcular tablas de amortización con cuota nivelada.",
      // NOTA: Reemplaza estas URLs por capturas de pantalla reales de tus proyectos
      image: "/calculadora.png",
      technologies: ["Java", "NetBeans IDE 22", "Git & GitHub"],
      githubLink: "https://github.com/RickManu/Simulador-Prestamos-Java.git", // Enlace a tu repo
      hasDemo: true // Cambia a true si tienes un enlace funcional (deploy)
    },
    {
      title: "Página Web Institucional",
      description: "Diseño y desarrollo de una landing page responsiva para una empresa ficticia, enfocada en la experiencia de usuario (UX) y diseño limpio.",
      image: "/paginaweb.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com",
      hasDemo: true,
      demoLink: "https://netlify.com" // Ejemplo
    },
    {
      title: "Calculadora de Nómina",
      description: "Aplicación de consola para automatizar cálculos salariales, aplicando deducciones de ley y bonificaciones según reglas de negocio.",
      image: "https://placehold.co/600x400/1e293b/2563eb?text=Algoritmos+Java&font=roboto",
      technologies: ["Java", "Lógica de Programación"],
      githubLink: "https://github.com",
      hasDemo: false
    }
  ];
  // -----------------------------------------------------------------------

  return (
    <section id="proyectos" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
            <span className="text-blue-500 font-mono text-sm tracking-wider">&lt;Portafolio /&gt;</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Proyectos <span className="text-blue-500">Destacados</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos académicos y prácticas, aplicando conocimientos en desarrollo de software y sistemas.
            </p>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Tarjeta del Proyecto
            <div 
              key={index}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] flex flex-col"
            >
              {/* Contenedor de Imagen con efecto Zoom */}
              <div className="relative overflow-hidden h-48 bg-slate-800">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 z-20 bg-slate-900/80 p-2 rounded-full text-blue-400">
                  <FolderGit size={20} />
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                    </p>
                </div>

                <div>
                    {/* Etiquetas de Tecnología */}
                    <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 rounded-full border border-blue-800/30">
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Botones de Enlaces */}
                    <div className="flex items-center gap-4">
                        <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white bg-slate-800 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors border border-slate-700 hover:border-blue-500"
                        >
                        <Github size={18} />
                        Código
                        </a>
                        
                        {/* Botón Demo (Opcional, solo aparece si hasDemo es true) */}
                        {project.hasDemo && (
                        <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-white px-4 py-2 rounded-lg transition-colors group/link"
                        >
                            <ExternalLink size={18} className="group-hover/link:scale-110 transition-transform" />
                            Ver Demo
                        </a>
                        )}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="https://github.com" target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Ver más proyectos en GitHub <ExternalLink size={16} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
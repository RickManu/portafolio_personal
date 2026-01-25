import React from 'react';
import { Brain, Zap, Target, Code } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "Pensamiento Lógico",
      description: "Enfoque analítico para resolver problemas complejos de forma eficiente."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Aprendizaje Rápido",
      description: "Capacidad de adaptación a nuevas tecnologías y entornos cambiantes."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Orientado a Resultados",
      description: "Compromiso total con la calidad y el cumplimiento de metas."
    },
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Pasión por el Código",
      description: "Desarrollo continuo de habilidades técnicas y mejores prácticas."
    }
  ];

  return (
    <section id="sobre-mí" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección con etiqueta estilo código arriba */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-wider">&lt;SobreMí /&gt;</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Sobre <span className="text-blue-500">Mí</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Texto */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Soy <strong className="text-blue-400">Ricardo Chávez</strong>, estudiante de Ingeniería en Sistemas con una pasión genuina por la tecnología y el desarrollo de soluciones digitales. Mi formación combina conocimientos técnicos sólidos con experiencia práctica en análisis de datos y gestión de procesos.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Me caracterizo por mi capacidad de aprendizaje rápido, responsabilidad y pensamiento lógico. Busco constantemente oportunidades para aplicar mis conocimientos en desarrollo web, soporte técnico y sistemas, mientras continúo expandiendo mis habilidades.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mi objetivo es integrarme a un equipo donde pueda contribuir con mis habilidades mientras desarrollo mi carrera profesional en el mundo de la tecnología.
            </p>
          </div>

          {/* Columna Derecha: Grid de 4 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
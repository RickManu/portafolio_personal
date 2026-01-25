import React from 'react';

const Skills = () => {
  // Datos de las habilidades técnicas para generar las tarjetas
  const skillCategories = [
    {
      title: "Desarrollo Web",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 60 }
      ]
    },
    {
      title: "Herramientas",
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "Excel Avanzado", level: 90 },
        { name: "VS Code", level: 85 },
        { name: "Terminal / CLI", level: 60 }
      ]
    },
    {
      title: "Bases de Datos & Sistemas",
      skills: [
        { name: "SQL Básico", level: 65 },
        { name: "MySQL", level: 60 },
        { name: "Soporte Técnico", level: 85 },
        { name: "Windows / Linux", level: 75 }
      ]
    }
  ];

  const softSkills = [
    "Trabajo en equipo",
    "Comunicación efectiva",
    "Resolución de problemas",
    "Gestión del tiempo",
    "Adaptabilidad",
    "Atención al detalle"
  ];

  return (
    <section id="habilidades" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-wider">&lt;Habilidades /&gt;</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Habilidades <span className="text-blue-500">Técnicas</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Herramientas y tecnologías con las que trabajo y continúo aprendiendo día a día.
          </p>
        </div>

        {/* Grid de Habilidades Técnicas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 text-center border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    {/* Barra de Progreso */}
                    <div className="w-full bg-slate-800 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Habilidades Blandas */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Habilidades Blandas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-300 text-sm font-medium hover:bg-blue-500/20 hover:border-blue-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
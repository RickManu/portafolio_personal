import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Asistente Contable",
      company: "Oficina Contable / Freelance",
      period: "2025 - Presente", // Puedes ajustar las fechas
      description: "Gestión y análisis de información financiera crítica. Desarrollo de habilidades analíticas y atención al detalle.",
      achievements: [
        "Revisión y validación de recibos y facturas para declaraciones fiscales.",
        "Uso avanzado de Excel para el control, filtrado y ordenamiento de grandes volúmenes de datos.",
        "Mantenimiento de registros digitales organizados y sistemas de archivo."
      ],
      tags: ["Excel", "Análisis de Datos", "Resolución de Problemas"]
    },
    /*{
      title: "Encargado Operativo",
      company: "Negocio Familiar (Restaurante)",
      period: "2022 - 2023",
      description: "Liderazgo en la gestión operativa y administrativa del negocio, enfocándome en la optimización de recursos.",
      achievements: [
        "Control gestión de compras con proveedores.",
        "Organización y mejora de procesos internos para aumentar la eficiencia y reducir costos.",
        "Atención al cliente y resolución de conflictos en tiempo real."
      ],
      tags: ["Liderazgo", "Procesos"]
    }
  */];

  return (
    <section id="experiencia" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-wider">&lt;Trayectoria /&gt;</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Experiencia <span className="text-blue-500">Laboral</span>
          </h2>
        </div>

        {/* Línea de tiempo */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              
              {/* Línea Vertical (Conector) */}
              {index !== experiences.length - 1 && (
                <div className="md:hidden absolute left-[11px] top-8 h-full w-0.5 bg-slate-800"></div>
              )}
              
              <div className="md:flex items-start justify-between group">
                
                {/* Lado Izquierdo (Fecha y Empresa) - Desktop */}
                <div className="hidden md:block md:w-5/12 text-right pr-8 mt-1">
                   <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{exp.company}</h4>
                   <div className="flex items-center justify-end gap-2 text-gray-400 text-sm mt-1">
                     <Calendar size={14} />
                     <span>{exp.period}</span>
                   </div>
                </div>

                {/* Punto Central (Ícono) */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 border-2 border-blue-500 z-10 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Lado Derecho (Detalle del Rol) */}
                <div className="md:w-5/12 pl-4 md:pl-8">
                  {/* Encabezado Móvil */}
                  <div className="md:hidden mb-2">
                    <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                    <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {exp.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Lista de Logros */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-blue-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
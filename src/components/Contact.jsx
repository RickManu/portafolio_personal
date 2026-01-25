import React from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-wider">&lt;Contacto /&gt;</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Ponte en <span className="text-blue-500">Contacto</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna propuesta o proyecto en mente? ¡Me encantaría escucharte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Información de Contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-900/20 p-3 rounded-lg text-blue-500">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium">Correo Electrónico</h4>
                {/* CORREGIDO: El mailto ahora coincide con el texto */}
                <a href="mailto:ricardochavezmanuel@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  ricardochavezmanuel@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-900/20 p-3 rounded-lg text-blue-500">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium">Teléfono</h4>
                <p className="text-gray-400">+502 4524 1848</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-900/20 p-3 rounded-lg text-blue-500">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-medium">Ubicación</h4>
                <p className="text-gray-400">Guatemala (Disponible remoto)</p>
              </div>
            </div>

            {/* Caja de mensaje motivacional */}
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mt-8">
                <p className="text-gray-300 italic">
                    "Disponible para posiciones Junior, pasantías o proyectos freelance."
                </p>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <form 
            action="https://formspree.io/f/xjgydzno" 
            method="POST"
            className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 shadow-xl"
          >
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  name="nombre" 
                  required // Agregado para que no lo manden vacío
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Correo</label>
                <input 
                  type="email" 
                  name="email" 
                  required // Agregado
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea 
                  name="mensaje" 
                  rows="4"
                  required // Agregado
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  placeholder="¿Cómo puedo ayudarte?"
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transform hover:-translate-y-1">
                <Send size={18} />
                Enviar Mensaje
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
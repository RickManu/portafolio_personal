import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">RC<span className="text-blue-500">.dev</span></span>
          </div>
          
          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-blue-500 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Botón Menú Móvil */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium">
                  {item}
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
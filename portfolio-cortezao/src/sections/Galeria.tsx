import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockTattoos, type Tattoo } from '../data/tattoos';

type FiltroAtActive = 'Todos' | 'Blackwork' | 'Old School' | 'Folclore' | 'Fine Line' | 'Botânico' | 'Disponíveis ☀️';

interface GaleriaProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Galeria({ isOpen, onClose }: GaleriaProps) {
  const [filtro, setFiltro] = useState<FiltroAtActive>('Todos');

  // 🕹️ LÓGICA DO ESC E DO SCROLL
  useEffect(() => {
    const tratarEsc = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', tratarEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', tratarEsc);
    };
  }, [isOpen, onClose]);

  const tattoosFiltradas = mockTattoos.filter((tattoo) => {
    if (filtro === 'Todos') return true;
    if (filtro === 'Disponíveis ☀️') return tattoo.disponivel;
    return tattoo.categoria === filtro;
  });

  const botoes: FiltroAtActive[] = ['Todos', 'Blackwork', 'Old School', 'Folclore', 'Fine Line', 'Botânico', 'Disponíveis ☀️'];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          className="fixed inset-0 bg-verde-estudio z-50 overflow-y-auto py-16 px-4 md:px-8 bg-pintas-onca"
        >
          
          {/* 🤫 BOTÃO DE FECHAR DISCRETO E FIXO */}
          <button
            onClick={onClose}
            className="fixed top-4 right-4 md:top-8 md:right-8 z-50 px-3 py-1.5 bg-verde-estudio/80 backdrop-blur-md border border-papel-kraft/10 text-papel-kraft/60 hover:text-ouro-velho hover:border-ouro-velho/40 font-mono text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
          >
            ✕ Fechar <span className="hidden md:inline opacity-40 ml-1">(ESC)</span>
          </button>

          {/* Cabeçalho do Modal */}
          <div className="max-w-6xl mx-auto mb-12 text-center md:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative pr-12">
            <div>
              <span className="text-ouro-velho font-vintage text-xl tracking-wider block mb-1">PORTFÓLIO COMPLETO</span>
              <h2 className="text-papel-kraft font-manchete text-4xl md:text-6xl uppercase tracking-tight">
                Mural de Tinta
              </h2>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {botoes.map((item) => (
                <button
                  key={item}
                  onClick={() => setFiltro(item)}
                  className={`px-3 py-1.5 font-manchete text-base uppercase tracking-wide border-2 transition-all duration-200 transform -skew-x-6 cursor-pointer
                    ${filtro === item 
                      ? 'bg-bordo-sangue text-papel-kraft border-bordo-sangue scale-105' 
                      : 'bg-transparent text-papel-kraft/60 border-papel-kraft/20 hover:border-ouro-velho hover:text-ouro-velho'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Estilo Masonry */}
          <motion.div layout className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {tattoosFiltradas.map((tattoo: Tattoo) => (
                <motion.div
                  layout
                  key={tattoo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid bg-bordo-sangue/10 border border-bordo-sangue/30 group relative overflow-hidden shadow-xl mb-6 inline-block w-full"
                >
                  <div className="w-full bg-zinc-900 relative overflow-hidden">
                    {/* 🎨 IMAGEM BLINDADA: Colorida no Mobile, P&B com hover apenas no Desktop */}
                    <img 
                      src={tattoo.imagem} 
                      alt={tattoo.titulo}
                      className="w-full h-auto object-cover grayscale-0 contrast-100 md:grayscale md:contrast-115 md:group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out"
                    />
                    
                    {/* 🎭 OVERLAY RESPONSIVO: Escondido no Mobile (hidden), ativo apenas no Desktop (md:block) */}
                    <div className="hidden md:block absolute inset-0 bg-bordo-sangue/10 mix-blend-color group-hover:opacity-0 transition-opacity duration-300" />
                    
                    {tattoo.disponivel && (
                      <span className="absolute top-3 right-3 bg-ouro-velho text-verde-estudio font-manchete text-sm px-3 py-1 uppercase tracking-wider shadow-md transform rotate-3">
                        Disponível ☀️
                      </span>
                    )}
                  </div>

                  <div className="p-4 flex items-center justify-between bg-bordo-sangue/25 border-t border-bordo-sangue/20">
                    <h3 className="font-manchete text-xl text-papel-kraft uppercase tracking-tight group-hover:text-ouro-velho transition-colors">
                      {tattoo.titulo}
                    </h3>
                    <span className="font-mono text-xs text-ouro-velho bg-verde-estudio/50 px-2 py-1 uppercase rounded-sm">
                      {tattoo.categoria}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
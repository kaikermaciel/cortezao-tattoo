import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  const [hasError, setHasError] = useState(false);

  // Zera o estado de erro e escuta a tecla ESC
  useEffect(() => {
    if (isOpen) {
      setHasError(false);
    }

    const tratarEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', tratarEsc);
    return () => window.removeEventListener('keydown', tratarEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop escuro com efeito de vidro */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal do Vídeo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="w-full max-w-2xl bg-zinc-950 p-3 md:p-5 rounded-3xl shadow-2xl relative z-10 border-2 border-ouro-velho/40 overflow-hidden flex flex-col items-center"
          >
            {/* Botão de Fechar */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-4 text-papel-kraft/70 hover:text-ouro-velho font-mono text-xs cursor-pointer z-20 bg-black/60 px-3 py-1 rounded-full border border-papel-kraft/20 transition-colors"
            >
              ✕ ESC
            </button>

            <span className="font-vintage text-ouro-velho text-xs md:text-sm tracking-widest uppercase my-2">
              ⚡ SEGREDOS DO ESTÚDIO ⚡
            </span>

            {/* Container do Vídeo com Tratamento de Erro */}
            <div className="w-full rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-bordo-sangue/30 shadow-inner relative">
              
              {hasError ? (
                /* 🎨 TELA DE ERRO CUSTOMIZADA (Se o vídeo falhar) */
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-2">🎞️</span>
                  <p className="font-manchete text-xl text-papel-kraft uppercase">
                    Vídeo indisponível
                  </p>
                  <p className="font-mono text-xs text-papel-kraft/50 mt-1 max-w-xs">
                    Certifique-se de que o arquivo <code className="text-ouro-velho">easteregg.mp4</code> está salvo na pasta <code className="text-ouro-velho">public/</code>.
                  </p>
                </div>
              ) : (
                /* 🎬 REPRODUTOR DE VÍDEO CORRIGIDO */
                <video 
                  autoPlay 
                  controls 
                  playsInline
                  onError={() => setHasError(true)}
                  className="w-full h-full object-contain"
                >
                  <source src="/patixa.mp4" type="video/mp4" />
                  Seu navegador não suporta a execução deste vídeo.
                </video>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
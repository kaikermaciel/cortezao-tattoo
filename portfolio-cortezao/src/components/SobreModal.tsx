import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SobreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SobreModal({ isOpen, onClose }: SobreModalProps) {
  // Trava o scroll de fundo
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop escuro de fundo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* O Fanzine / Painel de Manifesto */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="w-full max-w-2xl bg-papel-kraft text-verde-estudio h-full relative z-10 shadow-2xl p-6 md:p-12 overflow-y-auto flex flex-col justify-between border-l-4 border-bordo-sangue"
          >
            <div>
              {/* Botão de Fechar estilo carimbo */}
              <div className="flex justify-between items-center mb-8 border-b-2 border-dashed border-bordo-sangue/20 pb-4">
                <span className="text-bordo-sangue font-vintage text-lg tracking-widest">● ARTISTA RESIDENTE</span>
                <button 
                  onClick={onClose}
                  className="px-3 py-1 bg-bordo-sangue text-papel-kraft font-manchete text-sm uppercase tracking-wider hover:bg-ouro-velho hover:text-verde-estudio transition-colors cursor-pointer"
                >
                  Fechar ✕
                </button>
              </div>

              {/* Título */}
              <h3 className="font-manchete text-5xl md:text-7xl uppercase text-bordo-sangue leading-none mb-6">
                A CORTEZÃO
              </h3>

              {/* Texto Manifesto com o destaque do Norte e Cultura Popular */}
              <div className="font-serif italic text-base md:text-lg text-zinc-800 leading-relaxed space-y-5">
                <p>
                  <b>Nicole Cortezao</b>, vulgo <b>@cortezao</b>, traz na pele e na agulha o peso e a herança visceral do <b>Norte do Brasil</b>. Sou uma caboquinha de uma região onde a identidade ferve, transforma a ancestralidade e identidade.
                </p>
                <p>
                  Especialista em <b>Blackwork</b> e no estilo <b>Old School</b>, meu trabalho é um manifesto vivo de valorização da nossa terra. Da força mística das lendas amazônicas ao pulsar das festas do meu boi do povo boi do povão, celebro a riqueza da cultura popular e honro a raiz do povo latino.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 flex justify-center relative">
                <motion.div 
                    initial={{ opacity: 0, rotate: -4 }}
                    whileInView={{ opacity: 1, rotate: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-papel-kraft p-3 pb-12 shadow-2xl transform -rotate-2 border border-zinc-300 w-full max-w-sm relative group"
                >
                    {/* Imagem com filtro analógico/alto contraste de estúdio */}
                    <div className="aspect-[3/4] bg-zinc-900 overflow-hidden relative">
                    <img 
                        src="/foto-cortez.jpeg" 
                        alt="Nicole Cortez no Estúdio" 
                        className="w-full h-full object-covercontrast-125 duration-500"
                    />
                    <div className="absolute inset-0 bg-bordo-sangue/10 mix-blend-multiply" />
                    </div>
            
                    </motion.div>
                </div>
            {/* Rodapé do Fanzine com foto estilo lambe colado */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-bordo-sangue/20 flex items-center gap-4">
              <div className="w-20 h-20 bg-zinc-900 rounded-lg overflow-hidden border-2 border-white shadow-md transform -rotate-3">
                <img src="/logo-cortezao.png" className="w-full h-full" alt="Mini bio pic" />
              </div>
              <div className="font-manchete uppercase text-bordo-sangue text-xl leading-none">
                <span className="block text-xs font-mono text-zinc-500">CONEXÃO</span>
                O Norte dita o traço.<br/>O sangue latino dita o ritmo.
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
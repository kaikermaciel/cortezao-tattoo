import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  // Estados para capturar o que a pessoa digita
  const [ideia, setIdeia] = useState('');
  const [local, setLocal] = useState('');
  const [tamanho, setTamanho] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setIdeia('');
      setLocal('');
      setTamanho('');
    }
  }, [isOpen]);

  // Escuta a tecla ESC para fechar
  useEffect(() => {
    const tratarEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', tratarEsc);
    return () => window.removeEventListener('keydown', tratarEsc);
  }, [isOpen, onClose]);

  const lidarComEnvio = (e: React.FormEvent) => {
    e.preventDefault();

    // 📱 Número real da Cortezão (Mude aqui)
    const whatsappCortezao = "559294453549"; 

    // Montagem da mensagem estruturada com as respostas do cliente
    const mensagemFinal = `Olá, Cortezão! Montei meu briefing de agendamento pelo site:

 - Minha Ideia: ${ideia}
 - Local do Corpo: ${local}
 - Tamanho Estimado: ${tamanho} cm`;

    // Gera a URL segura
    const url = `https://wa.me/${whatsappCortezao}?text=${encodeURIComponent(mensagemFinal)}`;
    
    // Abre o WhatsApp em uma nova aba e fecha o modal
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop escuro */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Ficha de Orçamento */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="w-full max-w-lg bg-papel-kraft text-verde-estudio p-6 md:p-8 rounded-3xl shadow-2xl relative z-10 border-2 border-bordo-sangue/20"
          >
            {/* Botão de Fechar */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-bordo-sangue/60 hover:text-bordo-sangue font-mono text-sm cursor-pointer"
            >
              ✕ ESC
            </button>

            <span className="text-bordo-sangue font-vintage text-sm tracking-widest block mb-1">FICHA DE BRIEFING</span>
            <h3 className="font-manchete text-3xl md:text-4xl uppercase text-verde-estudio leading-none mb-6">
              Idéias para a Pele
            </h3>

            <form onSubmit={lidarComEnvio} className="space-y-4 font-mono text-sm">
              
              {/* Campo 1: Ideia */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-xs text-bordo-sangue/80 uppercase">1. Qual a sua idéia para a tattoo?</label>
                <textarea
                  required
                  rows={3}
                  value={ideia}
                  onChange={(e) => setIdeia(e.target.value)}
                  placeholder="Ex: Uma onça-pintada misturada com folhas de samambaia no traço pesado..."
                  className="w-full bg-transparent border-2 border-verde-estudio/20 rounded-xl p-3 focus:border-bordo-sangue focus:outline-none placeholder:text-zinc-400 font-serif resize-none"
                />
              </div>

              {/* Campo 2: Local */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-xs text-bordo-sangue/80 uppercase">2. Onde vai ser? (Local do corpo)</label>
                <input
                  required
                  type="text"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  placeholder="Ex: Antebraço esquerdo, panturrilha..."
                  className="w-full bg-transparent border-2 border-verde-estudio/20 rounded-xl p-3 focus:border-bordo-sangue focus:outline-none placeholder:text-zinc-400 font-serif"
                />
              </div>

              {/* Campo 3: Tamanho */}
              <div className="flex flex-col gap-1.5">
                <label className="font-bold text-xs text-bordo-sangue/80 uppercase">3. Tamanho aproximado (em centímetros)</label>
                <input
                  required
                  type="text"
                  value={tamanho}
                  onChange={(e) => setTamanho(e.target.value)}
                  placeholder="Ex: 15cm"
                  className="w-full bg-transparent border-2 border-verde-estudio/20 rounded-xl p-3 focus:border-bordo-sangue focus:outline-none placeholder:text-zinc-400 font-serif"
                />
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                className="w-full bg-bordo-sangue text-papel-kraft font-manchete text-lg uppercase py-3 px-4 rounded-xl shadow-lg hover:bg-ouro-velho hover:text-verde-estudio transition-colors cursor-pointer mt-2 tracking-wide text-center"
              >
                Gerar Briefing & Chamar WhatsApp ➔
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
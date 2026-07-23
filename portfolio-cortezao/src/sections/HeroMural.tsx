import { motion } from 'framer-motion';

interface HeroMuralProps {
  onOpenGallery: () => void;
  onOpenAbout: () => void;
  onOpenBooking: () => void;
  onTriggerEasterEgg: () => void;
}

export default function HeroMural({ onOpenGallery, onOpenAbout, onOpenBooking, onTriggerEasterEgg }: HeroMuralProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 80, damping: 15 } }
  };

  return (
    <section className="min-h-screen bg-verde-estudio flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden selection:bg-ouro-velho selection:text-verde-estudio py-12">
      
      {/* 🇧🇷 ELEMENTOS DE FUNDO DISCRETOS */}
      <div className="absolute -top-6 -left-6 w-64 h-64 md:w-96 md:h-96 pointer-events-none opacity-[0.25] mix-blend-multiply select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
          <path d="M20,15 C18,8 8,12 12,22 C14,26 22,24 20,15 Z M24,28 C28,32 34,22 26,18 Z" />
        </svg>
      </div>

      <div className="absolute top-[35%] left-[-40px] w-48 h-48 md:w-72 md:h-72 pointer-events-none opacity-[0.04] mix-blend-multiply select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
          <path d="M50,20 L53,38 L70,35 L58,47 L75,55 L58,58 L65,75 L50,62 L35,75 L42,58 L25,55 L42,47 L30,35 L47,38 Z" />
        </svg>
      </div>

      {/* Título Principal */}
      <div className="text-center z-10 mb-8 md:mb-14 w-full max-w-4xl px-4 relative">
        <span className="text-ouro-velho font-vintage text-xl md:text-3xl tracking-[0.2em] block mb-2 animate-pulse">
          ESTÚDIO DE TATUAGEM
        </span>
        <h1 className="text-papel-kraft font-manchete text-5xl md:text-9xl uppercase tracking-tight leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] relative inline-block">
          @CORTEZAO<br/>TATTOO

          <motion.div
            initial={{ scale: 0, x: 30 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
            onClick={(e) => {
              if (e.detail === 3) { // ⚡ Detecta 3 cliques rápidos
                onTriggerEasterEgg();
              }
            }}
            className="absolute -bottom-4 -right-12 md:-bottom-6 md:-right-28 w-20 h-20 md:w-40 md:h-40 z-30 drop-shadow-[0_8px_8px_rgba(0,0,0,0.4)] transform scale-x-[-1] select-none"

          >
            <img src="/logo-cortezao.png" alt="Cortezao Logo" className="w-full h-full object-contain" />
          </motion.div>
        </h1>
      </div>

      {/* 🧱 O MURAL RESPONSIVO CORRIGIDO */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7 auto-rows-[185px] md:auto-rows-[250px] p-2 z-10"
      >
        
        {/* Pôster 1: Manifesto "Sangue Latino" */}
        <motion.div 
          variants={itemVariants}
          className="bg-bordo-sangue p-5 md:p-6 flex flex-col justify-between border-2 border-bordo-sangue hover:border-ouro-velho col-span-1 row-span-2 md:row-span-2 shadow-2xl origin-center -rotate-2 md:-rotate-3 hover:rotate-0 hover:scale-102 transition-all duration-300 ease-out cursor-pointer group"
        >
          <span className="text-ouro-velho font-vintage text-base md:text-xl tracking-wider block">01 // CONCEITO</span>
          <h2 className="text-papel-kraft font-manchete text-3xl md:text-6xl uppercase leading-none mt-auto group-hover:text-ouro-velho transition-colors">
            SANGUE<br/>LATINO
          </h2>
        </motion.div>

        {/* Pôster 2: Ver Trabalhos (Polaroid) */}
        <motion.div 
          variants={itemVariants}
          onClick={onOpenGallery}
          className="bg-zinc-950 border-2 border-transparent hover:border-ouro-velho col-span-1 md:col-span-2 relative group overflow-hidden shadow-2xl rotate-1 hover:rotate-0 hover:scale-101 transition-all duration-300 ease-out cursor-pointer"
        >
          <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-center gap-2 md:gap-3 overflow-hidden opacity-40 group-hover:opacity-75 transition-all duration-500">
            <img src="/tattoos/tigre.webp" className="w-20 h-28 md:w-32 md:h-44 object-cover transform -rotate-12 border-2 border-papel-kraft shadow-lg" alt="Thumb 1" />
            <img src="/tattoos/flor costa.webp" className="w-20 h-28 md:w-32 md:h-44 object-cover transform rotate-6 border-2 border-papel-kraft shadow-lg z-10" alt="Thumb 2" />
          </div>
          <div className="absolute inset-0 bg-bordo-sangue/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-300" />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="bg-ouro-velho text-verde-estudio font-manchete px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base uppercase tracking-wider block transform -rotate-1 group-hover:rotate-0 transition-transform shadow-md">
              Ver Trabalhos ➔
            </span>
          </div>
        </motion.div>

        {/* Pôster 3: Flashes / Pegue o Seu */}
        <motion.div 
          variants={itemVariants}
          className="bg-ouro-velho text-verde-estudio p-5 md:p-6 flex flex-col justify-between col-span-1 row-span-1 md:row-span-2 md:col-start-4 md:row-start-1 shadow-2xl rotate-3 md:rotate-2 hover:rotate-0 hover:scale-102 transition-all duration-300 ease-out cursor-pointer group"
        >
          <span className="font-mono text-[10px] text-ouro-velho font-black tracking-widest bg-verde-estudio text-ouro-velho px-2 py-0.5 w-max">FLASHES</span>
          <h3 className="font-manchete text-3xl md:text-6xl uppercase leading-none mt-auto">
            Pegue<br/>o Seu
          </h3>
        </motion.div>

        {/* Pôster 4: Arte da Terra */}
        <motion.div 
          variants={itemVariants}
          className="bg-papel-kraft text-bordo-sangue p-5 flex flex-col justify-center items-center text-center shadow-2xl col-span-1 rotate-2 md:-rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out cursor-default"
        >
          <p className="font-vernacular text-2xl md:text-4xl uppercase leading-none tracking-tight transform -skew-x-6">
            Arte<br/>da<br/>Terra
          </p>
        </motion.div>

        {/* ⚡ STICKER 1: Ajustado para cores nativas no Mobile */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-2 border-4 border-white rounded-xl shadow-2xl col-span-1 rotate-6 md:rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group flex items-center justify-center relative overflow-hidden"
        >
          <img 
            src="/tattoos/garantido.webp" 
            className="w-full h-full object-cover rounded-lg grayscale-0 contrast-100 md:grayscale md:contrast-120 md:group-hover:grayscale-0 transition-all duration-300" 
            alt="Sticker Boi" 
          />
        </motion.div>

        {/* 🚀 PÔSTER 5: MANIFESTO / SOBRE MIM */}
        <motion.div 
          variants={itemVariants}
          onClick={onOpenAbout}
          className="bg-zinc-950/40 border-2 border-bordo-sangue/50 p-4 md:p-6 flex flex-col justify-between text-center shadow-xl col-span-2 md:col-span-2 -rotate-1 hover:rotate-0 hover:border-ouro-velho hover:bg-zinc-950 transition-all duration-300 cursor-pointer group"
        >
          <span className="font-mono text-[9px] md:text-[10px] text-ouro-velho tracking-widest uppercase block text-left opacity-75 group-hover:opacity-100 transition-opacity">
            CONHEÇA A ARTISTA ➔
          </span>
          <p className="text-papel-kraft/80 font-serif italic text-xs sm:text-sm md:text-base max-w-md leading-relaxed my-auto px-2 group-hover:text-papel-kraft transition-colors">
            "Raízes profundas traduzidas em pele, traço preto e o orgulho da cultura popular do Norte."
          </p>
          <span className="font-manchete text-ouro-velho text-xs md:text-base uppercase tracking-wider block text-right mt-1">
            LER MANIFESTO // SOBRE
          </span>
        </motion.div>

        {/* Pôster 6: Agenda Aberta - Agora com tag <button> garantida */}
        <motion.button 
          variants={itemVariants}
          onClick={(e) => {
            e.preventDefault(); // Garante que não propague eventos estranhos
            onOpenBooking();    // Chama a função direto
          }}
          className="bg-bordo-sangue text-papel-kraft p-5 flex flex-col justify-between shadow-2xl col-span-1 rotate-4 md:-rotate-4 hover:rotate-0 hover:scale-105 transition-all duration-300 ease-out cursor-pointer group w-full h-full text-left"
        >
          <div className="flex justify-between items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-ouro-velho animate-ping" />
            <span className="font-mono text-[10px] text-ouro-velho font-bold">2026</span>
          </div>
          <span className="font-manchete text-xl md:text-3xl uppercase tracking-tight leading-none mt-4 group-hover:text-ouro-velho transition-colors">
            Agenda<br/>Aberta
          </span>
        </motion.button>

        {/* ⚡ STICKER 2: Ajustado para cores nativas no Mobile */}
        <motion.div
          variants={itemVariants}
          className="bg-white p-2 border-4 border-white rounded-2xl shadow-2xl col-span-1 -rotate-6 md:-rotate-8 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group flex items-center justify-center relative overflow-hidden"
        >
          <img 
            src="/tattoos/gato fofo.webp" 
            className="w-full h-full object-cover rounded-xl grayscale-0 contrast-100 md:grayscale md:contrast-125 md:group-hover:grayscale-0 transition-all duration-300" 
            alt="Sticker Gato" 
          />
        </motion.div>

      </motion.div>
    </section>
  );
}
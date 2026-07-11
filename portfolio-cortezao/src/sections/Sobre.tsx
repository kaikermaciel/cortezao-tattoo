import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section className="min-h-screen bg-verde-estudio flex items-center justify-center py-20 px-4 md:px-8 relative overflow-hidden border-t-4 border-bordo-sangue">
      
      {/* Detalhe de fundo: Pedaço de roseta de onça gigante vazando na lateral */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 pointer-events-none opacity-20 mix-blend-multiply select-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-black">
          <path d="M20,15 C18,8 8,12 12,22 C14,26 22,24 20,15 Z M24,28 C28,32 34,22 26,18 Z M10,32 C6,26 0,35 8,38 Z" />
        </svg>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        
        {/* 📸 COLUNA DA ESQUERDA: A Foto dela estilizada como um Pôster de Parede */}
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
              {/* Substitua pelo caminho da foto real dela no estúdio (ex: a parede verde com skates) */}
              <img 
                src="/foto-cortez.jpeg" 
                alt="Nicole Cortez no Estúdio" 
                className="w-full h-full object-covercontrast-125 duration-500"
              />
              <div className="absolute inset-0 bg-bordo-sangue/10 mix-blend-multiply" />
            </div>
            
            {/* Legenda carimbada no rodapé da foto */}
            <span className="absolute bottom-3 left-4 font-manchete text-verde-estudio text-xl tracking-wider uppercase">
              No QG // @CORTEZAO
            </span>
            
            {/* Mini sticker colado na ponta da foto para dar textura */}
            <div className="absolute -bottom-4 -right-4 bg-ouro-velho text-verde-estudio font-vintage text-lg px-3 py-1 rounded-full shadow-md transform rotate-12 uppercase border-2 border-white select-none">
              Mió Amiga ☀️
            </div>
          </motion.div>
        </div>

        {/* 📝 COLUNA DA DIREITA: O Manifesto / Biografia */}
        <div className="md:col-span-7 flex flex-col gap-6">
          
          {/* Tag de entrada */}
          <div className="w-max transform -skew-x-6 bg-ouro-velho text-verde-estudio font-manchete px-4 py-1 text-base uppercase tracking-widest shadow-md">
            Quem Risca // A Artista
          </div>

          {/* Título Principal em Letras Garrafais */}
          <h2 className="text-papel-kraft font-manchete text-5xl md:text-7xl uppercase tracking-tight leading-none">
            CORTEZÃO <br/>
            <span className="text-ouro-velho">TATTOO</span>
          </h2>

          {/* Bloco de Texto estilo Bloco de Notas / Papel de Embrulho */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-papel-kraft text-verde-estudio p-6 md:p-8 rounded-2xl shadow-xl border-l-8 border-bordo-sangue relative"
          >
            <div className="font-serif italic text-base md:text-lg text-zinc-800 leading-relaxed space-y-4">
              <p>
                <b>Nicole Cortez</b>, a mente por trás da assinatura <b>@cortezao</b>, traz na pele e na agulha o peso e a herança do <b>Norte do Brasil</b>. Vim de uma região onde a identidade ferve.
              </p>
              <p>
                Especialista na solidez do <b>Blackwork</b> e do <b>Old School tradicional</b>, meu trabalho vai muito além da estética: é um manifesto vivo de <b>valorização da nossa terra</b>. Da força mística das lendas amazônicas ao pulsar das festas do Boi-Bumbá, meus traços celebram riqueza da <b>cultura popular</b> e honram a raiz do povo que faz a arte acontecer.
              </p>
              <p className="font-manchete uppercase text-bordo-sangue text-2xl tracking-tight not-italic pt-2 border-t border-bordo-sangue/10">
                O Norte dita o traço. O sangue latino dita o ritmo.
              </p>
            </div>
          </motion.div>

          {/* Selos de Especialidade estilo rodapé de Lambe-lambe */}
          <div className="flex flex-wrap gap-3 mt-2 select-none">
            <span className="font-mono text-xs font-bold text-papel-kraft/60 border border-papel-kraft/20 px-3 py-1 uppercase rounded-sm">
              ⚡ BLACKWORK
            </span>
            <span className="font-mono text-xs font-bold text-papel-kraft/60 border border-papel-kraft/20 px-3 py-1 uppercase rounded-sm">
              ⚓ OLD SCHOOL
            </span>
            <span className="font-mono text-xs font-bold text-papel-kraft/60 border border-papel-kraft/20 px-3 py-1 uppercase rounded-sm">
              🇧🇷 BRASILIDADES
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
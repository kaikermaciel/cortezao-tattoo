import { useState } from 'react';
import HeroMural from './sections/HeroMural';
import Galeria from './sections/Galeria';
import SobreModal from './components/SobreModal';
import AgendamentoModal from './components/AgendamentoModal'; 
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false); // Estado do formulário

  return (
    <main className="bg-verde-estudio min-h-screen selection:bg-ouro-velho selection:text-verde-estudio relative overflow-hidden">
      {/* O Hero agora controla o disparo do painel de agendamento */}
      <HeroMural 
        onOpenGallery={() => setIsGalleryOpen(true)} 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenBooking={() => setIsBookingOpen(true)} 
      />
      
      {/* Modal de Briefing Pré-WhatsApp */}
      <AgendamentoModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* Painel do Sobre Mim */}
      <SobreModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />

      {/* Painel da Galeria de Fotos */}
      <Galeria isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />

      <Analytics />
    </main>
  );
}

export default App;
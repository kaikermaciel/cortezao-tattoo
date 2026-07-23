import { useState } from 'react';
import HeroMural from './sections/HeroMural';
import Galeria from './sections/Galeria';
import SobreModal from './components/SobreModal';
import AgendamentoModal from './components/AgendamentoModal';
import EasterEggModal from './components/EasterEggModal'; // ⚡ Importe o novo modal

function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false); // ⚡ Estado do Easter Egg

  return (
    <main className="bg-verde-estudio min-h-screen selection:bg-ouro-velho selection:text-verde-estudio relative overflow-hidden">
      <HeroMural 
        onOpenGallery={() => setIsGalleryOpen(true)} 
        onOpenAbout={() => setIsAboutOpen(true)} 
        onOpenBooking={() => setIsBookingOpen(true)} 
        onTriggerEasterEgg={() => setIsEasterEggOpen(true)} // ⚡ Disparo do segredo
      />
      
      <EasterEggModal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />
      <AgendamentoModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <SobreModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <Galeria isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </main>
  );
}

export default App;
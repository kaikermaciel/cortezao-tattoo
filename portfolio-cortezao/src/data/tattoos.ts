export interface Tattoo {
  id: number;
  titulo: string;
  categoria: 'Blackwork' | 'Old School' | 'Folclore' | 'Fine Line' | 'Botânico';
  disponivel: boolean;
  imagem: string; 
}

export const mockTattoos: Tattoo[] = [
  { 
    id: 1, 
    titulo: "Tigre em Blackwork", 
    categoria: "Blackwork", 
    disponivel: false, 
    imagem: "/tattoos/tigre.webp" 
  },
  { 
    id: 2, 
    titulo: "Lírio e Fineline", 
    categoria: "Botânico", 
    disponivel: false, 
    imagem: "/tattoos/lirio fineline.webp" 
  },
  { 
    id: 3, 
    titulo: "Asa Sombreada", 
    categoria: "Blackwork", 
    disponivel: false, 
    imagem: "/tattoos/botanico.webp" 
  },
  {
    id: 4,
    titulo:"Corvo e Lua",
    categoria:"Folclore",
    disponivel:true,
    imagem:"/tattoos/corvo com lua.webp"
  },
  {
    id: 5,
    titulo:"Abelha em blackwork",
    categoria:"Blackwork",
    disponivel:true,
    imagem:"/tattoos/abelha blackwork.webp"
  },
  {
    id: 6,
    titulo:"Tatuagem em homenagem a avó",
    categoria:"Fine Line",
    disponivel:true,
    imagem:"/tattoos/avo braco.webp"
  },
  {
    id: 7,
    titulo:"blackwork flor no ombro",
    categoria:"Blackwork",
    disponivel:true,
    imagem:"/tattoos/blackwork flor ombro.webp"
  },
  {
    id: 8,
    titulo:"caprichoso fofo",
    categoria:"Folclore",
    disponivel:true,
    imagem:"/tattoos/caprichoso fofo.webp"
  },
  {
    id: 9,
    titulo:"Garantido fofo",
    categoria:"Folclore",
    disponivel:true,
    imagem:"/tattoos/garantido.webp"
  },
  {
    id: 10,
    titulo:"Tsukyuomi",
    categoria:"Blackwork",
    disponivel:true,
    imagem:"/tattoos/tsukuyomi.webp"
  },
  {
    id: 11,
    titulo: "Escudo Botafogo",
    categoria: "Old School",
    disponivel: false,
    imagem: "/tattoos/botafogo.webp"
  },
  {
    id: 12,
    titulo: "Coelho Minimalista",
    categoria: "Fine Line",
    disponivel: true,
    imagem: "/tattoos/coelho.webp"
  },
  {
    id: 13,
    titulo: "Coração e Lírios nas Costas",
    categoria: "Botânico",
    disponivel: false,
    imagem: "/tattoos/coracao lirios costa.webp"
  },
  {
    id: 14,
    titulo: "Dragão Gigante nas Costas",
    categoria: "Blackwork",
    disponivel: false,
    imagem: "/tattoos/dragao costa.webp"
  },
  {
    id: 15,
    titulo: "Dragão Tradicional",
    categoria: "Blackwork",
    disponivel: true,
    imagem: "/tattoos/dragao.webp"
  },
  {
    id: 16,
    titulo: "Ramos de Flor no Braço",
    categoria: "Botânico",
    disponivel: false,
    imagem: "/tattoos/flor braco.webp"
  },
  {
    id: 17,
    titulo: "Orquídea na Cintura",
    categoria: "Fine Line",
    disponivel: false,
    imagem: "/tattoos/flor cintura.webp"
  },
  {
    id: 18,
    titulo: "Floral Costas Completa",
    categoria: "Botânico",
    disponivel: false,
    imagem: "/tattoos/flor costa cheia.webp"
  },
  {
    id: 19,
    titulo: "Flor Ornamental nas Costas",
    categoria: "Fine Line",
    disponivel: false,
    imagem: "/tattoos/flor costa.webp"
  },
  {
    id: 20,
    titulo: "Garça da Amazônia",
    categoria: "Fine Line",
    disponivel: false,
    imagem: "/tattoos/garca.webp"
  },
  {
    id: 21,
    titulo: "Gato Fofo",
    categoria: "Fine Line",
    disponivel: true,
    imagem: "/tattoos/gato fofo.webp"
  },
  {
    id: 22,
    titulo: "Minotauro Sombrio",
    categoria: "Blackwork",
    disponivel: true,
    imagem: "/tattoos/minotauro.webp"
  },
  {
    id: 23,
    titulo: "Tradicional no Braço",
    categoria: "Old School",
    disponivel: false,
    imagem: "/tattoos/oldschool braco.webp"
  },
  {
    id: 24,
    titulo: "Onça-Pintada e Arara",
    categoria: "Blackwork",
    disponivel: false,
    imagem: "/tattoos/onca com arara.webp"
  },
  {
    id: 25,
    titulo: "Bob Esponja & Patrick",
    categoria: "Fine Line",
    disponivel: true,
    imagem: "/tattoos/patrick e bob esponja.webp"
  },
  {
    id: 26,
    titulo: "Letreiramento Pietro",
    categoria: "Fine Line",
    disponivel: false,
    imagem: "/tattoos/pietro.webp"
  },
  {
    id: 27,
    titulo: "Zenitsu Anime",
    categoria: "Fine Line",
    disponivel: false,
    imagem: "/tattoos/zenitsu.webp"
  }
];
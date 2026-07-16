import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'idibkxy0', // O ID do seu projeto Sanity
  dataset: 'production',
  useCdn: true, // Garante que as imagens e dados carreguem na velocidade da luz usando cache global
  apiVersion: '2026-07-16', // Data de hoje para travar a versão da API do Sanity
})

// Helper fantástico que transforma a referência da imagem do Sanity em uma URL real otimizada
const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}
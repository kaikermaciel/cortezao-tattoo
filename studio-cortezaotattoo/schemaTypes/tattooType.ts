import { defineField, defineType } from 'sanity'

export const tattooType = defineType({
  name: 'tattoo',
  title: 'Mural de Tinta (Tatuagens)',
  type: 'document',
  fields: [
    // 1. Campo de Título
    defineField({
      name: 'titulo',
      title: 'Título do Trabalho',
      type: 'string',
      description: 'Dê um nome marcante (Ex: Tigre em Blackwork, Boi Garantido...)',
      validation: (Rule) => Rule.required().error('O título da tatuagem é obrigatório!'),
    }),

    // 2. Campo de Categoria (Dropdown Selecionável)
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      description: 'Em qual grupo de estilo essa tatuagem se encaixa?',
      options: {
        list: [
          { title: 'Blackwork', value: 'Blackwork' },
          { title: 'Old School', value: 'Old School' },
          { title: 'Folclore', value: 'Folclore' },
          { title: 'Fine Line', value: 'Fine Line' },
          { title: 'Botânico', value: 'Botânico' },
        ],
      },
      validation: (Rule) => Rule.required().error('A categoria é obrigatória para os filtros do site!'),
    }),

    // 3. Chave de Disponibilidade (Flash Disponível)
    defineField({
      name: 'disponivel',
      title: 'Disponível para Flash? (Disponível ☀️)',
      type: 'boolean',
      description: 'Se ativo, aparecerá a tag dourada "Disponível" por cima da foto no mural.',
      initialValue: false,
    }),

    // 4. Campo de Imagem (Com upload e crop inteligente)
    defineField({
      name: 'imagem',
      title: 'Foto da Tattoo / Flash',
      type: 'image',
      options: {
        hotspot: true, // Permite que a Cortezão escolha o foco principal de corte da foto no painel
      },
      validation: (Rule) => Rule.required().error('Você precisa fazer o upload de uma imagem!'),
    }),
  ],
})
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    categorias: defineCollection({
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        image: z.string().optional(), // Imagen opcional
        draft: z.boolean().default(false), // Indica si está en borrador o no
        tags: z.array(z.string()).optional() // Lista de etiquetas opcionales
      })
    })
  }
})
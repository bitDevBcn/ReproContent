<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug // Obtener el parámetro de la URL

const { data: doc } = await useAsyncData(`document-${slug}`, () => {
  return queryCollection('categorias')
    .select('title', 'path', 'description')
    .where('path', '=', `/categorias/${slug}`) // Filtrar por slug
    .first() // Suponiendo que solo haya un resultado
})
</script>

<template>
  <div v-if="doc">
    <h1>{{ doc.title }}</h1>
    <p>{{ doc.description }}</p>
  </div>
  <div v-else>
    <p>Documento no encontrado.</p>
  </div>
</template>


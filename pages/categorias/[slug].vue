<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug // Obtener el parámetro de la URL

const { data: page } = await useAsyncData(`document-${slug}`, () => {
  return queryCollection('categorias')
    .select('title', 'path', 'image','description')
    .where('path', '=', `/categorias/${slug}`) // Filtrar por slug
    .first() // Suponiendo que solo haya un resultado
})
</script>

<template>
  <div v-if="page">
    <p>hola</p>
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>

    <img :src="page.image" alt="Imagen de la categoría" />
  </div>
  <div v-else>
    <p>Documento no encontrado.</p>

  </div>
</template>


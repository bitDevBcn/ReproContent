<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const slug = route.params.slug; // Obtener el parámetro de la URL

// Cargar datos de la subcategoría en "gran-formato"
const { data: doc } = await useAsyncData(`document-gran-formato-${slug}`, () => {
  return queryCollection('categorias')
    .select('title', 'path', 'description')
    .where('path', '=', `/categorias/gran-formato/flexible`) // Filtrar por ruta completa
    .first() // Suponiendo que solo haya un resultado
});
</script>

<template>
  <div v-if="doc">
    <h1>{{ doc.title }}</h1>
    <p>{{ doc.description }}</p>
    <ContentRenderer v-if="doc" :value="doc" />
  </div>
  <div v-else>
    <p>Documento no encontrado.</p>
  </div>
</template>

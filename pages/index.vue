<script setup lang="ts">
const { data: docs } = await useAsyncData('documents-list', () => {
  return queryCollection('categorias')
    .select('title', 'path', 'description')
    .all()
})
</script>

<template>
  <NuxtLink v-for="doc in docs" :key="doc.path" :to="doc.path">
    <h2>{{ doc.title }}</h2>
  </NuxtLink>
</template>

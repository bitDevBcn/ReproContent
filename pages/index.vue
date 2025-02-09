<script setup>
const { data: categorias } = await useAsyncData('categorias', async () => {
  const result = await queryContent().find()
  console.log('Categorías encontradas:', result) // 🔍 Para verificar si se están cargando
  return result
})
</script>

<template>
  <div>
    <h1>Listado de Categorías</h1>
    <pre>{{ categorias }}</pre>
  </div>
</template>

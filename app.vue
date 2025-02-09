<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <header class="mt-4 mb-4 flex items-end justify-between">
      <div>
      <h1 class="text-3xl font-bold text-gray-900">
        <NuxtLink to="/">Nuxt Blog</NuxtLink>
      </h1>
      <p class="text-sm text-gray-500">Version 3.0.0</p>
    </div>
      <Btn>Contacta conmigo tio!</Btn>
    </header>
    <!-- End header -->

    <!-- Main content -->
     <NuxtPage />
    <!--  End main content--> 
  </div>
</template>

<template>
    <div>
      Hello Nuxt World!!
      <p class="text-8xl text-blue-600">BigAss Type!!
       
      Index Page  ...</p>

      <UTextarea placeholder="Tell us tour trip report here!!   "  v-model="value"  />
      <UButton  variant="outline">
        The text is fricken Red!!
      </UButton>
    </div>
   
  </template>


  <script setup lang="ts">
  const value = ref('')
  </script>
  
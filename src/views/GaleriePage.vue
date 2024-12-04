<template>
  <div>
    <h1 class="text-3xl font-bold text-green-700 mb-6">Notre Galerie</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(image, index) in images" :key="index" class="relative group">
        <div class="aspect-square bg-green-100 rounded-lg overflow-hidden shadow-lg">
          <div class="w-full h-full flex items-center justify-center text-green-600">
            <span class="text-lg">Image {{ index + 1 }}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="mt-8 text-center text-gray-600">
      Les images seront ajoutées ultérieurement. Cette galerie présentera nos plus belles créations florales.
    </p>
  </div>
</template>

<script setup>
const images = Array(9).fill(null) // Placeholder pour 9 images
</script>

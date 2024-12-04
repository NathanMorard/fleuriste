<template>
  <div class="p-4 bg-green-50 rounded">
    <div class="flex items-center mb-2">
      <span class="text-yellow-400">★★★★★</span>
    </div>
    <p class="italic">{{ review.commentaire }}</p>
    <p class="mt-2 font-semibold">- {{ review.nom }}</p>
  </div>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

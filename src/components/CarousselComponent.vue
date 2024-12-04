<template>
  <div class="relative overflow-hidden rounded-lg shadow-lg">
    <!-- Images -->
    <div
      class="flex transition-transform duration-500 ease-in-out h-[400px]"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full h-full"
      >
        <img
          :src="image.url"
          :alt="image.alt"
          class="w-full h-full object-cover"
        />
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      @click="prev"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      aria-label="Image précédente"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button
      @click="next"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
      aria-label="Image suivante"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-white' : 'bg-white/50'"
        :aria-label="`Aller à l'image ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => value.every(img => img.url && img.alt)
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayInterval

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0
    ? props.images.length - 1
    : currentIndex.value - 1
}

onMounted(() => {
  if (props.autoplay) {
    autoplayInterval = setInterval(next, props.interval)
  }
})

onBeforeUnmount(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

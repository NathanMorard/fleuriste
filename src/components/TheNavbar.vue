<template>
  <nav class="bg-green-600 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold">Flower Power</router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-4">
        <router-link to="/" class="hover:text-green-200">Accueil</router-link>
        <router-link to="/galerie" class="hover:text-green-200">Galerie</router-link>
        <router-link to="/contact" class="hover:text-green-200">Contact</router-link>
        <router-link to="/localisation" class="hover:text-green-200">Nous trouver</router-link>
      </div>

      <!-- Burger Menu Button -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden p-2 focus:outline-none"
        aria-label="Menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            v-if="!isMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 bg-green-600 shadow-lg z-50"
    >
      <div class="container mx-auto px-4 py-2 flex flex-col space-y-2">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          @click="isMenuOpen = false"
          class="py-2 hover:text-green-200 border-b border-green-500 last:border-0"
        >
          {{ link.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const links = [
  { name: 'Accueil', path: '/' },
  { name: 'Galerie', path: '/galerie' },
  { name: 'Contact', path: '/contact' },
  { name: 'Nous trouver', path: '/localisation' }
]

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  }
)
</script>

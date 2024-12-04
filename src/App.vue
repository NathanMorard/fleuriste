<template>
  <div class="min-h-screen bg-green-50">
    <TheNavbar />
    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

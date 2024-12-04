<template>
  <div>
    <h1 class="text-3xl font-bold text-green-700 mb-6">Nous trouver</h1>

    <div class="bg-white p-6 rounded-lg shadow mb-6">
      <h2 class="text-xl font-semibold mb-2">Adresse</h2>
      <p>1 rue des fleurs 11111</p>
      <p class="mt-2">
        <strong>Horaires :</strong> Tous les jours de 10h à 18h
      </p>
    </div>

    <div id="map" class="h-[400px] rounded-lg shadow-lg"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

onMounted(() => {
  const map = L.map('map').setView([48.8566, 2.3522], 13) // Coordonnées à ajuster

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map)

  L.marker([48.8566, 2.3522]) // Coordonnées à ajuster
    .addTo(map)
    .bindPopup('Nathan Fleuriste')
    .openPopup()
})
</script>

<template>
  <div class="space-y-8">
    <!-- Carousel Section -->
    <section>
      <ImageCarousel :images="carouselImages" />
    </section>

    <section class="bg-green-600 text-white p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">Bienvenue chez Flower Power</h1>
      <p class="text-xl">Votre artisan fleuriste passionné</p>
    </section>

    <section class="grid md:grid-cols-2 gap-8">
      <ServiceCard title="Nos Services">
        <ul class="space-y-2">
          <li>✿ Vente de fleurs coupées</li>
          <li>✿ Création de bouquets personnalisés</li>
          <li>✿ Compositions pour mariages</li>
          <li>✿ Arrangements pour deuil</li>
          <li>✿ Décorations événementielles</li>
        </ul>
      </ServiceCard>

      <ServiceCard title="Horaires d'ouverture">
        <p class="text-lg">Ouvert tous les jours</p>
        <p class="text-xl font-semibold text-green-600">10h - 18h non stop</p>
      </ServiceCard>
    </section>

    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4 text-green-700">Avis Clients</h2>
      <div class="grid md:grid-cols-3 gap-4">
        <ReviewCard
          v-for="(avis, index) in avisClients"
          :key="index"
          :review="avis"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '../components/ServiceCard.vue'
import ReviewCard from '../components/ReviewCard.vue'
import ImageCarousel from '../components/CarousselComponent.vue'

const carouselImages = [
  {
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    alt: 'Bouquet de fleurs printanier'
  },
  {
    url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364',
    alt: 'Composition florale mariage'
  },
  {
    url: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd',
    alt: 'Roses rouges'
  },
  {
    url: 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797',
    alt: 'Bouquet champêtre'
  }
]

const avisClients = [
  {
    nom: "Marie L.",
    commentaire: "Magnifiques compositions florales pour mon mariage. Un grand merci !"
  },
  {
    nom: "Pierre D.",
    commentaire: "Service impeccable et fleurs très fraîches. Je recommande vivement."
  },
  {
    nom: "Sophie M.",
    commentaire: "Des créations uniques et un accueil chaleureux. Ma fleuriste préférée !"
  }
]
</script>

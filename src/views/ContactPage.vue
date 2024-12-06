<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold text-green-700 mb-6">Contactez-nous</h1>

    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-6 rounded-lg shadow space-y-4"
      id="contact"
    >
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-1"> Email * </label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          class="input"
          placeholder="votre@email.com"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1"> Sujet * </label>
        <input
          type="text"
          id="subject"
          v-model="formData.subject"
          required
          class="input"
          placeholder="Sujet de votre message"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          rows="6"
          class="input"
          placeholder="Votre message..."
        ></textarea>
      </div>

      <button type="submit" class="btn w-full">Envoyer le message</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const formData = ref({
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  // Ici, vous pourrez ajouter la logique d'envoi du formulaire
  toast.success('Message envoyé avec succès !')
  formData.value = {
    email: '',
    subject: '',
    message: '',
  }
}
</script>

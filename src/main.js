import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Toast, { POSITION } from "vue-toastification/dist/index.mjs"
import "vue-toastification/dist/index.css"
import App from './App.vue'
import Home from './views/HomePage.vue'
import Contact from './views/ContactPage.vue'
import Galerie from './views/GaleriePage.vue'
import Localisation from './views/LocalisationPage.vue'
import './assets/style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/galerie', component: Galerie },
    { path: '/localisation', component: Localisation }
  ]
})

const toastOptions = {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false
}

const app = createApp(App)
app.use(router)
app.use(Toast, toastOptions)
app.mount('#app')

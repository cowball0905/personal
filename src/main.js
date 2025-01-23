import './assets/main.css'
import router from './router/index';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createApp } from 'vue'
import App from './App.vue'
              




const apps = createApp(App)

apps.use(router);
apps.mount('#app')

apps.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.fake-dark-selector', 
        },
    },
})
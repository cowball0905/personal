import './assets/main.css'
import router from './router/index';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { createApp } from 'vue'
import App from './App.vue'              
import AnimateOnScroll from 'primevue/animateonscroll';
const apps = createApp(App)

apps.use(router);
apps.mount('#app')
apps.directive('animateonscroll', AnimateOnScroll);

apps.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.fake-dark-selector', 
        },
        cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
        }
    },
})

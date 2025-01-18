import './assets/main.css'
import router from './router/index';

import { createApp } from 'vue'
import App from './App.vue'



const apps = createApp(App)

apps.use(router);

apps.mount('#app')


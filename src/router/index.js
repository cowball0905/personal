import { createRouter,createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Experience from "@/views/Experience.vue";
import Notfound from "@/views/Notfound.vue";
import Expview from "@/views/Expview.vue";
import CV from "@/views/cv.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/experience',
            name: 'experience',
            component: Experience,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: Notfound,
        },
        {
            path: '/experience/:id',
            name: 'experienceid',
            component: Expview,
        },
        {
            path: '/cv',
            name: 'cv',
            component: CV,
        },
    ]
})

export default router;
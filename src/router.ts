import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import PruebaView from './views/PruebaView.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/Prueba', name: 'prueba', component: PruebaView, meta: { layout: "Main" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
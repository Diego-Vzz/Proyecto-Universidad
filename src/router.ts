import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import PruebaView from './views/PruebaView.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/Prueba', name: 'prueba', component: PruebaView, meta: { layout: "Main" } },
    { path: '/', name: 'home', component: Home, meta: { layout: "Main" } },
    { path: '/auth/login', name: 'login', component: Login, meta: { layout: "Auth" } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
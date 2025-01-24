import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Presentacion from "./views/Presentacion.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "presentacion",
    component: Presentacion,
    meta: { layout: "Main" },
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
    meta: { layout: "Auth" },
  },
  {
    path: "/auth/register",
    name: "register",
    component: Register,
    meta: { layout: "Auth" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

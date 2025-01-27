import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Register from "./views/Register/Register.vue";
import Presentacion from "./views/Presentacion.vue";
import Login from "./views/Login/Login.vue";
import Home from "./views/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/v1/auth/login",
  },
  {
    path: "/v1/home",
    name: "home",
    component: Home,
    meta: { layout: "Main" },
  },
  {
    path: "/v1/auth/login",
    name: "login",
    component: Login,
    meta: { layout: "Auth" },
  },
  {
    path: "/v1/auth/register",
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

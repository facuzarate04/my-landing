import { createRouter, createWebHistory } from "vue-router";
import Landing from "./pages/Landing.vue";

const routes = [
  { path: "/", name: 'landing', component: Landing},
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
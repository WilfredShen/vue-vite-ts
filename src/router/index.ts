import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue"),
    },
  ],
});

export default router;

import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
  } from "vue-router";
  import Home from "../views/Home.vue";
  import Axios from "../views/Axios.vue";

  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/axios",
      name: "Axios",
      component: Axios,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
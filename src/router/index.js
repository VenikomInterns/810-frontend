// // import { createWebHistory, createRouter } from 'vue-router';
//
// import CustomLogin from "@/pages/login/Custom-Login";
// import CustomHome from "@/pages/home/Custom-Home";
//
//
// const routes = [
//     { path: '/', name: 'Home', component: CustomHome},
//     { path: '/login', name: 'Login', component: CustomLogin}
// ];
//
// const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// })
//
//
// export default router;
//
//

import { createWebHistory, createRouter } from 'vue-router';
// import Home from '@/views/Home.vue';
// import About from '@/views/About.vue';

const routes = [
    // { path: '/', name: 'Home', component: Home},
    // { path: '/about', name: 'About', component: About}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

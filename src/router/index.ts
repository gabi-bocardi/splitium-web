import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


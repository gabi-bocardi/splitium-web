import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Group from '../components/Group.vue';


const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/group',
        name: 'Group',
        component: Group
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import GroupPage from '../components/GroupPage.vue';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/group/:id',
        name: 'Group',
        component: GroupPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import GroupPage from '../components/GroupPage.vue';
import NewGroupPage from '../components/NewGroupPage.vue';



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
        name: 'GroupPage',
        component: GroupPage
    },
    {
        path: '/newGroup',
        name: 'NewGroupPage',
        component: NewGroupPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


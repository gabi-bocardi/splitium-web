import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import GroupPage from '../components/GroupPage.vue';
import NewGroupPage from '../components/NewGroupPage.vue';
import RegistrationPage from '../components/RegistrationPage.vue';


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
        path: '/newgroup',
        name: 'NewGroupPage',
        component: NewGroupPage
    },
    {
        path: '/registration',
        name: 'RegistrationPage',
        component: RegistrationPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;


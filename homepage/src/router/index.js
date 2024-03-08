import router from "@/router/indexedDB.js";
import { createWebHistory } from "vue-router";

import Home from "@/view/Home.vue";
import About from "@/view/About.vue";
import Skill from "@/view/Skill.vue";
import CatList from "@/view/CatLis.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/about',
        name: 'About',
        component: About
    }, 
    {
        path: '/skill/:id',
        name: 'Skill',
        component: Skill
    },
    {
        path: '/skill',
        name: 'Full Skill',
        component: Skill
    },
    {
        path: '/cats',
        name: 'CatList',
        component: CatList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
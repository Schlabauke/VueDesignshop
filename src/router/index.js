import { createRouter, createWebHistory } from 'vue-router';
import ArticleComp from '../components/ArticleComp.vue';
import addProduct from '../components/addProduct.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: ArticleComp,
    },
    {
        path: '/additem',
        name: 'addItem',
        component: addProduct,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

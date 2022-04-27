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

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: addProduct,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

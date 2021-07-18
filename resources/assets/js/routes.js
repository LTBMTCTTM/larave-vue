import Home from './pages/home/index';
import CreateProduct from './pages/products/CreateProduct.vue';
import Profile from './pages/profile/profile';
import Category from './pages/category/index';


export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'profile',
        path: '/profile',
        component: Profile
    },
    {
        name: 'category',
        path: '/category',
        component: Category
    },
];

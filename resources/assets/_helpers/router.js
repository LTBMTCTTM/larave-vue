import Vue from 'vue';
import Router from 'vue-router';

import Home from "../pages/home";
import Profile from "../pages/profile";
import Category from "../pages/category";
import Main from "../pages/layout/main";

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '',
                    component: Home,
                    name: 'home',
                    meta: {title: 'Home'}

                },
                {
                    name: 'profile',
                    path: '/profile',
                    component: Profile,
                    meta: {title: 'profile'}

                },
                {
                    name: 'category',
                    path: '/category',
                    component: Category,
                    meta: {title: 'profile'}
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || DEFAULT_TITLE;
    next();
});

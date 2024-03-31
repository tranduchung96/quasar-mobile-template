import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/tabs/home' }
    ]
  },
  {
    path: '/tabs',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/tabs/HomePage.vue') },
      { path: 'feed', component: () => import('pages/tabs/FeedPage.vue') },
      { path: 'setting', component: () => import('pages/tabs/SettingPage.vue') },
      { path: '', redirect: '/tabs/home' },
    ]
  },
  {
    path: '/account',
    component: () => import('pages/AccountPage.vue'),
  },
  {
    path: '/welcome',
    component: () => import('pages/WelcomePage.vue'),
  },
  {
    path: '/splash',
    component: () => import('pages/SplashPage.vue'),
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
  },
  {
    path: '/product',
    component: () => import('pages/ProductDetailPage.vue'),
  },
  {
    path: '/cart',
    component: () => import('pages/CartPage.vue'),
  },
  {
    path: '/card',
    component: () => import('pages/CardPage.vue'),
  },
  {
    path: '/search',
    component: () => import('pages/SearchPage.vue'),
  },
  {
    path: '/wishlist',
    component: () => import('pages/WishListPage.vue'),
  },
  {
    path: '/congrats',
    component: () => import('pages/CongratsPage.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;

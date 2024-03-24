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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;

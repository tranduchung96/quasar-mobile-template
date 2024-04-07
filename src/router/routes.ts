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
      { path: 'home',
        component: () => import('pages/tabs/HomePage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'feed',
        component: () => import('pages/tabs/FeedPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'setting',
        component: () => import('pages/tabs/SettingPage.vue'),
        meta: {
          requiresAuth: true
        }
      },
      { path: '', redirect: '/tabs/home' },
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/account',
    component: () => import('pages/AccountPage.vue'),
    meta: {
      requiresAuth: true
    }
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
    meta: {
      disableIfLoggedIn: true
    }
  },
  {
    path: '/forgot',
    component: () => import('pages/ForgotPasswordPage.vue'),
    meta: {
      disableIfLoggedIn: true
    }
  },
  {
    path: '/register',
    component: () => import('pages/RegisterPage.vue'),
    meta: {
      disableIfLoggedIn: true
    }
  },
  {
    path: '/product',
    component: () => import('pages/ProductDetailPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/cart',
    component: () => import('pages/CartPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/card',
    component: () => import('pages/CardPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/search',
    component: () => import('pages/SearchPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/wishlist',
    component: () => import('pages/WishListPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/congrats',
    component: () => import('pages/CongratsPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/failed',
    component: () => import('pages/FailedOrderPage.vue'),
    meta: {
      requiresAuth: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;

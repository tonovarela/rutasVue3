import { authRoutes } from '@/modules/auth/auth.routes';
import { landingRoutes } from '@/modules/landing/landing.routes';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'home' },
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: landingRoutes,
    },
    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: authRoutes,
    },
    { path: '/:pathMatch(.*)*', component: () => import('@/modules/common/pages/404Page.vue') },
  ],
});

export default router;

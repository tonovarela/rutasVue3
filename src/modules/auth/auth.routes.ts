export const authRoutes = [
  {
    path: 'login',
    name: 'login',
    component: () => import('@/modules/auth/pages/LoginPage.vue'),
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
  },
];

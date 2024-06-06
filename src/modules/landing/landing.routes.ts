import isAutheticatedGuard from '../auth/guards/isAuthenticated.guard';

export const landingRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/landing/pages/HomePage.vue'),
  },
  {
    path: 'features',
    name: 'features',
    component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
  },
  {
    path: 'contact',
    name: 'contact',
    component: import('@/modules/landing/pages/ContactPage.vue'),
  },

  {
    path: 'pricing',
    name: 'pricing',
    component: import('@/modules/landing/pages/PricingPage.vue'),
  },
  {
    path: 'pokemon/:id',

    name: 'pokemon',
    beforeEnter: [isAutheticatedGuard],
    props: (route: any) => {
      const id = +route.params.id;
      if (isNaN(id)) {
        return { id: 1 };
      }
      return { id };
    },

    component: import('@/modules/pokemons/pages/PokemonPage.vue'),
  },
];

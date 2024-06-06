import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAutheticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const user = localStorage.getItem('userID');
  if (!user) {
    return next({ name: 'login' });
  }
  return next();
};

export default isAutheticatedGuard;

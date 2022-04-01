import router from './router'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    document.title =
      (to.meta?.title as string) + ' - Clound Music' || 'Clound Music'
    next()
  }
)

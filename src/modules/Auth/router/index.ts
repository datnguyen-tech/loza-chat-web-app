import type { RouteRecordRaw } from 'vue-router'

const AuthRouter: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('../views/AuthView.vue')
    }
]

export default AuthRouter

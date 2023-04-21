import type { RouteRecordRaw } from 'vue-router'

const ContactRouter: RouteRecordRaw[] = [
  {
    path: '/ban-be',
    component: () => import('@/components/layout/TheLayout.vue'),
    children: [
      {
        path: '',
        name: 'ContactPage',
        component: () => import('../view/ContactView.vue')
      }
    ]
  }
]

export default ContactRouter

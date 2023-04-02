import type { RouteRecordRaw } from 'vue-router'

const ChatRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/components/layout/TheLayout.vue'),
    children: [
      {
        path: '',
        name: 'ChatPage',
        component: () => import('../view/ChatView.vue')
      }
    ]
  }
]

export default ChatRouter

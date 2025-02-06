import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/materials',
      name: 'Materials',
      component: () => import('@/views/Materials/index.vue'),
      redirect: '/select-group',
      children: [
        {
          path: '/select-group',
          name: 'select-group',
          component: () => import('@/views/Materials/SelectGroup.vue')
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/views/Materials/InputGroup.vue')
        },
        {
          path: 'advanced-group',
          name: 'advanced-group',
          component: () => import('@/views/Materials/AdvancedGroup.vue')
        },
        {
          path: 'note-group',
          name: 'note-group',
          component: () => import('@/views/Materials/NoteGroup.vue')
        },
        {
          path: 'personal-info-group',
          name: 'personal-info-group',
          component: () => import('@/views/Materials/PersonalInfoGroup.vue')
        },
        {
          path: ' contact-group',
          name: 'contact-group',
          component: () => import('@/views/Materials/ContactGroup.vue')
        }
      ]
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('@/views/Editor/index.vue')
    }
  ]
})

export default router

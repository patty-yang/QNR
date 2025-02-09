import { createRouter, createWebHistory } from 'vue-router'
import { useMaterial } from '@/stores/useMaterial'

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
          component: () => import('@/views/Materials/SelectGroupView.vue'),
          redirect: '/single-select',
          children: [
            {
              path: '/single-select',
              name: 'single-select',
              component: () =>
                import(
                  '@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'
                )
            },
            {
              path: '/multi-select',
              name: 'multi-select',
              component: () =>
                import(
                  '@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue'
                )
            },
            {
              path: '/option-select',
              name: 'option-select',
              component: () =>
                import(
                  '@/components/SurveyComs/Materials/SelectComs/Option.vue'
                )
            },
            {
              path: '/single-pic-select',
              name: 'single-pic-select',
              component: () =>
                import(
                  '@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue'
                )
            },
            {
              path: '/multi-pic-select',
              name: 'multi-pic-select',
              component: () =>
                import(
                  '@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue'
                )
            }
          ]
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/views/Materials/InputGroupView.vue')
        },
        {
          path: '/advanced-group',
          name: 'advanced-group',
          component: () => import('@/views/Materials/AdvancedGroupView.vue')
        },
        {
          path: '/note-group',
          name: 'note-group',
          component: () => import('@/views/Materials/NoteGroupView.vue')
        },
        {
          path: '/personal-info-group',
          name: 'personal-info-group',
          component: () => import('@/views/Materials/PersonalInfoGroupView.vue')
        },
        {
          path: '/contact-group',
          name: 'contact-group',
          component: () => import('@/views/Materials/ContactGroupView.vue')
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

router.beforeEach((to, from, next) => {
  const activeView = localStorage.getItem('activeView')
  const materialStore = useMaterial()
  // 是否是组件市场
  if (activeView === 'materials' && to.name) {
    materialStore.setCurrentMaterialCom(to.name as string)
  }
  next()
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@renderer/views/Root.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@renderer/views/home/Home.vue'),
          meta: {
            menu: 'home',
            keepAlive: true
          }
        },
        {
          path: 'explore',
          name: 'explore',
          component: () => import('@renderer/views/explore/Explore.vue'),
          meta: {
            menu: 'explore',
            keepAlive: true
          }
        },
        {
          path: 'library',
          name: 'library',
          component: () => import('@renderer/views/library/Library.vue'),
          meta: {
            menu: 'library',
            keepAlive: true
          }
        },
        {
          path: 'history',
          name: 'history',
          component: () => import('@renderer/views/history/History.vue'),
          meta: {
            menu: 'history',
            keepAlive: true
          }
        },
        {
          path: 'local',
          name: 'local',
          component: () => import('@renderer/views/local/Local.vue'),
          meta: {
            menu: 'local',
            keepAlive: true
          }
        }
      ]
    }
  ]
})

export default router

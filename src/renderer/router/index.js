import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@renderer/view/Root.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@renderer/view/home/Home.vue'),
          meta: {
            menu: 'home',
            keepAlive: true
          }
        },
        {
          path: 'cloud',
          name: 'cloud',
          component: () => import('@renderer/view/cloud/Cloud.vue'),
          meta: {
            menu: 'cloud',
            keepAlive: true
          }
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('@renderer/view/album/Album.vue'),
          meta: {
            menu: 'album',
            keepAlive: true
          }
        },
        {
          path: 'explore',
          name: 'explore',
          component: () => import('@renderer/view/explore/Explore.vue'),
          meta: {
            menu: 'explore',
            keepAlive: true
          }
        },
        {
          path: 'local',
          name: 'local',
          component: () => import('@renderer/view/local/Local.vue'),
          meta: {
            menu: 'local',
            keepAlive: true
          }
        },
        {
          path: 'currentList',
          name: 'currentList',
          component: () => import('@renderer/view/currentList/CurrentList.vue'),
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
})

export default router

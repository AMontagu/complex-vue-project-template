import { createRouter, createWebHistory, RouteRecordRaw, RouteComponent } from 'vue-router'

import SchoolChildren from './school/index'

const School = ():Promise<RouteComponent> => import(/* webpackChunkName: "School" */ '@/views/School.vue')
const NotFoundPage = ():Promise<RouteComponent> => import(/* webpackChunkName: "NotFoundPage" */ '@/views/NotFoundPage.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'School',
    component: School,
    children: SchoolChildren
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { RouteRecordRaw, RouteComponent } from 'vue-router'

const Refectory = ():Promise<RouteComponent> => import(/* webpackChunkName: "Refectory" */ '@/views/school/other-rooms/Refectory.vue')
const Administration = ():Promise<RouteComponent> => import(/* webpackChunkName: "Administration" */ '@/views/school/other-rooms/Administration.vue')

const StudentRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Refectory',
    component: Refectory
  },
  {
    path: '/administration',
    name: 'Administration',
    component: Administration
  }
]

export default StudentRoutes

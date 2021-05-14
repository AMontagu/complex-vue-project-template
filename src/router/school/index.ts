import { RouteRecordRaw, RouteComponent } from 'vue-router'

import ClassroomsChildren from './classrooms/index'
import OtherRoomChildren from './other-rooms/index'

const SchoolDetails = ():Promise<RouteComponent> => import(/* webpackChunkName: "SchoolDetails" */ '@/views/school/SchoolDetails.vue')
const OtherRooms = ():Promise<RouteComponent> => import(/* webpackChunkName: "OtherRooms" */ '@/views/school/OtherRooms.vue')
const ClassroomsList = ():Promise<RouteComponent> => import(/* webpackChunkName: "ClassroomsList" */ '@/views/school/ClassroomsList.vue')
const Classroom = ():Promise<RouteComponent> => import(/* webpackChunkName: "Classroom" */ '@/views/school/Classroom.vue')

const schoolRoutes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'SchoolDetails',
    component: SchoolDetails
  },
  {
    path: 'classrooms',
    name: 'ClassRoomsList',
    component: ClassroomsList
  },
  {
    path: 'classroom',
    name: 'Classroom',
    component: Classroom,
    children: ClassroomsChildren
  },
  {
    path: 'other-rooms',
    name: 'OtherRooms',
    component: OtherRooms,
    children: OtherRoomChildren
  }
]

export default schoolRoutes

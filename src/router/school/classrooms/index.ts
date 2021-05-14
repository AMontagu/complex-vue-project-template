import { RouteRecordRaw, RouteComponent } from 'vue-router'

import StudentChildren from './student/index'

const ClassroomDetails = ():Promise<RouteComponent> => import(/* webpackChunkName: "ClassroomDetails" */ '@/views/school/classroom/ClassroomDetails.vue')
const StudentsList = ():Promise<RouteComponent> => import(/* webpackChunkName: "StudentsList" */ '@/views/school/classroom/StudentsList.vue')
const Student = ():Promise<RouteComponent> => import(/* webpackChunkName: "Student" */ '@/views/school/classroom/Student.vue')

const schoolRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ClassroomDetails',
    component: ClassroomDetails
  },
  {
    path: '/students',
    name: 'StudentsList',
    component: StudentsList
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    children: StudentChildren
  }
]

export default schoolRoutes

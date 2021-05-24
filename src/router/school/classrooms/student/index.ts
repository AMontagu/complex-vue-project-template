import { RouteRecordRaw, RouteComponent } from 'vue-router'

const StudentDetails = ():Promise<RouteComponent> => import(/* webpackChunkName: "StudentDetails" */ '@/views/school/classroom/student/StudentDetails.vue')

const StudentRoutes: Array<RouteRecordRaw> = [
  {
    path: ':studentId',
    name: 'StudentDetails',
    component: StudentDetails
  }
]

export default StudentRoutes

import Classroom from '@/models/Classroom'
import ClassroomService from '@/services/ClassroomService'
import { Module } from 'vuex'

interface ClassroomNormalized {
  [key: string]: Classroom
}

const classroomModule: Module<any, any> = {
  namespaced: true,
  state: {
    classroomsNormalized: {} as ClassroomNormalized
  },
  getters: {
    getClassrooms (state) {
      return Object.values(state.classroomsNormalized)
    },
    getClassroomById: (state) => (classroomId:string) => {
      return state.classroomsNormalized[classroomId]
    }
  },
  mutations: {
    setClassrooms (state, classrooms:Classroom[]) {
      state.classroomsNormalized = classrooms.reduce((acc, classroom) => {
        if (classroom.id) {
          acc[classroom.id.toString()] = classroom
        }
        return acc
      }, ({} as ClassroomNormalized))
    },
    setClassroom (state, classroom: Classroom) {
      if (classroom.id) {
        state.classroomsNormalized[classroom.id.toString()] = classroom
      }
    }
  },
  actions: {
    async fetchListClassrooms ({ commit }) {
      commit('setClassrooms', await ClassroomService.getListClassroom())
    },
    async fetchDetailsClassroom ({ commit }, classroomId:string) {
      commit('setClassroom', await ClassroomService.getDetailsClassroom(classroomId))
    }
  }
}

export default classroomModule

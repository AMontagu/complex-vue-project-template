import Classroom from '@/models/Classroom'
import ClassroomService from '@/services/ClassroomService'
import { Module } from 'vuex'

interface ClassroomNormalized {
  [key: string]: Classroom
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        if (!classroom.id) {
          return acc
        }
        const alreadyFetchedClassroom = state.classroomsNormalized[classroom.id.toString()]
        // If classroom already exist we just actualize it's data
        if (alreadyFetchedClassroom) {
          alreadyFetchedClassroom.setData(classroom.rawData)
          acc[classroom.id.toString()] = alreadyFetchedClassroom
        } else { // Else we set the new classroom
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

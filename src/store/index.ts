import { createStore } from 'vuex'
import classRoomModule from './modules/classrooms'
import VuexORM from '@vuex-orm/core'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    classrooms: classRoomModule
  },
  plugins: [VuexORM.install()]
})

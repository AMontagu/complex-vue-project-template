<template>
  <div>
    <h1>Classrooms details:</h1>

    <p>id: {{classroom?.id}}</p>
    <p>name: {{classroom?.name}}</p>
    <p>teacher: {{classroom?.teacher?.name}}</p>
  </div>
</template>

<script lang="ts">
import classroomService from '@/services/ClassroomService'
import ClassRoom from '@/models/Classroom'
import { mapActions, mapGetters } from 'vuex'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassroomDetails',
  computed: {
    ...mapGetters('classrooms', ['getClassroomById']),
    classroomId ():string {
      return this.$route.params.classroomId as string
    },
    classroom () {
      return this.getClassroomById(this.classroomId)
    }
  },
  async created () {
    this.fetchDetailsClassroom(this.$route.params.classroomId as string)
  },
  methods: {
    ...mapActions('classrooms', ['fetchDetailsClassroom'])
  }
})
</script>

<style>

</style>

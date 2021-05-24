<template>
  <div>
    <h1>Classrooms details:</h1>

    <p>id: {{classroom.id}}</p>
    <p>name: {{classroom.name}}</p>
    <p>teacher: {{classroom.teacher.name}}</p>
  </div>
</template>

<script lang="ts">
import classroomService from '@/services/ClassroomService'
import ClassRoom from '@/models/Classroom'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassroomDetails',
  data () {
    return {
      classroom: null as null|ClassRoom
    }
  },
  async created () {
    this.classroom = await classroomService.getDetailsClassroom(this.$route.params.classroomId as string)
  }
})
</script>

<style>

</style>

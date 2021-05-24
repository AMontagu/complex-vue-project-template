<template>
  <div>
    <h1>Classrooms details:</h1>

    <p>id: {{classroom?.id}}</p>
    <p>name: {{classroom?.name}}</p>
    <p>teacher: {{classroom?.teacher?.name}}</p>
  </div>
</template>

<script lang="ts">
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
    classroom ():ClassRoom {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (this.getClassroomById as any)(this.classroomId)
    }
  },
  async created () {
    if (!this.classroom || !this.classroom.detailsFetched) {
      console.log('FETCHING DETAILS CLASSROOM')
      this.fetchDetailsClassroom(this.classroomId)
    }
  },
  methods: {
    ...mapActions('classrooms', ['fetchDetailsClassroom'])
  }
})
</script>

<style>

</style>

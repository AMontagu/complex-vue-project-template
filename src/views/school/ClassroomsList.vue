<template>
  <div>
    <h1>ClassroomList</h1>
    <SimpleDatatable
      :items="getClassrooms"
      :headers="['id', 'name']"
      @row-click="goToClassroom"
    />
  </div>
</template>

<script lang="ts">
import ClassRoom from '@/models/Classroom'
import { mapActions, mapGetters } from 'vuex'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassroomList',
  computed: {
    ...mapGetters('classrooms', ['getClassrooms'])
  },
  async created () {
    this.fetchListClassrooms()
  },
  methods: {
    ...mapActions('classrooms', ['fetchListClassrooms']),
    goToClassroom (classroom:ClassRoom):void {
      if (!classroom.id) {
        return
      }
      this.$router.push({ name: 'ClassroomDetails', params: { classroomId: classroom.id } })
    }
  }
})
</script>

<style>

</style>

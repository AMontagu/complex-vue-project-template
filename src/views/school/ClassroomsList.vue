<template>
  <div>
    <h1>ClassroomList</h1>
    <SimpleDatatable
      :items="items"
      :headers="['id', 'name']"
      @row-click="goToClassroom"
    />
    <router-view/>
  </div>
</template>

<script lang="ts">
import classroomService from '@/services/ClassroomService'
import ClassRoom from '@/models/Classroom'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassroomList',
  data () {
    return {
      items: [] as ClassRoom[]
    }
  },
  async created () {
    this.items = await classroomService.getListClassroom()
  },
  methods: {
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

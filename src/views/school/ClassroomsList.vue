<template>
  <div>
    <h1>ClassroomList</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import classroomService from '@/services/ClassroomService'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ClassroomList',
  async created () {
    console.log(await classroomService.getListClassroom())
  }
})
</script>

<style>

</style>

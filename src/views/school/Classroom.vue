<template>
  <div>
    <h1>Classroom</h1>
    <MyCompanyNavigation :navigationLinks="navigationLinks" />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useClassroomNavigations } from '@/composables/navigationsLinks'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Classroom',
  setup () {
    const route = useRoute()
    const { navigationLinks } = useClassroomNavigations(route.params.classroomId as string)
    return {
      navigationLinks
    }
  }
})
</script>

<style>

</style>

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

export default defineComponent({
  name: 'Classroom',
  setup () {
    const { navigationLinks } = useClassroomNavigations()
    return {
      navigationLinks
    }
  }
})
</script>

<style>

</style>

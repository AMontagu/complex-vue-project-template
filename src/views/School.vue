<template>
  <div>
    <h1>School App</h1>
    <MyCompanyNavigation :navigationLinks="navigationLinks" />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useSchoolNavigations } from '@/composables/navigationsLinks'

export default defineComponent({
  name: 'School',
  setup () {
    const { navigationLinks } = useSchoolNavigations()
    return {
      navigationLinks
    }
  }
})
</script>

<style>

</style>

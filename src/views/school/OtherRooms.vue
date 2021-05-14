<template>
  <div>
    <h1>other-rooms</h1>
    <MyCompanyNavigation :navigationLinks="navigationLinks" />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useOtherRoomsNavigations } from '@/composables/navigationsLinks'

export default defineComponent({
  name: 'OtherRooms',
  setup () {
    const { navigationLinks } = useOtherRoomsNavigations()
    return {
      navigationLinks
    }
  }
})
</script>

<style>

</style>

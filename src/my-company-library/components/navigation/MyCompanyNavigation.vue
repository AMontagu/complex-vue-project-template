<template>
  <div id="nav">
    <router-link v-for="link in navigationLinks" :key="link.name" :to="link.to">Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCompanyNavigation',
  props: {
    navigationLinks: {
      type: Array,
      default: ():Array => []
    }
  }
})
</script>

<style>

</style>

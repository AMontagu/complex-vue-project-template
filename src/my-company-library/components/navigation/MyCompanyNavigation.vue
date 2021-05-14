<template>
  <div id="nav">
    <router-link v-for="link in navigationLinks" :key="link.name" :to="link.to" class="navigation-link">{{link.name}}</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteLocationRaw } from 'vue-router'

interface NavigationLink {
  name: string;
  to: RouteLocationRaw
}

export default defineComponent({
  name: 'MyCompanyNavigation',
  props: {
    navigationLinks: {
      type: Array,
      default: ():Array<NavigationLink> => []
    }
  }
})
</script>

<style>
.navigation-link {
  margin-right: 20px;
}
</style>

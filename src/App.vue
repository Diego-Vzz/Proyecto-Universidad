<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Main from './layouts/Main.vue';
import Auth from './layouts/Auth.vue';
const route = useRoute();

const layout = computed(() => {
  return route.meta.layout === 'Main' ? Main : Auth;
});

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>

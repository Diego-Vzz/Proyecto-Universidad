<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Main from './layouts/Main.vue';
const route = useRoute();

const layout = computed(() => {
  return route.meta.layout === 'Main' ? Main : null;
});

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>

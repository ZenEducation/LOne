<template>
  <div>
    <NuxtPage />
  </div>
</template>
<script setup>
import { useStyleStore } from '@/stores/style';
const styleStore = useStyleStore()
const { setDarkMode } = styleStore
onMounted(()=> {
  setDarkMode()
})
</script>

<template>
feat/chatApp
  <!-- <div
      id="root"
      class="min-h-100vh cloak flex grow bg-slate-50 dark:bg-navy-900"
    > -->
  <AppPreLoader v-if="isLoading"/>
  <div
      v-else
      id="root"
      class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900"
    >
    <ChatSidebar />
    <ChatMain />
    <RightSidebar />
  </div>

</template>

<script setup>
import ChatSidebar from "~~/components/Chat/ChatSideBar/index.vue";
import ChatMain from "~~/components/Chat/ChatMain/index.vue";
import AppPreLoader from "~~/components/Chat/AppPreLoader.vue";
import RightSidebar from "~~/components/Chat/RightSideBar/index.vue";
import { ref } from "vue";
const isLoading = ref(true)
onMounted(() => {
  setTimeout(()=> {
    isLoading.value = false
  }, 2000)
  // THIS SCRIPT REQUIRED FOR PREVENT For Dark Mode
  // localStorage.getItem("dark-mode") === "dark"
  //  && document.documentElement.classList.add("dark");
});

</script>

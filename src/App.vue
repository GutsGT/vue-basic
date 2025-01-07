<script setup>
  import { RouterLink, RouterView } from 'vue-router';
  import Menu from '@/components/Menu.vue';
</script>

<template>
  <div class="font-['Consolas'] content-center">
    <header class="max-h-screen max-w-screen w-full justify-items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper content-center">
        <Menu />
      </div>
    </header> 
    <div class="min-w-[50vw] min-h-[70vh] content-center justify-items-center">
      <div class="w-full md:w-3/4 min-h-fit border-2 border-white rounded-3xl p-10 shadow-main-section">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import url("./assets/dist/build.css");
</style>

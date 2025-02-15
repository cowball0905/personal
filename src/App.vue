<script setup>
  import MainNavbar from './components/MainNavbar.vue';
  import { RouterView } from 'vue-router';
  import footera from './components/footera.vue';
  import ScrollTop from 'primevue/scrolltop';
</script>

<template>
  <ScrollTop :threshold="200" />
  <MainNavbar/>
  <RouterView/>
  <footera/>
</template>

<style scoped>

</style>

<script setup>
  import MainNavbar from './components/MainNavbar.vue';
  import { RouterView } from 'vue-router';
  import footera from './components/footera.vue';
</script>

<template>
  <MainNavbar/>
  <RouterView/>
  <footera/>
</template>

<style scoped>

</style>

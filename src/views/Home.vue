<script setup>
  import hero from '../components/hero.vue'
  import Explist from '../components/Explist.vue';


</script>


<template>
  <hero/>
  <Explist :limit="3" :showButton="true"/>
</template>

<style scoped>



</style>
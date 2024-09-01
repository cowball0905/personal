<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div className="backbutton">
      <RouterLink to="/experience"><- Back to Experience list</RouterLink>
    </div>
  </template>
  
  <style scoped>
  .backbutton {
    margin-bottom: 2em;
    display: flex;
    align-items: center;
    width: 80%;
    color:black;
    font-size: large;
  }
  .backbutton:hover{
    color: gold;
  }
  </style>
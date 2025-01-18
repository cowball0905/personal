<script setup>
  import face from '@/assets/DSCF5279.jpg';
  import { RouterLink } from 'vue-router';

  const imageicon = face;
</script>
<template>
  <div class="Hero">
    <div class="icon-part">
      <img :src='imageicon' alt="my face">
    </div>
    <div class="hero-text">
      <h1>Hello, I'm Ken Wong</h1><br>
      <h3>an ordinary <span>Computer Science</span> student with enthusiasm</h3>
      <div class="buttonmain">
        <RouterLink to="/cv" class="contactb">Contact Me</RouterLink>
        <button class="linkinb"><a href='https://www.linkedin.com/in/ken-wong-1a86a5294/'>LinkedIn</a></button>
      </div>
    </div>
  </div>
</template>


<style scoped>
  .contactb:hover{
    background-color: black;
    color:white;
  }
  .linkinb:hover{
    background-color: rgb(173, 148, 1);
  }
  .Hero {
    background-color: #FFFBEB;
    min-height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 5% 20%; 
  }
  h1 {
    font-size: 3.125rem; 
    font-weight: bold;
    text-align: center;
    font-family: Lexend;
    margin: 0.5rem 0; 
  }
  h3 {
    color: #757575;
    margin-bottom: 2%; 
  }
  span {
    color: rgb(0, 146, 97);
  }
  img {
    width: 150px;
    border-radius: 100px;
  }
  .contactb, .linkinb {
    border-radius: 10px;
    padding: 10px;
    width: 40%; 
    text-align: center;
  }
  .contactb {
    border: solid black 1px;
  }
  .linkinb {
    color: white;
    background-color: #E8B931;
  }
  .buttonmain {
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5% 0%;
  }
  .icon-part{
    justify-content: center;
    display: flex;
    order:2;

  }
  .hero-text{
    order: 1;
  }

  @media (max-width: 768px) {
    .Hero {
      flex-direction: column;
      text-align: center;
    }
    .hero-text, .icon-part {
      width: 100%;
    }
    .icon-part{
      order: 1;
    }
    .hero-text{
      order:2;
    }
    .buttonmain {
      flex-direction: column;
      align-items: center;
    }
    .contactb, .linkinb {
      width: 80%; 
      margin-top: 10px; 
    }
  }
</style>
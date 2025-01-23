<script setup>
import face from '@/assets/DSCF5279.jpg';

const imageicon = face;

const scrollToFooter = () => {
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <div class="Hero">
    <div class="icon-part">
      <img :src='imageicon' alt="my face">
    </div>
    <div class="hero-text">
      <code>
        <div class="typing-container">
          <p class="TitleEffect">
            Hello I am Ken Wong
          </p>
        </div>
      </code>
      <code>
        <div class="typing-container">
          <p class="typingEffect">
            a <span>Computer Science</span> student with passion.
          </p>
        </div>
      </code>
    </div>
  </div>
</template>

<style scoped>
  .typing-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .typingEffect {
    width: 0;
    overflow: hidden; 
    font-size: 16px;
    white-space: nowrap; 
    animation: typing 2s steps(30) forwards 2.5s;
    margin: 0 auto;
  }

  .TitleEffect {
    width: 0;
    overflow: hidden; 
    font-size: 30px;
    white-space: nowrap; 
    animation: typing 2s steps(30) forwards;
    margin: 0 auto;
  }

  code {
    height: 70px;
    color: black;
    display: flex;
    margin: 0;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% } 
  }
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
    margin-top: 1%;
    justify-content: space-between;
    padding:0%;
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
    .typingEffect {
        width: 0;
        overflow: hidden; 
        font-size: 10px;
        white-space: nowrap; 
        animation: typing 2s steps(30) forwards 2.5s;
    }
    .TitleEffect {
        width: 0;
        overflow: hidden; 
        font-size: 20px;
        white-space: nowrap; 
        animation: typing 2s steps(30) forwards;
    }
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
    .name{
      font-size: 25px;
    }
  }
</style>
<template>
    <div class="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>You may have mistyped the address or the page may have moved.</p>
      <RouterLink to="/">Go Home</RouterLink>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
  
  h1 {
    font-size: 96px;
    font-weight: bold;
  }
  
  h2 {
    font-size: 36px;
  }
  
  p {
    font-size: 18px;
    color: #666;
  }
  
  a {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: gold;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
  }
  
  a:hover {
    background-color: rgb(205, 174, 0);
  }
  </style>
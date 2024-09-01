
<template>
  <div class="Navbar">
      <RouterLink to="/">
        <span class='icon'>< WHL /></span>
      </RouterLink>
      <ul class="navitems">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/experience">Experience</RouterLink></li>
        <li><RouterLink to="/cv">CV</RouterLink></li>
      </ul>
  </div>
</template>

<style scoped>
  .Navbar{
    background-color: #FFF1C2;
    min-height: 100px;
    display: flex;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    justify-content: space-between;
    font-family: SUSE;
  }
  .icon{
    font-family: Handjet;
    font-size: 50px;
  }
  li{
    display: inline;
    text-decoration: none;
    margin-left: 30px;
    border-radius: 10px;
    padding:8px;
  }
  li:first{
    margin-left: 0;
  }
  li:hover{
    background-color: #E8B931;
  }
</style>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggle() {
      this.isMenuOpen = !this.isMenuOpen;
      let navItems = document.querySelector(".Navbar2");
      navItems.style.display = this.isMenuOpen ? "flex" : "none";
    },
    handleNavClick() {
      if (window.innerWidth <= 768) {
        this.isMenuOpen = false;
        let navItems = document.querySelector(".Navbar2");
        navItems.style.display = "none";
      }
    },
    scrollToFooter(){
      document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 768) {
        this.isMenuOpen = false;
        let navItems = document.querySelector(".Navbar2");
        navItems.style.display = "none";
      }
    } 
  }
}
</script>

<template>
  <div class="Navbar">
    <RouterLink to="/">
      <span class='icon'>< WHL /></span>
    </RouterLink>
    <ul class="navitems">
      <li class="nav1"><RouterLink to="/">Home</RouterLink></li>
      <li class="nav1"><RouterLink to="/experience">Experience</RouterLink></li>
      <li class="nav1"><RouterLink to="/cv">Resume</RouterLink></li>
      <li class="nav1" @click="scrollToFooter">Contact</li>
    </ul>
    <div @click="toggle" class="menu-container">
      <svg xmlns="http://www.w3.org/2000/svg" class="menu" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
      </svg>
    </div>
  </div>
  <div class="Navbar2">
    <ul className="flex flex-col text-center justify-center">
      <li className="w-full py-8 bg-white" @click="handleNavClick"><RouterLink to="/">Home</RouterLink></li>
      <li className="w-full py-8 bg-white" @click="handleNavClick"><RouterLink to="/experience">Experience</RouterLink></li>
      <li className="w-full py-8 bg-white" @click="handleNavClick"><RouterLink to="/cv">Resume</RouterLink></li>
      <li className="w-full py-8 bg-white cursor-pointer" @click="scrollToFooter">Contact</li>
    </ul>
  </div>
</template>

<style scoped>
  .menu{
    display: none;
  }
  .Navbar2{
    position: absolute;
    width:100%;
    display: none;
    left:0;
    flex-direction: column;
    height: 100%;
    background-color: white;
  }
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
  .nav1{
    display: inline;
    text-decoration: none;
    margin-left: 30px;
    border-radius: 10px;
    padding:8px;
  }
  .nav1:first{
    margin-left: 0;
  }
  li:hover{
    background-color: #E8B931;
  }
  @media (max-width:768px) {
    .navitems{
      display: none;
    }
    .menu{
      display:initial;
    }
  }
</style>
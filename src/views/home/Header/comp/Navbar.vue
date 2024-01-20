<template>
  <div>
    <nav class="nav-bar">
      <div class="arlene-rey">Arlene Rey</div>
      <ul class="menu">
        <li>
          <a href class="home">Home</a>
        </li>
        <li>
          <a href>About</a>
        </li>
        <li>
          <a href>Project</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
      </ul>
    </nav>
    <!-- <nav class="mobile-nav">
      <div class="arlene-rey">Arlene Rey</div>
      <span class="mdi mdi-menu"></span>
    </nav>
    <v-container class="nav-menu">
      <span class="mdi mdi-close"></span>
      <ul class="menu">
        <li>
          <a href class="home">Home</a>
        </li>
        <li>
          <a href>About</a>
        </li>
        <li>
          <a href>Project</a>
        </li>
        <li>
          <a href>Contact</a>
        </li>
      </ul>
    </v-container>-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  box-sizing: border-box;
  padding: 33px 0px 34px;
  height: 100px;
  position: relative;
  overflow: hidden;
  margin: 0%;
}
nav.mobile-nav {
  display: none;
}
@media only screen and (max-width: 600px) {
  .nav-bar {
    display: none;
  }
  .mobile-nav {
    display: flex;
    box-sizing: border-box;
    padding: 33px 0px 34px;
    height: 100px;
    position: relative;
    overflow: hidden;
    margin: 0%;
  }
  .nav-menu {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    transition: all 400ms ease;
  }
  .nav-menu.active {
    left: 0;
  }
  .nav-menu .mdi-close {
    position: fixed;
    top: 32px;
    right: 100px;
    opacity: 0;
    pointer-events: none;
    transition: all 400ms ease;
  }
  .nav-menu.active .mdi-close {
    opacity: 1;
    pointer-events: auto;
  }
  .nav-menu ul {
    list-style: none;
    padding: 0;
  }
  .nav-menu ul li {
    margin: 30px 0px;
    text-align: center;
  }
}
.arlene-rey {
  box-sizing: border-box;
  color: #151517;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 700;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.menu {
  display: flex;
  flex-direction: row;
  gap: 40px;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  right: 0px;
  top: 38px;
  margin: 0;
}

nav ul li a {
  color: #151517;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  text-decoration: none;
}
.home {
  box-sizing: border-box;
  color: #eebf63;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  position: relative;
}
</style>
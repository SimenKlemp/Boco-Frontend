<template>
  <nav>
    <div class="header">
      <img class="hamburgerMenu" src="@/assets/hamburger.svg" alt="Ham" />
      <router-link class="homeLink" :to="{ name: 'Home' }">BOCO</router-link>
      <img class="notificationIcon" src="@/assets/notification.svg" alt="Not" />
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.header {
  position: absolute;
  display: flex;
  width: 95%;
  justify-content: space-between;
}
.hamburgerMenu {
  width: 2rem;
}
.homeLink {
  font-size: 40px;
}
.notificationIcon {
  width: 2rem;
}
</style>

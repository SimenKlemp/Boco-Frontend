<template>
  <nav>
    <div class="header">
      <img class="hamburgerMenu" src="@/assets/hamburger.svg" alt="Ham" />
      <router-link :to="{ name: 'RegistrationComponent' }">reg</router-link>
      <router-link :to="{ name: 'LoginComponent' }">login</router-link>
      <router-link :to="{ name: 'AddItemComponent' }">add</router-link>
      <router-link class="homeLink" :to="{ name: 'Home' }">
        <img src="@/assets/bocologo.png" alt="Logo" />
      </router-link>
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
  padding: 30px 5px;
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
  display: flex;
  justify-content: space-between;
}
.hamburgerMenu {
  width: 3rem;
}
.homeLink {
  font-size: 40px;
}
.notificationIcon {
  width: 3rem;
}
</style>

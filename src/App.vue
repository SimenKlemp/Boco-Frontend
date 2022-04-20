<template>
  <nav>
    <div class="header">
      <router-link to="">Ham</router-link>
      <router-link :to="{ name: 'Home' }">BOCO</router-link>
      <router-link :to="{ name: 'NotificationsComponent' }">Not</router-link>
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
  padding: 30px;
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
</style>

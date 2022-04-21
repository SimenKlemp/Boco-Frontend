<template>
  <nav>
    <div class="header">
      <svg
        class="hamburgerMenu"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 32 32"
        x="0px"
        y="0px"
      >
        <title>menu</title>
        <path
          d="M1.158 3.441c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 14.858c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0zM1.158 26.275c-0.005 0-0.010 0-0.016 0-0.631 0-1.142 0.511-1.142 1.142s0.511 1.142 1.142 1.142c0.006 0 0.011 0 0.017 0h29.683c0.005 0 0.010 0 0.016 0 0.631 0 1.142-0.511 1.142-1.142s-0.511-1.142-1.142-1.142c-0.006 0-0.011 0-0.017 0z"
        ></path>
      </svg>
      <router-link class="homeLink" :to="{ name: 'Home' }">BOCO</router-link>
      <svg
        class="notificationIcon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        style="enable-background: new 0 0 100 100"
        xml:space="preserve"
      >
        <path
          d="M41,85.8c-0.2,0.8-0.3,1.5-0.3,2.4c0,5.1,4.2,9.3,9.3,9.3s9.3-4.2,9.3-9.3c0-0.8-0.1-1.6-0.3-2.4H41z"
        ></path>
        <path
          d="M87.8,75.5c-0.1-0.8-0.4-1.5-0.9-2.1c-0.1-0.1-8.1-8.8-8.1-31.8c0-17.9-12-25.4-21.9-27.7V8.7  c0-3.7-3.1-6.8-6.8-6.8S43.2,5,43.2,8.7V14c-9.9,2.3-21.9,9.7-21.9,27.7c0,23-8,31.7-8.1,31.7c-0.6,0.6-0.9,1.3-1,2.1h0v6.3h75.6  L87.8,75.5L87.8,75.5z"
        ></path>
      </svg>
    </div>
  </nav>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent,
  },
};
</script>
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
  width: 90%;
  justify-content: space-between;
  padding: 1rem 20px 1rem 20px;
}
.hamburgerMenu {
  fill: white;
  width: 2.5rem;
}
.homeLink {
  font-size: 40px;
}
.notificationIcon {
  fill: white;
  width: 2.5rem;
}
</style>

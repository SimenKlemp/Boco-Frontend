<template>
  <header v-if="!isHome">
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
        <button @click="goToHome" class="homeLink">
          <img class="logoImage" src="@/assets/bocologo.png" alt="" />
        </button>
        <svg
          class="notificationIcon"
          xmlns="http://www.w3.org/2000/svg"
          width="30.582"
          height="35.507"
          viewBox="0 0 30.582 35.507"
        >
          <g transform="translate(-12.2 -1.9)">
            <g transform="translate(12.2 1.9)">
              <g transform="translate(9.785 30.947)">
                <path
                  d="M40.878,85.8a2.467,2.467,0,0,0-.178.935c0,1.988,2.487,3.625,5.506,3.625s5.506-1.637,5.506-3.625a2.619,2.619,0,0,0-.178-.935Z"
                  transform="translate(-40.7 -85.8)"
                />
              </g>
              <path
                d="M42.783,26.723a1.242,1.242,0,0,0-.364-.708c-.04-.034-3.277-2.968-3.277-10.725,0-6.037-4.854-8.566-8.859-9.342V4.193A2.581,2.581,0,0,0,27.532,1.9,2.622,2.622,0,0,0,24.74,4.193V5.981c-4,.776-8.859,3.271-8.859,9.342,0,7.757-3.236,10.691-3.277,10.691a1.1,1.1,0,0,0-.4.708h0v2.125H42.783V26.723Z"
                transform="translate(-12.2 -1.9)"
              />
            </g>
          </g>
        </svg>
      </div>
    </nav>
  </header>
  <router-view />
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {
    FooterComponent,
  },
  computed: {
    isHome() {
      return this.$route.name === "HomeView";
    },
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "HomeView" });
    },
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
* {
  margin: 0;
}
.header {
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 1rem 20px 1rem 20px;
  margin-right: -10px;
}
.hamburgerMenu {
  width: 2.5rem;
}
.homeLink {
  font-size: 40px;
  background: transparent;
  border: none;
}
.notificationIcon {
  width: 2.5rem;
}
.logoImage {
  width: 8rem;
}
:root {
  --indigo: #034363;
  --blue: #126782;
  --lightblue: #8ECAE6;
  --orange: #FB8500;
}
</style>

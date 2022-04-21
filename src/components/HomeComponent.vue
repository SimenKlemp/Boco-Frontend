<template>
  <div class="mainContent">
    <div class="welcomeMessage">Din side for å leie!</div>
    <p>Tenk bærekraft! Lei istedenfor å kjøpe!</p>
    <form class="form" @submit.prevent="submit">
      <BaseSearchBar :label="'Søk...'"></BaseSearchBar>
      <button class="searchButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
        >
          <title>Artboard 19</title>
          <path
            d="M45.5,20a25.5,25.5,0,1,0,15,46.13l12.7,12.7a4,4,0,0,0,5.66-5.66l-12.7-12.7A25.48,25.48,0,0,0,45.5,20Zm0,43A17.5,17.5,0,1,1,63,45.5,17.52,17.52,0,0,1,45.5,63Z"
          ></path>
        </svg>
      </button>
    </form>
    <p>Bærekraft</p>
  </div>
</template>

<script>
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
export default {
  name: "HomeComponent",
  components: {
    BaseSearchBar,
  },
  methods: {
    submit() {
      console.log("submitted");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  color: white;
}

.mainContent {
  background-image: url("../assets/Woman-hiker-relaxing-at-the-top-of-the-mountain-and-looking-up-at-a-Norwegian-fjord.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 750px;
  overflow: hidden;
  width: 100%;
  padding: 20px 20px 5rem;
  border-bottom: solid 10px #034363;
}
.welcomeMessage {
  font-size: 40px;
  padding: 40px 10px;
  margin: 5rem 0 2rem 0;
}

.form {
  display: grid;
  border-radius: 7px;
  box-shadow: 0 0 3px;
  background: white;
  grid-template-columns: 85% 15%;
  height: 4rem;
  width: 95%;
  margin: 0 auto;
}
.searchButton {
  border: none;
  background: transparent;
}
</style>

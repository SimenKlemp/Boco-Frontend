<template>
  <div class="mainContent">
    <div class="welcomeMessage">Din side for å leie!</div>
    <form class="form" @submit.prevent="submit">
      <BaseSearchBar :label="'Søk...'"></BaseSearchBar>
      <button class="searchButton">
        <img src="@/assets/hamburger.svg" alt="" />
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

.mainContent {
  border: solid black;
  width: 100%;
  padding-bottom: 5rem;
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
  grid-template-columns: 85% 15%;
  height: 4rem;
}
.searchButton {
  border: none;
  background: transparent;
}
</style>

<template>
  <div class="mainContent">
    <div class="welcomeMessage">Lei i stedet for å kjøpe!</div>
    <form class="form" @submit.prevent="submit">
      <BaseSearchBar :label="'Søk...'" v-model="searchSentence"></BaseSearchBar>
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
  </div>
</template>

<script>
import BaseSearchBar from "@/components/baseTools/BaseSearchBar";
import SearchedItems from "@/views/SearchedItems";
export default {
  name: "HomeComponent",
  components: {
    BaseSearchBar,
  },
  data() {
    return {
      searchSentence: "",
      page: 0,
      pageSize: 30,
    };
  },
  methods: {
    submit() {
      const searchRequest = {
        text: this.searchSentence,
        page: this.page,
        pageSize: this.pageSize,
      };

      console.log(searchRequest);
      this.$store.dispatch("getSearchedItems", searchRequest);
      this.$router.push({ name: "SearchedItems" });

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 22px;
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
  color: var(--blue);
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
  margin-bottom: 30px;
  height: 500px;
}
.welcomeMessage {
  font-size: 40px;
  font-weight: 500;
  padding: 40px 70px;
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
  margin: 70px auto 0;
}
.searchButton {
  border: none;
  background: transparent;
}
</style>

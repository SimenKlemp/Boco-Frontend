<template>
  <HomeComponent></HomeComponent>
  <div class="itemsContainer">
    <div class="itemsHeader">
      <h3>Nyeste annonser</h3>
      <p>Se de nyeste annonsene på boco</p>
    </div>
    <div class="items">
      <ItemCardSquare></ItemCardSquare>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    ItemCardSquare,
  },
};
</script>
<style scoped>
h3 {
  font-size: 29px;
  margin-bottom: 5px;
}
p {
  margin-top: 0;
  color: #575757;
}

.itemsHeader {
  text-align: left;
}
.itemsContainer {
  margin: 10px;
}
</style>

<template>
  <div class="container">
    <div class="metaContainer">
      <h1>Mottatte forespørsler</h1>
      <p>Forespurt gjenstand</p>
      <ItemCardHorizontal :item="item" @click.stop="goToItem"></ItemCardHorizontal>
    </div>
    <div class="customerContainer">
      <h1 id="customersTitle">Mine kunder</h1>
      <div>Card goes here</div>
    </div>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "RentalsReceived",
  components: {
    ItemCardHorizontal,
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
  },
  methods: {
    goToItem() {
      this.$router.push({ name: "ProductDetails" })
    }
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}

.container {
  margin-bottom: 2rem;
  text-align: left;
}
.metaContainer {
  margin: 0 1rem 1rem 1rem;
}
.customerContainer {
  background: #e5ecf1;
  padding: 0 1rem 1rem 1rem;
}

#customersTitle {
  font-weight: normal;
}
</style>

<template>
  <div class="container">
    <div class="infoContainer">
      <h1>Mottatte forespørsler</h1>
      <p>Forespurt gjenstand</p>
      <ItemCardHorizontal :item="item"></ItemCardHorizontal>
    </div>
    <div class="customers">
      <h1 id="customersTitle">Mine kunder</h1>
      <CustomerCard></CustomerCard>
    </div>
  </div>
</template>

<script>
import CustomerCard from "@/components/CustomerCard";
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
export default {
  name: "RentalsReceived",
  components: {
    ItemCardHorizontal,
    CustomerCard,
  },
  computed: {
    item() {
      return this.$store.state.currentItem;
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
p {
  font-size: 20px;
}

.container {
  margin-bottom: 2rem;
  text-align: left;
}
.infoContainer {
  margin: 0 1rem 1rem 1rem;
}
.customers {
  background: #e5ecf1;
  padding: 1rem;
}

#customersTitle {
  font-weight: normal;
}
</style>

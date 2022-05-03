<template>
  <div class="container">
    <h1>Mine leieforhold</h1>
    <div class="sections">
      <router-link :to="{ name: 'RentalsPending' }">Ventende</router-link>
      <router-link :to="{ name: 'RentalsActive' }">Aktive</router-link>
      <router-link :to="{ name: 'RentalsFinished' }">Arkiv</router-link>
    </div>
    <div class="rentalsContainer">
      <router-view></router-view>
    </div>
    <div class="actions">
      <BaseSection :title="'Venter på svar'" :rentals="rentals"></BaseSection>
      <BaseSection :title="'Aktive leieforhold'"></BaseSection>
      <BaseSection :title="'Avsluttede leieforhold'"></BaseSection>
    </div>
  </div>
</template>

<script>
import BaseSection from "@/components/baseTools/BaseSection";
export default {
  name: "MyRentals",
  components: {
    BaseSection,
  },
  computed: {
    rentals() {
      return this.$store.state.myRentals;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMyRentals");
  },
};
</script>

<style scoped>
h1 {
  color: black;
  margin: 0 1rem;
  padding: 1rem;
  font-weight: 450;
  font-size: 28px;
}
a {
  border-bottom: solid grey 1px;
  text-decoration: none;
  padding: 1.3rem 2rem;
  color: lightgray;
}
a.router-link-exact-active {
  border-bottom: solid black 3px;
  color: black;
}

.sections {
  border-top: solid grey 1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.container {
  margin-bottom: 1rem;
}
.rentalsContainer {
  background: #f6f6f6;
}
</style>

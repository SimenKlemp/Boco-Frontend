<template>
  <div class="container">
    <h1>Mine leieforhold</h1>
    <div class="actions">
      <BaseSection :title="'Venter på svar'" :rentals="items"></BaseSection>
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
    items() {
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
  border-bottom: solid black 1px;
  color: black;
  margin: 0 1rem;
  padding: 1rem;
  font-weight: 450;
  font-size: 28px;
}

.container {
  margin-bottom: 1rem;
}
</style>

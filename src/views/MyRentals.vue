<template>
  <div class="container">
    <h1>Mine leieforhold</h1>
    <div class="actions">
      <BaseSection
        :title="'Venter på svar'"
        :rentals="rentalsPending"
      ></BaseSection>
      <BaseSection
        :title="'Aktive leieforhold'"
        :rentals="rentalsActive"
      ></BaseSection>
      <BaseSection
        :title="'Avsluttede leieforhold'"
        :rentals="rentalsFinished"
      ></BaseSection>
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
    rentalsPending() {
      return this.$store.state.myRentalsPending;
    },
    rentalsActive() {
      return this.$store.state.myRentalsActive;
    },
    rentalsFinished() {
      return this.$store.state.myRentalsFinished;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMyRentals", "PENDING");
    this.$store.dispatch("fetchMyRentals", "ACCEPTED");
    this.$store.dispatch("fetchMyRentals", "CANCELED");
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

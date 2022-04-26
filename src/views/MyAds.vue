<template>
  <div class="container">
    <h1>Mine annonser</h1>
    <div class="actions">
      <BaseSection :title="'Annonser'" :items="items"></BaseSection>
      <BaseSection :title="'Aktive leieforhold'" :items="items"></BaseSection>
      <BaseSection :title="'Arkiverte annonser'" :items="items"></BaseSection>
    </div>
  </div>
</template>

<script>
import BaseSection from "@/components/baseTools/BaseSection";
export default {
  name: "MyAds",
  components: {
    BaseSection,
  },
  computed: {
    items() {
      return this.$store.state.myItems;
    },
  },
  mounted() {
    this.$store.dispatch("fetchMyItems");
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

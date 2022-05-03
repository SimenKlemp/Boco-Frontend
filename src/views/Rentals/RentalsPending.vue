<template>
  <ChatCard
    v-for="rental in rentalsPending"
    :key="rental.rentalId"
    :rental="rental"
  ></ChatCard>
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "RentalsPending",
  components: {
    ChatCard,
  },
  computed: {
    rentalsPending() {
      return this.$store.state.myRentalsPending;
    },
  },
};
</script>

<style scoped></style>

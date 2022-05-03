<template>
  <ChatCard
    v-for="rental in rentalsActive"
    :key="rental.rentalId"
    :rental="rental"
  ></ChatCard>
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "RentalsActive",
  components: {
    ChatCard,
  },
  computed: {
    rentalsActive() {
      return this.$store.state.myRentalsActive;
    },
  },
};
</script>

<style scoped></style>

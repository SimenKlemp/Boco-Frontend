<template>
  <ChatCard
    v-for="rental in rentalsFinished"
    :key="rental.rentalId"
    :rental="rental"
  ></ChatCard>
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "RentalsFinished",
  components: {
    ChatCard,
  },
  computed: {
    rentalsFinished() {
      return this.$store.state.myRentalsFinished;
    },
  },
};
</script>

<style scoped></style>

<template>
  <ChatCard
    id="chatCard"
    v-for="rental in rentalsUser"
    :key="rental.rentalId"
    :rental="rental"
    :name="rental.item.user.name"
  ></ChatCard>
  <ChatCard
    v-for="rental in rentalsOwner"
    :key="rental.rentalId"
    :rental="rental"
    :name="rental.user.name"
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
    rentalsUser() {
      return this.$store.state.myRentalsFinished;
    },
    rentalsOwner() {
      return this.$store.state.currentRentalsOwnerFinished;
    },
  },
};
</script>

<style scoped></style>

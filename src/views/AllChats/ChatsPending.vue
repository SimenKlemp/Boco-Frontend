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
  name: "ChatsPending",
  components: {
    ChatCard,
  },
};
</script>

<style scoped></style>

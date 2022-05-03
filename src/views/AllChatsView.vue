<template>
  <div class="container">
    <div class="headerContainer">
      <div class="title">Alle chatter</div>
    </div>
    <ChatCard
      id="chatCard"
      v-for="rental in rentals"
      :key="rental.rental.rentalId"
      :rental="rental.rental"
      @click="goToChat(rental.rental)"
    ></ChatCard>
  </div>
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "AllChatsView",
  components: {
    ChatCard,
  },
  methods: {
    goToChat(rental) {
      this.$store.dispatch("setRental", rental);
      this.$router.push({ name: "MessageView" });
    },
  },
  computed: {
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== null;
    },
    rentals() {
      return this.$store.state.currentRatingsOwner.concat(
        this.$store.state.currentRatingsUser
      );
    },
  },
  mounted() {
    this.$store.dispatch("getAllRatings", this.$store.state.userInfo.userId);
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
  margin-bottom: 2rem;
}
.headerContainer {
  display: flex;
  justify-content: center;
  border-bottom: solid black 1px;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
}
.title {
  font-size: 20px;
}
</style>

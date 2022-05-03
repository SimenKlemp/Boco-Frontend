<template>
  <div class="container">
    <div class="headerContainer">
      <div class="title">Alle chatter</div>
      <div class="sections">
        <router-link :to="{ name: 'AllChats' }">Alle</router-link>
        <router-link :to="{ name: 'ChatsPending' }">Ventende</router-link>
        <router-link :to="{ name: 'ChatsActive' }">Aktive</router-link>
        <router-link :to="{ name: 'ChatsFinished' }">Arkiv</router-link>
      </div>
      <div @click="test" class="rentalsContainer">
        <router-view></router-view>
      </div>
    </div>
    <ChatCard
      id="chatCard"
      v-for="rental in rentals"
      :key="rental.rentalId"
      :rental="rental"
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
    test() {
      let stringified = JSON.stringify(this.rentals);
      console.log(JSON.parse(stringified));
    },
  },
  computed: {
    hasProfileImage() {
      return this.$store.state.userInfo.imageId !== null;
    },
    rentals() {
      return this.$store.state.myRentals.concat(
        this.$store.state.currentRentalsOwner
      );
    },
  },
  mounted() {
    this.$store.dispatch("fetchAllMyRentals");
    this.$store.dispatch("fetchMyRentalsOwner");
  },
};
</script>

<style scoped>
a {
  border-bottom: solid #c2c1c1 1px;
  text-decoration: none;
  padding: 1rem 1rem;
  color: #c2c2c2;
}
a.router-link-exact-active {
  border-bottom: solid black 3px;
  color: black;
}

.container {
  padding: 1rem;
  margin-bottom: 2rem;
}
.headerContainer {
  border-bottom: solid black 1px;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
}
.sections {
  border-top: solid #c2c1c1 1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.rentalsContainer {
  padding: 2rem 1rem;
}
.title {
  font-size: 20px;
}
</style>

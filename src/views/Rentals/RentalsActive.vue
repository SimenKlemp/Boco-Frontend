<template>
  <ChatCard
    id="chatCard"
    v-for="rental in allRentals"
    :key="rental.rentalId"
    :rental="rental"
    @click="test"
  ></ChatCard>
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "RentalsActive",
  components: {
    ChatCard,
  },
  methods: {
    test() {
      console.log(typeof this.allRentals[0].lastMessage.date);
    },
  },
  computed: {
    allRentals() {
      let rentals = this.rentalsUser.concat(this.rentalsOwner);
      // let newRentals = [];
      // for (let i = 0; i < rentals.size; i++) {
      //   if (rentals[i].lastMessage !== null) {
      //     console.log("I ifen");
      //     newRentals.push(i);
      //     rentals[i].splice(i, 1);
      //   }
      // }
      // console.log(newRentals);
      // rentals.sort((a, b) =>
      //   a.lastMessage.date < b.lastMessage.date
      //     ? 1
      //     : b.lastMessage.date < a.lastMessage.date
      //     ? -1
      //     : 0
      // );
      return rentals.concat();
    },
    rentalsUser() {
      const rentalsUser = this.$store.state.myRentalsActive;
      return rentalsUser.reverse();
    },
    rentalsOwner() {
      const rentalsOwner = this.$store.state.currentRentalsOwnerActive;
      return rentalsOwner.reverse();
    },
  },
};
</script>

<style scoped></style>

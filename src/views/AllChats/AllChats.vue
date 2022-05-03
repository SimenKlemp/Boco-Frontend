<template>
  Hei dette er alle chatter
</template>

<script>
import ChatCard from "@/components/ChatCard";
export default {
  name: "AllChats",
  components: {
    ChatCard,
  },
  props: {
    rentals: {
      type: [Object, String, Array],
      required: true,
    },
  },
  computed: {
    rentalsWrapped() {
      return JSON.parse(this.rentals);
    },
  },
  methods: {
    test() {
      let stringified = JSON.stringify(this.rentals);
      console.log(JSON.parse(stringified));
    },
  },
};
</script>

<style scoped></style>

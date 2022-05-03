<template>
  <div @click="goToChat" class="chatCardContainer">
    <div class="itemImageContainer">
      <img
        class="itemImage"
        :src="'http://localhost:8085/api/image/' + rental.item.imageId"
        alt=""
      />
    </div>
    <div class="itemMeta">
      <div class="name">{{ rental.item.user.name }}</div>
      <div class="message">{{ messageWrapped }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatCard",
  props: {
    rental: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToChat() {
      this.$store.dispatch("setRental", this.rental);
      this.$router.push({ name: "MessageView" });
    },
  },
  computed: {
    messageWrapped() {
      if (this.rental.lastMessage) {
        if (this.rental.lastMessage.text.length > 40) {
          return this.rental.lastMessage.text.slice(0, 40) + "...";
        }
        return this.rental.lastMessage.text;
      }
      return "";
    },
  },
};
</script>

<style scoped>
.chatCardContainer {
  display: flex;
  margin-bottom: 2rem;
}
.itemImageContainer {
  width: 4.5rem;
  height: 3.7rem;
  margin-right: 1.5rem;
}
.itemImage {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.itemMeta {
  text-align: left;
}
.name {
  font-size: 20px;
  margin-bottom: 1rem;
}
.message {
  color: #707070;
}
</style>

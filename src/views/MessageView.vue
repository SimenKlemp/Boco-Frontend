<template>
  <div class="container">
    <div class="itemContainer">
      <ItemCardHorizontal item=""></ItemCardHorizontal>
    </div>
    <div class="headerContainer">
      <header>Navn Navnesen</header>
    </div>
    <div class="chatContainer">
      <MessageBox
        :isMe="false"
        :imageId="3"
        :message="'Dette er en melding som er veldig veldig lang og fin. Kanskje den tar tre linjer?'"
      ></MessageBox>
      <MessageBox :isMe="true" :message="'Dette er et kort svar'"></MessageBox>
      <MessageBox
        v-for="(message, index) in messages"
        :key="index"
        :isMe="false"
        :imageId="3"
        :message="message.message"
      ></MessageBox>
    </div>
    <div class="sendMessageContainer">
      <form @submit.prevent="submit"></form>
      <textarea
        v-model="currentMessage"
        placeholder="Send en melding..."
        class="sendMessage"
      />
    </div>
    <button @click.prevent="submit()">Send</button>
  </div>
</template>

<script>
import ItemCardHorizontal from "@/components/itemCards/ItemCardHorizontal";
import MessageBox from "@/components/MessageBox";
export default {
  name: "MessageView",
  data() {
    return {
      currentMessage: "",
      messages: [],
    };
  },
  components: {
    MessageBox,
    ItemCardHorizontal,
  },
  methods: {
    submit() {
      this.messages.push({ message: this.currentMessage });
    },
  },
  computed: {
    isMe(message) {
      return message.userId === this.$store.state.userInfo.userId;
    },
  },
};
</script>

<style scoped>
header {
  font-size: 24px;
  text-align: left;
  border-bottom: solid black 1px;
}

.sendMessage {
  background: #dadada;
  border: none;
  border-radius: 20px;
  max-width: 15rem;
  height: 1rem;
  padding: 0.2rem 1rem;
}
.container {
  margin-bottom: 2rem;
}
.headerContainer {
  padding: 0.5rem 2rem;
}
.chatContainer {
  padding: 1rem 1rem;
  background: #e5ecf1;
  overflow: auto;
  height: 20rem;
}
</style>

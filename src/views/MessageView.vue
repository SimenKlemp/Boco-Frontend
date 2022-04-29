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
      <form class="sendMessageForm" @submit.prevent="submit">
        <textarea
          v-model="currentMessage"
          placeholder="Send en melding..."
          class="sendMessage"
        />
        <div class="buttonContainer">
          <button @click.prevent="submit()">Send</button>
        </div>
      </form>
    </div>
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
button {
}

.sendMessage {
  background: white;
  border: none;
  border-radius: 20px;
  max-width: 15rem;
  height: 1.2rem;
  padding: 0.7rem 1rem;
  margin-right: 1rem;
  font-size: 16px;
  overflow-scrolling: auto;
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
  height: 18rem;
}
.sendMessageContainer {
  border-top: solid black 1px;
  padding: 1rem 1rem;
  background: #e5ecf1;
}
.sendMessageForm {
  display: flex;
}
</style>

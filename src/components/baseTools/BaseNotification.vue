<template>
  <div class="container">
    <div class="imageContainer">
      <img :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')">
    </div>
    <div v-if="false" id="text">{{ notificationText }}</div>
    <div v-else >Du har mottatt en forespørsel på Motorsag fra Stihl</div>
    <div class="dot" v-if="notificationStatus">
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseNotification",
  props: {
    notification: {
      type: Object,
      required: true,
    }
  },
  computed: {
    notificationText() {
      switch (this.status) {
        case "ACCEPTED":
          return "Din forespørsel har blitt akseptert";
        case "REJECTED":
          return "Din forespørsel har blitt avvist";
        case "CANCELED":
          return "Din forespørsel har blitt kansellert";
        case "FINISHED":
          return "Ditt leieforhold er avsluttet, gi en anmeldelse";
        default:
          return "";
      }
    },
    notificationStatus() {
      return this.notification.status === true;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  grid-template-columns: 16% 70% 14%;
  height: 108px;
  width: 100%;
  box-shadow: 0 3px 6px #00000029;
  background: #ffffff;
}
.imageContainer {
  border-radius: 30px;
  width: 100%;
}
.dot {
  height: 5px;
  width: 5px;
  background-color: var(--indigo);
  border-radius: 50%;
  display: inline-block;
}
</style>

<template>
  <div class="container">
    <div class="imageContainer">
      <img :src="require('../../assets/6efa4b_motorsag-stihl-ms181c.jpg')">
    </div>
    <div v-if="true" class="text">{{ notificationText }}</div>
    <div v-else class="text" >Du har mottatt en forespørsel på Motorsag fra Stihl</div>
    <div class="dotContainer">
      <div class="dot" v-if="notificationStatus"></div>
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
      let itemTitle = this.notification.rental.item.title;
      switch (this.notification.notificationStatus) {
        case "ACCEPTED":
          return "Din forespørsel" + itemTitle + "har blitt akseptert";
        case "REJECTED":
          return "Din forespørsel har blitt avvist";
        case "CANCELED":
          return "Din forespørsel har blitt kansellert";
        case "FINISHED":
          return "Ditt leieforhold er avsluttet, gi en anmeldelse";
        case "REQUEST":
          return "Du har mottatt en forespørsel på " + itemTitle;
        default:
          return "";
      }
    },
    notificationStatus() {
      if (this.notification.notificationStatus === 1) {
        return true;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  grid-template-columns: 20% 70% 10%;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 3px 6px #00000029;
  background: #ffffff;
  align-items: center;
  /*border-radius: 15px;*/
}
.imageContainer {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
}
.text {
  padding: 10px;
  text-align: left;
  width: 100%;
}
img {
  max-width: 50px;
  max-height: 50px;
  object-fit: contain;
  border-radius: 50%;
}
.dotContainer {
  height: 100%;
  /*width: 100%;*/
  display: flex;
  align-items: center;
  padding: 10px;
}
.dot {
  height: 10px;
  width: 10px;
  background-color: var(--indigo);
  border-radius: 50%;
  display: inline-block;
}
</style>

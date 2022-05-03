<template>
  <div class="container">
    <div class="notificationsContainer">
      <BaseNotification
          v-for="notification in notifications"
          :key="notification"
          class="notifications"
          :notification="notification"
          @click.stop="goToRoute(notification)"
          @change="$emit('numberNotifications', counter)"
      />
    </div>
  </div>
</template>

<script>
import BaseNotification from "@/components/baseTools/BaseNotification";
import {changeNotification} from "@/service/apiService";

export default {
  name: "NotificationsComponent",
  components: {BaseNotification},
  data() {
    return {
      notifications: this.$store.state.myNotifications,
    };
  },
  methods: {
    goToRoute(notification) {
      if (notification.pressed === false) {
        changeNotification(notification.notificationId, this.$store.state.token)
        //TODO: fix update of read notification
        this.$store.dispatch('fetchMyNotifications');
      }
      //push to chat
      this.$store.state.currentRental = notification.rental;
      this.$router.push({name: "MessageView"});
      this.$emit('toggleNotifications');
    },
  },
  computed: {
    counter() {
      //TODO: emit to app to show number of notifications
      let counter;
      for (let i = 0; i < this.notifications.length; i++) {
        if (!i.pressed) {
          counter += 1;
        }
      }
      return counter;
    },
  },
};
</script>

<style scoped>
.container {
  width: 17.5rem;
  height: 19rem;
}
.notificationsContainer {
  height: 80%;
  overflow-y: auto;
  background-color: white;
  border-radius: 15px;
  position: relative;
  z-index: 100;
  top: 70px;
  right: -140px;
}
</style>

<template>
  <div class="container">
    <div class="notificationsContainer">
      <BaseNotification
          v-for="notification in notifications"
          :key="notification.notificationId"
          class="notifications"
          :notification="notification"
          @click.stop="goToRoute()"
          @change="$emit('numberNotifications', counter)"
      />
    </div>
  </div>
</template>

<script>
import BaseNotification from "@/components/baseTools/BaseNotification";

export default {
  name: "NotificationsComponent",
  components: {BaseNotification},
  data() {
    return {
      notifications: this.$store.state.myNotifications,
    };
  },
  methods: {
    goToRoute(route) {
      //TODO: fix routing
      //let route = this.$store.state.myNotifications.
      this.$store.dispatch("setItem", this.notification.rental.item);
      this.$router.push({name: route});
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

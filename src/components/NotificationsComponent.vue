<template>
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
</template>

<script>
import BaseNotification from "@/components/baseTools/BaseNotification";
export default {
  name: "NotificationsComponent",
  components: { BaseNotification },
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
      this.$router.push({ name: route });
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
.notificationsContainer {
  width: 17.5rem;
  background-color: white;
  margin-top: 80px;
  border-radius: 15px;
  position: absolute;
  z-index: 100;
  right: 10px;
}
</style>

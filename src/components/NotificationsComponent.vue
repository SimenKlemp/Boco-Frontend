<template>
  <div class="notificationsContainer">
    <BaseNotification
        v-for="notification in notifications"
        :key="notification.notificationId"
        class="notifications"
        :notification="notification"
        @click.stop="goToRoute()"
    />
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
  computed: {
    goToRoute(route) {
      //TODO: fix routing
      //let route = this.$store.state.myNotifications.
      this.$store.dispatch("setItem", this.notification.rental.item);
      this.$router.push({ name: route });
    }
  }
}
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
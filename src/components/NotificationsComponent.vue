<template>
  <div class="notificationsContainer">
    <BaseNotification
        v-for="notification in notifications"
        :key="notification.notificationId"
        class="notifications"
        :notification="notification"
        @click.stop="goToRoute('HomeView')"
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
      notifications: [
        {notificationId: 1, notificationStatus: 1, isPressed: true, rentalId: 20, userId: 3},
        {notificationId: 2, notificationStatus: 0, isPressed: false, rentalId: 20, userId: 3},
        {notificationId: 3, notificationStatus: 0, isPressed: false, rentalId: 20, userId: 3},
      ]
    };
  },
  computed: {
    goToRoute(route) {
      this.$store.dispatch("setItem", this.notification.rentalId.itemId);
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
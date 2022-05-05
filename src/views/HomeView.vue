<template>
  <HomeComponent></HomeComponent>
  <div class="itemsContainer">
    <div class="itemsHeader">
      <h3>Nyeste annonser</h3>
      <p>Se de nyeste annonsene på boco</p>
    </div>
    <div class="items">
      <ItemCardSquare
        v-for="item in items.slice(0, 4)"
        :key="item.itemId"
        :item="item"
        @click="seeItem(item)"
      ></ItemCardSquare>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";
import ItemCardSquare from "@/components/itemCards/ItemCardSquare";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
    ItemCardSquare,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    showNotification() {
      let notifications = this.$store.state.myNotifications;
      for (let i = 0; i < notifications.length; i++) {
        console.log("LESER");
        console.log(i.pressed);
        if (notifications[i].pressed === false) {
          console.log("ULEST");
          return true;
        }
      }
      console.log("LEST");
      return false;
    },
  },
  methods: {
    emitToggleHamburgerMenu() {
      this.$emit("toggleHamburgerMenu");
    },
    emitToggleNotifications() {
      this.$emit("toggleNotifications");
    },
    async seeItem(item) {
      await this.$store.dispatch("setItem", item);
      await this.$router.push({ name: "ProductDetails" });
    },
  },
  async created() {
    this.$store.dispatch("getItems", {
      page: 0,
      pageSize: 4,
    });
  },
  mounted() {
    if (this.$store.state.userInfo !== "") {
      this.$store.dispatch("fetchMyNotifications");
    }
  },
};
</script>
<style scoped>
h3 {
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 500;
}
p {
  margin-top: 0;
  color: #575757;
  font-size: 14px;
  margin-bottom: 15px;
}

.header {
  position: absolute;
  display: flex;
  width: 87%;
  justify-content: space-between;
  padding: 1rem 20px 1rem 20px;
}
.hamburgerMenu {
  fill: white;
  width: 2.5rem;
}
.hamburgerButton {
  width: 2.5rem;
  padding: 0;
  background: none;
  border: none;
  position: relative;
}
.homeLink {
  font-size: 40px;
  background: transparent;
  border: none;
}
.notificationIcon {
  fill: white;
  width: 2.5rem;
}
.logoImage {
  width: 8rem;
}

.itemsHeader {
  text-align: left;
}
.itemsContainer {
  margin: 10px;
}
.items {
  display: flex;
  flex-wrap: wrap;
}
.dot {
  height: 15px;
  width: 15px;
  background-color: #ea0000;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
}
</style>

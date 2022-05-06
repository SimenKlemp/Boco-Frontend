<template>
  <HomeComponent></HomeComponent>
  <div class="itemsContainer">
    <div id="infoText">
      <div class="itemsHeader">
        <h3>Nyeste annonser</h3>
        <p>Se de nyeste annonsene på boco</p>
      </div>
        <p @click.stop="routeToAllItems" id="link">Se alle gjenstander</p>
    </div>
    <div class="items">
      <ItemCardSquare
        v-for="item in items.slice(0, 4)"
        :key="item.itemId"
        :item="item"
        @click="seeItem(item)"
        role="button"
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
    async routeToAllItems() {
      await this.$router.push({name: "SearchedItems"});
    }
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
#infoText {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
#link {
  color: var(--blue);
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
</style>
